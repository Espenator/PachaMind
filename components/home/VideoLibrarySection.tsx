import { Button } from "@/components/ui/Button";
import { VideoCard } from "@/components/ui/VideoCard";
import { SEED_LESSONS } from "@/lib/seed-data";

const PREVIEW_LESSONS = SEED_LESSONS.slice(0, 6);

export function VideoLibrarySection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--color-paper-white)" }}
    >
      <div className="container-pm">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-terra-500)" }}
            >
              Video library
            </p>
            <h2
              className="text-3xl font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              Start watching — free
            </h2>
          </div>
          {/* Watch-time filters */}
          <div className="flex gap-2 flex-wrap">
            {["All", "3 min", "7 min", "15 min"].map((filter) => (
              <button
                key={filter}
                className="px-3 py-1.5 rounded-full text-sm font-medium border transition-colors"
                style={{
                  backgroundColor: filter === "All" ? "var(--color-accent)" : "transparent",
                  color: filter === "All" ? "#fff" : "var(--color-muted-foreground)",
                  borderColor: filter === "All" ? "var(--color-accent)" : "var(--color-border)",
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PREVIEW_LESSONS.map((lesson) => (
            <VideoCard key={lesson.id} lesson={lesson} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Button href="/videos" variant="secondary" size="md">
            Browse all videos
          </Button>
        </div>
      </div>
    </section>
  );
}
