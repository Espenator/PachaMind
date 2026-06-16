import { notFound } from "next/navigation";

import { getContent, isLanguage } from "@/lib/content";

export default async function AboutPage({
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
        <h1 className="headline-font mt-4 text-5xl text-deepearth">{content.about.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{content.about.intro}</p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article
          className="photo-overlay parallax-band rounded-[2rem]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1600&q=80)",
          }}
        >
          <div className="relative z-10 p-8 sm:p-10 lg:p-14">
            <h2 className="headline-font text-4xl text-cloudwhite">{content.about.valuesHeading}</h2>
            <ul className="mt-6 space-y-4 text-lg leading-8 text-cloudwhite/92">
              {content.about.values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </article>

        <div className="documentary-card flex flex-col justify-center gap-5 p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-stonegray">{content.footer.credit}</p>
          <p className="headline-font text-3xl text-deepearth">{content.footer.mission}</p>
          <p className="text-base leading-8 text-stonegray">{content.brand.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}
