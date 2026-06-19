"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ConsentCheckbox } from "@/components/consent-checkbox";
import {
  buildConsentRecord,
  readMembershipSubmission,
  saveMembershipSubmission,
} from "@/lib/membership/consent";
import type { ConsentChannel, MembershipSubmission } from "@/lib/membership/types";
import type { Language, MembershipContent } from "@/lib/types";

interface CommunicationPreferencesFormProps {
  content: MembershipContent["preferences"];
  consentLabels: MembershipContent["signup"]["consentLabels"];
  language: Language;
}

const EDITABLE_CHANNELS: ConsentChannel[] = ["email", "whatsapp", "sms"];

export function CommunicationPreferencesForm({
  content,
  consentLabels,
  language,
}: CommunicationPreferencesFormProps) {
  const [submission, setSubmission] = useState<MembershipSubmission | null>(null);
  const [granted, setGranted] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    function loadFromStorage() {
      const stored = readMembershipSubmission();
      setSubmission(stored);
      if (stored) {
        const map: Record<string, boolean> = {};
        for (const record of stored.consents) {
          map[record.channel] = record.checkboxState;
        }
        setGranted(map);
      }
    }

    loadFromStorage();
  }, []);

  if (!submission) {
    return (
      <div className="documentary-card p-8 lg:p-10">
        <h2 className="headline-font text-3xl text-deepearth">{content.noMembershipHeading}</h2>
        <p className="mt-4 text-lg leading-8 text-stonegray">{content.noMembershipBody}</p>
        <Link
          href={`/${language}/signup`}
          className="mt-6 inline-block rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          {content.joinLabel}
        </Link>
      </div>
    );
  }

  function handleSave(event: React.FormEvent) {
    event.preventDefault();
    if (!submission) return;

    const sourceUrl = typeof window !== "undefined" ? window.location.href : "";
    const labelByChannel: Record<string, string> = {
      account: consentLabels.account,
      email: consentLabels.email,
      whatsapp: consentLabels.whatsapp,
      sms: consentLabels.sms,
    };

    // Re-issue an auditable record for each channel reflecting the new choice.
    const records = submission.consents.map((record) => {
      if (!EDITABLE_CHANNELS.includes(record.channel)) {
        return record;
      }
      return buildConsentRecord({
        channel: record.channel,
        purpose: record.purpose,
        consentText: labelByChannel[record.channel],
        checkboxState: granted[record.channel] ?? false,
        sourceUrl,
      });
    });

    const next: MembershipSubmission = { ...submission, consents: records };
    saveMembershipSubmission(next);
    setSubmission(next);
    setSaved(true);
  }

  return (
    <form onSubmit={handleSave} className="documentary-card flex flex-col gap-5 p-8 lg:p-10">
      {EDITABLE_CHANNELS.map((channel) => (
        <ConsentCheckbox
          key={channel}
          id={`pref-${channel}`}
          label={consentLabels[channel]}
          checked={granted[channel] ?? false}
          onChange={(v) => {
            setGranted((p) => ({ ...p, [channel]: v }));
            setSaved(false);
          }}
        />
      ))}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          {content.saveLabel}
        </button>
        {saved ? (
          <p role="status" className="text-sm font-medium text-terracotta">
            {content.savedLabel}
          </p>
        ) : null}
      </div>
    </form>
  );
}
