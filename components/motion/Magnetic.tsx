"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
}

/**
 * Subtle magnetic hover: the wrapped element eases a few pixels toward the
 * cursor. Motion values are driven directly (no React state) so pointer moves
 * never trigger a re-render — the pull stays smooth even on heavier pages.
 * Disabled for touch and prefers-reduced-motion so it never fights natural
 * mobile scrolling or motion-sensitive users.
 */
export function Magnetic({ children, strength = 14 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.35 });

  if (reduceMotion) return <>{children}</>;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block will-change-transform"
    >
      {children}
    </motion.div>
  );
}
