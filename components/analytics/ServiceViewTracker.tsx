"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics/track";

export function ServiceViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    track("service_view", { slug });
  }, [slug]);

  return null;
}
