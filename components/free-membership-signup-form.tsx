"use client";

import Link from "next/link";
import { useState } from "react";

import { ConsentCheckbox } from "@/components/consent-checkbox";
import { track } from "@/lib/analytics";
import { createMembership } from "@/lib/membership";
import type {
  CommunicationPermission,
  ConsentChannel,
  Language,
  MembershipProfile,
  SiteContent,
} from "@/lib/types";

interface FreeMembershipSignupFormProps {
  language: Language;
  content: SiteContent["signup"];
  dashboardHref: string;
}

type ChannelState = Record<ConsentChannel, boolean>;

const initialChannels: ChannelState = {
  account: false,
  email: false,
  whatsapp: false,
  sms: false,
  "embodier-disclaimer": false,
};

export function FreeMembershipSignupForm({
  language,
  content,
  dashboardHref,
}: FreeMembershipSignupFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [cellWhatsapp, setCellWhatsapp] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState<Language>(language);
  const [channels, setChannels] = useState<ChannelState>(initialChannels);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleChannel(channel: ConsentChannel, checked: boolean) {
    setChannels((prev) => ({ ...prev, [channel]: checked }));
  }

  function validate(): string[] {
    const next: string[] = [];
    if (!firstName.trim()) next.push(content.validationFirstName);
    if (!lastName.trim()) next.push(content.validationLastName);
    if (!/.+@.+\..+/.test(email.trim())) next.push(content.validationEmail);
    if (!countryRegion.trim()) next.push(content.validationCountryRegion);
    if (!cellWhatsapp.trim()) next.push(content.validationCellWhatsapp);
    if (!channels.account) next.push(content.validationAccountConsent);
    return next;
  }

  function buildPermissions(): CommunicationPermission[] {
    return [
      {
        channel: "account",
        purpose: "membership-account",
        required: true,
        checked: channels.account,
        label: content.permissions.account,
      },
      {
        channel: "email",
        purpose: "educational",
        required: false,
        checked: channels.email,
        label: content.permissions.email,
      },
      {
        channel: "whatsapp",
        purpose: "educational",
        required: false,
        checked: channels.whatsapp,
        label: content.permissions.whatsapp,
      },
      {
        channel: "sms",
        purpose: "educational",
        required: false,
        checked: channels.sms,
        label: content.permissions.sms,
      },
      {
        channel: "embodier-disclaimer",
        purpose: "boundary-acknowledgement",
        required: false,
        checked: channels["embodier-disclaimer"],
        label: content.permissions.embodierDisclaimer,
      },
    ];
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const validationErrors = validate();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors([]);

    const profile: MembershipProfile = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      countryRegion: countryRegion.trim(),
      countryCode: countryCode.trim(),
      cellWhatsapp: cellWhatsapp.trim(),
      preferredLanguage,
    };

    const sourceUrl =
      typeof window !== "undefined" ? window.location.href : `/${language}/signup`;

    createMembership(profile, buildPermissions(), sourceUrl);
    track("free_membership_created");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="documentary-card p-8 lg:p-10" role="status" aria-live="polite">
        <h2 className="headline-font text-3xl text-deepearth">{content.successHeading}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-stonegray">{content.successBody}</p>
        <p className="mt-4 text-sm text-stonegray">{content.boundaryNote}</p>
        <Link
          href={dashboardHref}
          className="mt-6 inline-flex rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          {content.successDashboardCta}
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="documentary-card p-8 lg:p-10">
      <p className="rounded-2xl border border-skyblue/30 bg-skyblue/5 px-5 py-4 text-sm leading-6 text-deepearth">
        {content.prototypeNote}
      </p>

      {errors.length > 0 ? (
        <div
          role="alert"
          className="mt-6 rounded-2xl border border-terracotta/40 bg-terracotta/10 px-5 py-4"
        >
          <ul className="list-inside list-disc space-y-1 text-sm text-deepearth">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field
          label={content.firstNameLabel}
          value={firstName}
          onChange={setFirstName}
          autoComplete="given-name"
          required
        />
        <Field
          label={content.lastNameLabel}
          value={lastName}
          onChange={setLastName}
          autoComplete="family-name"
          required
        />
        <Field
          label={content.emailLabel}
          value={email}
          onChange={setEmail}
          type="email"
          autoComplete="email"
          required
          className="sm:col-span-2"
        />
        <Field
          label={content.countryRegionLabel}
          value={countryRegion}
          onChange={setCountryRegion}
          placeholder={content.countryRegionPlaceholder}
          required
          className="sm:col-span-2"
        />
        <Field
          label={content.countryCodeLabel}
          value={countryCode}
          onChange={setCountryCode}
          placeholder={content.countryCodePlaceholder}
        />
        <Field
          label={content.cellWhatsappLabel}
          value={cellWhatsapp}
          onChange={setCellWhatsapp}
          placeholder={content.cellWhatsappPlaceholder}
          autoComplete="tel"
          required
        />

        <label className="sm:col-span-2">
          <span className="text-sm font-medium text-deepearth">
            {content.preferredLanguageLabel}
          </span>
          <select
            value={preferredLanguage}
            onChange={(event) => setPreferredLanguage(event.target.value as Language)}
            className="mt-2 w-full rounded-2xl border border-deepearth/15 bg-cloudwhite px-4 py-3 text-base text-deepearth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </label>
      </div>

      <fieldset className="mt-8">
        <legend className="headline-font text-2xl text-deepearth">
          {content.permissionsHeading}
        </legend>
        <p className="mt-2 text-sm leading-6 text-stonegray">{content.permissionsIntro}</p>
        <div className="mt-5 flex flex-col gap-3">
          <ConsentCheckbox
            channel="account"
            label={content.permissions.account}
            checked={channels.account}
            required
            requiredHint={content.requiredNote}
            onChange={toggleChannel}
          />
          <ConsentCheckbox
            channel="email"
            label={content.permissions.email}
            checked={channels.email}
            onChange={toggleChannel}
          />
          <ConsentCheckbox
            channel="whatsapp"
            label={content.permissions.whatsapp}
            checked={channels.whatsapp}
            onChange={toggleChannel}
          />
          <ConsentCheckbox
            channel="sms"
            label={content.permissions.sms}
            checked={channels.sms}
            onChange={toggleChannel}
          />
          <ConsentCheckbox
            channel="embodier-disclaimer"
            label={content.permissions.embodierDisclaimer}
            checked={channels["embodier-disclaimer"]}
            onChange={toggleChannel}
          />
        </div>
      </fieldset>

      <p className="mt-6 text-sm font-semibold text-deepearth">{content.boundaryNote}</p>

      <button
        type="submit"
        className="mt-6 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-deepearth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deepearth"
      >
        {content.submitLabel}
      </button>
    </form>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  required = false,
  className = "",
}: FieldProps) {
  return (
    <label className={className}>
      <span className="text-sm font-medium text-deepearth">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-2xl border border-deepearth/15 bg-cloudwhite px-4 py-3 text-base text-deepearth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
      />
    </label>
  );
}
