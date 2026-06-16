import { Button } from "@/components/ui/Button";

export function ConservationSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--color-uku-pacha)", color: "var(--color-stone-100)" }}
    >
      <div className="container-pm">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-5 lg:w-1/2">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-sage-400)" }}
            >
              Conservation
            </p>
            <h2
              className="text-3xl sm:text-4xl font-semibold leading-snug"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-stone-50)" }}
            >
              The Andes are not a backdrop.
              <br />
              They are a living classroom.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-stone-300)" }}>
              Mallku&apos;s teachings are rooted in the landscapes of the Sacred Valley
              — ancient agricultural terraces, glacial lakes, cloud forests, and
              high-altitude ecosystems that are changing rapidly.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-stone-300)" }}>
              Understanding Andean cosmovision is inseparable from understanding
              the need to protect the land it was born from. PachaMind weaves
              conservation awareness into every lesson.
            </p>
            <Button href="/conservation" variant="secondary" size="md" className="self-start border-sage-400 text-sage-300 mt-2">
              Explore Conservation
            </Button>
          </div>

          {/* Stats grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-5 flex flex-col gap-2"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="text-3xl font-semibold"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-terra-300)" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-stone-300)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { value: "3,500+", label: "years of continuous Andean agricultural practice" },
  { value: "30%", label: "of global biodiversity found in the Andes" },
  { value: "~700", label: "indigenous languages in the Andean region" },
  { value: "Free", label: "for every student, everywhere in the world" },
];
