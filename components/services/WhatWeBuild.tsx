import { services } from "@/data/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServicesAccordion } from "@/components/services/ServicesAccordion";
import { Reveal } from "@/components/motion/Reveal";

export function WhatWeBuild() {
  return (
    <section id="what-we-build" className="border-t border-hair bg-bg-secondary py-16 md:py-24">
      <div className="container-fluid">
        <Reveal>
          <SectionLabel index="04" label="Capabilities" />
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink">
            What We Build
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink-secondary">
            From the first idea to measurable growth.
          </p>
        </Reveal>

        <div className="mt-14">
          <Reveal delay={0.1}>
            <ServicesAccordion services={services} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
