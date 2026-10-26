import Link from "next/link";
import { services } from "@/data/services";
import { servicePillars, additionalServices } from "@/data/proof";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

/** The six services grouped under three pillars. */
export function ServicePillars({ index }: { index: string }) {
  return (
    <section className="border-t border-hair py-14 md:py-20">
      <div className="container-fluid">
        <Reveal>
          <SectionLabel index={index} label="Pillars" />
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink">
            Three pillars. One team.
          </h2>
        </Reveal>

        <div className="card mt-12 grid gap-px overflow-hidden rounded-sm md:grid-cols-3">
          {servicePillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08} className="flex flex-col bg-bg p-8 md:p-10">
              <span className="font-display text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-tight text-ink">{pillar.title}</h3>
              <p className="mt-3 text-ink-secondary">{pillar.description}</p>
              <ul className="mt-8 space-y-1 border-t border-hair pt-4">
                {pillar.services.map((slug) => {
                  const service = services.find((s) => s.slug === slug);
                  if (!service) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={`/services/${slug}`}
                        className="group flex min-h-[44px] items-center justify-between gap-4 text-[13px] font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:text-accent"
                      >
                        {service.title}
                        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Supporting services offered alongside the core six. */
export function AdditionalServices({ index }: { index: string }) {
  return (
    <section className="border-t border-hair py-14 md:py-20">
      <div className="container-fluid grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-20">
        <Reveal>
          <SectionLabel index={index} label="Also Available" />
          <h2 className="mt-6 font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink">
            Beyond the core six.
          </h2>
          <p className="mt-5 max-w-sm text-ink-secondary">
            Supporting work that keeps a brand fast, measured and connected after launch.
          </p>
        </Reveal>
        <dl className="grid gap-x-10 border-t border-hair sm:grid-cols-2">
          {additionalServices.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.06} className="border-b border-hair py-6">
              <dt className="font-display text-lg font-semibold uppercase tracking-tight text-ink">{item.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.body}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
