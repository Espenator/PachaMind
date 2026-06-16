import type { Metadata } from "next";
import { VideoCard } from "@/components/ui/VideoCard";
import { SEED_LESSONS } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Video Library",
  description: "Free educational videos on Andean cosmovision, taught by Mallku Aribalo.",
};

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "andean-cosmovision", label: "Cosmovision" },
  { id: "three-pachas", label: "Three Pachas" },
  { id: "five-values", label: "Five Values" },
  { id: "archaeo-astronomy", label: "Astronomy" },
  { id: "conservation", label: "Conservation" },
];

export default function VideosPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-paper-white)" }}
    >
      {/* Header */}
      <section
        className="py-12 border-b"
        style={{
          backgroundColor: "var(--color-stone-100)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container-pm flex flex-col gap-4">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-terra-500)" }}
          >
            All free · No account required
          </p>
          <h1
            className="text-3xl sm:text-4xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Video Library
          </h1>
          <p
            className="text-base leading-relaxed max-w-xl"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            All lessons taught by Mallku Aribalo (James Arevalo Merejildo).
          </p>

          {/* Filter row */}
          <div className="flex gap-2 flex-wrap mt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className="px-4 py-2 rounded-full text-sm font-medium border transition-colors"
                style={{
                  backgroundColor: cat.id === "all" ? "var(--color-accent)" : "transparent",
                  color: cat.id === "all" ? "#fff" : "var(--color-muted-foreground)",
                  borderColor: cat.id === "all" ? "var(--color-accent)" : "var(--color-border)",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Watch time filter */}
          <div className="flex items-center gap-3 mt-1 text-sm" style={{ color: "var(--color-muted-foreground)" }}>
            <span>Filter by length:</span>
            {["3 min", "7 min", "15 min"].map((t) => (
              <button
                key={t}
                className="px-3 py-1 rounded-full border text-sm transition-colors hover:opacity-70"
                style={{ borderColor: "var(--color-border)" }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad">
        <div className="container-pm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEED_LESSONS.filter((l) => l.isPublished).map((lesson) => (
              <VideoCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
