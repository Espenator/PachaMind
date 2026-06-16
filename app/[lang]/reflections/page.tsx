import { notFound } from "next/navigation";

import { ReflectionsBoard } from "@/components/reflections-board";
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

  const lessonTitles = Object.fromEntries(
    content.lessons.map((lesson) => [lesson.slug, lesson.title]),
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
      <section className="documentary-card p-8 lg:p-10">
        <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.brand.promise}</p>
        <h1 className="headline-font mt-4 text-5xl text-deepearth">{content.reflections.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{content.reflections.intro}</p>
      </section>

      <ReflectionsBoard
        lang={lang}
        lessonTitles={lessonTitles}
        labels={{
          emptyState: content.reflections.emptyState,
          promptLabel: content.reflections.promptLabel,
          clearAllLabel: content.reflections.clearAllLabel,
          clearConfirm: content.reflections.clearConfirm,
          lessonLinkLabel: content.reflections.lessonLinkLabel,
          savedAtLabel: content.reflections.savedAtLabel,
        }}
      />
    </div>
  );
}
