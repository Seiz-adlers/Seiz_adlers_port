import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

export function OurStory({ index = "02" }: { index?: string }) {
  return (
    <section className="border-b border-hair bg-bg py-14 md:py-20">
      <div className="container-fluid max-w-3xl">
        <Reveal>
          <SectionLabel index={index} label="Our Story" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-balance font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-medium leading-[1.2] text-ink">
            We started Seiz Adlers because we believed great digital work should bring
            strategy, design, technology and growth closer together.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 font-display text-xl font-medium uppercase tracking-tight text-ink-secondary">
            Different perspectives.
            <br />
            One shared ambition.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
