export type AnalyticsEvent =
  | "page_view"
  | "cta_click"
  | "contact_start"
  | "contact_complete"
  | "project_view"
  | "service_view"
  | "outbound_social_click";

type EventPayload = Record<string, string | number | boolean | undefined>;

/**
 * Provider-agnostic analytics hook. No provider is wired up yet — swap the
 * body of this function for a real provider (GA4, Plausible, PostHog, etc.)
 * without touching any call site. Never pass personal data beyond what's
 * needed to understand the event.
 */
export function track(event: AnalyticsEvent, payload?: EventPayload): void {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, payload ?? {});
    return;
  }

  if (typeof window !== "undefined" && "gtag" in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", event, payload);
  }
}
