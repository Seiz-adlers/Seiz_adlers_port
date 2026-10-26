"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a display figure like "₹30L+", "4×" or "100K+" up from zero the first
 * time it scrolls into view. The prefix/suffix stay put; only the number
 * ticks. The final value is rendered invisibly underneath so the layout never
 * shifts while the digits change, and screen readers only ever get the final
 * value.
 */

const DURATION = 1800;

/** "₹30L+" → { prefix: "₹", number: 30, decimals: 0, suffix: "L+" } */
function parse(value: string) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  return { prefix, number: parseFloat(digits), decimals: digits.split(".")[1]?.length ?? 0, suffix };
}

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function CountUp({
  value,
  delay = 0,
  suffixClassName,
}: {
  value: string;
  /** ms to wait after entering view — lets a row of figures stagger */
  delay?: number;
  suffixClassName?: string;
}) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed) return;
    let frame = 0;
    let timer = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => {
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / DURATION);
            setCurrent(parsed.number * easeOutExpo(t));
            if (t < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }, delay);
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
    // value is the only real input; parsed is derived from it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, delay]);

  if (!parsed) return <>{value}</>;

  const shown = current.toFixed(parsed.decimals);
  const render = (n: string) => (
    <>
      {parsed.prefix && <span className={suffixClassName}>{parsed.prefix}</span>}
      {n}
      {parsed.suffix && <span className={suffixClassName}>{parsed.suffix}</span>}
    </>
  );

  return (
    <span ref={ref} className="relative inline-block tabular-nums">
      <span className="sr-only">{value}</span>
      {/* final value holds the width; the ticking copy sits on top of it */}
      <span aria-hidden className="invisible">
        {render(parsed.number.toFixed(parsed.decimals))}
      </span>
      <span aria-hidden className="absolute inset-0 whitespace-nowrap">
        {render(shown)}
      </span>
    </span>
  );
}
