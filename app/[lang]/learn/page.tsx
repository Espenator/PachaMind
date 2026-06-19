import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    title: content.pages.learn.title,
    description: content.pages.learn.intro,
    alternates: {
      canonical: `${SITE_URL}/${lang}/learn`,
      languages: {
        en: `${SITE_URL}/en/learn`,
        es: `${SITE_URL}/es/learn`,
        "x-default": `${SITE_URL}/en/learn`,
      },
    },
  };
}

export default async function LearnPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);
  const page = content.pages.learn;

  return (
    <div className="pb-16">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="documentary-card p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{content.brand.promise}</p>
          <h1 className="headline-font mt-4 text-5xl text-deepearth">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{page.intro}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-10">
        <Link
          href={`/${lang}/library`}
          className="documentary-card flex flex-col justify-between gap-6 p-8 transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          <div>
            <h2 className="headline-font text-3xl text-deepearth">{content.library.title}</h2>
            <p className="mt-3 text-base leading-8 text-stonegray">{content.library.intro}</p>
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            {page.startLabel}
          </span>
        </Link>

        <Link
          href={`/${lang}/puma-path`}
          className="documentary-card flex flex-col justify-between gap-6 p-8 transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          <div>
            <h2 className="headline-font text-3xl text-deepearth">{content.pumaPath.title}</h2>
            <p className="mt-3 text-base leading-8 text-stonegray">{content.pumaPath.intro}</p>
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            {page.pathLabel}
          </span>
        </Link>
      </section>
    </div>
  );
}
