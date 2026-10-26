import Image from "next/image";
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
      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden border-b border-hair pb-14 pt-32 md:pb-20">
        {/* Photo by Sebastian Schuster — https://unsplash.com/photos/pFv5PYlDQBk (Unsplash License). */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src="/about/architecture.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_30%] opacity-70 md:object-[center_35%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#030405_0%,rgba(3,4,5,0.85)_35%,rgba(3,4,5,0.25)_70%,rgba(3,4,5,0.5)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,4,5,0.6)_0%,transparent_30%,transparent_60%,#030405_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_30%,rgba(0,102,255,0.18),transparent_70%)] mix-blend-screen" />
          <div className="noise absolute inset-0 opacity-[0.12] mix-blend-overlay" />
        </div>

        <div className="container-fluid">
          <Reveal>
            <SectionLabel index="01" label="About" />
            <h1 className="mt-6 max-w-3xl text-balance font-display text-[clamp(2.5rem,6.5vw,5rem)] font-semibold uppercase leading-[0.98] tracking-tight text-ink">
              Build something worth remembering.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-secondary">
              Strategy, creative, technology and growth — brought together by one team, held to one standard.
            </p>
          </Reveal>
        </div>
      </section>

      <OurStory index="02" />
      <TeamSection index="03" />
      <TeamPhilosophy index="04" />
      <AdlerMethod index="05" />
      <CreativeEngineering index="06" />
      <WhySeizAdlers index="07" />
      <Manifesto />
      <FinalCTA />
    </>
  );
}
