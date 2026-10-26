import Link from "next/link";
import { notFound } from "next/navigation";
import { insights, getInsightBySlug } from "@/data/insights";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { buildMetadata, articleSchema } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const insight = getInsightBySlug(params.slug);
  if (!insight) return buildMetadata({ title: "Insight", description: "", path: `/insights/${params.slug}` });
  return buildMetadata({
    title: insight.title,
    description: insight.excerpt,
    path: `/insights/${insight.slug}`,
    // Unpublished drafts are thin placeholder pages — keep them out of search.
    noIndex: insight.draft,
  });
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = getInsightBySlug(params.slug);
  if (!insight) notFound();

  return (
    <>
      {!insight.draft && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              articleSchema({ title: insight.title, excerpt: insight.excerpt, date: insight.date, slug: insight.slug }),
            ),
          }}
        />
      )}

      <section className="flex min-h-[70vh] items-center border-b border-hair pt-32">
        <div className="container-fluid max-w-2xl text-center">
          <Reveal>
            <Link href="/insights" className="text-[13px] font-medium uppercase tracking-[0.1em] text-ink-secondary hover:text-ink">
              ← All Insights
            </Link>
            <p className="mt-8 text-[12px] font-medium uppercase tracking-[0.2em] text-accent">
              {insight.category}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold uppercase leading-tight tracking-tight text-ink">
              {insight.title}
            </h1>
            {insight.draft && (
              <p className="mt-6 text-ink-secondary">
                This article hasn&rsquo;t been published yet — check back soon, or start a
                conversation with us in the meantime.
              </p>
            )}
          </Reveal>
          <Reveal delay={0.15} className="mt-10 flex justify-center">
            <Button href="/contact">Start a Project →</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
