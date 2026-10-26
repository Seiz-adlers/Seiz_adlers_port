"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { projectTypes, budgetRanges } from "@/data/contact";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics/track";
import { cn } from "@/lib/utils/cn";

const schema = z.object({
  name: z.string().trim().min(1, "Your name is required."),
  email: z.string().trim().email("Enter a valid email."),
  company: z.string().optional(),
  phone: z.string().optional(),
  services: z.array(z.string()).optional(),
  budget: z.string().optional(),
  projectDetails: z.string().trim().min(10, "Tell us a little more — at least 10 characters."),
  website: z.string().optional(),
});

type ContactFormValues = z.infer<typeof schema>;

const fieldClass =
  "block min-h-[52px] w-full rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-[15px] text-ink outline-none transition-[border-color,background-color,box-shadow] duration-200 placeholder:text-ink-muted/70 hover:border-white/25 focus:border-blue-bright focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(0,168,255,0.18)] aria-[invalid=true]:border-red-400/80 aria-[invalid=true]:shadow-[0_0_0_3px_rgba(248,113,113,0.15)]";

const labelClass = "mb-2 block text-[12px] font-medium uppercase tracking-[0.12em] text-ink-secondary";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-red-400">
      {message}
    </p>
  );
}

/** Single-step enquiry form: three required fields, everything else optional. */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [started, setStarted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { services: [], budget: "" },
  });

  const selected = watch("services") ?? [];
  const budget = watch("budget");

  function markStarted() {
    if (started) return;
    setStarted(true);
    track("contact_start");
  }

  async function onSubmit(data: ContactFormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      track("contact_complete");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center" role="status">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-bright text-xl text-white" aria-hidden>
          ✓
        </span>
        <p className="mt-8 font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-4xl">
          We&rsquo;ve Got It.
        </p>
        <p className="mt-4 max-w-sm text-ink-secondary">One of the Seiz Adlers team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} onFocusCapture={markStarted} noValidate>
      {/* Honeypot: off-screen and skipped by keyboard/AT; bots fill it in. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
        {(
          [
            { name: "name", label: "Your name", required: true, placeholder: "e.g. Priya Sharma", type: "text", autoComplete: "name" },
            { name: "email", label: "Email", required: true, placeholder: "you@company.com", type: "email", autoComplete: "email" },
            { name: "company", label: "Company", required: false, placeholder: "Company or brand name", type: "text", autoComplete: "organization" },
            { name: "phone", label: "Phone", required: false, placeholder: "+91 98765 43210", type: "tel", autoComplete: "tel" },
          ] as const
        ).map((field) => {
          const error = errors[field.name]?.message;
          return (
            <div key={field.name}>
              <label htmlFor={field.name} className={labelClass}>
                {field.label}
                {field.required ? (
                  <span className="ml-1 text-blue-bright" aria-hidden>
                    *
                  </span>
                ) : (
                  <span className="ml-2 normal-case tracking-normal text-ink-muted">optional</span>
                )}
              </label>
              <input
                id={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                required={field.required}
                {...register(field.name)}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${field.name}-error` : undefined}
                className={fieldClass}
              />
              <FieldError id={`${field.name}-error`} message={error} />
            </div>
          );
        })}
      </div>

      <fieldset className="mt-10">
        <legend className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink-secondary">
          What can we help with? <span className="normal-case tracking-normal">(pick any)</span>
        </legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {projectTypes.map((type) => {
            const on = selected.includes(type);
            return (
              <label
                key={type}
                className={cn(
                  "inline-flex min-h-[42px] cursor-pointer items-center rounded-full border px-4 text-sm transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-blue-bright",
                  on ? "border-blue-bright bg-blue-bright text-white" : "border-white/15 bg-white/[0.03] text-ink-secondary hover:border-white/30 hover:text-ink",
                )}
              >
                <input type="checkbox" value={type} {...register("services")} className="sr-only" />
                {type}
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink-secondary">
          Budget <span className="normal-case tracking-normal">(optional — a starting point, not a quote)</span>
        </legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {budgetRanges.map((range) => (
            <label
              key={range}
              className={cn(
                "inline-flex min-h-[42px] cursor-pointer items-center rounded-full border px-4 text-sm transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-blue-bright",
                budget === range ? "border-ink bg-ink text-bg" : "border-white/15 bg-white/[0.03] text-ink-secondary hover:border-white/30 hover:text-ink",
              )}
            >
              <input type="radio" value={range} {...register("budget")} className="sr-only" />
              {range}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-10">
        <label htmlFor="projectDetails" className={labelClass}>
          Tell us about the project
          <span className="ml-1 text-blue-bright" aria-hidden>
            *
          </span>
        </label>
        <textarea
          id="projectDetails"
          rows={5}
          required
          placeholder="What are you building, where are you stuck, or where do you want to go?"
          {...register("projectDetails")}
          aria-invalid={errors.projectDetails ? true : undefined}
          aria-describedby={errors.projectDetails ? "projectDetails-error" : undefined}
          className={cn(fieldClass, "min-h-[140px] resize-y")}
        />
        <FieldError id="projectDetails-error" message={errors.projectDetails?.message} />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 text-sm text-red-400">
          Something went wrong — your message wasn&rsquo;t sent. Please try again, or email us directly.
        </p>
      )}

      <div className="mt-10 flex flex-col-reverse items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-muted">
          <span className="text-blue-bright">*</span> Required. We only use your details to reply.
        </p>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Start the Conversation →"}
        </Button>
      </div>
    </form>
  );
}
