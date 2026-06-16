import { Button } from "@/components/ui/Button";

const VALUES = [
  {
    name: "Ayni",
    meaning: "Sacred Reciprocity",
    description: "The living principle of balanced exchange between people, nature, and cosmos.",
  },
  {
    name: "Munay",
    meaning: "Unconditional Love",
    description: "Love as a spiritual practice — an active force of care and connection.",
  },
  {
    name: "Yachay",
    meaning: "Wisdom",
    description: "The accumulated knowledge passed from earth and ancestors through careful attention.",
  },
  {
    name: "Llankay",
    meaning: "Right Action / Work",
    description: "Work as service — purposeful, grounded effort that contributes to collective well-being.",
  },
  {
    name: "Kawsay",
    meaning: "Life",
    description: "Aliveness itself — the vital energy that animates all living beings and relationships.",
  },
];

export function FiveValuesSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--color-sage-50, #F4F7F1)" }}
    >
      <div className="container-pm">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-sage-600)" }}
          >
            Foundational values
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            The Five Andean Values
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            These five values form the ethical and spiritual foundation of Andean
            life. They are not abstract ideals — they are lived orientations.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {VALUES.map((value, i) => (
            <div
              key={value.name}
              className="flex gap-5 items-start p-5 rounded-xl"
              style={{
                backgroundColor: "var(--color-paper-white)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <span
                className="text-2xl font-bold flex-shrink-0 w-8 text-center"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-terra-500)" }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3
                    className="text-base font-semibold"
                    style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
                  >
                    {value.name}
                  </h3>
                  <span
                    className="text-sm italic"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    — {value.meaning}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button href="/the-five-andean-values" variant="secondary" size="md">
            Explore the Five Values
          </Button>
        </div>
      </div>
    </section>
  );
}
