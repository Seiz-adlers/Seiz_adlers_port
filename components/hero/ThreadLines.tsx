"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";

/**
 * Vertical hairline "threads" that part around the cursor like a soft lens.
 *
 * A focus point eases after the cursor, and every thread point within RADIUS
 * of it is nudged sideways, away from it, with a (1 - d/RADIUS)² falloff, so
 * the threads bow smoothly around the pointer and glide behind it. The effect
 * fades in when the pointer arrives and out when it leaves.
 *
 * The cursor is read from the window (the canvas sits behind other content,
 * so it never receives events itself). The motion only follows the user's own
 * pointer, so it stays on under prefers-reduced-motion. The loop sleeps once
 * everything has settled.
 */

const SPACING = 60; // px between threads
const STEP = 12; // px between sample points along a thread
const RADIUS = 220; // px reach of the lens around the cursor
const PUSH = 45; // max sideways displacement in px
const EASE = 0.08; // how quickly the lens follows the cursor (0–1)

export function ThreadLines({ className, color = "rgba(255,255,255,0.14)" }: { className?: string; color?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    // target (cursor) and eased focus, in viewport coords
    let target = { x: 0, y: 0 };
    let focus = { x: 0, y: 0 };
    let hasFocus = false;
    let strength = 0;
    let strengthTarget = 0;
    let frame = 0;
    let visible = true;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      const rect = canvas!.getBoundingClientRect();
      const fx = focus.x - rect.left;
      const fy = focus.y - rect.top;

      ctx!.clearRect(0, 0, width, height);
      ctx!.strokeStyle = color;
      ctx!.lineWidth = 1;
      ctx!.beginPath();

      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / STEP) + 1;
      const offset = (width % SPACING) / 2;
      for (let c = -1; c < cols; c++) {
        const x0 = c * SPACING + offset;
        for (let r = 0; r < rows; r++) {
          const y = r * STEP;
          let x = x0;
          if (strength > 0.001) {
            const dx = x0 - fx;
            const dy = y - fy;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < RADIUS) {
              const k = 1 - d / RADIUS;
              x += (dx / (d + 0.1)) * PUSH * k * k * strength;
            }
          }
          if (r === 0) ctx!.moveTo(x, y);
          else ctx!.lineTo(x, y);
        }
      }
      ctx!.stroke();
    }

    function tick() {
      if (hasFocus) {
        focus.x += (target.x - focus.x) * EASE;
        focus.y += (target.y - focus.y) * EASE;
      }
      strength += (strengthTarget - strength) * EASE;
      draw();

      const settled =
        Math.abs(strengthTarget - strength) < 0.001 &&
        (strength < 0.001 || (Math.abs(target.x - focus.x) < 0.1 && Math.abs(target.y - focus.y) < 0.1));
      frame = visible && !settled ? requestAnimationFrame(tick) : 0;
    }

    function start() {
      if (!frame && visible) frame = requestAnimationFrame(tick);
    }

    function onMove(e: MouseEvent) {
      target = { x: e.clientX, y: e.clientY };
      if (!hasFocus) {
        focus = { ...target };
        hasFocus = true;
      }
      strengthTarget = 1;
      start();
    }

    function onLeave() {
      strengthTarget = 0;
      start();
    }

    // the page scrolling moves the canvas under a still cursor
    function onScroll() {
      if (strength > 0.001) start();
    }

    resize();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    io.observe(canvas);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [color]);

  return <canvas ref={canvasRef} aria-hidden className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} />;
}
