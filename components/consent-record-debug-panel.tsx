"use client";

import type { MembershipSubmission } from "@/lib/membership/types";

interface ConsentRecordDebugPanelProps {
  submission: MembershipSubmission;
  heading: string;
  note: string;
}

/**
 * Development-only view of the mock consent records. Rendered only when
 * NODE_ENV !== "production" so it never appears in a production build.
 */
export function ConsentRecordDebugPanel({
  submission,
  heading,
  note,
}: ConsentRecordDebugPanelProps) {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <section className="documentary-card mt-6 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
        {heading}
      </p>
      <p className="mt-2 text-sm text-stonegray">{note}</p>
      <pre className="mt-4 overflow-x-auto rounded-2xl bg-deepearth/90 p-4 text-xs leading-5 text-cloudwhite">
        {JSON.stringify(submission, null, 2)}
      </pre>
    </section>
  );
}
