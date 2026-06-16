import { Button } from "@/components/ui/Button";
import { PATH_STAGES } from "@/lib/seed-data";

export function PumaPathSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--color-stone-100)" }}
    >
      <div className="container-pm">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-terra-500)" }}
          >
            Your learning journey
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Begin the Puma Path
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            The Puma Path is a five-stage learning journey through Andean
            cosmovision. Each stage deepens your understanding and marks your
            growth as a student of this tradition.
          </p>
        </div>

        {/* Stages */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {PATH_STAGES.map((stage, i) => (
            <div
              key={stage.slug}
              className="flex-1 flex flex-col gap-2 p-5 rounded-2xl"
              style={{
                backgroundColor: "var(--color-paper-white)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: stage.color }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
                >
                  {stage.name}
                </h3>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button href="/signup" size="lg">
            Save your place — start free
          </Button>
        </div>
      </div>
    </section>
  );
}
