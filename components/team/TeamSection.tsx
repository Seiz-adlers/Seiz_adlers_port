import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

/**
 * About Seiz Adlers — who we are, shown through disciplines rather than
 * individual people (the team prefers not to be pictured or listed).
 * Composition: intro row → photographic band with a glass orb breaking its
 * top edge → disciplines as icon medallions → needs.
 */

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const disciplines: Array<{ title: string; body: string; tags: string[]; icon: ReactNode; tint: string }> = [
  {
    title: "Strategists",
    body: "We get to the root of what's holding a business back before deciding what to build.",
    tags: ["Positioning", "Research", "Growth planning"],
    tint: "from-[#00A8FF]/35 to-[#0057A8]/10",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Creatives",
    body: "Identity, content and campaigns distinct enough to be recognised — and remembered.",
    tags: ["Brand identity", "Content", "Art direction"],
    tint: "from-[#7FD1FF]/30 to-[#008CFF]/10",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" />
      </svg>
    ),
  },
  {
    title: "Marketers",
    body: "Campaigns run against measurable outcomes, with tracking that shows what's working.",
    tags: ["Google Ads", "Meta Ads", "Analytics"],
    tint: "from-[#008CFF]/35 to-[#003E7A]/10",
    icon: (
      <svg {...iconProps}>
        <path d="M4 19h16" />
        <path d="M5 15l4-4 3 3 7-7" />
        <path d="M15 7h4v4" />
      </svg>
    ),
  },
  {
    title: "Technologists",
    body: "Websites, applications and workflows engineered to convert, connect and scale.",
    tags: ["Web development", "Automation", "Integrations"],
    tint: "from-[#4CC3FF]/30 to-[#0057A8]/10",
    icon: (
      <svg {...iconProps}>
        <path d="M8 8l-4 4 4 4" />
        <path d="M16 8l4 4-4 4" />
        <path d="M13.5 5l-3 14" />
      </svg>
    ),
  },
];

const needs = [
  { label: "A stronger brand", href: "/services/brand-identity" },
  { label: "Better-performing campaigns", href: "/services/performance-marketing" },
  { label: "A website that converts", href: "/services/website-development" },
  { label: "Smarter business workflows", href: "/services/marketing-automation" },
];

export function TeamSection({ index = "07" }: { index?: string }) {
  return (
    <section id="team" className="relative isolate overflow-hidden border-t border-hair bg-bg py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-[38%] -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue/10 blur-[140px]" />

      <div className="container-fluid">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <SectionLabel index={index} label="About Seiz Adlers" />
            <h2 className="mt-6 text-balance font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1] tracking-tight text-ink">
              Your business has potential.{" "}
              <span className="font-serif font-normal italic tracking-normal text-accent">
                Let&rsquo;s turn it into progress.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-[17px] leading-relaxed text-ink-secondary lg:pt-16">
            <p>
              Growth doesn&rsquo;t happen by doing more of everything. It happens when you understand what&rsquo;s
              holding your business back and make the right moves.
            </p>
            <p>
              We&rsquo;re a compact team of strategists, creatives, marketers and technology enthusiasts who look
              beyond the obvious — finding the opportunities others overlook and bringing the right ideas, digital
              strategy and technology together to move your business forward.
            </p>
          </Reveal>
        </div>

        {/* Photographic band with the orb breaking its top edge */}
        <Reveal delay={0.1} className="relative mt-32 md:mt-40">
          <div className="relative h-[300px] overflow-hidden rounded-[28px] border border-white/10 sm:h-[360px] md:h-[440px]">
            {/* Photo by Sebastian Schuster — https://unsplash.com/photos/pFv5PYlDQBk (Unsplash License). */}
            <Image
              src="/about/architecture.jpg"
              alt=""
              fill
              sizes="(min-width: 1440px) 1340px, 100vw"
              className="object-cover object-[50%_42%]"
            />
            <div aria-hidden className="absolute inset-0 bg-[#002A55]/40 mix-blend-color" />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,4,5,0.15)_0%,rgba(3,4,5,0.1)_50%,rgba(3,4,5,0.75)_100%)]" />
            <div aria-hidden className="noise absolute inset-0 opacity-[0.08] mix-blend-overlay" />

            <p className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6 md:bottom-10 md:left-10 md:right-10">
              <span className="font-display text-[clamp(1.25rem,2.6vw,2rem)] font-semibold uppercase leading-tight tracking-tight text-white">
                Four disciplines.
                <br />
                <span className="font-serif font-normal normal-case italic tracking-normal text-[#7FD1FF]">One team.</span>
              </span>
              <span className="hidden text-[11px] uppercase tracking-[0.25em] text-white/60 sm:block">
                Strategy · Creative · Growth · Technology
              </span>
            </p>
          </div>

          {/* Glass orb — top half sits above the band, bottom half refracts the photo */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 sm:h-[200px] sm:w-[200px] md:h-[240px] md:w-[240px]"
          >
            <div className="absolute inset-0 -translate-x-[8%] -translate-y-[6%] rounded-full bg-gradient-to-b from-[#3FB6FF] via-[#008CFF] to-[#0057A8] opacity-90 [clip-path:inset(0_0_50%_0)]" />
            <div className="absolute inset-0 rounded-full border border-white/25 bg-gradient-to-br from-[#00A8FF]/55 via-[#008CFF]/35 to-[#0057A8]/60 shadow-[inset_0_2px_0_rgba(255,255,255,0.35),inset_0_-20px_40px_rgba(0,20,60,0.5),0_30px_80px_-10px_rgba(0,140,255,0.45)] backdrop-blur-md" />
            <div className="absolute left-[18%] top-[12%] h-[28%] w-[40%] rotate-[-20deg] rounded-full bg-white/25 blur-xl" />
          </div>
        </Reveal>

        {/* Disciplines */}
        <div className="mt-20 text-center md:mt-24">
          <Reveal>
            <h3 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-ink">
              What we <span className="font-serif font-normal italic tracking-normal text-accent">bring</span>
            </h3>
          </Reveal>

          <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((d, i) => (
              <Reveal key={d.title} as="li" delay={i * 0.08} className="group flex flex-col items-center px-2">
                <span className="relative grid h-24 w-24 place-items-center">
                  {/* offset ring echoes the orb above */}
                  <span
                    aria-hidden
                    className="absolute inset-0 translate-x-1.5 -translate-y-1 rounded-full border border-blueline transition-transform duration-500 ease-premium group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                  <span
                    className={`relative grid h-full w-full place-items-center rounded-full border border-white/10 bg-gradient-to-br ${d.tint} text-[#9BDCFF] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-md transition-transform duration-500 ease-premium group-hover:-translate-y-1`}
                  >
                    {d.icon}
                  </span>
                </span>
                <h4 className="mt-6 font-display text-xl font-semibold uppercase tracking-tight text-ink">{d.title}</h4>
                <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-ink-secondary">{d.body}</p>
                <ul className="mt-5 flex flex-wrap justify-center gap-2">
                  {d.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-hair px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-ink-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Needs */}
        <Reveal delay={0.1} className="mt-24 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-center lg:gap-16">
          <p className="max-w-sm text-ink-secondary">
            Solutions built around your goals — <span className="text-ink">not one-size-fits-all services.</span>
          </p>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-hair bg-[var(--hair)] sm:grid-cols-2">
            {needs.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="group flex min-h-[64px] items-center justify-between gap-4 bg-bg px-6 font-display text-base font-medium uppercase tracking-tight text-ink transition-colors hover:bg-surface hover:text-accent"
                >
                  {n.label}
                  <span aria-hidden className="text-ink-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
