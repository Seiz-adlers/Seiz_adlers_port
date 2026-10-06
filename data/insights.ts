export interface Insight {
  slug: string;
  category: "Branding" | "Web" | "SEO" | "Growth" | "Technology" | "Content";
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image: string | null;
  content: string;
  draft: boolean;
}

/**
 * No articles have been published yet. Entries are clearly labelled drafts
 * rather than fabricated thought-leadership content.
 */
export const insights: Insight[] = [
  {
    slug: "brand-systems-that-scale",
    category: "Branding",
    title: "Coming Soon",
    excerpt: "This article is being written. Check back soon.",
    date: "",
    readingTime: "",
    image: null,
    content: "",
    draft: true,
  },
  {
    slug: "performance-first-web",
    category: "Web",
    title: "Coming Soon",
    excerpt: "This article is being written. Check back soon.",
    date: "",
    readingTime: "",
    image: null,
    content: "",
    draft: true,
  },
  {
    slug: "seo-foundations",
    category: "SEO",
    title: "Coming Soon",
    excerpt: "This article is being written. Check back soon.",
    date: "",
    readingTime: "",
    image: null,
    content: "",
    draft: true,
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((i) => i.slug === slug);
}
