import { SectionLabel } from "@/components/ui/SectionLabel";
import { TeamGrid } from "@/components/team/TeamGrid";
import { Reveal } from "@/components/motion/Reveal";

export function TeamSection() {
  return (
    <section id="team" className="border-t border-hair bg-bg py-16 md:py-24">
      <div className="container-fluid">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel index="07" label="People" align="center" />
          <h2 className="mt-6 text-balance font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink">
            Five Minds.
            <br />
            One Vision.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-secondary">
            Seiz Adlers started with people who believed exceptional digital work should not be
            divided across disconnected teams.
          </p>
          <p className="mt-4 font-display text-lg font-medium uppercase tracking-tight text-ink">
            Different strengths. One standard.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <TeamGrid />
        </Reveal>
      </div>
    </section>
  );
}
