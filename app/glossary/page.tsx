import type { Metadata } from "next";
import Link from "next/link";
import { SEED_GLOSSARY } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Glossary",
  description: "A reference glossary of Andean, Quechua, and cosmovision terms used in PachaMind lessons.",
};

export default function GlossaryPage() {
  const sorted = [...SEED_GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div style={{ backgroundColor: "var(--color-paper-white)" }}>
      <section
        className="section-pad border-b"
        style={{
          backgroundColor: "var(--color-stone-100)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container-pm max-w-3xl flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-terra-500)" }}>
            Reference
          </p>
          <h1
            className="text-3xl sm:text-4xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Glossary
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            Key terms from Andean cosmovision, Quechua language, and the teachings
            of Mallku Aribalo.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pm max-w-2xl mx-auto flex flex-col gap-8">
          {sorted.map((term) => (
            <div
              key={term.id}
              id={term.slug}
              className="flex flex-col gap-2 pb-8 border-b"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex items-baseline gap-3 flex-wrap">
                <h2
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
                >
                  {term.term}
                </h2>
                {term.termOriginal && term.termOriginal !== term.term && (
                  <span className="text-sm italic" style={{ color: "var(--color-muted-foreground)" }}>
                    {term.termOriginal}
                  </span>
                )}
                {term.language && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "var(--color-stone-100)",
                      color: "var(--color-muted-foreground)",
                    }}
                  >
                    {term.language}
                  </span>
                )}
              </div>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                {term.definition}
              </p>
              {term.context && (
                <p className="text-sm italic leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {term.context}
                </p>
              )}
              {term.relatedLessonIds && term.relatedLessonIds.length > 0 && (
                <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                  Related lessons:{" "}
                  {term.relatedLessonIds.map((id, i) => (
                    <span key={id}>
                      <Link
                        href={`/lessons/${id}`}
                        className="underline hover:opacity-70 transition-opacity"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {id}
                      </Link>
                      {i < (term.relatedLessonIds?.length ?? 0) - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
