"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Hydration-safe `prefers-reduced-motion`.
 *
 * framer-motion's `useReducedMotion` is `null` on the server but reads the
 * media query on the client's very first render. Any component that renders
 * a different tree based on it (an extra wrapper, a hidden button) then
 * mismatches the server HTML for reduced-motion visitors and React throws a
 * hydration error. This reports `false` until after mount — matching the
 * server — then the real preference.
 */
export function useReducedMotionSafe(): boolean {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && Boolean(prefersReduced);
}
