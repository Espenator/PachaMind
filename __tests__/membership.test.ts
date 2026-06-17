import { describe, it, expect, beforeEach } from "vitest";

import { trackEvent, ALLOWED_EVENTS, FORBIDDEN_EVENTS } from "@/lib/analytics/events";
import {
  CONSENT_CHECKBOXES,
  buildConsentRecord,
  saveMembershipSubmission,
  readMembershipSubmission,
  clearMembershipSubmission,
} from "@/lib/membership/consent";
import type { MembershipSubmission } from "@/lib/membership/types";

describe("analytics event guard", () => {
  it("allows every educational event", () => {
    for (const event of ALLOWED_EVENTS) {
      expect(() => trackEvent(event)).not.toThrow();
    }
  });

  it("forbidden list includes payment and contribution interest", () => {
    expect(FORBIDDEN_EVENTS).toContain("payment_interest");
    expect(FORBIDDEN_EVENTS).toContain("contribution_interest");
  });

  it("refuses any forbidden commercial event at runtime", () => {
    for (const event of FORBIDDEN_EVENTS) {
      // @ts-expect-error forbidden events are intentionally outside AnalyticsEvent
      expect(() => trackEvent(event)).toThrow();
    }
  });
});

describe("consent records", () => {
  it("requires the account checkbox and leaves optional channels off by default", () => {
    const account = CONSENT_CHECKBOXES.find((c) => c.channel === "account");
    expect(account?.required).toBe(true);
    for (const channel of ["email", "whatsapp", "sms"] as const) {
      const def = CONSENT_CHECKBOXES.find((c) => c.channel === channel);
      expect(def?.required ?? false).toBe(false);
    }
  });

  it("stamps an auditable record with versions and timestamp", () => {
    const record = buildConsentRecord({
      channel: "email",
      purpose: "educational",
      consentText: "I agree to educational emails.",
      checkboxState: true,
      sourceUrl: "https://pachamind.org/en/signup",
    });
    expect(record.channel).toBe("email");
    expect(record.checkboxState).toBe(true);
    expect(record.consentTextVersion).toBeTruthy();
    expect(record.privacyVersion).toBeTruthy();
    expect(record.termsVersion).toBeTruthy();
    expect(record.sender).toBeTruthy();
    expect(() => new Date(record.timestamp).toISOString()).not.toThrow();
  });
});

describe("membership submission storage", () => {
  beforeEach(() => {
    clearMembershipSubmission();
  });

  it("round-trips a submission through localStorage", () => {
    const submission: MembershipSubmission = {
      profile: {
        firstName: "Killa",
        lastName: "Wayra",
        email: "killa@example.org",
        countryRegion: "Peru",
        countryCode: "+51",
        cellWhatsapp: "999000111",
        preferredLanguage: "es",
      },
      consents: [],
      submittedAt: new Date().toISOString(),
    };
    saveMembershipSubmission(submission);
    const read = readMembershipSubmission();
    expect(read?.profile.firstName).toBe("Killa");
    expect(read?.profile.preferredLanguage).toBe("es");
  });

  it("returns null when nothing is stored", () => {
    expect(readMembershipSubmission()).toBeNull();
  });
});
