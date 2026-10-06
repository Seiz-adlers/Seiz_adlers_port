"use client";

import { useState } from "react";
import { insights, type Insight } from "@/data/insights";
import { InsightCard } from "@/components/insights/InsightCard";

const categories: Array<Insight["category"] | "All"> = [
  "All",
  "Branding",
  "Web",
  "SEO",
  "Growth",
  "Technology",
  "Content",
];

export function InsightsList() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? insights : insights.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`min-h-[44px] border px-5 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-300 ${
              active === cat
                ? "border-blueline bg-accent/10 text-accent"
                : "border-hair text-ink-secondary hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {filtered.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-ink-muted">No articles in this category yet.</p>
      )}
    </div>
  );
}
