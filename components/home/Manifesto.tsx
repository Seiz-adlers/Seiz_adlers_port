import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

/** Each belief is split so the second half can carry the editorial serif accent. */
const beliefs = [
  { lead: "Brands should", accent: "mean something." },
  { lead: "Websites should", accent: "do more than exist." },
  { lead: "Design should", accent: "have purpose." },
  { lead: "Technology should", accent: "simplify complexity." },
  { lead: "Marketing should be", accent: "measurable." },
  { lead: "Growth should be", accent: "intentional." },
];

export function Manifesto() {
  return (
    // Always dark: the manifesto is a cinematic chapter regardless of route theme.
    <section
      data-theme="dark"
      className="relative isolate overflow-hidden border-t border-hair bg-bg py-24 md:py-32"
    >
      {/* Backdrop — lit from below-left and top-right so the glass has something to refract */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Photographic base — scaled from the top-left so the source's bottom-right corner mark is cropped out */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/we-belives.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={70}
            className="origin-top-left scale-[1.18] object-cover object-left-top brightness-125 contrast-110 motion-safe:animate-drift"
          />
        </div>
        {/* Grade: deepen toward the edges, keep the centre readable, tint to brand blue */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_35%,rgba(3,4,5,0.6)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
        <div className="absolute inset-0 bg-blue-deep/10 mix-blend-color" />
        <div className="absolute -left-[10%] top-[35%] h-[520px] w-[520px] rounded-full bg-blue/15 blur-[140px]" />
        <div className="absolute -right-[8%] -top-[10%] h-[420px] w-[420px] rounded-full bg-blue-deep/20 blur-[120px]" />
        {/* Eagle-wing chevrons — thin light lines sweeping behind the panel */}
        <svg
          className="absolute right-[4%] top-1/2 hidden h-[80%] -translate-y-1/2 opacity-60 lg:block"
          viewBox="0 0 400 600"
          fill="none"
        >
          <defs>
            <linearGradient id="manifesto-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#00A8FF" stopOpacity="0" />
              <stop offset="0.5" stopColor="#00A8FF" stopOpacity="0.7" />
              <stop offset="1" stopColor="#00A8FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 40, 80, 120].map((o) => (
            <path key={o} d={`M${20 + o} 40 L${360 - o / 2} 300 L${20 + o} 560`} stroke="url(#manifesto-line)" strokeWidth="1" />
          ))}
        </svg>
        <div className="noise absolute inset-0 opacity-[0.05] mix-blend-overlay" />
      </div>

      <div className="container-fluid">
        <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-black/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-[6px]">
          {/* Glass sheen + top highlight edge */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_40%,transparent_70%,rgba(0,140,255,0.06))]" />
          <div aria-hidden className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="relative grid gap-12 p-7 sm:p-10 md:p-14 lg:grid-cols-12 lg:gap-10 lg:p-20">
            {/* Left — label + framing */}
            <div className="lg:col-span-4">
              <Reveal>
                <p className="inline-flex items-center gap-3 rounded-full border border-blueline bg-blue/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-blue-bright">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-bright shadow-[0_0_10px_#00A8FF]" />
                  Manifesto
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,4.25rem)] font-semibold leading-[0.95] tracking-tight text-ink">
                  We <span className="font-serif font-normal italic tracking-normal text-blue-bright">believe</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-ink-secondary">
                  Six principles behind every brand, website and campaign we build.
                </p>
              </Reveal>
            </div>

            {/* Right — the beliefs */}
            <ol className="lg:col-span-8">
              {beliefs.map(({ lead, accent }, i) => (
                <Reveal
                  key={accent}
                  as="li"
                  delay={i * 0.08}
                  duration={0.8}
                  className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-4 border-t border-white/10 py-5 transition-colors duration-500 first:border-t-0 first:pt-0 hover:border-blueline md:grid-cols-[3.5rem_1fr] md:py-6"
                >
                    <span className="font-mono text-[12px] tabular-nums text-ink-muted transition-colors duration-300 group-hover:text-blue-bright">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-display text-[clamp(1.5rem,3.4vw,2.6rem)] font-medium leading-[1.1] tracking-tight text-ink-secondary transition-all duration-500 ease-premium group-hover:translate-x-1.5 group-hover:text-ink">
                      {lead}{" "}
                      <span className="font-serif font-normal italic tracking-normal text-ink">{accent}</span>
                    </p>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Closing line — full width footer of the panel */}
          <div className="relative border-t border-white/10 bg-gradient-to-r from-blue/[0.08] via-transparent to-transparent px-7 py-10 sm:px-10 md:px-14 lg:px-20 lg:py-14">
            <Reveal delay={0.3} duration={0.9}>
              <p className="font-display text-[clamp(2.25rem,6.5vw,5.5rem)] font-semibold uppercase leading-[0.95] tracking-tight text-ink text-balance">
                We build what comes{" "}
                <span className="bg-gradient-to-r from-blue-bright to-blue bg-clip-text font-serif font-normal normal-case italic tracking-normal text-transparent">
                  next.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
