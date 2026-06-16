import Link from "next/link";
import type { FieldNote } from "@/lib/types";

interface FieldNoteCardProps {
  note: FieldNote;
}

export function FieldNoteCard({ note }: FieldNoteCardProps) {
  return (
    <Link
      href={`/field-notes/${note.slug}`}
      className="flex flex-col rounded-2xl overflow-hidden group transition-shadow hover:shadow-md"
      style={{
        backgroundColor: "var(--color-paper-cream)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {note.imageUrl && (
        <div
          className="relative w-full aspect-video overflow-hidden"
          style={{ backgroundColor: "var(--color-stone-200)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={note.imageUrl}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col gap-2 p-4">
        {note.location && (
          <p
            className="text-xs font-medium uppercase tracking-wide"
            style={{ color: "var(--color-muted)" }}
          >
            {note.location}
          </p>
        )}
        <h3
          className="text-base font-semibold leading-snug group-hover:opacity-80"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--color-foreground)",
          }}
        >
          {note.title}
        </h3>
        <p
          className="text-sm leading-relaxed line-clamp-3"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          {note.excerpt}
        </p>
        <time
          dateTime={note.date}
          className="text-xs mt-1"
          style={{ color: "var(--color-muted)" }}
        >
          {new Date(note.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
    </Link>
  );
}
