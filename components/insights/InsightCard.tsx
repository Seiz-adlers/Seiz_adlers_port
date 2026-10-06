import Link from "next/link";
import type { Insight } from "@/data/insights";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="card group block rounded-sm p-7 transition-colors duration-500 hover:border-blueline md:p-8"
    >
      <div className="flex items-center justify-between text-[12px] font-medium uppercase tracking-[0.15em] text-accent">
        <span>{insight.category}</span>
        {insight.draft && <span className="text-ink-muted">Draft</span>}
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold uppercase leading-tight tracking-tight text-ink md:text-2xl">
        {insight.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{insight.excerpt}</p>

      <div className="mt-6 flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.1em] text-ink-secondary transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink">
        Read Article →
      </div>
    </Link>
  );
}
