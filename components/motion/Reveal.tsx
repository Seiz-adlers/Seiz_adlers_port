"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: "div" | "span" | "li";
  /**
   * When true, the reveal plays a single time and stays put. Default is
   * false — the element re-animates every time it scrolls back into view,
   * so the page always feels alive on the way up as well as down.
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
  once = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

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
