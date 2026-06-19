import type {
  CommunicationPermission,
  ConsentChannel,
  ConsentPurpose,
  ConsentRecord,
  MembershipProfile,
} from "@/lib/types";

/**
 * Client-side mock store for the free learning membership prototype.
 *
 * IMPORTANT: This is a prototype. Membership profile and consent state are
 * stored ONLY in this browser's localStorage. Nothing is transmitted to any
 * server, no real messages are ever sent, and creating a membership here does
 * not create Embodier.ai commercial consent. Replacing this with a real
 * backend requires counsel review of wording, logging, privacy, and channel
 * consent. See docs/legal-counsel/pachamind-embodier-counsel-packet.md.
 */

export const MEMBERSHIP_STORAGE_KEY = "pachamind-membership-v1";

/** Bump when the signup consent copy changes, so records stay auditable. */
export const CONSENT_TEXT_VERSION = "2026-06-17";
export const PRIVACY_VERSION = "2026-06-17";
export const TERMS_VERSION = "2026-06-17";

export interface MembershipState {
  profile: MembershipProfile;
  /** Channel -> whether the member currently permits it. */
  permissions: Record<ConsentChannel, boolean>;
  /** Immutable audit trail of consent decisions (mock, local only). */
  consentRecords: ConsentRecord[];
  createdAt: string;
}

function canUseStorage(): boolean {
  return typeof window !== "undefined";
}

export function readMembershipState(): MembershipState | null {
  if (!canUseStorage()) {
    return null;
  }

  const raw = window.localStorage.getItem(MEMBERSHIP_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as MembershipState;
  } catch {
    return null;
  }
}

export function writeMembershipState(state: MembershipState): void {
  if (!canUseStorage()) {
    return;
  }
  window.localStorage.setItem(MEMBERSHIP_STORAGE_KEY, JSON.stringify(state));
}

export function clearMembershipState(): void {
  if (!canUseStorage()) {
    return;
  }
  window.localStorage.removeItem(MEMBERSHIP_STORAGE_KEY);
}

const PURPOSE_BY_CHANNEL: Record<ConsentChannel, ConsentPurpose> = {
  account: "membership-account",
  email: "educational",
  whatsapp: "educational",
  sms: "educational",
  "embodier-disclaimer": "boundary-acknowledgement",
};

/**
 * Build immutable consent records from the permission checkboxes at the moment
 * of submission. `sourceUrl` is captured from the current location when
 * available.
 */
export function buildConsentRecords(
  permissions: CommunicationPermission[],
  sourceUrl: string,
): ConsentRecord[] {
  const timestamp = new Date().toISOString();
  return permissions.map((permission) => ({
    channel: permission.channel,
    purpose: PURPOSE_BY_CHANNEL[permission.channel],
    sender: "PachaMind",
    consentTextVersion: CONSENT_TEXT_VERSION,
    checkboxState: permission.checked,
    timestamp,
    sourceUrl,
    privacyVersion: PRIVACY_VERSION,
    termsVersion: TERMS_VERSION,
    // ipAddress intentionally left undefined — never captured client-side.
  }));
}

export function createMembership(
  profile: MembershipProfile,
  permissions: CommunicationPermission[],
  sourceUrl: string,
): MembershipState {
  const permissionMap = Object.fromEntries(
    permissions.map((permission) => [permission.channel, permission.checked]),
  ) as Record<ConsentChannel, boolean>;

  const state: MembershipState = {
    profile,
    permissions: permissionMap,
    consentRecords: buildConsentRecords(permissions, sourceUrl),
    createdAt: new Date().toISOString(),
  };

  writeMembershipState(state);
  return state;
}

/**
 * Update channel permissions for an existing membership, appending fresh
 * consent records to the audit trail rather than mutating prior ones.
 */
export function updatePermissions(
  permissions: CommunicationPermission[],
  sourceUrl: string,
): MembershipState | null {
  const current = readMembershipState();
  if (!current) {
    return null;
  }

  const permissionMap = { ...current.permissions };
  for (const permission of permissions) {
    permissionMap[permission.channel] = permission.checked;
  }

  const updated: MembershipState = {
    ...current,
    permissions: permissionMap,
    consentRecords: [
      ...current.consentRecords,
      ...buildConsentRecords(permissions, sourceUrl),
    ],
  };

  writeMembershipState(updated);
  return updated;
}
