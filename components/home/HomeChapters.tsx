"use client";

import { Children, useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { getRouteTheme } from "@/lib/theme/routeTheme";
import { Chapter } from "@/components/home/Chapter";

/**
 * Homepage chapter order + theme. The homepage is deliberately short —
 * hero, a single introduction, and the closing call to action. Everything
 * else lives on Services / About / Insights, reached from the nav.
 * Keep in step with app/page.tsx.
 */
const THEMES: Array<"dark" | "light"> = [
  "dark", // Hero
  "light", // Introduction (Not Another Agency)
  "dark", // Let's Build Something Great
];

export function HomeChapters({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Keep <html data-theme> in step with the chapter under the navbar, so the
  // fixed navbar recolours as you move between dark and light chapters.
  useEffect(() => {
    const nodes = rootRef.current?.querySelectorAll<HTMLElement>("[data-chapter-theme]");
    if (!nodes || nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            document.documentElement.dataset.theme =
              entry.target.getAttribute("data-chapter-theme") ?? "dark";
          }
        }
      },
      // a thin band just below the navbar
      { rootMargin: "-14% 0px -84% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      document.documentElement.dataset.theme = getRouteTheme(pathname);
    };
  }, [pathname]);

  return (
    <div ref={rootRef}>
      {items.map((child, i) => (
        <Chapter key={i} theme={THEMES[i] ?? "dark"} plain={i === 0}>
          {child}
        </Chapter>
      ))}
    </div>
  );
}
