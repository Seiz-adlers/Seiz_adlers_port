"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { track } from "@/lib/analytics/track";

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  // Re-triggers every time the hero scrolls back into view, so returning to
  // the top of the page always replays the entrance rather than showing a
  // dead, pre-settled headline.
  const viewport = { once: false, amount: 0.4 as const };

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden bg-grid bg-grain pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,140,255,0.08),transparent_45%)]" />

      <motion.div
        className="container-fluid relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
        variants={reduceMotion ? undefined : container}
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={viewport}
      >
        <div>
          <motion.p
            variants={fade}
            className="mb-6 text-[12px] font-medium uppercase tracking-[0.2em] text-blue-bright"
          >
            01 / Seiz Adlers
          </motion.p>

          <h1 className="font-display font-semibold uppercase leading-[0.95] tracking-tight text-ink">
            {["Build", "The Brand"].map((line) => (
              <motion.span key={line} variants={rise} className="block text-[clamp(2.75rem,7.5vw,6.5rem)]">
                {line}
              </motion.span>
            ))}
            <motion.span
              variants={rise}
              className="mt-2 block font-hand text-[clamp(2.5rem,7vw,6rem)] font-semibold normal-case tracking-normal text-blue-bright"
            >
              People Remember.
            </motion.span>
          </h1>

          <motion.p
            variants={fade}
            className="mt-8 max-w-lg text-balance text-lg leading-relaxed text-ink-secondary"
          >
            We create brands, digital experiences and growth systems that turn ambitious
            businesses into memorable ones.
          </motion.p>

          <motion.div variants={fade} className="mt-10 flex flex-wrap items-center gap-5">
            <Button href="/contact" onClick={() => track("cta_click", { location: "hero_primary" })}>
              Connect with Us →
            </Button>
            <Button
              href="#selected-work"
              variant="ghost"
              onClick={() => track("cta_click", { location: "hero_secondary" })}
            >
              Explore Our Work ↓
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.96 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1, ease } },
          }}
          className="relative mx-auto aspect-square w-full max-w-[480px] lg:mx-0"
        >
          <HeroVisual />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 hidden justify-center md:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.25em] text-ink-muted">Scroll</span>
      </motion.div>
    </section>
  );
}
