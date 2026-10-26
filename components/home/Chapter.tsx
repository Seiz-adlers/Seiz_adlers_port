"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

interface ChapterProps {
  children: ReactNode;
  theme: "dark" | "light";
  /** The hero opts out of the recede transform — it stays exactly as designed. */
  plain?: boolean;
}

/**
 * One homepage chapter. Carries its own light/dark theme, and — as you scroll
 * past it — eases back by dimming slightly. No scale/tilt/offset: those left
 * slanted edges and gaps between chapters. Entrance choreography is
 * left to each section's own Reveal components. Free-scroll, scroll-linked
 * (Lenis-smoothed), no hijacking.
 */
export function Chapter({ children, theme, plain = false }: ChapterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 1, 0.5]);

  const animated = !reduceMotion && !plain;

  return (
    <div ref={ref} data-theme={theme} data-chapter-theme={theme} className="relative isolate bg-bg">
      <motion.div
        className="bg-bg"
        style={animated ? { opacity } : undefined}
      >
        {children}
      </motion.div>
    </div>
  );
}
