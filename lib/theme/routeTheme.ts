export type Theme = "light" | "dark";

/**
 * Whole-page theme per route family. The homepage and the "dark" inner
 * routes keep the original near-black system; Services and Insights run on
 * the warm-paper light system, so moving through the nav alternates:
 *
 *   Work (dark) → Services (light) → About (dark) → Insights (light) → Contact (dark)
 *
 * Keep this in sync with the inline script in app/layout.tsx (which sets the
 * theme before first paint to avoid a flash).
 */
const LIGHT_PREFIXES = ["/services", "/insights"];

export function getRouteTheme(pathname: string): Theme {
  return LIGHT_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
    ? "light"
    : "dark";
}
