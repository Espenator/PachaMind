import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { VideoCard } from "@/components/ui/VideoCard";
import { SEED_LESSONS } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "The Five Andean Values",
  description: "Learn about Ayni, Munay, Yachay, Llankay, and Kawsay — the five foundational Andean values.",
};

const lessons = SEED_LESSONS.filter((l) => l.category === "five-values");

const VALUES = [
  {
    name: "Ayni",
    meaning: "Sacred Reciprocity",
    description:
      "The living principle of balanced exchange between people, with nature, and with the cosmos. The basis of all Andean relationships.",
  },
  {
    name: "Munay",
    meaning: "Unconditional Love",
    description:
      "Love as a spiritual practice — not sentiment alone, but an active force of care, connection, and will toward the flourishing of all.",
  },
  {
    name: "Yachay",
    meaning: "Wisdom",
    description:
      "Knowledge that is earned through careful attention — to the land, the sky, the elders, and the living world.",
  },
  {
    name: "Llankay",
    meaning: "Right Action / Work",
    description:
      "Work as service — purposeful, grounded effort that contributes to collective and ecological well-being.",
  },
  {
    name: "Kawsay",
    meaning: "Life / Aliveness",
    description:
      "The vital energy that animates all living beings. To honor Kawsay is to recognize the life in everything.",
  },
];

export default function FiveValuesPage() {
  return (
    <div style={{ backgroundColor: "var(--color-paper-white)" }}>
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-sage-50, #F4F7F1)" }}
      >
        <div className="container-pm max-w-3xl flex flex-col gap-5">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-sage-600)" }}>
            Foundational values
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold leading-tight"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            The Five Andean Values
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            These five values form the ethical and spiritual foundation of Andean
            life. They are not abstract ideals — they are lived orientations
            practiced daily.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pm max-w-2xl mx-auto flex flex-col gap-5">
          {VALUES.map((value, i) => (
            <div
              key={value.name}
              className="flex gap-5 items-start p-6 rounded-xl"
              style={{
                backgroundColor: "var(--color-paper-cream)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <span
                className="text-2xl font-bold flex-shrink-0 w-8 text-center"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-terra-500)" }}
              >
                {i + 1}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h2
                    className="text-lg font-semibold"
                    style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
                  >
                    {value.name}
                  </h2>
                  <span className="text-sm italic" style={{ color: "var(--color-muted-foreground)" }}>
                    — {value.meaning}
                  </span>
                </div>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lessons.length > 0 && (
        <section className="section-pad border-t" style={{ borderColor: "var(--color-border)" }}>
          <div className="container-pm flex flex-col gap-6">
            <h2
              className="text-2xl font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              Lessons on the Five Andean Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map((lesson) => (
                <VideoCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10">
        <div className="container-pm flex justify-center">
          <Button href="/signup" size="lg">Start the Puma Path — free</Button>
        </div>
      </section>
    </div>
  );
}
