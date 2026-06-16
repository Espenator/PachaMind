export function CrisisSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--color-uku-pacha)", color: "var(--color-stone-200)" }}
    >
      <div className="container-pm max-w-3xl">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--color-terra-400)" }}
        >
          Why this matters
        </p>
        <h2
          className="text-3xl sm:text-4xl font-semibold leading-snug mb-6"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-stone-50)" }}
        >
          We are living through a crisis of purpose.
        </h2>
        <div
          className="flex flex-col gap-4 text-base leading-relaxed"
          style={{ color: "var(--color-stone-300)" }}
        >
          <p>
            Across cultures and generations, people are searching for something
            they can&apos;t quite name — a sense of belonging to something larger than
            themselves, a way of understanding the world that is grounded in the
            living earth.
          </p>
          <p>
            Indigenous wisdom traditions have held these answers for millennia.
            Yet they are disappearing faster than they can be recorded — eroded
            by colonization, tourism, and the reduction of living knowledge to
            cultural spectacle.
          </p>
          <p>
            PachaMind exists to change that. Not through spectacle or ceremony
            tourism — but through genuine education, freely shared.
          </p>
        </div>
      </div>
    </section>
  );
}
