import { Button } from "@/components/ui/Button";

export function MeetMallkuSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--color-paper-cream)" }}
    >
      <div className="container-pm">
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 items-start max-w-4xl mx-auto">
          {/* Portrait placeholder */}
          <div className="flex-shrink-0">
            <div
              className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden"
              style={{ backgroundColor: "var(--color-stone-300)" }}
              aria-hidden="true"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-terra-500)" }}
            >
              Your teacher
            </p>
            <h2
              className="text-2xl sm:text-3xl font-semibold"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-foreground)",
              }}
            >
              Mallku Aribalo
            </h2>
            <p
              className="text-sm font-medium"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              James Arevalo Merejildo — Andean Shamanic Teacher & Tradition-Holder
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Mallku Aribalo is a respected Andean tradition-holder and educator
              from the Sacred Valley of Peru. His teachings draw on ancestral
              knowledge of Andean cosmovision, archaeo-astronomy, and the living
              relationship between people and the land.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              He created PachaMind to share these teachings freely — reaching
              students across the world without cost or commercial barrier.
            </p>
            <Button href="/about-mallku" variant="ghost" size="sm" className="self-start mt-2 px-0">
              Read Mallku&apos;s full story →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
