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
    <div className="pb-16">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="documentary-card p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{content.brand.promise}</p>
          <h1 className="headline-font mt-4 text-5xl text-deepearth">{content.about.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{content.about.intro}</p>
        </div>
      </section>

      {/* Mission + Story */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-10">
        <div className="documentary-card flex flex-col gap-4 p-8">
          <h2 className="headline-font text-3xl text-deepearth">{content.about.missionHeading}</h2>
          <p className="text-base leading-8 text-stonegray">{content.about.missionBody}</p>
        </div>
        <div className="documentary-card flex flex-col gap-4 p-8">
          <h2 className="headline-font text-3xl text-deepearth">{content.about.storyHeading}</h2>
          <p className="text-base leading-8 text-stonegray">{content.about.storyBody}</p>
        </div>
      </section>

      {/* Mallku Aribalo attribution */}
      <section className="mx-auto mt-6 max-w-7xl px-6 lg:px-10">
        <article
          className="photo-overlay parallax-band rounded-[2rem]"
          style={{
            backgroundImage:
              "url(/images/andes/andes-mountains-1.jpg)",
          }}
        >
          <div className="relative z-10 p-8 sm:p-10 lg:p-14">
            <p className="text-xs uppercase tracking-[0.3em] text-goldmoun">
              {content.brand.traditionHolderLabel}
            </p>
            <h2 className="headline-font mt-4 text-4xl text-cloudwhite sm:text-5xl">
              {content.about.traditionHolderHeading}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-cloudwhite/90">
              {content.about.traditionHolderBody}
            </p>
          </div>
        </article>
      </section>

      {/* Values + Disclaimer */}
      <section className="mx-auto mt-6 grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <article
          className="photo-overlay parallax-band rounded-[2rem]"
          style={{
            backgroundImage:
              "url(/images/andes/textiles-ychsma.jpg)",
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
