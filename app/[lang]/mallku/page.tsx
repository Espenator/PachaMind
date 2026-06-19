import type { Metadata } from "next";
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
    title: content.pages.mallku.title,
    description: content.pages.mallku.intro,
    alternates: {
      canonical: `${SITE_URL}/${lang}/mallku`,
      languages: {
        en: `${SITE_URL}/en/mallku`,
        es: `${SITE_URL}/es/mallku`,
        "x-default": `${SITE_URL}/en/mallku`,
      },
    },
  };
}

export default async function MallkuPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);
  const page = content.pages.mallku;

  return (
    <div className="pb-16">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="documentary-card p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
            {content.brand.traditionHolderLabel}
          </p>
          <h1 className="headline-font mt-4 text-5xl text-deepearth">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{page.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="flex flex-col gap-6">
          {page.sections.map((section) => (
            <article key={section.heading} className="documentary-card p-8">
              <h2 className="headline-font text-2xl text-deepearth">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-base leading-8 text-stonegray">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
          <p className="text-sm leading-7 text-stonegray/80">{page.attributionNote}</p>
        </div>
      </section>
    </div>
  );
}
