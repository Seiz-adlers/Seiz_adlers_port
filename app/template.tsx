"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Route transition — a film dissolve.
 *
 * `template.tsx` re-mounts on every navigation and the App Router only mounts
 * it once the next route is ready. The App Router doesn't keep the outgoing
 * page around, so a true two-layer crossfade isn't possible — instead a soft
 * dark veil (never fully opaque, so content always shows through) eases back
 * and dissolves while the incoming route rises in opacity underneath it. No
 * edge, no wipe, no line — the whole frame resolves at once. Pure opacity +
 * a compositor-only scale on the veil, so it stays smooth on any machine.
 *
 * First load is excluded (module flag) so LCP is clean. The incoming content
 * eases in from a hair of scale; the transform is stripped the moment the
 * animation ends so it never traps `position: fixed` children (the Services
 * atmosphere) once the page is at rest.
 */

let hasNavigated = false;

export default function Template({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();
  const isFirstLoad = useRef(!hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  useEffect(() => {
    if (isFirstLoad.current) return;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [lenis]);

  const contentRef = useRef<HTMLDivElement>(null);
  const clearTransform = useCallback(() => {
    const el = contentRef.current;
    if (el) {
      el.style.transform = "";
      el.style.willChange = "";
    }
  }, []);

  if (isFirstLoad.current) return <>{children}</>;

  if (reduceMotion) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[95] bg-[#080B10] will-change-transform"
        initial={{ opacity: 0.94, scale: 1 }}
        animate={{ opacity: 0, scale: 1.06 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {/* cinematic frame — a soft vignette + a low bloom of brand light */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_45%,transparent_55%,rgba(0,0,0,0.55))]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(75%_130%_at_50%_100%,rgba(0,140,255,0.16),transparent_72%)]" />
      </motion.div>

      <motion.div
        ref={contentRef}
        initial={{ opacity: 0.18, scale: 1.045 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.04 }}
        onAnimationComplete={clearTransform}
        style={{ transformOrigin: "50% 42%" }}
      >
        {children}
      </motion.div>
    </>
  );
}
