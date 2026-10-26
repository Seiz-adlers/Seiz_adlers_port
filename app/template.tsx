"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Route transition — a film dissolve.
 *
 * `template.tsx` re-mounts on every navigation and the App Router only mounts
 * it once the next route is ready. A soft dark veil (never fully opaque)
 * dissolves over the incoming route while the route itself rises in opacity.
 *
 * Deliberately opacity-only on the page content: scaling a page thousands of
 * pixels tall shifts its top by a large distance, and an interrupted
 * animation would leave that offset behind. The veil and content are keyed
 * siblings so React can never reuse one element for the other.
 *
 * First load is excluded (module flag), so this never renders during
 * hydration — which is also why reading the reduced-motion preference
 * directly is safe here.
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

  if (isFirstLoad.current) return <>{children}</>;

  return (
    <>
      {!reduceMotion && (
        <motion.div
          key="route-veil"
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[95] bg-[#080B10]"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          {/* cinematic frame — a soft vignette + a low bloom of brand light */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_45%,transparent_55%,rgba(0,0,0,0.55))]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(75%_130%_at_50%_100%,rgba(0,140,255,0.16),transparent_72%)]" />
        </motion.div>
      )}

      <motion.div
        key="route-content"
        initial={{ opacity: reduceMotion ? 1 : 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        {children}
      </motion.div>
    </>
  );
}
