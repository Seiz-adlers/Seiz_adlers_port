"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

/**
 * Full-bleed moving backdrop for the Services page — the "whole page under
 * something alive" moment in the light/dark alternation.
 *
 * It's a generated field, not stock footage: two slow blue light blooms
 * drifting behind the six service words tracking sideways at different
 * rates. Deliberately faint (a few percent opacity) so page copy stays the
 * focus, and frozen under prefers-reduced-motion.
 *
 * To swap in a real background film later, drop it in as a <video> here
 * (muted, loop, playsInline, object-cover, ~0.15 opacity) — the layering
 * (fixed z-0, page content at z-10) already accounts for it.
 */

const SERVICE_WORDS = ["Brand", "Web", "SEO", "Performance", "Content", "Automation"];

export function ServicesAtmosphere() {
  const reduceMotion = useReducedMotionSafe();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -left-[10%] top-[6%] h-[45vmax] w-[45vmax] rounded-full"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0,140,255,0.12), transparent 62%)",
        }}
        animate={reduceMotion ? undefined : { x: [0, 90, 0], y: [0, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[12%] bottom-[2%] h-[52vmax] w-[52vmax] rounded-full"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0,87,168,0.1), transparent 60%)",
        }}
        animate={reduceMotion ? undefined : { x: [0, -75, 0], y: [0, -55, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 flex flex-col justify-center gap-[5vh] [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]">
        {SERVICE_WORDS.map((word, i) => (
          <motion.span
            key={word}
            className="whitespace-nowrap font-display text-[14vw] font-semibold uppercase leading-none tracking-tight text-ink"
            style={{ opacity: 0.035 }}
            animate={reduceMotion ? undefined : { x: i % 2 === 0 ? ["-5%", "3%"] : ["3%", "-5%"] }}
            transition={{
              duration: 42 + i * 7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
