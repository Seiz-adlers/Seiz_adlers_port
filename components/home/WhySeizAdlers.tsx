import { principles } from "@/data/principles";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

export function WhySeizAdlers() {
  return (
    <section className="border-t border-hair bg-bg-secondary py-16 md:py-24">
      <div className="container-fluid">
        <Reveal>
          <SectionLabel index="08" label="Why Us" />
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink">
            Why Seiz Adlers?
          </h2>
        </Reveal>

        <div className="card mt-16 grid gap-px overflow-hidden rounded-sm sm:grid-cols-2 lg:grid-cols-5">
          {principles.map((p, i) => (
            <Reveal key={p.number} delay={i * 0.06} className="bg-bg-secondary p-8 md:p-10">
              <span className="font-display text-sm text-blue-bright">{p.number}</span>
              <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
