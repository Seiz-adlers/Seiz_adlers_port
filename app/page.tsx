import { Hero } from "@/components/hero/Hero";
import { HomeChapters } from "@/components/home/HomeChapters";
import { NotAnotherAgency } from "@/components/home/NotAnotherAgency";
import { SelectedWork } from "@/components/work/SelectedWork";
import { ProofBand } from "@/components/work/ProofBand";
import { Industries } from "@/components/work/Industries";
import { WhatWeBuild } from "@/components/services/WhatWeBuild";
import { AdlerMethod } from "@/components/method/AdlerMethod";
import { CreativeEngineering } from "@/components/home/CreativeEngineering";
import { TeamSection } from "@/components/team/TeamSection";
import { WhySeizAdlers } from "@/components/home/WhySeizAdlers";
import { Manifesto } from "@/components/home/Manifesto";
import { InsightsPreview } from "@/components/insights/InsightsPreview";
import { FinalCTA } from "@/components/contact/FinalCTA";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: siteConfig.tagline,
  description: siteConfig.description,
  path: "/",
});

/**
 * The homepage narrative: brand → work → capability → process → people →
 * belief → action. Chapter themes are set in HomeChapters, in this order.
 */
export default function HomePage() {
  return (
    <HomeChapters>
      <Hero />
      <NotAnotherAgency />
      <ProofBand />
      <SelectedWork index="02" />
      <WhatWeBuild index="03" />
      <Industries index="04" />
      <AdlerMethod index="05" />
      <CreativeEngineering index="06" />
      <TeamSection index="07" />
      <WhySeizAdlers index="08" />
      <Manifesto />
      <InsightsPreview index="09" />
      <FinalCTA />
    </HomeChapters>
  );
}
