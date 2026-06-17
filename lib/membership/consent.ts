import type {
  ConsentChannel,
  ConsentPurpose,
  ConsentRecord,
  MembershipSubmission,
} from "@/lib/membership/types";

/**
 * Versions in force for consent wording, privacy policy, and terms. Bump these
 * whenever the corresponding text changes so historical ConsentRecords remain
 * attributable to the exact wording the learner agreed to.
 */
export const CONSENT_TEXT_VERSION = "2026-06-17";
export const PRIVACY_VERSION = "2026-06-17";
export const TERMS_VERSION = "2026-06-17";

/** The PachaMind.org entity acting as sender. Never Embodier.ai during Flow A. */
export const CONSENT_SENDER = "PachaMind.org";

export const MEMBERSHIP_STORAGE_KEY = "pachamind-membership-v1";

/** Definition of one consent checkbox shown on the signup form. */
export interface ConsentCheckboxDef {
  channel: ConsentChannel;
  purpose: ConsentPurpose;
  required: boolean;
}

/**
 * The five Flow A consent checkboxes, in display order. The Embodier.ai item is
 * an acknowledgement (informational), NOT a grantable commercial opt-in — it has
 * no channel/purpose that could ever be used to send commercial messages.
 */
export const CONSENT_CHECKBOXES: ConsentCheckboxDef[] = [
  { channel: "account", purpose: "account", required: true },
  { channel: "email", purpose: "educational", required: false },
  { channel: "whatsapp", purpose: "educational", required: false },
  { channel: "sms", purpose: "educational", required: false },
];

function canUseStorage() {
  return typeof window !== "undefined";
}

/**
 * Builds an auditable ConsentRecord for a single checkbox decision. `consentText`
 * is the verbatim label the learner saw.
 */
export function buildConsentRecord(params: {
  channel: ConsentChannel;
  purpose: ConsentPurpose;
  consentText: string;
  checkboxState: boolean;
  sourceUrl: string;
}): ConsentRecord {
  return {
    channel: params.channel,
    purpose: params.purpose,
    consentText: params.consentText,
    consentTextVersion: CONSENT_TEXT_VERSION,
    checkboxState: params.checkboxState,
    timestamp: new Date().toISOString(),
    sourceUrl: params.sourceUrl,
    privacyVersion: PRIVACY_VERSION,
    termsVersion: TERMS_VERSION,
    sender: CONSENT_SENDER,
  };
}

/**
 * Persists a mock membership submission to localStorage only. No network call,
 * no real message, no Embodier.ai handoff. Flow A is a prototype.
 */
export function saveMembershipSubmission(submission: MembershipSubmission) {
  if (!canUseStorage()) {
    return;
  }
  window.localStorage.setItem(
    MEMBERSHIP_STORAGE_KEY,
    JSON.stringify(submission),
  );
}

export function readMembershipSubmission(): MembershipSubmission | null {
  if (!canUseStorage()) {
    return null;
  }
  const raw = window.localStorage.getItem(MEMBERSHIP_STORAGE_KEY);
  if (!raw) {
    return null;
  }
  try {
    return JSON.parse(raw) as MembershipSubmission;
  } catch {
    return null;
  }
}

export function clearMembershipSubmission() {
  if (!canUseStorage()) {
    return;
  }
  window.localStorage.removeItem(MEMBERSHIP_STORAGE_KEY);
}
