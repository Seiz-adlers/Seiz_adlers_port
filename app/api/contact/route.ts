import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  projectType: z.string().min(1),
  projectDetails: z.string().min(10),
  timeline: z.string().min(1),
  budget: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  phone: z.string().optional(),
});

/**
 * No email/CRM provider is wired up yet. This validates and accepts the
 * submission so the frontend flow works end to end — connect a real
 * provider (email, CRM, etc.) here before relying on this in production.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  // eslint-disable-next-line no-console
  console.log("[contact] submission received", parsed.data);

  return NextResponse.json({ ok: true });
}
