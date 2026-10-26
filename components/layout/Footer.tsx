"use client";

import Link from "next/link";
import Image from "next/image";
import { footerLinks, siteConfig } from "@/data/site";
import { track } from "@/lib/analytics/track";

const labelClass = "mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ink-muted";
const linkClass =
  "group inline-flex items-center gap-2 text-[14px] text-ink-secondary transition-colors duration-300 hover:text-ink";

function Arrow() {
  return (
    <span
      aria-hidden
      className="-translate-x-1 text-blue-bright opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
    >
      →
    </span>
  );
}

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer data-theme="dark" className="relative isolate overflow-hidden border-t border-hair bg-bg">
      {/* Backdrop the glass refracts: blue light pools, a faint grid and the eagle mark, blown up and blurred */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(180deg,transparent,black_30%,black_70%,transparent)]" />
        <div className="absolute -left-[10%] top-[10%] h-[380px] w-[380px] rounded-full bg-blue/20 blur-[130px]" />
        <div className="absolute -right-[5%] bottom-[5%] h-[400px] w-[400px] rounded-full bg-blue-deep/30 blur-[140px]" />
        <Image
          src="/logo-mark.png"
          alt=""
          width={417}
          height={379}
          className="absolute right-[10%] top-[8%] w-[280px] max-w-[45vw] rotate-[-8deg] opacity-25 blur-[3px]"
        />
        <div className="noise absolute inset-0 opacity-[0.05] mix-blend-overlay" />
      </div>

      <div className="container-fluid pb-6 pt-14 md:pt-16">
        <div className="mx-auto max-w-[1120px]">
        {/* Glass panel */}
        <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_35%,transparent_70%,rgba(0,140,255,0.07))]" />
          <div aria-hidden className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="relative grid gap-10 p-6 sm:p-8 md:p-10 lg:grid-cols-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-5">
              <Image src="/logo-mark.png" alt="Seiz Adlers" width={417} height={379} className="h-8 w-auto" />
              <p className="mt-5 font-display text-[clamp(1.5rem,2.6vw,2.15rem)] font-semibold uppercase leading-[0.98] tracking-tight text-ink">
                Build the brand
                <br />
                <span className="font-serif font-normal normal-case italic tracking-normal text-blue-bright">
                  people remember.
                </span>
              </p>
              <Link
                href="/contact"
                className="group mt-7 inline-flex min-h-[44px] items-center gap-3 rounded-full border border-blueline bg-blue/10 px-5 text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:bg-blue/20 hover:shadow-glow"
              >
                Start a project
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Navigate */}
            <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-7">
              <p className={labelClass}>Navigate</p>
              <ul className="space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                      <Arrow />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div className="lg:col-span-3">
              <p className={labelClass}>Contact</p>
              <ul className="space-y-2.5">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                    {siteConfig.email}
                    <Arrow />
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className={linkClass}>
                    {siteConfig.phone}
                    <Arrow />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("outbound_social_click", { network: "instagram" })}
                    className={linkClass}
                  >
                    Instagram · {siteConfig.instagramHandle}
                    <Arrow />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Panel footer bar */}
          <div className="relative flex flex-col-reverse items-start justify-between gap-5 border-t border-white/10 px-6 py-3 text-[12px] text-ink-muted sm:px-8 md:flex-row md:items-center md:px-10">
            <p>&copy; 2026 SEIZ ADLERS</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="transition-colors hover:text-ink">
                Privacy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-ink">
                Terms
              </Link>
              <button
                type="button"
                onClick={scrollTop}
                className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 px-4 text-ink-secondary transition-colors hover:border-blueline hover:text-ink"
              >
                Back to top
                <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5">
                  ↑
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Oversized wordmark, fading into the floor */}
        <p
          aria-hidden
          className="mt-6 select-none whitespace-nowrap bg-gradient-to-b from-white/[0.12] to-white/0 bg-clip-text text-center font-display text-[clamp(2.5rem,11vw,9.5rem)] font-semibold uppercase leading-[0.8] tracking-[-0.04em] text-transparent"
        >
          Seiz Adlers
        </p>
        </div>
      </div>
    </footer>
  );
}
