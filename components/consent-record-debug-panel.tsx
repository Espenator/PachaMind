import type { ConsentRecord } from "@/lib/types";

interface ConsentRecordDebugPanelProps {
  heading: string;
  intro: string;
  emptyLabel: string;
  records: ConsentRecord[];
}

/**
 * Development-only view of the local, mock consent audit trail. Rendered only
 * when NODE_ENV !== "production" so it never appears in the production UI.
 */
export function ConsentRecordDebugPanel({
  heading,
  intro,
  emptyLabel,
  records,
}: ConsentRecordDebugPanelProps) {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <section className="documentary-card border-dashed p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stonegray">
        {heading}
      </p>
      <p className="mt-2 text-sm text-stonegray">{intro}</p>
      {records.length === 0 ? (
        <p className="mt-4 text-sm text-stonegray">{emptyLabel}</p>
      ) : (
        <ul className="mt-4 flex flex-col gap-2">
          {records.map((record, index) => (
            <li
              key={`${record.channel}-${record.timestamp}-${index}`}
              className="rounded-xl bg-cloudwhite px-4 py-3 text-xs leading-5 text-deepearth"
            >
              <span className="font-semibold">{record.channel}</span> ·{" "}
              {record.purpose} · {record.checkboxState ? "on" : "off"} ·{" "}
              {record.timestamp} · v{record.consentTextVersion}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
