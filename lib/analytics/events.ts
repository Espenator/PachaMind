/**
 * Flow A analytics event placeholders.
 *
 * These are EDUCATIONAL conversion events only. No real analytics provider is
 * wired up in the prototype — `trackEvent` logs to the console in development.
 *
 * Canon boundary: PachaMind.org Flow A tracks educational engagement only. The
 * FORBIDDEN_EVENTS below must never be emitted; they would imply commercial,
 * paid, screening, travel, or Embodier.ai conversion intent that Flow A does
 * not have. The `trackEvent` guard refuses them at runtime.
 */

export const ALLOWED_EVENTS = [
  "free_membership_created",
  "lesson_started",
  "lesson_completed",
  "video_watched",
  "quiz_completed",
  "reflection_submitted",
  "module_completed",
  "badge_earned",
] as const;

export type AnalyticsEvent = (typeof ALLOWED_EVENTS)[number];

/**
 * Events that are explicitly forbidden in Flow A. Documented here so the
 * boundary is auditable and so `trackEvent` can refuse them.
 */
export const FORBIDDEN_EVENTS = [
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

const forbidden = new Set<string>(FORBIDDEN_EVENTS);

/**
 * Records an educational analytics event. In the prototype this only logs in
 * development. Throws if a forbidden (commercial) event name is passed so the
 * boundary cannot be crossed by accident.
 */
export function trackEvent(
  event: AnalyticsEvent,
  payload?: Record<string, unknown>,
) {
  if (forbidden.has(event)) {
    throw new Error(
      `Forbidden analytics event "${event}" — Flow A is educational-only.`,
    );
  }
  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", event, payload ?? {});
  }
}
