/**
 * Analytics event taxonomy for PachaMind Flow A.
 *
 * Flow A tracks *educational* engagement only. No commercial, payment,
 * upgrade, screening, travel, or Embodier.ai conversion events are permitted.
 * Nothing here wires a real analytics provider — these are name constants and
 * a no-op `track` helper so that instrumentation can be added later behind a
 * counsel-reviewed configuration. See
 * docs/development/flow-a-prototype-build-notes.md.
 */

/** Allowed educational analytics events. */
export const ALLOWED_ANALYTICS_EVENTS = [
  "free_membership_created",
  "lesson_started",
  "lesson_completed",
  "video_watched",
  "quiz_completed",
  "reflection_submitted",
  "module_completed",
  "badge_earned",
] as const;

export type AnalyticsEvent = (typeof ALLOWED_ANALYTICS_EVENTS)[number];

/**
 * Explicitly forbidden conversion events. Listed here so the prohibition is
 * discoverable in code and any accidental use is easy to grep for and reject.
 * These must never be emitted by Flow A.
 */
export const FORBIDDEN_ANALYTICS_EVENTS = [
  "embodier_opt_in",
  "paid_membership_interest",
  "upgrade_interest",
  "screening_interest",
  "travel_interest",
  "peru_pathway_interest",
  "commercial_contact",
  "payment_interest",
  "contribution_interest",
] as const;

/**
 * No-op analytics tracker. Accepts only the allowed educational events at the
 * type level. Wire a real provider here only behind counsel-reviewed config.
 */
export function track(
  event: AnalyticsEvent,
  _payload?: Record<string, string | number | boolean>,
): void {
  // Intentionally a no-op in the prototype. No real analytics are configured.
  // Kept type-safe so future instrumentation can only emit allowed events.
  void event;
  void _payload;
}
