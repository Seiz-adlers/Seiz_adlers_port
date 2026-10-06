import Link from "next/link";
import { insights } from "@/data/insights";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { InsightCard } from "@/components/insights/InsightCard";
import { Reveal } from "@/components/motion/Reveal";

export function InsightsPreview() {
  return (
    <section id="insights" className="border-t border-hair bg-bg-secondary py-16 md:py-24">
      <div className="container-fluid">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionLabel index="09" label="Insights" />
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink">
              Insights
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.1em] text-ink transition-colors hover:text-blue-bright"
            >
              View All Insights →
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {insights.slice(0, 3).map((insight, i) => (
            <Reveal key={insight.slug} delay={0.1 * i}>
              <InsightCard insight={insight} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
