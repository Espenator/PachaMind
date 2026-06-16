import { SEED_LESSONS } from "@/lib/seed-data";

const FEATURED = SEED_LESSONS[0];

export function FeaturedVideoSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--color-paper-cream)" }}
    >
      <div className="container-pm">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Video player */}
          <div className="w-full lg:w-3/5">
            <div className="video-container rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-xl)" }}>
              <iframe
                src={FEATURED.video.url}
                title={FEATURED.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Context */}
          <div className="w-full lg:w-2/5 flex flex-col gap-5">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-terra-500)" }}
            >
              Begin here
            </p>
            <h2
              className="text-2xl sm:text-3xl font-semibold leading-snug"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              {FEATURED.title}
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              {FEATURED.summary}
            </p>

            {/* Reflection prompt teaser */}
            <div
              className="rounded-xl p-4 border-l-4"
              style={{
                backgroundColor: "var(--color-stone-100)",
                borderColor: "var(--color-terra-400)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-1"
                style={{ color: "var(--color-terra-600)" }}
              >
                Reflection
              </p>
              <p
                className="text-sm italic leading-relaxed"
                style={{ color: "var(--color-foreground)" }}
              >
                {FEATURED.reflectionPrompts[0]?.prompt}
              </p>
            </div>

            <p className="text-xs" style={{ color: "var(--color-muted)" }}>
              Taught by {FEATURED.author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
