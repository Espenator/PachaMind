import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { VideoCard } from "@/components/ui/VideoCard";
import { SEED_LESSONS } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Andean Cosmovision",
  description:
    "Learn about the living worldview of the Andes — a framework for understanding cosmos, community, and earth.",
};

const lessons = SEED_LESSONS.filter((l) => l.category === "andean-cosmovision");

export default function AndeanCosmovisionPage() {
  return (
    <div style={{ backgroundColor: "var(--color-paper-white)" }}>
      {/* Hero */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-stone-900)", color: "var(--color-stone-100)" }}
      >
        <div className="container-pm max-w-3xl flex flex-col gap-5">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-terra-400)" }}>
            Core teaching
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold leading-tight"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-stone-50)" }}
          >
            Andean Cosmovision
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-stone-300)" }}>
            A living, relational worldview passed down through oral tradition and
            practice — not a relic of the past, but a living orientation for the
            present.
          </p>
          <Button href="/signup" size="md" className="self-start">
            Save your place — free
          </Button>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad">
        <div className="container-pm max-w-3xl mx-auto flex flex-col gap-6">
          <h2
            className="text-2xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            What is Andean Cosmovision?
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            Andean cosmovision is the integrated worldview of the peoples of the
            Andes — encompassing how they understand time, space, the human body,
            and the relationship between people, land, cosmos, and community.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            It is not a belief system to adopt or a philosophy to study at a
            distance. It is a living orientation — embedded in agriculture,
            language, ceremony, architecture, and daily care for the earth.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            Mallku Aribalo&apos;s teachings invite students to approach these
            understandings with respect, curiosity, and cultural humility.
          </p>
        </div>
      </section>

      {/* Lessons */}
      {lessons.length > 0 && (
        <section
          className="section-pad border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="container-pm flex flex-col gap-6">
            <h2
              className="text-2xl font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              Lessons in this topic
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map((lesson) => (
                <VideoCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
