"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface ChapterProps {
  children: ReactNode;
  theme: "dark" | "light";
  /** The hero opts out of the recede transform — it stays exactly as designed. */
  plain?: boolean;
}

/**
 * One homepage chapter. Carries its own light/dark theme, and — as you scroll
 * past it — eases back: it dims, shrinks a hair and tilts a degree off-axis so
 * the next chapter appears to come forward over it. Entrance choreography is
 * left to each section's own Reveal components. Free-scroll, scroll-linked
 * (Lenis-smoothed), no hijacking.
 */
export function Chapter({ children, theme, plain = false }: ChapterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 1, 0.35]);
  const scale = useTransform(scrollYProgress, [0, 0.72, 1], [1, 1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 0.72, 1], [0, 0, -64]);
  const rotate = useTransform(scrollYProgress, [0, 0.72, 1], [0, 0, -1.6]);

  const animated = !reduceMotion && !plain;

  return (
    <div ref={ref} data-theme={theme} data-chapter-theme={theme} className="relative isolate bg-bg">
      <motion.div
        className="bg-bg"
        style={
          animated ? { opacity, scale, y, rotate, transformOrigin: "50% 0%" } : undefined
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
