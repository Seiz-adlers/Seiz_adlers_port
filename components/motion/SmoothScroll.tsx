"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";

/**
 * Momentum smooth-scroll for wheel and anchor navigation.
 *
 * Design notes:
 * - Keyboard (arrows / space / PageUp-Down) is left to the browser on purpose,
 *   so it stays instant and native. Only wheel + programmatic scroll are eased.
 * - `prefers-reduced-motion` fully bypasses Lenis — those users get pure native
 *   scrolling with no interception at all.
 * - `lerp` is kept conservative (0.09) so the page tracks the input closely
 *   rather than gliding on for half a second after the wheel stops.
 */

const LENIS_OPTIONS = {
  lerp: 0.09,
  wheelMultiplier: 1,
  touchMultiplier: 1.6,
  smoothWheel: true,
  syncTouch: false,
} as const;

function AnchorScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>('a[href*="#"]');
      if (!link) return;

      const url = new URL(link.href, window.location.href);
      if (url.pathname !== window.location.pathname || url.search !== window.location.search) return;

      const hash = url.hash;
      if (!hash || hash === "#") return;

      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!el) return;

      event.preventDefault();
      lenis?.scrollTo(el, { offset: -88 });
      window.history.pushState(null, "", hash);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (reducedMotion) return <>{children}</>;

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      <AnchorScroll />
      {children}
    </ReactLenis>
  );
}
