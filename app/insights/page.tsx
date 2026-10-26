import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { InsightsList } from "@/components/insights/InsightsList";
import { ThreadLines } from "@/components/hero/ThreadLines";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Insights",
  description: "Thinking on branding, web, SEO, growth, technology and content from Seiz Adlers.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* the hero's hairline threads, parting around the cursor */}
      <ThreadLines className="-z-10" color="rgba(20,18,14,0.09)" />
      <section className="border-b border-hair pb-10 pt-28 md:pb-14 md:pt-36">
        <div className="container-fluid">
          <Reveal>
            <SectionLabel index="01" label="Insights" />
            <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold uppercase leading-[0.98] tracking-tight text-ink">
              Insights
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink-secondary">
              No articles are published yet — drafts are labelled clearly below.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-fluid">
          <Reveal>
            <InsightsList />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
