import type { MetadataRoute } from "next";

import { getContent } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import { languages } from "@/lib/types";

const STATIC_PATHS = [
  "",
  "/curriculum",
  "/library",
  "/about",
  "/dashboard",
  "/conservation",
  "/puma-path",
  "/reflections",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  // Build hreflang alternates helper
  function alternatesFor(path: string) {
    return {
      languages: Object.fromEntries(
        languages.map((l) => [l, `${SITE_URL}/${l}${path}`]),
      ),
    };
  }

  const staticEntries: MetadataRoute.Sitemap = languages.flatMap((lang) =>
    STATIC_PATHS.map((path) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1.0 : 0.8,
      alternates: alternatesFor(path),
    })),
  );

  // Use slugs from the English content (slugs are identical across locales)
  const slugs = getContent("en").lessons.map((l) => l.slug);

  const lessonEntries: MetadataRoute.Sitemap = languages.flatMap((lang) =>
    slugs.map((slug) => ({
      url: `${SITE_URL}/${lang}/lesson/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: alternatesFor(`/lesson/${slug}`),
    })),
  );

  return [...staticEntries, ...lessonEntries];
}
