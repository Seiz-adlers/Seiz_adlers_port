import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/data/site";

export function FinalCTA() {
  return (
    // Always dark: the closing chapter sits on its photographic backdrop on every route.
    <section
      data-theme="dark"
      className="relative isolate flex min-h-[80svh] items-center overflow-hidden border-t border-hair bg-bg py-24 md:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Scaled from the left so the source's right-edge corner mark falls outside the frame */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/lets_build.png"
            alt=""
            fill
            sizes="100vw"
            quality={70}
            className="origin-left scale-[1.08] object-cover object-[35%_60%] brightness-110 motion-safe:animate-drift-soft"
          />
        </div>
        {/* Grade: soften the top seam, pool light under the CTA, darken the corners */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(3,4,5,0.55)_0%,transparent_45%,rgba(3,4,5,0.7)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,140,255,0.28),transparent_65%)] mix-blend-screen" />
        <div className="noise absolute inset-0 opacity-[0.06] mix-blend-overlay" />
        {/* horizon line */}
        <div className="absolute inset-x-0 bottom-[18%] mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-blue-bright/60 to-transparent" />
      </div>

      <div className="container-fluid relative text-center">
        <Reveal>
          <p className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-ink-secondary backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-bright shadow-[0_0_10px_#00A8FF]" />
            Start a project
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-8 max-w-4xl text-balance font-display text-[clamp(2.75rem,8vw,7rem)] font-semibold uppercase leading-[0.92] tracking-tight text-ink [text-shadow:0_10px_60px_rgba(0,0,0,0.6)]">
            Let&rsquo;s build
            <br />
            <span className="bg-gradient-to-r from-[#7FD1FF] via-blue-bright to-blue bg-clip-text font-serif font-normal normal-case italic tracking-normal text-transparent">
              something great.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-ink-secondary">
            Tell us what you&rsquo;re building, where you&rsquo;re stuck, or where you want to go.
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact">Start a Project →</Button>
          <Button href="/work" variant="secondary">
            View Our Work →
          </Button>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="mt-10 text-sm text-ink-muted">
            Or write to us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-ink underline decoration-blue-bright/50 underline-offset-4 transition-colors hover:text-blue-bright"
            >
              {siteConfig.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
