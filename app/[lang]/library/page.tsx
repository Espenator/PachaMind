import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import { LibrarySearch } from "@/components/library-search";
import { getContent, isLanguage } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  const content = getContent(lang);
  return {
    title: content.library.title,
    description: content.library.intro,
    openGraph: {
      title: content.library.title,
      description: content.library.intro,
      url: `${SITE_URL}/${lang}/library`,
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}/library`,
      languages: {
        en: `${SITE_URL}/en/library`,
        es: `${SITE_URL}/es/library`,
        "x-default": `${SITE_URL}/en/library`,
      },
    },
  };
}

export default async function LibraryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
      <section className="documentary-card p-8 lg:p-10">
        <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.brand.promise}</p>
        <h1 className="headline-font mt-4 text-5xl text-deepearth">{content.library.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{content.library.intro}</p>
      </section>

      <Suspense>
        <LibrarySearch
          lessons={content.lessons}
          library={content.library}
          videoComingSoonLabel={content.lessonPage.videoComingSoonLabel}
          lang={lang}
        />
      </Suspense>
    </div>
  );
}
