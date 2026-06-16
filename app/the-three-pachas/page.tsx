import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { VideoCard } from "@/components/ui/VideoCard";
import { SEED_LESSONS } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "The Three Pachas",
  description: "Explore Uku Pacha, Kay Pacha, and Hanaq Pacha — the three realms of Andean existence.",
};

const lessons = SEED_LESSONS.filter((l) => l.category === "three-pachas");

const PACHAS = [
  {
    name: "Uku Pacha",
    subtitle: "The Inner World",
    description:
      "The realm of the deep earth — of seeds, ancestors, and all that is becoming. Associated with roots, potential, and the generative dark.",
    bg: "var(--color-stone-800)",
    text: "var(--color-stone-100)",
    accent: "var(--color-terra-400)",
  },
  {
    name: "Kay Pacha",
    subtitle: "The Present World",
    description:
      "The living world we inhabit — the realm of relationships, community, seasons, and daily existence. The place where Ayni is practiced.",
    bg: "var(--color-stone-100)",
    text: "var(--color-foreground)",
    accent: "var(--color-terra-600)",
  },
  {
    name: "Hanaq Pacha",
    subtitle: "The Upper World",
    description:
      "The realm of stars, sky, celestial movements, and expanded awareness. The source of light, vision, and the far-reaching knowledge that guides the calendar.",
    bg: "var(--color-sky-50)",
    text: "var(--color-foreground)",
    accent: "var(--color-sky-600)",
  },
];

export default function ThreePachasPage() {
  return (
    <div style={{ backgroundColor: "var(--color-paper-white)" }}>
      {/* Hero */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-stone-100)" }}
      >
        <div className="container-pm max-w-3xl flex flex-col gap-5">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-terra-500)" }}>
            Core teaching
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold leading-tight"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            The Three Pachas
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            Andean cosmovision divides the cosmos into three living realms.
            Together they form a complete picture of existence — past, present, and expansive.
          </p>
        </div>
      </section>

      {/* Three Pacha cards */}
      <section className="section-pad">
        <div className="container-pm grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACHAS.map((pacha) => (
            <div
              key={pacha.name}
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{ backgroundColor: pacha.bg, color: pacha.text, boxShadow: "var(--shadow-card)" }}
            >
              <h2
                className="text-2xl font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: pacha.accent }}
              >
                {pacha.name}
              </h2>
              <p className="text-sm font-medium uppercase tracking-wide" style={{ opacity: 0.7 }}>
                {pacha.subtitle}
              </p>
              <p className="text-base leading-relaxed">{pacha.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lessons */}
      {lessons.length > 0 && (
        <section className="section-pad border-t" style={{ borderColor: "var(--color-border)" }}>
          <div className="container-pm flex flex-col gap-6">
            <h2
              className="text-2xl font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              Lessons on the Three Pachas
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
          <Button href="/signup" size="lg">Save your place on the Puma Path</Button>
        </div>
      </section>
    </div>
  );
}
