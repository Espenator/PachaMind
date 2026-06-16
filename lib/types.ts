// ─── Core Domain Types for PachaMind ───────────────────────────────────────

export type PathStageSlug = "semilla" | "raiz" | "tallo" | "flor" | "puma";

export interface PathStage {
  slug: PathStageSlug;
  /** Display name in English */
  name: string;
  /** Display name in Spanish */
  nameEs: string;
  /** Short description of this stage */
  description: string;
  /** Hex or Tailwind class hint for the stage accent colour */
  color: string;
  /** Ordinal position (1–5) */
  order: number;
}

// ─── Video ──────────────────────────────────────────────────────────────────

export interface Video {
  id: string;
  title: string;
  /** Duration in seconds */
  durationSeconds: number;
  /** Publicly accessible URL (Vimeo, YouTube-embed, or self-hosted) */
  url: string;
  /** URL for poster / thumbnail image */
  thumbnailUrl: string;
  /** WebVTT captions URL */
  captionsUrl?: string;
  /** Full transcript text (plain or Markdown) */
  transcript?: string;
  /** Language code, default "en" */
  language?: "en" | "es";
  isVertical?: boolean;
}

// ─── Lesson ─────────────────────────────────────────────────────────────────

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  /** One-sentence summary shown in cards */
  summary: string;
  /** Full educational body (Markdown) */
  body?: string;
  pathStage: PathStageSlug;
  /** Topic cluster */
  category:
    | "andean-cosmovision"
    | "three-pachas"
    | "five-values"
    | "archaeo-astronomy"
    | "conservation"
    | "cultural-calendar"
    | "field-note"
    | "general";
  video: Video;
  reflectionPrompts: ReflectionPrompt[];
  /** IDs of related lessons */
  relatedLessonIds?: string[];
  /** IDs of glossary terms used in this lesson */
  glossaryTermIds?: string[];
  /** Approximate watch + reflection time in minutes */
  estimatedMinutes: number;
  isPublished: boolean;
  /** ISO date string */
  publishedAt?: string;
  thumbnailUrl: string;
  /** Attribution: always Mallku Aribalo */
  author: string;
}

// ─── Reflection Prompt ──────────────────────────────────────────────────────

export interface ReflectionPrompt {
  id: string;
  lessonId: string;
  prompt: string;
  /** Optional follow-up / deepening cue */
  guidance?: string;
}

// ─── Badge ───────────────────────────────────────────────────────────────────

export type BadgeCategory =
  | "exploration"
  | "reflection"
  | "conservation"
  | "cultural"
  | "astronomy"
  | "milestone"
  | "streak";

export interface Badge {
  id: string;
  slug: string;
  name: string;
  /** Short description of how it is earned */
  description: string;
  /** SVG path or image URL for the badge icon */
  iconUrl: string;
  category: BadgeCategory;
  /** The Puma Path stage this badge belongs to */
  pathStage: PathStageSlug;
  /** Criteria description (human-readable) */
  criteria: string;
}

// ─── Glossary Term ───────────────────────────────────────────────────────────

export interface GlossaryTerm {
  id: string;
  slug: string;
  term: string;
  /** Quechua / Aymara original if applicable */
  termOriginal?: string;
  language?: string;
  definition: string;
  /** Extended cultural context (Markdown) */
  context?: string;
  /** Related lesson IDs */
  relatedLessonIds?: string[];
  /** Related term IDs */
  relatedTermIds?: string[];
}

// ─── Field Note ──────────────────────────────────────────────────────────────

export interface FieldNote {
  id: string;
  slug: string;
  title: string;
  /** ISO date string of when the note was captured */
  date: string;
  /** Location in the Andes / Sacred Valley */
  location?: string;
  /** Plain-text or Markdown body */
  body: string;
  /** Featured image URL */
  imageUrl?: string;
  /** Short teaser shown in cards */
  excerpt: string;
  /** Tags for filtering */
  tags?: string[];
  author: string;
}

// ─── User Progress ────────────────────────────────────────────────────────────

export interface LessonProgress {
  lessonId: string;
  /** Seconds of video watched */
  watchedSeconds: number;
  isCompleted: boolean;
  reflectionCompleted: boolean;
  /** ISO timestamp */
  lastAccessedAt: string;
}

export interface UserProgress {
  userId: string;
  pathStage: PathStageSlug;
  completedLessonIds: string[];
  savedLessonIds: string[];
  earnedBadgeIds: string[];
  lessonProgress: Record<string, LessonProgress>;
  /** Current consecutive-day streak */
  streakDays: number;
  /** ISO date of last activity */
  lastActiveAt: string;
  /** Total minutes of video watched */
  totalWatchMinutes: number;
}

// ─── CMS-ready content schemas (for future headless CMS integration) ─────────

/** Mirrors the Lesson shape but with CMS field metadata */
export type LessonSchema = Omit<Lesson, "video"> & {
  videoId: string;
};

/** Mirrors the FieldNote shape */
export type FieldNoteSchema = FieldNote;

/** Mirrors the GlossaryTerm shape */
export type GlossarySchema = GlossaryTerm;
