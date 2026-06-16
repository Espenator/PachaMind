import { notFound } from "next/navigation";

import { PumaPathJourney } from "@/components/puma-path-journey";
import { getContent, isLanguage } from "@/lib/content";

export default async function PumaPathPage({
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
      {/* Hero */}
      <section className="documentary-card p-8 lg:p-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{content.brand.promise}</p>
        <h1 className="headline-font mt-4 text-5xl text-deepearth lg:text-6xl">
          {content.pumaPath.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{content.pumaPath.intro}</p>
      </section>

      {/* Client journey (progress tracked via localStorage) */}
      <div className="mt-8">
        <PumaPathJourney
          language={lang}
          lessons={content.lessons}
          pumaPath={content.pumaPath}
          brand={content.brand}
        />
      </div>
    </div>
  );
}
