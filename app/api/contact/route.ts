import { NextResponse } from "next/server";
import { z } from "zod";
import { siteConfig } from "@/data/site";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  company: z.string().max(200).optional(),
  phone: z.string().max(50).optional(),
  services: z.array(z.string().max(100)).max(20).optional(),
  budget: z.string().max(100).optional(),
  projectDetails: z.string().trim().min(10).max(5000),
  /** Honeypot — hidden from people, filled in by naive bots. */
  website: z.string().max(0).optional(),
});

type ContactSubmission = z.infer<typeof contactSchema>;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderEmail(data: ContactSubmission) {
  const rows: [string, string | undefined][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company],
    ["Phone", data.phone],
    ["Looking for", data.services?.join(", ")],
    ["Budget", data.budget],
  ];
  const table = rows
    .filter(([, value]) => value)
    .map(([label, value]) => `<tr><td style="padding:4px 16px 4px 0;color:#666">${label}</td><td>${escapeHtml(value!)}</td></tr>`)
    .join("");
  return `<table>${table}</table><p style="white-space:pre-wrap;margin-top:16px">${escapeHtml(data.projectDetails)}</p>`;
}

/**
 * Delivers submissions by email through Resend (https://resend.com) using
 * its REST API directly — no SDK dependency. Configure in the environment:
 *
 *   RESEND_API_KEY      required in production
 *   CONTACT_TO_EMAIL    defaults to siteConfig.email
 *   CONTACT_FROM_EMAIL  a sender on a domain verified in Resend
 *
 * Without a key, development logs the submission and succeeds so the flow
 * can be tested; production fails loudly (503) rather than telling a
 * visitor "we've got it" when nothing was delivered.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  const data = parsed.data;

  // Bot filled the honeypot — pretend success, send nothing.
  if (data.website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log("[contact] RESEND_API_KEY not set — submission not delivered:", data);
      return NextResponse.json({ ok: true });
    }
    // eslint-disable-next-line no-console
    console.error("[contact] RESEND_API_KEY is not configured; submission dropped.");
    return NextResponse.json({ ok: false, error: "Contact is temporarily unavailable." }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Seiz Adlers Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? siteConfig.email],
      reply_to: data.email,
      subject: `New project enquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html: renderEmail(data),
    }),
  }).catch(() => null);

  if (!res?.ok) {
    // eslint-disable-next-line no-console
    console.error("[contact] Resend delivery failed:", res?.status, await res?.text().catch(() => ""));
    return NextResponse.json({ ok: false, error: "Delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
