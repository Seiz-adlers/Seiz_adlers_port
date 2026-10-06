"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { getRouteTheme } from "@/lib/theme/routeTheme";

// useLayoutEffect on the client (runs before paint, so the theme is correct
// even for reduced-motion users who don't get the covering transition),
// useEffect on the server to avoid the SSR warning.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Keeps `<html data-theme>` in sync with the current route on client-side
 * navigations. First paint is handled by the inline script in the root
 * layout; for SPA navigations the route-transition curtain covers the swap,
 * so the theme flip is never seen mid-page.
 */
export function RouteTheme() {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    document.documentElement.dataset.theme = getRouteTheme(pathname);
  }, [pathname]);

  return null;
}
