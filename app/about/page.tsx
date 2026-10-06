import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { OurStory } from "@/components/about/OurStory";
import { TeamSection } from "@/components/team/TeamSection";
import { TeamPhilosophy } from "@/components/about/TeamPhilosophy";
import { AdlerMethod } from "@/components/method/AdlerMethod";
import { WhySeizAdlers } from "@/components/home/WhySeizAdlers";
import { CreativeEngineering } from "@/components/home/CreativeEngineering";
import { Manifesto } from "@/components/home/Manifesto";
import { FinalCTA } from "@/components/contact/FinalCTA";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: "The people, philosophy and process behind Seiz Adlers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-hair pb-10 pt-28 md:pb-14 md:pt-36">
        <div className="container-fluid">
          <Reveal>
            <SectionLabel index="01" label="About" />
            <h1 className="mt-6 max-w-3xl text-balance font-display text-[clamp(2.5rem,6.5vw,5rem)] font-semibold uppercase leading-[0.98] tracking-tight text-ink">
              Build something worth remembering.
            </h1>
          </Reveal>
        </div>
      </section>

      <OurStory />
      <TeamSection />
      <TeamPhilosophy />
      <AdlerMethod />
      <CreativeEngineering />
      <WhySeizAdlers />
      <Manifesto />
      <FinalCTA />
    </>
  );
}
