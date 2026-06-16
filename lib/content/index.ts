import { en } from "@/lib/content/en";
import { es } from "@/lib/content/es";
import type { Language, Lesson, SiteContent } from "@/lib/types";
import { languages } from "@/lib/types";

const contentByLanguage: Record<Language, SiteContent> = {
  en,
  es,
};

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export function getContent(language: Language): SiteContent {
  return contentByLanguage[language];
}

export function getLesson(language: Language, slug: string): Lesson | undefined {
  return getContent(language).lessons.find((lesson) => lesson.slug === slug);
}
