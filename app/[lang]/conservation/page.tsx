import { notFound } from "next/navigation";

import { getContent, isLanguage } from "@/lib/content";

export default async function ConservationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);
  const c = content.conservation;

  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="documentary-card p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{content.brand.promise}</p>
          <h1 className="headline-font mt-4 text-5xl text-deepearth">{c.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{c.intro}</p>
        </div>
      </section>

      {/* Parallax thematic bands */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 lg:px-10">
        {c.bands.map((band) => (
          <article
            key={band.title}
            className="photo-overlay parallax-band rounded-[2rem]"
            style={{ backgroundImage: `url(${band.image})` }}
          >
            <div className="relative z-10 max-w-3xl p-8 sm:p-10 lg:p-14">
              <h2 className="headline-font text-3xl text-cloudwhite sm:text-4xl">{band.title}</h2>
              <p className="mt-4 text-lg leading-8 text-cloudwhite/90">{band.body}</p>
            </div>
          </article>
        ))}
      </section>

      {/* Principles + Reflection */}
      <section className="mx-auto mt-6 grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="documentary-card flex flex-col gap-5 p-8 lg:p-10">
          <h2 className="headline-font text-3xl text-deepearth">{c.principlesHeading}</h2>
          <ul className="space-y-4 text-base leading-8 text-stonegray">
            {c.principles.map((principle) => (
              <li key={principle} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                {principle}
              </li>
            ))}
          </ul>
        </div>

        <div className="documentary-card flex flex-col justify-center gap-5 p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{c.reflectionHeading}</p>
          <blockquote className="headline-font text-2xl leading-snug text-deepearth">
            {c.reflectionPrompt}
          </blockquote>
        </div>
      </section>

      {/* Mallku Aribalo attribution */}
      <section className="mx-auto mt-6 max-w-7xl px-6 lg:px-10">
        <article
          className="photo-overlay parallax-band rounded-[2rem]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80)",
          }}
        >
          <div className="relative z-10 p-8 sm:p-10 lg:p-14">
            <p className="text-xs uppercase tracking-[0.3em] text-goldmoun">
              {c.attributionLabel}
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

      {/* Brand promise */}
      <section className="mx-auto mt-6 max-w-7xl px-6 lg:px-10">
        <div className="documentary-card flex flex-col gap-4 p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-stonegray">{content.footer.credit}</p>
          <p className="headline-font text-3xl text-deepearth">{content.footer.mission}</p>
          <p className="text-base leading-8 text-stonegray">{content.brand.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}
