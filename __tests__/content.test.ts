import { describe, it, expect } from "vitest";
import { en } from "@/lib/content/en";
import { es } from "@/lib/content/es";

describe("bilingual content integrity", () => {
  it("both languages have the same number of lessons", () => {
    expect(en.lessons.length).toBe(es.lessons.length);
  });

  it("lesson slug order matches across languages", () => {
    const enSlugs = en.lessons.map((l) => l.slug);
    const esSlugs = es.lessons.map((l) => l.slug);
    expect(esSlugs).toEqual(enSlugs);
  });

  it("every EN lesson slug exists in ES", () => {
    const esSlugs = new Set(es.lessons.map((l) => l.slug));
    for (const lesson of en.lessons) {
      expect(esSlugs.has(lesson.slug), `slug "${lesson.slug}" missing from ES`).toBe(true);
    }
  });

  it("every ES lesson slug exists in EN", () => {
    const enSlugs = new Set(en.lessons.map((l) => l.slug));
    for (const lesson of es.lessons) {
      expect(enSlugs.has(lesson.slug), `slug "${lesson.slug}" missing from EN`).toBe(true);
    }
  });

  it("every EN lesson has either a youtubeId or explicit missing-media metadata", () => {
    for (const lesson of en.lessons) {
      expect(
        (typeof lesson.youtubeId === "string" && lesson.youtubeId.length > 0) ||
          (lesson.mediaStatus === "NEEDS_REAL_VIDEO" &&
            typeof lesson.mediaNote === "string" &&
            lesson.mediaNote.length > 0),
        `EN lesson "${lesson.slug}" missing youtubeId or mediaStatus/mediaNote`,
      ).toBe(true);
    }
  });

  it("every ES lesson has either a youtubeId or explicit missing-media metadata", () => {
    for (const lesson of es.lessons) {
      expect(
        (typeof lesson.youtubeId === "string" && lesson.youtubeId.length > 0) ||
          (lesson.mediaStatus === "NEEDS_REAL_VIDEO" &&
            typeof lesson.mediaNote === "string" &&
            lesson.mediaNote.length > 0),
        `ES lesson "${lesson.slug}" missing youtubeId or mediaStatus/mediaNote`,
      ).toBe(true);
    }
  });

  it("youtubeIds match across languages for each slug", () => {
    for (const enLesson of en.lessons) {
      const esLesson = es.lessons.find((l) => l.slug === enLesson.slug);
      expect(esLesson, `No ES lesson found for slug "${enLesson.slug}"`).toBeDefined();
      expect(esLesson!.youtubeId).toBe(enLesson.youtubeId);
    }
  });

  it("locale fields are set correctly", () => {
    expect(en.locale).toBe("en");
    expect(es.locale).toBe("es");
  });
});
