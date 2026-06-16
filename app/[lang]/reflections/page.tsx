import { notFound } from "next/navigation";

import { ReflectionsNotes } from "@/components/reflections-notes";
import { getContent, isLanguage } from "@/lib/content";

export default async function ReflectionsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);
  const r = content.reflections;

  return (
    <div className="pb-16">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="documentary-card p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.34em] text-terracotta">
            {content.brand.promise}
          </p>
          <h1 className="headline-font mt-4 text-5xl leading-tight text-deepearth lg:text-6xl">
            {r.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stonegray">{r.intro}</p>
          <p className="mt-5 text-sm font-medium text-terracotta">{r.attributionLabel}</p>
        </div>
      </section>

      {r.parallaxSections[0] && (
        <section
          className="photo-overlay parallax-band mx-6 rounded-[2rem] lg:mx-10"
          style={{ backgroundImage: `url(${r.parallaxSections[0].image})` }}
          aria-hidden="true"
        >
          <div className="relative z-10 max-w-3xl p-8 sm:p-10 lg:p-14">
            <h2 className="headline-font text-3xl text-cloudwhite sm:text-4xl">
              {r.parallaxSections[0].title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-cloudwhite/90">
              {r.parallaxSections[0].body}
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <ReflectionsNotes
          lessons={content.lessons}
          labels={{
            promptsHeading: r.promptsHeading,
            noteLabel: r.noteLabel,
            notePlaceholder: r.notePlaceholder,
            saveLabel: r.saveLabel,
            savedLabel: r.savedLabel,
            clearLabel: r.clearLabel,
            storageHint: r.storageHint,
          }}
        />
      </section>

      {r.parallaxSections[1] && (
        <section
          className="photo-overlay parallax-band mx-6 rounded-[2rem] lg:mx-10"
          style={{ backgroundImage: `url(${r.parallaxSections[1].image})` }}
          aria-hidden="true"
        >
          <div className="relative z-10 max-w-3xl p-8 sm:p-10 lg:p-14">
            <h2 className="headline-font text-3xl text-cloudwhite sm:text-4xl">
              {r.parallaxSections[1].title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-cloudwhite/90">
              {r.parallaxSections[1].body}
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="documentary-card p-8">
          <p className="text-xs uppercase tracking-[0.34em] text-terracotta">
            {content.brand.traditionHolderLabel}
          </p>
          <p className="headline-font mt-3 text-2xl text-deepearth">
            {content.brand.traditionHolderName}
          </p>
          <p className="mt-4 text-sm leading-7 text-stonegray">{content.brand.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}
