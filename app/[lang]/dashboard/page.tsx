import { notFound } from "next/navigation";

import { DashboardProgress } from "@/components/dashboard-progress";
import { getContent, isLanguage } from "@/lib/content";

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
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
      <section className="documentary-card grain p-8 lg:p-12">
        <p className="text-xs uppercase tracking-[0.38em] text-terracotta font-medium">
          {content.brand.promise}
        </p>
        <h1 className="headline-font mt-5 text-fluid-4xl text-deepearth">
          {content.dashboard.title}
        </h1>
        <p className="mt-5 max-w-[62ch] text-fluid-lg leading-[1.72] text-stonegray">
          {content.dashboard.intro}
        </p>
      </section>

      <section className="mt-8">
        <DashboardProgress
          language={lang}
          lessons={content.lessons}
          labels={content.dashboard}
        />
      </section>
    </div>
  );
}
