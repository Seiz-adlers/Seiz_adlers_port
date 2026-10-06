"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { projectTypes, timelines, budgetRanges } from "@/data/contact";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics/track";

const schema = z.object({
  projectType: z.enum(projectTypes as unknown as [string, ...string[]], {
    errorMap: () => ({ message: "Choose what you're looking to build." }),
  }),
  projectDetails: z.string().min(10, "Tell us a little more — at least 10 characters."),
  timeline: z.enum(timelines as unknown as [string, ...string[]], {
    errorMap: () => ({ message: "Choose a timeline." }),
  }),
  budget: z.enum(budgetRanges as unknown as [string, ...string[]], {
    errorMap: () => ({ message: "Choose a budget range." }),
  }),
  name: z.string().min(1, "Your name is required."),
  email: z.string().email("Enter a valid email."),
  company: z.string().min(1, "Company is required."),
  phone: z.string().optional(),
});

type ContactFormValues = z.infer<typeof schema>;

const steps = [
  { fields: ["projectType"] as const, title: "What are you looking to build?" },
  { fields: ["projectDetails"] as const, title: "Tell us about the project" },
  { fields: ["timeline"] as const, title: "What is your timeline?" },
  { fields: ["budget"] as const, title: "Budget range" },
  { fields: ["name", "email", "company", "phone"] as const, title: "Contact information" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function ContactForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const values = watch();

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
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
      <div className="py-16 text-center">
        <p className="font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-4xl">
          We&rsquo;ve Got It.
        </p>
        <p className="mt-4 text-ink-secondary">
          One of the Seiz Adlers team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-10 flex items-center gap-2" aria-hidden>
        {steps.map((_, i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
              i <= step ? "bg-blue-bright" : "bg-hair"
            }`}
          />
        ))}
      </div>
      <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.15em] text-ink-muted">
        Step {step + 1} of {steps.length}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease }}
        >
          <h2 className="mb-8 font-display text-2xl font-semibold uppercase tracking-tight text-ink md:text-3xl">
            {steps[step].title}
          </h2>

          {step === 0 && (
            <fieldset>
              <legend className="sr-only">What are you looking to build?</legend>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {projectTypes.map((type) => (
                  <label
                    key={type}
                    className={`flex min-h-[44px] cursor-pointer items-center justify-center border px-4 py-3 text-center text-sm transition-colors duration-300 ${
                      values.projectType === type
                        ? "border-blueline bg-blue/10 text-blue-bright"
                        : "border-hair text-ink-secondary hover:border-white/25"
                    }`}
                  >
                    <input
                      type="radio"
                      value={type}
                      {...register("projectType")}
                      className="sr-only"
                    />
                    {type}
                  </label>
                ))}
              </div>
              {errors.projectType && (
                <p className="mt-3 text-sm text-red-400">{errors.projectType.message}</p>
              )}
            </fieldset>
          )}

          {step === 1 && (
            <div>
              <label htmlFor="projectDetails" className="sr-only">
                Tell us about the project
              </label>
              <textarea
                id="projectDetails"
                rows={7}
                {...register("projectDetails")}
                placeholder="What are you building, where are you stuck, or where do you want to go?"
                className="w-full resize-none border border-hair bg-transparent p-5 text-ink placeholder:text-ink-muted focus-visible:border-blueline"
              />
              {errors.projectDetails && (
                <p className="mt-3 text-sm text-red-400">{errors.projectDetails.message}</p>
              )}
            </div>
          )}

          {step === 2 && (
            <fieldset>
              <legend className="sr-only">What is your timeline?</legend>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {timelines.map((t) => (
                  <label
                    key={t}
                    className={`flex min-h-[44px] cursor-pointer items-center justify-center border px-4 py-3 text-center text-sm transition-colors duration-300 ${
                      values.timeline === t
                        ? "border-blueline bg-blue/10 text-blue-bright"
                        : "border-hair text-ink-secondary hover:border-white/25"
                    }`}
                  >
                    <input type="radio" value={t} {...register("timeline")} className="sr-only" />
                    {t}
                  </label>
                ))}
              </div>
              {errors.timeline && <p className="mt-3 text-sm text-red-400">{errors.timeline.message}</p>}
            </fieldset>
          )}

          {step === 3 && (
            <fieldset>
              <legend className="sr-only">Budget range</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {budgetRanges.map((b) => (
                  <label
                    key={b}
                    className={`flex min-h-[44px] cursor-pointer items-center justify-center border px-4 py-3 text-center text-sm transition-colors duration-300 ${
                      values.budget === b
                        ? "border-blueline bg-blue/10 text-blue-bright"
                        : "border-hair text-ink-secondary hover:border-white/25"
                    }`}
                  >
                    <input type="radio" value={b} {...register("budget")} className="sr-only" />
                    {b}
                  </label>
                ))}
              </div>
              {errors.budget && <p className="mt-3 text-sm text-red-400">{errors.budget.message}</p>}
              <p className="mt-4 text-sm text-ink-muted">
                Ranges are a starting point, not a final quote.
              </p>
            </fieldset>
          )}

          {step === 4 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-[12px] uppercase tracking-[0.1em] text-ink-muted">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className="min-h-[44px] w-full border border-hair bg-transparent px-4 py-3 text-ink focus-visible:border-blueline"
                />
                {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-[12px] uppercase tracking-[0.1em] text-ink-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="min-h-[44px] w-full border border-hair bg-transparent px-4 py-3 text-ink focus-visible:border-blueline"
                />
                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-[12px] uppercase tracking-[0.1em] text-ink-muted">
                  Company
                </label>
                <input
                  id="company"
                  {...register("company")}
                  className="min-h-[44px] w-full border border-hair bg-transparent px-4 py-3 text-ink focus-visible:border-blueline"
                />
                {errors.company && <p className="mt-2 text-sm text-red-400">{errors.company.message}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-[12px] uppercase tracking-[0.1em] text-ink-muted">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  {...register("phone")}
                  className="min-h-[44px] w-full border border-hair bg-transparent px-4 py-3 text-ink focus-visible:border-blueline"
                />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {status === "error" && (
        <p className="mt-6 text-sm text-red-400">Something went wrong. Please try again.</p>
      )}

      <div className="mt-10 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="min-h-[44px] text-[13px] font-medium uppercase tracking-[0.1em] text-ink-secondary hover:text-ink"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}

        {step < steps.length - 1 ? (
          <Button
            onClick={() => {
              void (async () => {
                const valid = await trigger(steps[step].fields as unknown as (keyof ContactFormValues)[]);
                if (!valid) return;
                if (step === 0) track("contact_start");
                setStep((s) => Math.min(s + 1, steps.length - 1));
              })();
            }}
          >
            Next →
          </Button>
        ) : (
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Start the Conversation →"}
          </Button>
        )}
      </div>
    </form>
  );
}
