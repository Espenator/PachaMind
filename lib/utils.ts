import type { Lesson } from "./types";

/** Format seconds as m:ss */
export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** Format seconds as "X min" label */
export function formatMinutes(seconds: number): string {
  const m = Math.ceil(seconds / 60);
  return `${m} min`;
}

/** Derive a watch-time bucket label */
export function watchTimeBucket(
  seconds: number
): "3 min" | "7 min" | "15 min" | "15+ min" {
  const m = Math.ceil(seconds / 60);
  if (m <= 3) return "3 min";
  if (m <= 7) return "7 min";
  if (m <= 15) return "15 min";
  return "15+ min";
}

/** Truncate a string to maxLen chars, appending ellipsis */
export function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 1) + "…";
}

/** Convert a slug string to a readable title */
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/** Group lessons by category */
export function groupByCategory(lessons: Lesson[]) {
  return lessons.reduce<Record<string, Lesson[]>>((acc, lesson) => {
    const cat = lesson.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(lesson);
    return acc;
  }, {});
}

/** Return a percentage (0–100) for progress ring */
export function progressPercent(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

/** Build the SVG arc path for a progress ring */
export function buildRingArc(percent: number, radius = 40): string {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  return `stroke-dasharray: ${circumference}; stroke-dashoffset: ${offset};`;
}
