import { notFound } from "next/navigation";

import { ScenicBand } from "@/components/scenic-band";
import { getContent, isLanguage } from "@/lib/content";
import { sharedAssets } from "@/lib/media";

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
          <ScenicBand
            key={band.title}
            image={band.image}
            title={band.title}
            body={band.body}
            alt={band.title}
          />
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
        <ScenicBand
          image={sharedAssets.conservationAttribution}
          eyebrow={c.attributionLabel}
          title={content.about.traditionHolderHeading}
          body={content.about.traditionHolderBody}
          alt={content.about.traditionHolderHeading}
        />
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
