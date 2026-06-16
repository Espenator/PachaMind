import type { Metadata } from "next";
import { VideoCard } from "@/components/ui/VideoCard";
import { Button } from "@/components/ui/Button";
import { SEED_LESSONS } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Archaeo-astronomy",
  description: "Learn how Andean peoples read the night sky — including the dark constellations of the Milky Way.",
};

const lessons = SEED_LESSONS.filter((l) => l.category === "archaeo-astronomy");

export default function ArchaeoAstronomyPage() {
  return (
    <div style={{ backgroundColor: "var(--color-paper-white)" }}>
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-sky-900, #10192D)", color: "var(--color-stone-100)" }}
      >
        <div className="container-pm max-w-3xl flex flex-col gap-5">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-sky-300, #85B9DF)" }}>
            Andean sky knowledge
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold leading-tight"
            style={{ fontFamily: "var(--font-serif)", color: "#F0F6FB" }}
          >
            Archaeo-astronomy
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-stone-300)" }}>
            For millennia, Andean peoples have been expert readers of the sky.
            Their astronomical knowledge shaped calendars, agriculture,
            architecture, and spiritual practice.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pm max-w-3xl mx-auto flex flex-col gap-5">
          <h2
            className="text-2xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Dark cloud constellations
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            Unlike Western astronomy, which focuses on light-forming
            constellations, Andean sky knowledge includes the dark clouds of the
            Milky Way — shapes formed by the absence of stars, including the
            Yacana (the Llama), the Serpent, and the Toad.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            These dark constellations are not metaphors. They guided planting
            calendars, water predictions, and the agricultural rhythms of entire
            civilizations.
          </p>
        </div>
      </section>

      {lessons.length > 0 && (
        <section className="section-pad border-t" style={{ borderColor: "var(--color-border)" }}>
          <div className="container-pm flex flex-col gap-6">
            <h2
              className="text-2xl font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              Lessons in Andean astronomy
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
          <Button href="/signup" size="lg">Begin the Puma Path — free</Button>
        </div>
      </section>
    </div>
  );
}
