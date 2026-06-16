import type { Metadata } from "next";
import { FieldNoteCard } from "@/components/ui/FieldNoteCard";
import { SEED_FIELD_NOTES } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Field Notes",
  description: "On-location observations and teachings from the Sacred Valley by Mallku Aribalo.",
};

export default function FieldNotesPage() {
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
            From the Sacred Valley
          </p>
          <h1
            className="text-3xl sm:text-4xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Field Notes
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            On-location observations, stories, and teachings from Mallku Aribalo
            in the Sacred Valley of Peru.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEED_FIELD_NOTES.map((note) => (
              <FieldNoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
