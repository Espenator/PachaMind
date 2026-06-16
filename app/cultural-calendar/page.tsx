import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cultural Calendar",
  description: "The living Andean ceremonial and agricultural calendar.",
};

const CALENDAR_EVENTS = [
  {
    month: "June",
    event: "Inti Raymi",
    description: "Festival of the Sun — celebrated at the winter solstice in the Southern Hemisphere, honoring Inti and marking the renewal of the agricultural cycle.",
    approxDate: "June 24",
  },
  {
    month: "August",
    event: "Pachamama Offering",
    description: "Month of offerings to Pachamama — the Earth is honored with gratitude before the planting season begins.",
    approxDate: "August 1",
  },
  {
    month: "September",
    event: "Equinox — Killa Raymi",
    description: "Celebration of the Moon at the September equinox — a time of balance and reflection.",
    approxDate: "September 22",
  },
  {
    month: "December",
    event: "Capac Raymi",
    description: "Festival of the Summer Solstice in the Andes — a time of spiritual strength and initiation.",
    approxDate: "December 21",
  },
];

export default function CulturalCalendarPage() {
  return (
    <div style={{ backgroundColor: "var(--color-paper-white)" }}>
      <section
        className="section-pad border-b"
        style={{
          backgroundColor: "var(--color-stone-100)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container-pm max-w-3xl flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-terra-500)" }}>
            Living calendar
          </p>
          <h1
            className="text-3xl sm:text-4xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Cultural Calendar
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            The Andean ceremonial and agricultural calendar is a living document
            — a guide for planting, gratitude, and cultural continuity. Below are
            key moments in the Andean year.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pm max-w-2xl mx-auto flex flex-col gap-6">
          {CALENDAR_EVENTS.map((event) => (
            <div
              key={event.event}
              className="flex gap-5 items-start p-6 rounded-xl"
              style={{
                backgroundColor: "var(--color-paper-cream)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="flex-shrink-0 text-center w-16">
                <p
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "var(--color-muted)" }}
                >
                  {event.month}
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--color-terra-600)" }}
                >
                  {event.approxDate.split(" ")[1]}
                </p>
              </div>
              <div>
                <h2
                  className="text-lg font-semibold mb-1"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
                >
                  {event.event}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
