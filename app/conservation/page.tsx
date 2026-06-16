import type { Metadata } from "next";
import { VideoCard } from "@/components/ui/VideoCard";
import { Button } from "@/components/ui/Button";
import { SEED_LESSONS } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Conservation",
  description:
    "Traditional Andean ecological knowledge and the urgent need to protect Andean landscapes.",
};

const lessons = SEED_LESSONS.filter((l) => l.category === "conservation");

export default function ConservationPage() {
  return (
    <div style={{ backgroundColor: "var(--color-paper-white)" }}>
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-uku-pacha)", color: "var(--color-stone-100)" }}
      >
        <div className="container-pm max-w-3xl flex flex-col gap-5">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-sage-400)" }}>
            Land & culture
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold leading-tight"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-stone-50)" }}
          >
            Conservation
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-stone-300)" }}>
            Understanding Andean cosmovision is inseparable from understanding
            the need to protect the land it was born from.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pm max-w-3xl mx-auto flex flex-col gap-5">
          <h2
            className="text-2xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            A living classroom
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            The Sacred Valley of Peru holds some of the world&apos;s most
            extraordinary biodiversity and agricultural heritage. The ancient
            andenes (terraces) represent thousands of years of ecological
            knowledge still practiced in some communities today.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            Mallku&apos;s teachings weave together cosmovision and conservation — not
            as separate topics, but as expressions of the same understanding:
            that the Earth is a living being deserving of relationship and care.
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
              Conservation lessons
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
          <Button href="/signup" size="lg">Continue the Puma Path — free</Button>
        </div>
      </section>
    </div>
  );
}
