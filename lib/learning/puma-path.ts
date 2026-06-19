/**
 * Canonical Puma Path stage keys for Flow A, in order.
 *
 * These are learning stages only. They must NEVER gate ceremony access, paid
 * priority, discounts, travel, donations, or approval — only educational
 * progress and badges.
 */
export const PUMA_PATH_STAGE_KEYS = [
  "semilla",
  "raiz",
  "tallo",
  "flor",
  "puma",
] as const;

export type PumaPathStageKey = (typeof PUMA_PATH_STAGE_KEYS)[number];

export function isPumaPathStageKey(value: string): value is PumaPathStageKey {
  return (PUMA_PATH_STAGE_KEYS as readonly string[]).includes(value);
}
