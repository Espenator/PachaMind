import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  readProgressState,
  writeProgressState,
  setLessonCompletion,
  setLastOpenedLessonSlug,
  PROGRESS_STORAGE_KEY,
} from "@/lib/progress";

describe("progress utilities", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe("readProgressState", () => {
    it("returns default state when localStorage is empty", () => {
      const state = readProgressState();
      expect(state.completedLessonSlugs).toEqual([]);
      expect(state.lastOpenedLessonSlug).toBeUndefined();
    });

    it("returns default state when localStorage value is invalid JSON", () => {
      localStorage.setItem(PROGRESS_STORAGE_KEY, "not-valid-json{{");
      const state = readProgressState();
      expect(state.completedLessonSlugs).toEqual([]);
      expect(state.lastOpenedLessonSlug).toBeUndefined();
    });

    it("returns stored completedLessonSlugs when valid", () => {
      localStorage.setItem(
        PROGRESS_STORAGE_KEY,
        JSON.stringify({ completedLessonSlugs: ["lesson-a", "lesson-b"] }),
      );
      const state = readProgressState();
      expect(state.completedLessonSlugs).toEqual(["lesson-a", "lesson-b"]);
    });

    it("returns stored lastOpenedLessonSlug when valid", () => {
      localStorage.setItem(
        PROGRESS_STORAGE_KEY,
        JSON.stringify({ completedLessonSlugs: [], lastOpenedLessonSlug: "lesson-c" }),
      );
      const state = readProgressState();
      expect(state.lastOpenedLessonSlug).toBe("lesson-c");
    });

    it("filters non-string values from completedLessonSlugs", () => {
      localStorage.setItem(
        PROGRESS_STORAGE_KEY,
        JSON.stringify({ completedLessonSlugs: ["ok", 42, null, "also-ok"] }),
      );
      const state = readProgressState();
      expect(state.completedLessonSlugs).toEqual(["ok", "also-ok"]);
    });

    it("returns default state (SSR-safe) when window is undefined", () => {
      vi.stubGlobal("window", undefined);
      const state = readProgressState();
      expect(state.completedLessonSlugs).toEqual([]);
      expect(state.lastOpenedLessonSlug).toBeUndefined();
    });
  });

  describe("writeProgressState", () => {
    it("persists state to localStorage", () => {
      writeProgressState({ completedLessonSlugs: ["lesson-1"], earnedBadgeKeys: [] });
      const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
      expect(raw).not.toBeNull();
      const parsed = JSON.parse(raw!);
      expect(parsed.completedLessonSlugs).toEqual(["lesson-1"]);
    });

    it("is a no-op (SSR-safe) when window is undefined", () => {
      vi.stubGlobal("window", undefined);
      expect(() =>
        writeProgressState({ completedLessonSlugs: ["slug"], earnedBadgeKeys: [] }),
      ).not.toThrow();
    });
  });

  describe("setLessonCompletion", () => {
    it("marks a lesson as complete", () => {
      setLessonCompletion("lesson-1", true);
      const state = readProgressState();
      expect(state.completedLessonSlugs).toContain("lesson-1");
    });

    it("marks a lesson as incomplete", () => {
      setLessonCompletion("lesson-1", true);
      setLessonCompletion("lesson-1", false);
      const state = readProgressState();
      expect(state.completedLessonSlugs).not.toContain("lesson-1");
    });

    it("does not duplicate a completed lesson slug", () => {
      setLessonCompletion("lesson-1", true);
      setLessonCompletion("lesson-1", true);
      const state = readProgressState();
      const count = state.completedLessonSlugs.filter((s) => s === "lesson-1").length;
      expect(count).toBe(1);
    });

    it("sets lastOpenedLessonSlug on first completion when none is set", () => {
      setLessonCompletion("lesson-1", true);
      const state = readProgressState();
      expect(state.lastOpenedLessonSlug).toBe("lesson-1");
    });

    it("preserves existing lastOpenedLessonSlug when already set", () => {
      setLastOpenedLessonSlug("lesson-0");
      setLessonCompletion("lesson-1", true);
      const state = readProgressState();
      expect(state.lastOpenedLessonSlug).toBe("lesson-0");
    });

    it("calculates percent complete correctly from state", () => {
      const total = 4;
      setLessonCompletion("a", true);
      setLessonCompletion("b", true);
      const state = readProgressState();
      const percent = Math.round((state.completedLessonSlugs.length / total) * 100);
      expect(percent).toBe(50);
    });
  });

  describe("setLastOpenedLessonSlug", () => {
    it("updates lastOpenedLessonSlug", () => {
      setLastOpenedLessonSlug("lesson-2");
      const state = readProgressState();
      expect(state.lastOpenedLessonSlug).toBe("lesson-2");
    });

    it("preserves existing completedLessonSlugs", () => {
      setLessonCompletion("lesson-x", true);
      setLastOpenedLessonSlug("lesson-y");
      const state = readProgressState();
      expect(state.completedLessonSlugs).toContain("lesson-x");
      expect(state.lastOpenedLessonSlug).toBe("lesson-y");
    });
  });
});
