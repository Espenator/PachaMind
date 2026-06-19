export const languages = ["en", "es"] as const;

export type Language = (typeof languages)[number];

/**
 * A single quiz question attached to a lesson. Prototype quizzes are
 * single-answer multiple choice; correctness is checked client-side only.
 */
export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  /** Index into `options` of the correct answer. */
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  slug: string;
  topic?: string;
  title: string;
  kicker: string;
  duration: string;
  /** Estimated minutes as a number, for progress math and analytics. */
  estimatedMinutes: number;
  /** Puma Path stage this lesson belongs to (stage key, e.g. "semilla"). */
  stage: PumaPathStageKey;
  description: string;
  extendedDescription: string;
  learningNotes: string[];
  reflectionPrompt: string;
  /** Quiz shown on the lesson page (one question in the prototype). */
  quiz?: QuizQuestion;
  /** Badge key awarded when this lesson is completed, if any. */
  badgeTrigger?: string;
  /** Development-only note on language to avoid for this lesson. */
  forbiddenLanguageNote?: string;
  youtubeId: string;
  mediaStatus?: "NEEDS_REAL_VIDEO";
  mediaNote?: string;
}

/** The five Puma Path stages, in order. */
export const pumaPathStageKeys = [
  "semilla",
  "raiz",
  "tallo",
  "flor",
  "puma",
] as const;

export type PumaPathStageKey = (typeof pumaPathStageKeys)[number];

export interface PumaPathStage {
  key: PumaPathStageKey;
  /** Translated stage name shown to learners (e.g. "Semilla"). */
  title: string;
  /** Short English/Spanish gloss of the stage name (e.g. "Seed"). */
  meaning: string;
  body: string;
  image: string;
}

/** A learning badge a member can earn. Cosmetic recognition only. */
export interface Badge {
  key: string;
  title: string;
  description: string;
  /** Stage this badge is associated with, for grouping in the UI. */
  stage: PumaPathStageKey;
}

/**
 * Local, mock representation of a member's learning progress. In the
 * prototype this lives only in the browser (localStorage); no server.
 */
export interface UserProgress {
  completedLessonSlugs: string[];
  earnedBadgeKeys: string[];
  lastOpenedLessonSlug?: string;
}

/**
 * Approved membership-coordinate fields for a free learning membership.
 * These are collected for educational membership administration only and
 * never create Embodier.ai commercial consent.
 */
export interface MembershipProfile {
  firstName: string;
  lastName: string;
  email: string;
  /** Country / region the learner is in (free text in the prototype). */
  countryRegion: string;
  /** Telephone country calling code, e.g. "+51". */
  countryCode: string;
  /** Cell / WhatsApp number. */
  cellWhatsapp: string;
  preferredLanguage: Language;
}

/** Channels a member may separately permit educational communication on. */
export type ConsentChannel =
  | "account"
  | "email"
  | "whatsapp"
  | "sms"
  | "embodier-disclaimer";

/** Why a given consent is being recorded. */
export type ConsentPurpose =
  | "membership-account"
  | "educational"
  | "boundary-acknowledgement";

/**
 * The runtime state of a single consent checkbox in the signup /
 * preferences forms.
 */
export interface CommunicationPermission {
  channel: ConsentChannel;
  purpose: ConsentPurpose;
  /** Whether this checkbox may be required to create the membership. */
  required: boolean;
  /** Whether the learner has checked it. Optional boxes default false. */
  checked: boolean;
  /** Exact consent text the learner saw, for the audit record. */
  label: string;
}

/**
 * An immutable record of a consent decision, suitable for later
 * counsel-reviewed logging. In the prototype these are stored in a local
 * mock object only — nothing is transmitted.
 */
export interface ConsentRecord {
  channel: ConsentChannel;
  purpose: ConsentPurpose;
  /** Sender entity for this consent — always PachaMind in Flow A. */
  sender: "PachaMind";
  /** The consent copy version the learner agreed to. */
  consentTextVersion: string;
  /** True if the box was checked at the moment of submission. */
  checkboxState: boolean;
  /** ISO timestamp of the decision. */
  timestamp: string;
  /** URL the consent was captured from. */
  sourceUrl: string;
  privacyVersion: string;
  termsVersion: string;
  /** Placeholder only — never populated in the client-side prototype. */
  ipAddress?: string;
}

export interface SiteContent {
  locale: Language;
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    eyebrow: string;
    promise: string;
    traditionHolderLabel: string;
    traditionHolderName: string;
    disclaimer: string;
  };
  nav: {
    home: string;
    learn: string;
    library: string;
    pumaPath: string;
    dashboard: string;
    reflections: string;
    about: string;
    mallku: string;
    contact: string;
    conservation: string;
    signup: string;
    preferences: string;
    privacy: string;
    terms: string;
    accessibility: string;
    english: string;
    spanish: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    languageToggleLabel: string;
    mainNavLabel: string;
    joinCta: string;
    complianceNote: string;
  };
  home: {
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    membershipCta: string;
    featuredLabel: string;
    sections: Array<{
      title: string;
      body: string;
      image: string;
    }>;
  };
  library: {
    title: string;
    intro: string;
    lessonLabel: string;
    watchLabel: string;
    notesLabel: string;
    openLessonLabel: string;
    searchPlaceholder: string;
    filterAllLabel: string;
    emptyState: string;
    topics: Record<string, string>;
  };
  lessonPage: {
    watchHeading: string;
    notesHeading: string;
    transcriptHeading: string;
    transcriptToggleOpen: string;
    transcriptToggleClose: string;
    transcriptPlaceholder: string;
    reflectionHeading: string;
    backToLibrary: string;
    markComplete: string;
    markIncomplete: string;
    completedLabel: string;
    progressHint: string;
    nextLessonLabel: string;
    dashboardLabel: string;
    videoComingSoonLabel: string;
    stageLabel: string;
    quizHeading: string;
    quizSubmitLabel: string;
    quizCorrectLabel: string;
    quizIncorrectLabel: string;
    quizTryAgainLabel: string;
    badgeEarnedLabel: string;
  };
  dashboard: {
    title: string;
    intro: string;
    completedLabel: string;
    percentLabel: string;
    totalLabel: string;
    continueLearning: string;
    allComplete: string;
    completedState: string;
    notStartedState: string;
    lastWatchedLabel: string;
    topicsHeading: string;
    resetLabel: string;
    resetConfirmHeading: string;
    resetConfirmLabel: string;
    resetCancelLabel: string;
    certificateTitle: string;
    certificateIntro: string;
    certificateBody: string;
    certificateNameLabel: string;
    certificateNamePlaceholder: string;
    certificatePrintLabel: string;
    greeting: string;
    guestGreeting: string;
    guestIntro: string;
    guestCta: string;
    stageHeading: string;
    badgesHeading: string;
    badgeEarnedLabel: string;
    badgeLockedLabel: string;
    preferencesCta: string;
    reflectionsHeading: string;
    reflectionsBody: string;
    reflectionsCta: string;
  };
  about: {
    title: string;
    intro: string;
    missionHeading: string;
    missionBody: string;
    storyHeading: string;
    storyBody: string;
    traditionHolderHeading: string;
    traditionHolderBody: string;
    valuesHeading: string;
    values: string[];
  };
  footer: {
    credit: string;
    mission: string;
  };
  contact: {
    title: string;
    intro: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    successHeading: string;
    successBody: string;
    validationName: string;
    validationEmail: string;
    validationMessage: string;
    noteLabel: string;
  };
  pumaPath: {
    title: string;
    intro: string;
    stagesHeading: string;
    progressLabel: string;
    noticeMission: string;
    attributionNote: string;
    stageLabel: string;
    completedLabel: string;
    notStartedLabel: string;
    openStageLabel: string;
    revisitLabel: string;
    stages: PumaPathStage[];
  };
  lessons: Lesson[];
  conservation: {
    title: string;
    intro: string;
    attributionLabel: string;
    principlesHeading: string;
    reflectionHeading: string;
    reflectionPrompt: string;
    bands: Array<{
      title: string;
      body: string;
      image: string;
    }>;
    principles: string[];
  };
  reflections: {
    title: string;
    intro: string;
    promptsHeading: string;
    noteLabel: string;
    notePlaceholder: string;
    saveLabel: string;
    savedLabel: string;
    clearLabel: string;
    storageHint: string;
    attributionLabel: string;
    parallaxSections: Array<{
      title: string;
      body: string;
      image: string;
    }>;
  };
  badges: Badge[];
  learn: {
    title: string;
    intro: string;
    startHeading: string;
    startBody: string;
    startCta: string;
    pathHeading: string;
    pathBody: string;
    pathCta: string;
    membershipHeading: string;
    membershipBody: string;
    membershipCta: string;
  };
  mallku: {
    title: string;
    intro: string;
    roleHeading: string;
    roleBody: string;
    attributionHeading: string;
    attributionBody: string;
    lessonsHeading: string;
    lessonsBody: string;
    verificationNote: string;
  };
  signup: {
    title: string;
    intro: string;
    firstNameLabel: string;
    lastNameLabel: string;
    emailLabel: string;
    countryRegionLabel: string;
    countryRegionPlaceholder: string;
    countryCodeLabel: string;
    countryCodePlaceholder: string;
    cellWhatsappLabel: string;
    cellWhatsappPlaceholder: string;
    preferredLanguageLabel: string;
    permissionsHeading: string;
    permissionsIntro: string;
    permissions: {
      account: string;
      email: string;
      whatsapp: string;
      sms: string;
      embodierDisclaimer: string;
    };
    submitLabel: string;
    successHeading: string;
    successBody: string;
    successDashboardCta: string;
    requiredNote: string;
    prototypeNote: string;
    boundaryNote: string;
    validationFirstName: string;
    validationLastName: string;
    validationEmail: string;
    validationCountryRegion: string;
    validationCellWhatsapp: string;
    validationAccountConsent: string;
  };
  preferences: {
    title: string;
    intro: string;
    profileHeading: string;
    channelsHeading: string;
    channelsIntro: string;
    saveLabel: string;
    savedLabel: string;
    noMembershipHeading: string;
    noMembershipBody: string;
    noMembershipCta: string;
    boundaryNote: string;
    consentLogHeading: string;
    consentLogIntro: string;
    consentLogEmpty: string;
  };
  legalPages: {
    privacy: LegalPageContent;
    terms: LegalPageContent;
    accessibility: LegalPageContent;
  };
}

export interface LegalPageContent {
  title: string;
  intro: string;
  version: string;
  lastUpdated: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
}
