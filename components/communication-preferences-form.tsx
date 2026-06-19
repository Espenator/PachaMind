"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ConsentCheckbox } from "@/components/consent-checkbox";
import { ConsentRecordDebugPanel } from "@/components/consent-record-debug-panel";
import {
  readMembershipState,
  updatePermissions,
  type MembershipState,
} from "@/lib/membership";
import type {
  CommunicationPermission,
  ConsentChannel,
  SiteContent,
} from "@/lib/types";

interface CommunicationPreferencesFormProps {
  content: SiteContent["preferences"];
  permissionLabels: SiteContent["signup"]["permissions"];
  signupHref: string;
}

type OptionalChannel = "email" | "whatsapp" | "sms";

export function CommunicationPreferencesForm({
  content,
  permissionLabels,
  signupHref,
}: CommunicationPreferencesFormProps) {
  const [membership, setMembership] = useState<MembershipState | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [channels, setChannels] = useState<Record<OptionalChannel, boolean>>({
    email: false,
    whatsapp: false,
    sms: false,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    function sync() {
      const state = readMembershipState();
      setMembership(state);
      if (state) {
        setChannels({
          email: state.permissions.email ?? false,
          whatsapp: state.permissions.whatsapp ?? false,
          sms: state.permissions.sms ?? false,
        });
      }
      setLoaded(true);
    }
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  function toggle(channel: ConsentChannel, checked: boolean) {
    setChannels((prev) => ({ ...prev, [channel as OptionalChannel]: checked }));
    setSaved(false);
  }

  function handleSave(event: React.FormEvent) {
    event.preventDefault();
    const permissions: CommunicationPermission[] = [
      {
        channel: "email",
        purpose: "educational",
        required: false,
        checked: channels.email,
        label: permissionLabels.email,
      },
      {
        channel: "whatsapp",
        purpose: "educational",
        required: false,
        checked: channels.whatsapp,
        label: permissionLabels.whatsapp,
      },
      {
        channel: "sms",
        purpose: "educational",
        required: false,
        checked: channels.sms,
        label: permissionLabels.sms,
      },
    ];
    const sourceUrl =
      typeof window !== "undefined" ? window.location.href : signupHref;
    const updated = updatePermissions(permissions, sourceUrl);
    if (updated) {
      setMembership(updated);
      setSaved(true);
    }
  }

  if (!loaded) {
    return null;
  }

  if (!membership) {
    return (
      <div className="documentary-card p-8 lg:p-10">
        <h2 className="headline-font text-3xl text-deepearth">
          {content.noMembershipHeading}
        </h2>
        <p className="mt-4 text-lg leading-8 text-stonegray">
          {content.noMembershipBody}
        </p>
        <Link
          href={signupHref}
          className="mt-6 inline-flex rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-deepearth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deepearth"
        >
          {content.noMembershipCta}
        </Link>
      </div>
    );
  }

  const { profile } = membership;

  return (
    <div className="flex flex-col gap-8">
      <section className="documentary-card p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-stonegray">
          {content.profileHeading}
        </p>
        <p className="headline-font mt-3 text-2xl text-deepearth">
          {profile.firstName} {profile.lastName}
        </p>
        <p className="mt-1 text-sm text-stonegray">{profile.email}</p>
        <p className="mt-1 text-sm text-stonegray">
          {profile.countryRegion}
          {profile.cellWhatsapp
            ? ` · ${profile.countryCode} ${profile.cellWhatsapp}`
            : ""}
        </p>
      </section>

      <form onSubmit={handleSave} className="documentary-card p-8">
        <h2 className="headline-font text-2xl text-deepearth">
          {content.channelsHeading}
        </h2>
        <p className="mt-2 text-sm leading-6 text-stonegray">
          {content.channelsIntro}
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <ConsentCheckbox
            channel="email"
            label={permissionLabels.email}
            checked={channels.email}
            onChange={toggle}
          />
          <ConsentCheckbox
            channel="whatsapp"
            label={permissionLabels.whatsapp}
            checked={channels.whatsapp}
            onChange={toggle}
          />
          <ConsentCheckbox
            channel="sms"
            label={permissionLabels.sms}
            checked={channels.sms}
            onChange={toggle}
          />
        </div>

        <p className="mt-6 text-sm font-semibold text-deepearth">
          {content.boundaryNote}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <button
            type="submit"
            className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-deepearth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deepearth"
          >
            {content.saveLabel}
          </button>
          {saved ? (
            <p role="status" aria-live="polite" className="text-sm font-semibold text-skyblue">
              {content.savedLabel}
            </p>
          ) : null}
        </div>
      </form>

      <ConsentRecordDebugPanel
        heading={content.consentLogHeading}
        intro={content.consentLogIntro}
        emptyLabel={content.consentLogEmpty}
        records={membership.consentRecords}
      />
    </div>
  );
}
