import type { LegalPageContent } from "@/lib/types";

interface LegalPageProps {
  page: LegalPageContent;
}

export function LegalPage({ page }: LegalPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-16">
      <section className="documentary-card p-8 lg:p-10">
        <h1 className="headline-font text-4xl text-deepearth lg:text-5xl">{page.title}</h1>
        <p className="mt-5 text-lg leading-8 text-stonegray">{page.intro}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.24em] text-stonegray">
          v{page.version} · {page.lastUpdated}
        </p>
      </section>

      <div className="mt-8 flex flex-col gap-6">
        {page.sections.map((section) => (
          <section key={section.heading} className="documentary-card p-8">
            <h2 className="headline-font text-2xl text-deepearth">{section.heading}</h2>
            <p className="mt-3 text-base leading-8 text-stonegray">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
