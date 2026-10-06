"use client";

import { motion, useReducedMotion } from "framer-motion";
import { methodStages } from "@/data/method";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

export function AdlerMethod() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-hair bg-bg py-16 md:py-24">
      <div className="container-fluid">
        <Reveal>
          <SectionLabel index="05" label="Process" />
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink">
            The Adler Method
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink-secondary">
            Good work starts before the first pixel.
          </p>
        </Reveal>

        <div className="relative mt-20 grid gap-x-10 md:grid-cols-[2px_1fr]">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 w-px bg-hair" />
            <motion.div
              initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-0 h-full w-px origin-top bg-blue-bright"
            />
          </div>

          <div className="grid gap-12 sm:grid-cols-2 md:gap-16 lg:grid-cols-3">
            {methodStages.map((stage, i) => (
              <Reveal key={stage.number} delay={(i % 3) * 0.08}>
                <span className="font-display text-sm text-blue-bright">{stage.number}</span>
                <h3 className="mt-3 font-display text-xl font-semibold uppercase tracking-tight text-ink md:text-2xl">
                  {stage.title}
                </h3>
                <p className="mt-3 max-w-[26ch] text-ink-secondary">{stage.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
