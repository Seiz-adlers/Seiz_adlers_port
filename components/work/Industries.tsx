import Link from "next/link";
import { industries } from "@/data/proof";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ThreadLines } from "@/components/hero/ThreadLines";

/** Industries we've worked in — each links to its campaign case study. */
export function Industries({ index }: { index: string }) {
  return (
    <section className="relative isolate overflow-hidden border-t border-hair py-16 md:py-24">
      {/* the hero's hairline threads, parting around the cursor */}
      <ThreadLines className="-z-10" color="rgba(20,18,14,0.09)" />
      <div className="container-fluid grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-24">
        <Reveal>
          <SectionLabel index={index} label="Industries" />
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink">
            Industries we serve.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-secondary">
            Different markets, one discipline: understand the customer, then build what moves them.
          </p>
        </Reveal>

        <ul className="border-t border-hair">
          {industries.map((industry, i) => (
            <Reveal as="li" key={industry.slug} delay={i * 0.05}>
              <Link
                href={`/work/${industry.slug}`}
                className="group flex items-center justify-between gap-6 border-b border-hair py-5 md:py-6"
              >
                <span className="flex items-baseline gap-5">
                  <span className="font-display text-xs text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[clamp(1.35rem,2.6vw,2.25rem)] font-semibold uppercase tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                    {industry.name}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-ink-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
