import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DashboardProgress } from "@/components/dashboard-progress";
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
    title: content.dashboard.title,
    description: content.dashboard.intro,
    openGraph: {
      title: content.dashboard.title,
      description: content.dashboard.intro,
      url: `${SITE_URL}/${lang}/dashboard`,
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}/dashboard`,
      languages: {
        en: `${SITE_URL}/en/dashboard`,
        es: `${SITE_URL}/es/dashboard`,
        "x-default": `${SITE_URL}/en/dashboard`,
      },
    },
  };
}

export default async function DashboardPage({
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
        <h1 className="headline-font mt-4 text-5xl text-deepearth">{content.dashboard.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{content.dashboard.intro}</p>
      </section>

      <section className="mt-8">
        <DashboardProgress
          language={lang}
          lessons={content.lessons}
          labels={content.dashboard}
          badges={content.badges}
        />
      </section>
    </div>
  );
}
