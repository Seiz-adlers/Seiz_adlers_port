"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

type Mode = "default" | "hover" | "view" | "open";

const INTERACTIVE = "[data-cursor], a, button, label, [role='button'], summary";

const LABELS: Partial<Record<Mode, string>> = { view: "View", open: "Open →" };

/**
 * A small trailing dot for fine pointers. It grows over anything
 * interactive, reads "View" over [data-cursor="view"] (project cards) and
 * "Open →" over [data-cursor="open"] (primary CTAs).
 *
 * It never replaces the native cursor, so it can't hurt usability, and it
 * doesn't mount at all on touch devices or under prefers-reduced-motion.
 * Position is written straight to the DOM in a rAF loop — no re-render per
 * pointer move.
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let x = -100;
    let y = -100;
    let targetX = -100;
    let targetY = -100;
    let frame = 0;

    function onMove(event: PointerEvent) {
      targetX = event.clientX;
      targetY = event.clientY;
      setVisible(true);
    }

    function onOver(event: PointerEvent) {
      const el = (event.target as Element | null)?.closest(INTERACTIVE);
      const explicit = el?.getAttribute("data-cursor");
      setMode(explicit === "view" || explicit === "open" ? explicit : el ? "hover" : "default");
    }

    function onLeave() {
      setVisible(false);
    }

    function tick() {
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;
      if (ref.current) ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  const label = LABELS[mode];

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[200] transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0",
        !label && "mix-blend-difference",
      )}
    >
      <div
        className={cn(
          "grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-[width,height,background-color,border-color] duration-300 ease-premium",
          mode === "default" && "h-2 w-2 bg-white",
          mode === "hover" && "h-9 w-9 border border-white bg-transparent",
          mode === "view" && "h-20 w-20 bg-blue",
          mode === "open" && "h-16 w-16 bg-blue-bright",
        )}
      >
        {label}
      </div>
    </div>
  );
}
