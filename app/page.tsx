import { Hero } from "@/components/hero/Hero";
import { HomeChapters } from "@/components/home/HomeChapters";
import { NotAnotherAgency } from "@/components/home/NotAnotherAgency";
import { FinalCTA } from "@/components/contact/FinalCTA";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: siteConfig.tagline,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <HomeChapters>
      <Hero />
      <NotAnotherAgency />
      <FinalCTA />
    </HomeChapters>
  );
}
