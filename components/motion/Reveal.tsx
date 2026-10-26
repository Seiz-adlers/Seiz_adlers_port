"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: "div" | "span" | "li";
  /**
   * Plays a single time by default, then stays put — content never hides
   * again once read. Pass false to re-animate on every pass.
   */
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className,
  as = "div",
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotionSafe();

  // Motion-sensitive users get the content immediately with no in/out toggling.
  if (reduceMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px 0px -80px 0px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
