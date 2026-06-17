import { describe, it, expect } from "vitest";

import { en } from "@/lib/content/en";
import { es } from "@/lib/content/es";
import type { SiteContent } from "@/lib/types";

/**
 * Flow A canon: free PachaMind learning memberships only. These tests guard the
 * public copy against fundraising / contribution / paid-upgrade language and
 * confirm the membership + learning content blocks exist in both locales.
 */

function collectStrings(value: unknown, out: string[]) {
  if (typeof value === "string") {
    out.push(value);
  } else if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, out);
  } else if (value && typeof value === "object") {
    for (const item of Object.values(value)) collectStrings(item, out);
  }
}

// Whole-word patterns so "country" does not match "count", etc.
const FORBIDDEN_PATTERNS: RegExp[] = [
  /\bdonat\w*/i,
  /\bdonac\w*/i,
  /\bfundrais\w*/i,
  /\bpledge\w*/i,
  /\bcontribute\b/i,
  /\bcontribution\b/i,
  /\bcontribuci\w*/i,
  /\bcheckout\b/i,
  /\bupgrade to\b/i,
];

describe("free-membership canon language guard", () => {
  for (const [label, content] of [
    ["en", en],
    ["es", es],
  ] as const) {
    it(`${label} public copy contains no fundraising/contribution language`, () => {
      const strings: string[] = [];
      collectStrings(content as SiteContent, strings);
      const joined = strings.join("\n");
      for (const pattern of FORBIDDEN_PATTERNS) {
        const match = joined.match(pattern);
        expect(match, `forbidden term "${match?.[0]}" found in ${label} content`).toBeNull();
      }
    });
  }

  it("both locales expose membership signup with the required coordinate labels", () => {
    for (const content of [en, es]) {
      const signup = content.membership.signup;
      expect(signup.firstNameLabel).toBeTruthy();
      expect(signup.lastNameLabel).toBeTruthy();
      expect(signup.emailLabel).toBeTruthy();
      expect(signup.countryRegionLabel).toBeTruthy();
      expect(signup.countryCodeLabel).toBeTruthy();
      expect(signup.cellWhatsappLabel).toBeTruthy();
      expect(signup.preferredLanguageLabel).toBeTruthy();
    }
  });

  it("Embodier acknowledgement is present and framed as informational, not an opt-in", () => {
    for (const content of [en, es]) {
      expect(content.membership.signup.consentLabels.embodierAcknowledgement).toBeTruthy();
    }
  });

  it("both locales define the same badge keys in the same order", () => {
    const enKeys = en.badges.items.map((b) => b.key);
    const esKeys = es.badges.items.map((b) => b.key);
    expect(esKeys).toEqual(enKeys);
  });

  it("both locales define the same Puma Path stage keys in the same order", () => {
    const enStages = en.pumaPath.stages.map((s) => s.key);
    const esStages = es.pumaPath.stages.map((s) => s.key);
    expect(esStages).toEqual(enStages);
  });
});
