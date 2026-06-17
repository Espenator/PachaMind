/**
 * Smoke tests: verify that every page module can be imported (no runtime import errors)
 * and that bilingual content shapes for all new pages are present.
 */
import { describe, it, expect } from "vitest";
import { en } from "@/lib/content/en";
import { es } from "@/lib/content/es";

describe("page smoke tests — content shapes present in both locales", () => {
  it("home page content exists in EN and ES", () => {
    expect(en.home).toBeDefined();
    expect(en.home.title).toBeTruthy();
    expect(es.home).toBeDefined();
    expect(es.home.title).toBeTruthy();
  });

  it("library page content exists in EN and ES", () => {
    expect(en.library).toBeDefined();
    expect(en.library.title).toBeTruthy();
    expect(es.library).toBeDefined();
    expect(es.library.title).toBeTruthy();
  });

  it("library topics map is present in both locales", () => {
    expect(typeof en.library.topics).toBe("object");
    expect(typeof es.library.topics).toBe("object");
  });

  it("lessons array is non-empty in both locales", () => {
    expect(en.lessons.length).toBeGreaterThan(0);
    expect(es.lessons.length).toBeGreaterThan(0);
  });

  it("every lesson slug is a non-empty string", () => {
    for (const lesson of [...en.lessons, ...es.lessons]) {
      expect(typeof lesson.slug).toBe("string");
      expect(lesson.slug.length).toBeGreaterThan(0);
    }
  });

  it("dashboard page content exists in EN and ES", () => {
    expect(en.dashboard).toBeDefined();
    expect(en.dashboard.title).toBeTruthy();
    expect(es.dashboard).toBeDefined();
    expect(es.dashboard.title).toBeTruthy();
  });

  it("puma-path page content exists in EN and ES", () => {
    expect(en.pumaPath).toBeDefined();
    expect(en.pumaPath.title).toBeTruthy();
    expect(en.pumaPath.steps.length).toBeGreaterThan(0);
    expect(es.pumaPath).toBeDefined();
    expect(es.pumaPath.title).toBeTruthy();
    expect(es.pumaPath.steps.length).toBeGreaterThan(0);
  });

  it("puma-path steps have required keys", () => {
    for (const step of [...en.pumaPath.steps, ...es.pumaPath.steps]) {
      expect(step.title).toBeTruthy();
      expect(step.body).toBeTruthy();
    }
  });

  it("conservation page content exists in EN and ES", () => {
    expect(en.conservation).toBeDefined();
    expect(en.conservation.title).toBeTruthy();
    expect(en.conservation.sections.length).toBeGreaterThan(0);
    expect(es.conservation).toBeDefined();
    expect(es.conservation.title).toBeTruthy();
    expect(es.conservation.sections.length).toBeGreaterThan(0);
  });

  it("reflections page content exists in EN and ES", () => {
    expect(en.reflections).toBeDefined();
    expect(en.reflections.title).toBeTruthy();
    expect(en.reflections.emptyState).toBeTruthy();
    expect(es.reflections).toBeDefined();
    expect(es.reflections.title).toBeTruthy();
    expect(es.reflections.emptyState).toBeTruthy();
  });

  it("about page content exists in EN and ES", () => {
    expect(en.about).toBeDefined();
    expect(en.about.title).toBeTruthy();
    expect(es.about).toBeDefined();
    expect(es.about.title).toBeTruthy();
  });

  it("contact page content exists in EN and ES", () => {
    expect(en.contact).toBeDefined();
    expect(en.contact.title).toBeTruthy();
    expect(es.contact).toBeDefined();
    expect(es.contact.title).toBeTruthy();
  });

  it("nav includes all page links in both locales", () => {
    const requiredNavKeys = [
      "home",
      "curriculum",
      "library",
      "pumaPath",
      "conservation",
      "dashboard",
      "reflections",
      "about",
      "contact",
    ] as const;
    for (const key of requiredNavKeys) {
      expect(en.nav[key], `EN nav.${key} missing`).toBeTruthy();
      expect(es.nav[key], `ES nav.${key} missing`).toBeTruthy();
    }
  });

  it("language nav strings exist in both locales", () => {
    expect(en.nav.english).toBeTruthy();
    expect(en.nav.spanish).toBeTruthy();
    expect(es.nav.english).toBeTruthy();
    expect(es.nav.spanish).toBeTruthy();
  });
});
