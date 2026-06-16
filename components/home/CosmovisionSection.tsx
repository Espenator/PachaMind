import { Button } from "@/components/ui/Button";

export function CosmovisionSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--color-kay-pacha)" }}
    >
      <div className="container-pm">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 flex flex-col gap-5">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-terra-500)" }}
            >
              What is Andean Cosmovision?
            </p>
            <h2
              className="text-3xl sm:text-4xl font-semibold leading-snug"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-foreground)",
              }}
            >
              A living map of the world — not a belief system to adopt.
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Andean cosmovision is the integrated worldview of the peoples of the
              Andes — a way of understanding time, space, the human body, and our
              relationship to land, cosmos, and community.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              It is not mythology. It is not religion in the Western sense. It is a
              living orientation — practiced in daily life, embedded in agriculture,
              astronomy, language, and care for the land.
            </p>
            <Button href="/andean-cosmovision" variant="secondary" size="md" className="self-start mt-2">
              Explore Andean Cosmovision
            </Button>
          </div>

          {/* Decorative concept grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {CONCEPTS.map((concept) => (
              <div
                key={concept.title}
                className="rounded-xl p-5 flex flex-col gap-2"
                style={{
                  backgroundColor: "var(--color-paper-cream)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <span className="text-2xl" aria-hidden="true">{concept.icon}</span>
                <h3
                  className="text-base font-semibold"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-foreground)",
                  }}
                >
                  {concept.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-muted-foreground)" }}
                >
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const CONCEPTS = [
  {
    icon: "🌍",
    title: "Pacha",
    description: "Time and space as a living, unified whole.",
  },
  {
    icon: "🤝",
    title: "Ayni",
    description: "Sacred reciprocity with all living beings.",
  },
  {
    icon: "🌿",
    title: "Pachamama",
    description: "Earth as a living being, not a resource.",
  },
  {
    icon: "⭐",
    title: "Hanaq Pacha",
    description: "The upper world of stars and expanded awareness.",
  },
];
