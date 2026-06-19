"use client";

import { useState } from "react";

import { ConsentCheckbox } from "@/components/consent-checkbox";
import { ConsentRecordDebugPanel } from "@/components/consent-record-debug-panel";
import { trackEvent } from "@/lib/analytics/events";
import {
  CONSENT_CHECKBOXES,
  buildConsentRecord,
  saveMembershipSubmission,
} from "@/lib/membership/consent";
import type {
  ConsentRecord,
  MembershipProfile,
  MembershipSubmission,
} from "@/lib/membership/types";
import type { Language, MembershipContent } from "@/lib/types";

interface FreeMembershipSignupFormProps {
  content: MembershipContent["signup"];
  debugLabels: MembershipContent["debugPanel"];
  language: Language;
}

type FieldKey =
  | "firstName"
  | "lastName"
  | "email"
  | "countryRegion"
  | "countryCode"
  | "cellWhatsapp";

const FIELD_KEYS: FieldKey[] = [
  "firstName",
  "lastName",
  "email",
  "countryRegion",
  "countryCode",
  "cellWhatsapp",
];

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function FreeMembershipSignupForm({
  content,
  debugLabels,
  language,
}: FreeMembershipSignupFormProps) {
  const [profile, setProfile] = useState<MembershipProfile>({
    firstName: "",
    lastName: "",
    email: "",
    countryRegion: "",
    countryCode: "",
    cellWhatsapp: "",
    preferredLanguage: language,
  });

  // All communication permissions start UNCHECKED (opt-in only).
  const [consents, setConsents] = useState<Record<string, boolean>>({
    account: false,
    email: false,
    whatsapp: false,
    sms: false,
  });

  const [errors, setErrors] = useState<Partial<Record<FieldKey | "account", string>>>({});
  const [submission, setSubmission] = useState<MembershipSubmission | null>(null);

  function updateField(key: FieldKey, value: string) {
    setProfile((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Partial<Record<FieldKey | "account", string>> {
    const e: Partial<Record<FieldKey | "account", string>> = {};
    if (!profile.firstName.trim()) e.firstName = content.validation.firstName;
    if (!profile.lastName.trim()) e.lastName = content.validation.lastName;
    if (!profile.email.trim() || !validateEmail(profile.email))
      e.email = content.validation.email;
    if (!profile.countryRegion.trim()) e.countryRegion = content.validation.countryRegion;
    if (!profile.countryCode.trim()) e.countryCode = content.validation.countryCode;
    if (!profile.cellWhatsapp.trim()) e.cellWhatsapp = content.validation.cellWhatsapp;
    if (!consents.account) e.account = content.validation.accountConsent;
    return e;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const sourceUrl = typeof window !== "undefined" ? window.location.href : "";
    const labelByChannel: Record<string, string> = {
      account: content.consentLabels.account,
      email: content.consentLabels.email,
      whatsapp: content.consentLabels.whatsapp,
      sms: content.consentLabels.sms,
    };

    // Build an auditable record for every channel decision, granted or not.
    const records: ConsentRecord[] = CONSENT_CHECKBOXES.map((def) =>
      buildConsentRecord({
        channel: def.channel,
        purpose: def.purpose,
        consentText: labelByChannel[def.channel],
        checkboxState: consents[def.channel] ?? false,
        sourceUrl,
      }),
    );

    const next: MembershipSubmission = {
      profile,
      consents: records,
      submittedAt: new Date().toISOString(),
    };

    // Flow A: store the mock submission client-side only. No network, no message.
    saveMembershipSubmission(next);
    trackEvent("free_membership_created", { preferredLanguage: profile.preferredLanguage });
    setSubmission(next);
  }

  if (submission) {
    return (
      <div>
        <div className="documentary-card p-8 lg:p-10">
          <h2 className="headline-font text-3xl text-deepearth">{content.successHeading}</h2>
          <p className="mt-4 text-lg leading-8 text-stonegray">{content.successBody}</p>
        </div>
        <ConsentRecordDebugPanel
          submission={submission}
          heading={debugLabels.heading}
          note={debugLabels.note}
        />
      </div>
    );
  }

  const fieldLabels: Record<FieldKey, string> = {
    firstName: content.firstNameLabel,
    lastName: content.lastNameLabel,
    email: content.emailLabel,
    countryRegion: content.countryRegionLabel,
    countryCode: content.countryCodeLabel,
    cellWhatsapp: content.cellWhatsappLabel,
  };

  const fieldAutocomplete: Record<FieldKey, string> = {
    firstName: "given-name",
    lastName: "family-name",
    email: "email",
    countryRegion: "country-name",
    countryCode: "tel-country-code",
    cellWhatsapp: "tel-national",
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="documentary-card flex flex-col gap-6 p-8 lg:p-10">
      <p className="text-sm text-stonegray">{content.requiredHint}</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {FIELD_KEYS.map((key) => (
          <div key={key} className="flex flex-col gap-2">
            <label
              htmlFor={`signup-${key}`}
              className="text-sm font-semibold uppercase tracking-[0.18em] text-stonegray"
            >
              {fieldLabels[key]} <span aria-hidden="true">*</span>
            </label>
            <input
              id={`signup-${key}`}
              type={key === "email" ? "email" : "text"}
              inputMode={key === "cellWhatsapp" ? "tel" : undefined}
              autoComplete={fieldAutocomplete[key]}
              required
              value={profile[key]}
              aria-invalid={errors[key] ? true : undefined}
              onChange={(e) => updateField(key, e.target.value)}
              className="rounded-xl border border-deepearth/15 bg-white/70 px-4 py-3 text-base text-deepearth placeholder:text-stonegray/60 focus:border-terracotta focus:outline-none"
            />
            {errors[key] ? (
              <p role="alert" className="text-sm text-terracotta">
                {errors[key]}
              </p>
            ) : null}
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <label
            htmlFor="signup-preferredLanguage"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-stonegray"
          >
            {content.preferredLanguageLabel} <span aria-hidden="true">*</span>
          </label>
          <select
            id="signup-preferredLanguage"
            value={profile.preferredLanguage}
            onChange={(e) =>
              setProfile((prev) => ({
                ...prev,
                preferredLanguage: e.target.value as Language,
              }))
            }
            className="rounded-xl border border-deepearth/15 bg-white/70 px-4 py-3 text-base text-deepearth focus:border-terracotta focus:outline-none"
          >
            <option value="en">{content.languageOptionEn}</option>
            <option value="es">{content.languageOptionEs}</option>
          </select>
        </div>
      </div>

      <fieldset className="flex flex-col gap-4 border-t border-deepearth/10 pt-6">
        <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-stonegray">
          {content.permissionsHeading}
        </legend>

        <ConsentCheckbox
          id="consent-account"
          label={content.consentLabels.account}
          checked={consents.account}
          required
          error={errors.account}
          onChange={(v) => setConsents((p) => ({ ...p, account: v }))}
        />
        <ConsentCheckbox
          id="consent-email"
          label={content.consentLabels.email}
          checked={consents.email}
          onChange={(v) => setConsents((p) => ({ ...p, email: v }))}
        />
        <ConsentCheckbox
          id="consent-whatsapp"
          label={content.consentLabels.whatsapp}
          checked={consents.whatsapp}
          onChange={(v) => setConsents((p) => ({ ...p, whatsapp: v }))}
        />
        <ConsentCheckbox
          id="consent-sms"
          label={content.consentLabels.sms}
          checked={consents.sms}
          onChange={(v) => setConsents((p) => ({ ...p, sms: v }))}
        />

        {/* Embodier.ai item is an informational acknowledgement, NOT an opt-in. */}
        <p className="rounded-2xl bg-cloudwhite px-5 py-4 text-sm leading-6 text-deepearth">
          {content.consentLabels.embodierAcknowledgement}
        </p>
      </fieldset>

      <p className="text-xs leading-5 text-stonegray/80">{content.noCommerceNote}</p>

      <button
        type="submit"
        className="self-start rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
      >
        {content.submitLabel}
      </button>
    </form>
  );
}
