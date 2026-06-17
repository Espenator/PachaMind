import type { Language } from "@/lib/types";

/**
 * Flow A free learning membership data model.
 *
 * IMPORTANT (canon boundary): a PachaMind.org free learning membership does NOT
 * create Embodier.ai commercial consent. None of the types here may be used to
 * model paid membership, commercial CRM wiring, screening, booking, payment, or
 * Peru-pathway follow-up. See docs/strategy/pachamind-operating-architecture.md
 * and docs/compliance/flow-a-no-commerce-checklist.md.
 */

/** The approved membership-coordinate fields. No commercial fields permitted. */
export interface MembershipProfile {
  firstName: string;
  lastName: string;
  email: string;
  /** Country / region, e.g. "Peru" or "California, US". */
  countryRegion: string;
  /** Dialing country code, e.g. "+51". */
  countryCode: string;
  /** Cell / WhatsApp number (digits only, without country code). */
  cellWhatsapp: string;
  preferredLanguage: Language;
}

/** The channels a learner may consent to receive educational messages on. */
export type ConsentChannel = "account" | "email" | "whatsapp" | "sms";

/**
 * The purpose a consent record covers. Flow A is educational-only.
 * `commercial` is declared here ONLY so the type system can forbid it from ever
 * being granted; it must never appear as a grantable opt-in in the UI.
 */
export type ConsentPurpose = "account" | "educational";

/** One toggleable communication permission shown on the signup form. */
export interface CommunicationPermission {
  channel: ConsentChannel;
  purpose: ConsentPurpose;
  /** Whether ticking this box is required to create the membership. */
  required: boolean;
  /** Current checkbox state. */
  granted: boolean;
}

/**
 * An auditable record of a single consent decision. Captures the exact wording
 * and versions in force at the moment of consent so the decision is provable
 * later. No real messages are sent in Flow A; this is logged to a local mock
 * store only.
 */
export interface ConsentRecord {
  channel: ConsentChannel;
  purpose: ConsentPurpose;
  /** Verbatim checkbox label the learner saw and agreed to. */
  consentText: string;
  /** Version string of the consent wording. */
  consentTextVersion: string;
  /** Whether the box was checked. */
  checkboxState: boolean;
  /** ISO 8601 timestamp of the decision. */
  timestamp: string;
  /** Page URL where consent was captured. */
  sourceUrl: string;
  /** Version of the privacy policy in force. */
  privacyVersion: string;
  /** Version of the terms in force. */
  termsVersion: string;
  /** The PachaMind.org entity acting as sender. Never Embodier.ai in Flow A. */
  sender: string;
  /**
   * Placeholder only — not captured client-side and never populated in this
   * prototype. Present so a future server-side capture has a typed home.
   */
  ipAddress?: string;
}

/** The full mock membership submission, stored client-side only in Flow A. */
export interface MembershipSubmission {
  profile: MembershipProfile;
  consents: ConsentRecord[];
  /** ISO 8601 timestamp of submission. */
  submittedAt: string;
}
