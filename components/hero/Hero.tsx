"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { track } from "@/lib/analytics/track";
import { cn } from "@/lib/utils/cn";
import { ThreadLines } from "./ThreadLines";

/**
 * Split editorial hero inside an inset frame: a dark, black-and-white face
 * close-up on the left, a solid brand-blue panel on the right, laid like a
 * print on a blurred, grainy copy of the portrait.
 *
 * The blue panel carries two small editorial frames — a tight detail crop of
 * the portrait and the eagle mark — rather than photos of people, so the hero
 * stays about the brand. The team has its own section further down.
 *
 * All entrance motion is CSS (globals.css), so it plays on first paint and
 * collapses to the end state under prefers-reduced-motion.
 */

const portrait = siteConfig.heroPortrait;

/** Inset of the framed card from the viewport — matches the navbar's container gutter. */
const FRAME = "px-[clamp(1.25rem,5vw,5rem)] pb-[clamp(1.25rem,4.5vw,4.5rem)] pt-[76px] lg:pt-[88px]";
/** Card height: the viewport minus the frame's top and bottom inset. */
const CARD_HEIGHT = "lg:min-h-[calc(100svh_-_88px_-_clamp(1.25rem,4.5vw,4.5rem))]";
const GUTTER = "px-[clamp(1.25rem,3vw,3rem)]";
const GIANT = "font-sans font-bold uppercase leading-[0.84] tracking-[-0.055em]";
const GIANT_SIZE = "text-[clamp(4rem,19vw,9rem)] lg:text-[clamp(4.5rem,6.6vw,9rem)]";
const SMALL = "text-[12px] font-medium uppercase leading-[1.18] tracking-[0.005em] sm:text-[13px]";
const PORTRAIT_FILTER = "grayscale contrast-[1.15] brightness-[0.88]";
const FRAME_SHADOW = "shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]";

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

/** Where the face centre should land in the panel — eyes just above middle, type over the hair. */
const FACE_TARGET = { x: 50, y: 55 };

/**
 * Shift (in % of the panel) that moves the face from `from` toward the
 * target, limited so that after zooming by `scale` no image edge is exposed.
 */
function shift(from: number, target: number, scale: number) {
  const max = from * (scale - 1);
  const min = -(100 - from) * (scale - 1);
  return Math.min(max, Math.max(min, target - from));
}

/** CSS vars for `.hero-portrait`: zoom about the face centre, then reframe it. */
function closeUp(position = "50% 35%", scale = 1): CSSProperties {
  const [px, py] = position.split(" ").map((v) => parseFloat(v));
  const scaleSm = 1 + (scale - 1) * 0.45;
  return {
    objectPosition: position,
    "--hero-origin": position,
    "--hero-scale": scale,
    "--hero-scale-sm": scaleSm,
    "--hero-tx": `${shift(px, FACE_TARGET.x, scale)}%`,
    "--hero-ty": `${shift(py, FACE_TARGET.y, scale)}%`,
    "--hero-tx-sm": `${shift(px, FACE_TARGET.x, scaleSm)}%`,
    "--hero-ty-sm": `${shift(py, FACE_TARGET.y, scaleSm)}%`,
  } as CSSProperties;
}

/** Masked line reveal — the word slides up from behind its own baseline. */
function Line({ children, ms }: { children: string; ms: number }) {
  return (
    <span className="block overflow-hidden pb-[0.04em]">
      <span className="hero-rise block" style={delay(ms)}>
        {children}
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className={cn("relative isolate min-h-[100svh] overflow-hidden bg-black", FRAME)}
    >
      <h1 id="hero-title" className="sr-only">
        We create brands people remember.
      </h1>

      {/* Frame backdrop: the portrait again, enlarged and softly blurred into
          grey light-and-shadow shapes, with heavy film grain and a dark
          vignette at the outer edge — the card reads as a print laid on top. */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-[#4d4d4d]">
        <Image
          src={portrait.src}
          alt=""
          fill
          sizes="50vw"
          className="scale-150 object-cover opacity-60 blur-xl grayscale brightness-150"
        />
        {/* soft curved highlights, like light falling across a surface */}
        <div className="absolute inset-0 bg-[radial-gradient(55%_38%_at_18%_28%,rgba(255,255,255,0.22),transparent_70%),radial-gradient(48%_32%_at_85%_88%,rgba(255,255,255,0.16),transparent_70%),radial-gradient(40%_30%_at_70%_8%,rgba(0,0,0,0.35),transparent_70%)]" />
        <div className="noise absolute inset-0 opacity-[0.28] mix-blend-overlay" />
        {/* hairline threads that part around the cursor in the frame margins */}
        <ThreadLines />
        <div className="absolute inset-0 shadow-[inset_0_0_36px_6px_rgba(0,0,0,0.9)]" />
      </div>

      <div className="relative grid grid-cols-1 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.85)] ring-1 ring-black/70 lg:grid-cols-2">
        {/* ── Dark portrait panel ──────────────────────────────────── */}
        <div className={cn("bg-grain relative isolate min-h-[80svh] overflow-hidden bg-[#0a0a0a] text-white", CARD_HEIGHT)}>
          <div className="hero-zoom absolute inset-0 -z-10 overflow-hidden">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className={cn("hero-portrait object-cover", PORTRAIT_FILTER)}
              style={closeUp(portrait.position, portrait.scale)}
            />
          </div>
          {/* vignette + top/bottom shade so the type always reads */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(115%_85%_at_50%_42%,transparent_40%,rgba(0,0,0,0.7)_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,transparent_30%,transparent_62%,rgba(0,0,0,0.72)_100%)]"
          />

          <div
            aria-hidden
            className={cn("pointer-events-none absolute inset-x-0 top-0 pt-8 lg:pt-10", GIANT, GIANT_SIZE, GUTTER)}
          >
            <Line ms={150}>We</Line>
            <Line ms={260}>Create</Line>
          </div>

          <p
            className={cn(
              "hero-fade absolute right-[clamp(1.25rem,3vw,3rem)] top-[30%] max-w-[23ch] lg:top-[29%]",
              SMALL,
            )}
            style={delay(700)}
          >
            We build distinct brands through strategy, design and technology.
          </p>

          <div
            className={cn(
              "absolute inset-x-0 bottom-0 flex flex-col gap-4 pb-5 lg:pb-8 xl:flex-row xl:items-end xl:justify-between xl:gap-6",
              GUTTER,
            )}
          >
            <div className="hero-fade" style={delay(850)}>
              <p className={cn("max-w-[19ch]", SMALL)}>Seiz Adlers turns ambitious businesses into memorable ones.</p>
              <p className={cn("mt-[clamp(2rem,8vh,5.5rem)] max-w-[17ch]", SMALL)}>
                One team. Different strengths. One standard.
              </p>
            </div>

            <p aria-hidden className={cn("pointer-events-none -mb-[0.1em] self-end", GIANT, GIANT_SIZE)}>
              <Line ms={380}>Brands</Line>
            </p>
          </div>
        </div>

        {/* ── Blue panel ───────────────────────────────────────────── */}
        {/* Mobile: a simple stack. Desktop: fixed zones that never overlap —
            detail frame top-centre, headline middle-left, mark bottom-right,
            actions bottom-left. */}
        <div
          className={cn(
            "hero-wipe bg-grain relative flex flex-col bg-[#0066FF] pb-10 pt-12 text-white lg:block lg:py-0",
            CARD_HEIGHT,
            GUTTER,
          )}
          style={delay(200)}
        >
          <div className="relative lg:absolute lg:left-[clamp(1.25rem,3vw,3rem)] lg:top-[42%] lg:max-w-[26rem]">
            <p
              aria-hidden
              className={cn(GIANT, "leading-[0.88] text-[clamp(3rem,12vw,5rem)] lg:text-[clamp(2.5rem,4vw,4.5rem)]")}
            >
              <Line ms={650}>People</Line>
              <Line ms={760}>Remember.</Line>
            </p>
            <p className={cn("hero-fade mt-5 max-w-[30ch]", SMALL)} style={delay(900)}>
              Strategy, creative, technology and growth — brought together under one roof.
            </p>
          </div>

          <div
            className="hero-fade relative mt-10 flex flex-wrap items-center gap-x-9 gap-y-1 lg:absolute lg:bottom-6 lg:left-[clamp(1.25rem,3vw,3rem)] lg:mt-0 lg:flex-col lg:items-start lg:gap-0 xl:bottom-8 xl:flex-row xl:items-center xl:gap-x-9"
            style={delay(1000)}
          >
            <Link
              href="/contact"
              data-cursor="open"
              onClick={() => track("cta_click", { location: "hero_primary" })}
              className="group inline-flex min-h-[44px] items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.08em] focus-visible:outline-white"
            >
              Start a Project
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-white transition-transform duration-300 ease-premium group-hover:scale-[1.8]"
              />
            </Link>
            <Link
              href="#selected-work"
              onClick={() => track("cta_click", { location: "hero_secondary" })}
              className="group inline-flex min-h-[44px] items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-white/75 transition-colors hover:text-white focus-visible:outline-white"
            >
              Explore Our Work
              <span aria-hidden className="transition-transform duration-300 ease-premium group-hover:translate-y-0.5">
                ↓
              </span>
            </Link>
          </div>

          {/* Editorial frames — decorative, so hidden from assistive tech. */}
          <div aria-hidden className="relative mt-12 grid grid-cols-[3fr_2fr] items-end gap-4 lg:contents">
            {/* tight detail crop of the portrait's eyes */}
            <div
              className={cn(
                "hero-fade relative aspect-[3/2] overflow-hidden bg-black lg:absolute lg:left-[30%] lg:top-[13%] lg:w-[30%]",
                FRAME_SHADOW,
              )}
              style={delay(1100)}
            >
              <Image
                src={portrait.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 18vw, 55vw"
                className={cn("scale-[1.9] object-cover", PORTRAIT_FILTER)}
                style={{ objectPosition: "50% 38%", transformOrigin: "50% 38%" }}
              />
            </div>

            {/* the eagle mark on black stock */}
            <div
              className={cn(
                "hero-fade relative grid aspect-square place-items-center overflow-hidden bg-[#050607] lg:absolute lg:bottom-[9%] lg:right-[clamp(1.25rem,3vw,3rem)] lg:w-[22%]",
                FRAME_SHADOW,
              )}
              style={delay(1220)}
            >
              <div className="noise absolute inset-0 opacity-[0.12] mix-blend-overlay" />
              <Image src="/logo-mark.png" alt="" width={417} height={379} className="relative w-[42%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
