import { technology, growthStack, benchmarks } from "@/data/technology";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

export function BuiltToPerform({ index = "02" }: { index?: string }) {
  return (
    <section className="border-t border-hair bg-bg-secondary py-14 md:py-20">
      <div className="container-fluid grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionLabel index={index} label="Technology" />
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink">
            Built to Perform.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-secondary">
            Fast, accessible and scalable digital experiences engineered for real-world
            performance.
          </p>
          {[
            { label: "Build", items: technology },
            { label: "Growth & measurement", items: growthStack },
          ].map((group) => (
            <div key={group.label} className="mt-8">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted">{group.label}</p>
              <div className="flex flex-wrap gap-3">
                {group.items.map((tech) => (
                  <span key={tech} className="border border-hair px-4 py-2 text-sm text-ink-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card rounded-sm p-8">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted">
              Example Performance Benchmark — development target, not a live measurement
            </p>
            <div className="grid grid-cols-2 gap-6">
              {benchmarks.map((b) => (
                <div key={b.label} className="border-t border-hair pt-4">
                  <p className="font-display text-4xl font-semibold text-accent">{b.value}</p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.1em] text-ink-secondary">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
