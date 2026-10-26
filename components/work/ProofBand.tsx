import { proofPoints } from "@/data/proof";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

/**
 * Headline results band — large figures, hairline-divided, on brand blue.
 * Each figure counts up from zero the first time the band scrolls into view,
 * staggered left to right; units (₹, L+, ×, K+) sit lighter so the number leads.
 */
export function ProofBand() {
  return (
    <section aria-label="Results" className="bg-grain relative bg-[#0066FF] text-white">
      <div className="container-fluid py-14 md:py-20">
        <Reveal className="flex items-center gap-3">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/80">Reported campaign results</p>
        </Reveal>
        <dl className="mt-8 grid grid-cols-2 gap-px border border-white/20 bg-white/20 md:grid-cols-3 lg:grid-cols-5">
          {proofPoints.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 0.06}
              className="group relative bg-[#0066FF] px-5 py-7 transition-colors duration-500 last:col-span-2 hover:bg-[#005CE6] md:last:col-span-1 lg:px-7 lg:py-9"
            >
              <dt className="sr-only">{p.label}</dt>
              <dd>
                <span aria-hidden className="block text-[11px] font-semibold tabular-nums tracking-[0.15em] text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 block font-sans text-[clamp(2.5rem,4.8vw,4.25rem)] font-bold leading-[0.9] tracking-[-0.055em]">
                  <CountUp value={p.value} delay={i * 120} suffixClassName="text-[0.62em] font-semibold text-white/75" />
                </span>
                <span className="mt-5 block h-px w-8 bg-white/40 transition-all duration-500 ease-premium group-hover:w-14 group-hover:bg-white" />
                <span className="mt-4 block max-w-[20ch] text-[12px] font-medium uppercase leading-snug tracking-[0.08em] text-white/85">
                  {p.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
