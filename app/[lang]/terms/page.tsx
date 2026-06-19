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
    title: content.pages.terms.title,
    description: content.pages.terms.intro,
    alternates: {
      canonical: `${SITE_URL}/${lang}/terms`,
      languages: {
        en: `${SITE_URL}/en/terms`,
        es: `${SITE_URL}/es/terms`,
        "x-default": `${SITE_URL}/en/terms`,
      },
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);
  const page = content.pages.terms;

  return (
    <div className="pb-16">
      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="documentary-card p-8 lg:p-10">
          <h1 className="headline-font text-5xl text-deepearth">{page.title}</h1>
          <p className="mt-5 text-lg leading-8 text-stonegray">{page.intro}</p>
        </div>

        <div className="mt-6 flex flex-col gap-6">
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
        </div>
      </section>
    </div>
  );
}
