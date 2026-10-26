import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { insights } from "@/data/insights";
import { publishedProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/work", "/services", "/about", "/insights", "/contact"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const projectRoutes = publishedProjects.map((p) => ({
    url: `${siteConfig.url}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  // Drafts are noindex — keep them out of the sitemap until published.
  const insightRoutes = insights.filter((i) => !i.draft).map((i) => ({
    url: `${siteConfig.url}/insights/${i.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes, ...insightRoutes];
}
