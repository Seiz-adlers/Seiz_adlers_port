"use client";

import { useEffect } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics/track";

/** Fires a single view event (service_view, project_view, …) when a page mounts. */
export function ViewTracker({ event, slug }: { event: AnalyticsEvent; slug: string }) {
  useEffect(() => {
    track(event, { slug });
  }, [event, slug]);

  return null;
}
