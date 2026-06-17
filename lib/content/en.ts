import type { SiteContent } from "@/lib/types";

export const en: SiteContent = {
  locale: "en",
  meta: {
    title: "PachaMind",
    description:
      "A free, bilingual Andean learning membership with video lessons, reflections, quizzes, the Puma Path, and learning badges.",
  },
  brand: {
    name: "PachaMind",
    eyebrow: "Free Andean learning membership",
    promise: "A free PachaMind learning membership",
    traditionHolderLabel: "Tradition-holder",
    traditionHolderName: "Mallku Aribalo",
    disclaimer:
      "These lessons are offered for cultural learning and reflection. They do not replace medical, therapeutic, or legal guidance.",
  },
  nav: {
    home: "Home",
    learn: "Learn",
    library: "Library",
    pumaPath: "Puma Path",
    dashboard: "Dashboard",
    reflections: "Reflections",
    about: "About",
    mallku: "Mallku Aribalo",
    contact: "Contact",
    conservation: "Conservation",
    signup: "Join free",
    preferences: "Preferences",
    privacy: "Privacy",
    terms: "Terms",
    accessibility: "Accessibility",
    english: "English",
    spanish: "Español",
    skipToContent: "Skip to main content",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    languageToggleLabel: "Choose language",
    mainNavLabel: "Main navigation",
    joinCta: "Create your free learning membership",
    complianceNote:
      "PachaMind offers free learning memberships only — no cost, no sales, only learning.",
  },
  home: {
    title: "Enter a mountain-paced library of listening, reciprocity, and remembrance.",
    intro:
      "PachaMind is a free bilingual learning membership shaped like a documentary field notebook: spacious, visual, and grounded in community reflection.",
    primaryCta: "Explore the library",
    secondaryCta: "View your dashboard",
    membershipCta: "Begin the Puma Path — create your free membership",
    featuredLabel: "Featured lesson",
    sections: [
      {
        title: "Documentary pacing",
        body: "Slow visuals, layered notes, and grounded prompts help each lesson feel like a field visit instead of a rushed scroll.",
        image: "/images/andes/andes-iss59-range.jpg",
      },
      {
        title: "Bilingual access",
        body: "English and Spanish stay in sync so every reflection, lesson note, and next step carries the same meaning across both routes.",
        image: "/images/andes/andes-iss64-range.jpg",
      },
      {
        title: "A real learning membership",
        body: "Create a free learning account to follow the Puma Path, save your progress, complete reflections, and earn learning badges.",
        image: "/images/andes/andes-western-slope-aster.jpg",
      },
    ],
  },
  library: {
    title: "Lesson library",
    intro:
      "Watch directly from the library, then open the full lesson for richer notes, reflection prompts, a short quiz, and progress tracking.",
    lessonLabel: "Lesson",
    watchLabel: "Watch now",
    notesLabel: "Learning notes",
    openLessonLabel: "Open full lesson",
    searchPlaceholder: "Search lessons…",
    filterAllLabel: "All",
    emptyState: "No lessons match your search. Try a different term or topic.",
    topics: {
      listening: "Listening",
      reciprocity: "Reciprocity",
      ritual: "Ritual",
      stewardship: "Stewardship",
      cosmovision: "Cosmovision",
      integration: "Integration",
    },
  },
  lessonPage: {
    watchHeading: "Watch the lesson",
    notesHeading: "Learning notes",
    transcriptHeading: "Transcript",
    transcriptToggleOpen: "Show transcript",
    transcriptToggleClose: "Hide transcript",
    transcriptPlaceholder:
      "A full bilingual transcript will appear here once the lesson video is filmed and captioned.",
    reflectionHeading: "Reflection prompt",
    backToLibrary: "Back to library",
    markComplete: "Mark lesson complete",
    markIncomplete: "Mark lesson incomplete",
    completedLabel: "Saved in this browser as completed",
    progressHint:
      "Progress is saved to your free learning membership on this device. No payment is ever required.",
    nextLessonLabel: "Continue learning",
    dashboardLabel: "Go to dashboard",
    videoComingSoonLabel: "Video coming soon",
    stageLabel: "Puma Path stage",
    quizHeading: "Check your understanding",
    quizSubmitLabel: "Check answer",
    quizCorrectLabel: "Correct",
    quizIncorrectLabel: "Not quite — try again",
    quizTryAgainLabel: "Try again",
    badgeEarnedLabel: "Learning badge earned",
  },
  dashboard: {
    title: "Your learning dashboard",
    intro:
      "Welcome back. Continue where you left off, follow your Puma Path stage, and see the learning badges you have earned.",
    completedLabel: "Lessons completed",
    percentLabel: "Progress",
    totalLabel: "Total lessons",
    continueLearning: "Continue learning",
    allComplete:
      "You have completed every lesson in this browser. Revisit any lesson anytime.",
    completedState: "Completed",
    notStartedState: "Not completed yet",
    lastWatchedLabel: "Last watched",
    topicsHeading: "Progress by topic",
    resetLabel: "Reset progress",
    resetConfirmHeading: "Reset all progress?",
    resetConfirmLabel: "Yes, reset",
    resetCancelLabel: "Cancel",
    certificateTitle: "Certificate of Completion",
    certificateIntro: "You have completed all lessons in this browser.",
    certificateBody:
      "This is a free acknowledgment of your learning journey through PachaMind. Tradition-holder: Mallku Aribalo. A free learning membership — only learning.",
    certificateNameLabel: "Your name (optional, stored only in this browser)",
    certificateNamePlaceholder: "Enter your name",
    certificatePrintLabel: "Print certificate",
    greeting: "Welcome back",
    guestGreeting: "Welcome",
    guestIntro:
      "You can learn freely without an account. Create a free learning membership to save your progress and earn learning badges across devices.",
    guestCta: "Create your free learning membership",
    stageHeading: "Your Puma Path stage",
    badgesHeading: "Learning badges",
    badgeEarnedLabel: "Earned",
    badgeLockedLabel: "Not yet earned",
    preferencesCta: "Communication preferences",
    reflectionsHeading: "Your reflections",
    reflectionsBody:
      "Your private reflections are saved only in this browser. Open the reflections space to read or add to them.",
    reflectionsCta: "Open reflections",
  },
  about: {
    title: "About this learning space",
    intro:
      "PachaMind preserves a sacred documentary atmosphere: cinematic pacing, earth-toned visuals, and reflective study offered as a free learning membership.",
    missionHeading: "Our mission",
    missionBody:
      "PachaMind exists to carry Andean teachings into a freely accessible digital space without distortion or pressure. Every design decision — slow pacing, visual spaciousness, free access — is a direct expression of that commitment.",
    storyHeading: "How this space came to be",
    storyBody:
      "PachaMind grew out of a desire to honour living traditions and the people who keep them. The platform was shaped around the teachings of Mallku Aribalo, who shared them so that they could travel respectfully beyond their original geography and reach anyone ready to listen carefully. Nothing here is sold or extracted from its context.",
    traditionHolderHeading:
      "Mallku Aribalo — tradition-holder and shamanic teacher",
    traditionHolderBody:
      "Mallku Aribalo is an Andean shamanic teacher and tradition-holder whose knowledge of cosmological practice, community reciprocity, and sacred attention forms the living foundation of every lesson in this space. His teachings are offered here for cultural learning and reflection, and are credited to him throughout the experience.",
    valuesHeading: "Grounding commitments",
    values: [
      "A free educational membership — only learning, no cost.",
      "Mallku Aribalo is credited as tradition-holder throughout the experience.",
      "Lessons support cultural learning and reflection without therapeutic or medical claims.",
    ],
  },
  footer: {
    credit: "Tradition-holder: Mallku Aribalo",
    mission: "A free learning membership — only learning",
  },
  contact: {
    title: "Get in touch",
    intro:
      "Questions, translations, or feedback about the learning space — this form opens a message in your default email app. No data is collected on this site.",
    nameLabel: "Your name",
    namePlaceholder: "How you would like to be addressed",
    emailLabel: "Your email address",
    emailPlaceholder: "So we can reply to you",
    messageLabel: "Your message",
    messagePlaceholder:
      "Questions, reflections, or feedback — write as freely as you like",
    submitLabel: "Open in email app",
    successHeading: "Message composed",
    successBody:
      "Your email app has opened with the message pre-filled. Send it whenever you are ready.",
    validationName: "Please enter your name.",
    validationEmail: "Please enter a valid email address.",
    validationMessage: "Please write a message before sending.",
    noteLabel:
      "This form opens a mailto: link in your email app. No information is transmitted to or stored by this website.",
  },
  pumaPath: {
    title: "The Puma Path",
    intro:
      "A five-stage learning progression shaped by Andean teachings, from Semilla (seed) to Puma. Move through each stage at your own pace, carry nothing but attention, and let each lesson deepen the next.",
    stagesHeading: "Five stages of learning",
    progressLabel: "Your learning progression",
    noticeMission: "A free learning membership — only learning",
    attributionNote:
      "The Puma Path is drawn from the teachings of Mallku Aribalo, Andean tradition-holder and shamanic teacher. All five stages are offered here for cultural learning and reflection — not as an initiation, qualification, or therapeutic programme.",
    stageLabel: "Stage",
    completedLabel: "Completed",
    notStartedLabel: "Not yet visited",
    openStageLabel: "Begin this stage",
    revisitLabel: "Revisit this stage",
    stages: [
      {
        key: "semilla",
        title: "Semilla",
        meaning: "Seed",
        body: "Arrive before you interpret. The first stage trains attention to receive before it reacts — learning to notice weather, rhythm, silence, and the space between words.",
        image: "/images/andes/andes-iss59-range.jpg",
      },
      {
        key: "raiz",
        title: "Raíz",
        meaning: "Root",
        body: "Sink roots into context. This stage introduces the living universe, the Three Pachas, and the tradition-holder whose knowledge anchors every lesson — the ground that everything else grows from.",
        image: "/images/andes/machu-picchu-inti-punku.jpg",
      },
      {
        key: "tallo",
        title: "Tallo",
        meaning: "Stem",
        body: "Grow upward through practice. Reciprocity, ritual attention, Ayni, and the Five Andean Values become a daily discipline — steady care that sustains belonging over time.",
        image: "/images/andes/machu-picchu-urubamba-canyon.jpg",
      },
      {
        key: "flor",
        title: "Flor",
        meaning: "Flower",
        body: "Hold what you have learned lightly and faithfully. This stage turns to sacred sites, stewardship, and how teachings travel without losing their roots — and how credit, context, and humility travel with them.",
        image: "/images/andes/andes-western-slope-aster.jpg",
      },
      {
        key: "puma",
        title: "Puma",
        meaning: "Puma",
        body: "Let every stage move together. Puma is not a final destination but a continuing return: each practice renews the others when held as a whole rather than a sequence.",
        image: "/images/andes/andes-iss47-mountain-road.jpg",
      },
    ],
  },
  badges: [
    {
      key: "first-listening",
      title: "First Listening",
      description: "Completed your first lesson and began the Puma Path.",
      stage: "semilla",
    },
    {
      key: "rooted",
      title: "Rooted",
      description: "Completed a foundational cosmovision lesson in the Raíz stage.",
      stage: "raiz",
    },
    {
      key: "reciprocity-practice",
      title: "Reciprocity in Practice",
      description: "Completed a Tallo-stage lesson on reciprocity and values.",
      stage: "tallo",
    },
    {
      key: "steward",
      title: "Careful Steward",
      description: "Completed a Flor-stage lesson on sacred sites and stewardship.",
      stage: "flor",
    },
    {
      key: "integration",
      title: "Path of Integration",
      description: "Completed an integration lesson in the Puma stage.",
      stage: "puma",
    },
  ],
  learn: {
    title: "Start learning",
    intro:
      "Three ways into PachaMind: begin a lesson, follow the Puma Path, or create your free learning membership to save everything.",
    startHeading: "Begin with a lesson",
    startBody:
      "Open the library and watch any lesson. Each one carries learning notes, a transcript, a reflection prompt, and a short quiz.",
    startCta: "Open the library",
    pathHeading: "Follow the Puma Path",
    pathBody:
      "Move from Semilla to Puma at your own pace. The path is a learning map — never an initiation, ceremony, or qualification.",
    pathCta: "View the Puma Path",
    membershipHeading: "Save your progress",
    membershipBody:
      "Create your free learning membership to follow the Puma Path, save your progress, complete reflections, earn learning badges, and choose how PachaMind may communicate with you about your learning.",
    membershipCta: "Create your free learning membership",
  },
  mallku: {
    title: "Mallku Aribalo",
    intro:
      "Tradition-holder and Andean shamanic teacher whose knowledge forms the living foundation of every PachaMind lesson.",
    roleHeading: "His role",
    roleBody:
      "Mallku Aribalo (also written James Arévalo Merejildo) is credited throughout PachaMind as an Andean shamanic teacher and tradition-holder. Shamanic teacher here refers to a cultural and traditional role; no therapeutic or medical claims are made.",
    attributionHeading: "Why attribution matters",
    attributionBody:
      "Crediting the source is itself an act of reciprocity. Knowing who holds a teaching is inseparable from understanding the teaching, and naming the tradition-holder keeps the knowledge connected to the community that carries it.",
    lessonsHeading: "Where to begin",
    lessonsBody:
      "The lesson “Mallku Aribalo: Tradition-Holder and Andean Teacher” introduces his role in depth. Every other lesson is grounded in the tradition he carries.",
    verificationNote:
      "Biographical details should be verified against authorised sources before publication; avoid sensationalised imagery or unverified claims.",
  },
  signup: {
    title: "Create your free PachaMind learning membership",
    intro:
      "Your membership lets you follow the Puma Path, save your progress, receive lesson reminders, complete reflections, and choose how PachaMind may communicate with you about your learning.",
    firstNameLabel: "First name",
    lastNameLabel: "Last name",
    emailLabel: "Email",
    countryRegionLabel: "Country / region",
    countryRegionPlaceholder: "e.g. Peru, or California, USA",
    countryCodeLabel: "Country code",
    countryCodePlaceholder: "e.g. +51",
    cellWhatsappLabel: "Cell / WhatsApp number",
    cellWhatsappPlaceholder: "Your mobile number",
    preferredLanguageLabel: "Preferred language",
    permissionsHeading: "Communication permissions",
    permissionsIntro:
      "These permissions are separate. Choose only the ones you want. Optional boxes start unchecked, and no real messages are sent from this prototype.",
    permissions: {
      account:
        "I agree to create a free PachaMind learning membership and receive account-related messages.",
      email: "I agree to receive PachaMind educational emails.",
      whatsapp: "I agree to receive PachaMind educational WhatsApp messages.",
      sms: "I agree to receive PachaMind educational SMS messages if this channel becomes available.",
      embodierDisclaimer:
        "I understand this does not enroll me in Embodier.ai commercial communications.",
    },
    submitLabel: "Create my free learning membership",
    successHeading: "Welcome to PachaMind",
    successBody:
      "Your free learning membership is saved in this browser. Your progress and reflections will now be associated with it.",
    successDashboardCta: "Go to your dashboard",
    requiredNote:
      "The membership and account-message permission is required to create your account. All other permissions are optional.",
    prototypeNote:
      "Prototype: your membership and consent are stored only in this browser. Nothing is transmitted and no messages are sent. [TODO: wire to a counsel-reviewed backend before launch.]",
    boundaryNote:
      "A PachaMind free learning membership does not create Embodier.ai commercial consent.",
    validationFirstName: "Please enter your first name.",
    validationLastName: "Please enter your last name.",
    validationEmail: "Please enter a valid email address.",
    validationCountryRegion: "Please enter your country or region.",
    validationCellWhatsapp: "Please enter a cell / WhatsApp number.",
    validationAccountConsent:
      "The membership and account-message permission is required to create your account.",
  },
  preferences: {
    title: "Communication preferences",
    intro:
      "Update how PachaMind may communicate with you about your learning. Each channel is a separate, optional choice.",
    profileHeading: "Your membership",
    channelsHeading: "Communication channels",
    channelsIntro:
      "Turn each educational channel on or off. Changes are recorded as new consent entries; nothing is sent from this prototype.",
    saveLabel: "Save preferences",
    savedLabel: "Preferences saved",
    noMembershipHeading: "No membership found",
    noMembershipBody:
      "You have not created a free learning membership in this browser yet.",
    noMembershipCta: "Create your free learning membership",
    boundaryNote:
      "These preferences cover PachaMind educational communication only. They do not create Embodier.ai commercial consent.",
    consentLogHeading: "Consent record (development view)",
    consentLogIntro:
      "A local, mock audit trail of consent decisions for this prototype. Not shown in production UI.",
    consentLogEmpty: "No consent records yet.",
  },
  legalPages: {
    privacy: {
      title: "Privacy",
      intro:
        "How PachaMind handles information in this free learning membership prototype.",
      version: "2026-06-17",
      lastUpdated: "June 17, 2026",
      sections: [
        {
          heading: "Prototype data handling",
          body: "In this prototype, your membership details, learning progress, reflections, and communication permissions are stored only in your browser (localStorage). Nothing is transmitted to or stored on a server.",
        },
        {
          heading: "Membership coordinates",
          body: "If a backend is added, the fields collected at signup (name, email, country/region, country code, cell/WhatsApp number, preferred language) are used only for educational membership administration — never for commercial outreach.",
        },
        {
          heading: "Communication permissions",
          body: "Email, WhatsApp, and SMS permissions are separate and optional. You can change them anytime on the preferences page. No real messages are sent in this prototype.",
        },
        {
          heading: "No commercial consent",
          body: "A PachaMind free learning membership does not create Embodier.ai commercial consent and does not enroll you in any commercial communications.",
        },
        {
          heading: "Counsel review",
          body: "[NEEDS COUNSEL/VERIFICATION] Final privacy wording, data retention, logging, and any data-sharing boundaries must be reviewed by counsel before launch.",
        },
      ],
    },
    terms: {
      title: "Terms",
      intro: "Terms for using the PachaMind free learning membership prototype.",
      version: "2026-06-17",
      lastUpdated: "June 17, 2026",
      sections: [
        {
          heading: "A free educational membership",
          body: "PachaMind offers free learning memberships only. There is no cost, no payment, no paid upgrade, and no purchase of any kind.",
        },
        {
          heading: "Educational purpose",
          body: "Lessons are offered for cultural learning and reflection. They do not replace medical, therapeutic, or legal guidance, and they make no outcome or healing claims.",
        },
        {
          heading: "Attribution",
          body: "Teachings are credited to tradition-holder Mallku Aribalo. The Puma Path is a learning progression, not an initiation, ceremony, or qualification.",
        },
        {
          heading: "Counsel review",
          body: "[NEEDS COUNSEL/VERIFICATION] Final terms, entity boundaries, and channel-consent language must be reviewed by counsel before launch.",
        },
      ],
    },
    accessibility: {
      title: "Accessibility",
      intro: "PachaMind aims to be usable by everyone, on any device.",
      version: "2026-06-17",
      lastUpdated: "June 17, 2026",
      sections: [
        {
          heading: "Our commitment",
          body: "PachaMind is designed mobile-first from 375px up, with calm pacing, high-contrast earth tones, keyboard-navigable menus, skip-to-content links, and focus-visible outlines.",
        },
        {
          heading: "Captions and transcripts",
          body: "Each lesson is built to carry a bilingual transcript. Transcript text is shown in a collapsible drawer on every lesson page once video is filmed and captioned.",
        },
        {
          heading: "Feedback",
          body: "If any part of PachaMind is hard to use, please reach out through the contact page so we can improve it.",
        },
      ],
    },
  },
  lessons: [
    {
      slug: "what-pachamind-is",
      topic: "listening",
      title: "What PachaMind Is",
      kicker: "Lesson 1",
      duration: "8 min",
      estimatedMinutes: 8,
      stage: "semilla",
      badgeTrigger: "first-listening",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film an orientation explainer introducing PachaMind as a free Andean learning membership and cultural-preservation space.",
      description:
        "An orientation to PachaMind: a free Andean wisdom education membership dedicated to cultural preservation and open access.",
      extendedDescription:
        "This lesson introduces the purpose and commitments of PachaMind. It explains why this space is structured as a documentary learning environment, why it is offered as a free learning membership, and how every lesson connects to the living traditions held by Mallku Aribalo. PachaMind exists to make Andean cultural knowledge freely available without distortion or pressure.",
      learningNotes: [
        "PachaMind is a free educational membership — only learning.",
        "Every lesson is grounded in the living tradition held by Mallku Aribalo, credited as tradition-holder throughout.",
        "Content is offered for cultural learning and reflection only; it does not replace medical, therapeutic, or legal guidance.",
        "Risk tier: Low — orientation content with no health or outcome claims.",
      ],
      reflectionPrompt:
        "What draws you to learning from an Andean cultural tradition, and how do you want to hold what you receive here?",
      quiz: {
        id: "what-pachamind-is-q1",
        prompt: "How is PachaMind offered to learners?",
        options: [
          "As a free educational learning membership",
          "As a paid subscription",
          "As a guided trip to Peru",
        ],
        correctIndex: 0,
        explanation:
          "PachaMind offers free learning memberships only — there is no cost and nothing is sold.",
      },
      forbiddenLanguageNote:
        "Avoid selling trips, paid memberships, or transformation claims.",
    },
    {
      slug: "mountain-listening",
      topic: "listening",
      title: "Mountain Listening",
      kicker: "Lesson 2",
      duration: "12 min",
      estimatedMinutes: 12,
      stage: "semilla",
      badgeTrigger: "first-listening",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a field-paced opening lesson in Andean mountain terrain demonstrating attentive listening, pauses, ambient sound, and place-based observation before interpretation.",
      description:
        "Begin with attentive listening: pacing your attention, noticing place, and letting silence do part of the teaching.",
      extendedDescription:
        "This lesson frames listening as a disciplined way of arriving. It invites learners to notice weather, rhythm, pause, and tone before jumping into explanation, keeping the documentary atmosphere calm and observant.",
      learningNotes: [
        "Listening is treated as an act of relationship, not passive consumption.",
        "A slower pace can reveal context that is lost when a lesson rushes toward conclusions.",
        "Silence, landscape, and voice all carry meaning inside a sacred documentary frame.",
      ],
      reflectionPrompt:
        "What changes when you pause long enough to notice the space around a teaching before interpreting it?",
      quiz: {
        id: "mountain-listening-q1",
        prompt: "How does this lesson frame listening?",
        options: [
          "As passive background consumption",
          "As an act of relationship and disciplined attention",
          "As a test to pass quickly",
        ],
        correctIndex: 1,
        explanation:
          "Listening here is a relationship and a discipline — receiving before reacting.",
      },
      forbiddenLanguageNote:
        "Avoid therapeutic or outcome claims about attention or calm.",
    },
    {
      slug: "mallku-aribalo-tradition-holder",
      topic: "stewardship",
      title: "Mallku Aribalo: Tradition-Holder and Andean Teacher",
      kicker: "Lesson 3",
      duration: "10 min",
      estimatedMinutes: 10,
      stage: "raiz",
      badgeTrigger: "rooted",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a biographical profile of Mallku Aribalo covering his role as tradition-holder, teacher lineage context, and why source attribution matters.",
      description:
        "Meet Mallku Aribalo — Andean shamanic teacher, tradition-holder, and cultural anchor of the PachaMind learning space.",
      extendedDescription:
        "This lesson introduces Mallku Aribalo as the living source of the teachings carried in this space. It covers his role as a tradition-holder within Andean cosmological practice, his commitment to community reciprocity, and why attribution matters when sharing sacred knowledge across cultures. Understanding who holds a teaching is inseparable from understanding the teaching itself.",
      learningNotes: [
        "Mallku Aribalo is an Andean shamanic teacher whose knowledge of cosmological practice forms the foundation of every lesson in this space.",
        "Attribution is an act of reciprocity: crediting the source preserves the integrity of the teaching.",
        "Shamanic teacher here refers to a cultural and traditional role; no therapeutic or medical claims are made.",
        "Risk tier: Medium — biographical and attribution content; verify rights before quoting his published works directly.",
      ],
      reflectionPrompt:
        "Why does knowing who holds a teaching matter to how you receive and carry it forward?",
      quiz: {
        id: "mallku-aribalo-q1",
        prompt: "In PachaMind, “shamanic teacher” refers to:",
        options: [
          "A medical or therapeutic provider",
          "A cultural and traditional role",
          "A travel guide",
        ],
        correctIndex: 1,
        explanation:
          "It names a cultural and traditional role; no therapeutic or medical claims are made.",
      },
      forbiddenLanguageNote:
        "Avoid sensational shaman imagery, unverified biography, and outcome promises.",
    },
    {
      slug: "kausay-pacha-living-universe",
      topic: "cosmovision",
      title: "Kausay Pacha: The Living Universe",
      kicker: "Lesson 4",
      duration: "12 min",
      estimatedMinutes: 12,
      stage: "raiz",
      badgeTrigger: "rooted",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a concept lesson explaining Kausay Pacha as a living relational universe and introducing the Three Pachas framework.",
      description:
        "Explore Kausay Pacha — the Andean concept of the living universe — as the cosmological foundation of Andean thought and practice.",
      extendedDescription:
        "In Andean cosmovision, Kausay Pacha describes a universe that is alive, relational, and in constant dialogue with human beings. This lesson introduces the concept as a lens for understanding how the Three Pachas (Hanaq, Kay, and Uku) relate to one another and to everyday life. It presents this framework as cultural and philosophical education, not as prescriptive cosmology.",
      learningNotes: [
        "Kausay Pacha means 'the living universe' in Quechua — a cosmos understood as animate and relational.",
        "This framework is presented as cultural and philosophical education rooted in Andean tradition.",
        "The living-universe concept provides the cosmological foundation for understanding the Three Pachas.",
        "Risk tier: Low — cultural literacy with no health or outcome claims.",
      ],
      reflectionPrompt:
        "How does thinking of the universe as living and relational change the way you understand your place within it?",
      quiz: {
        id: "kausay-pacha-q1",
        prompt: "Kausay Pacha can be translated as:",
        options: ["The living universe", "The afterlife", "A medical practice"],
        correctIndex: 0,
        explanation:
          "Kausay Pacha means 'the living universe' — a cosmos understood as animate and relational.",
      },
      forbiddenLanguageNote:
        "Avoid medical, therapeutic, or guaranteed personal-outcome language.",
    },
    {
      slug: "hanaq-pacha-sky-cycles",
      topic: "cosmovision",
      title: "Hanaq Pacha: Sky, Cycles, and Archaeo-Astronomy",
      kicker: "Lesson 5",
      duration: "14 min",
      estimatedMinutes: 14,
      stage: "raiz",
      badgeTrigger: "rooted",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a sky-and-site lesson on Hanaq Pacha with historical archaeo-astronomy context, celestial cycles, and architectural alignments.",
      description:
        "Study Hanaq Pacha — the upper world of sky, stars, and cosmic cycles — and how Andean peoples read the heavens as a map of time and relationship.",
      extendedDescription:
        "Hanaq Pacha is the Andean upper world: the realm of sun, moon, stars, and cosmic cycles. This lesson explores how Andean communities developed sophisticated archaeo-astronomical knowledge to track time, align sacred architecture, and sustain community rhythm. All astronomical claims are presented as scholarly and historical interpretation — not as predictive or astrological authority.",
      learningNotes: [
        "Hanaq Pacha refers to the upper world in Andean cosmovision — encompassing sky, celestial bodies, and cosmic cycles.",
        "Andean archaeo-astronomy is a documented area of academic study; claims here follow scholarly interpretation.",
        "Sacred site alignments (e.g., Machu Picchu, Sacsayhuamán) are presented as historical and architectural evidence, not mystical prescription.",
        "Risk tier: Medium — avoid overclaiming astronomical, astrological, or predictive authority; frame content as historical interpretation.",
      ],
      reflectionPrompt:
        "What does it mean to read the sky as a calendar and a map of community responsibility rather than only as a backdrop?",
      quiz: {
        id: "hanaq-pacha-q1",
        prompt: "Astronomical claims in this lesson are framed as:",
        options: [
          "Predictive astrology",
          "Scholarly and historical interpretation",
          "Personal fortune-telling",
        ],
        correctIndex: 1,
        explanation:
          "Claims follow scholarly, historical interpretation — not predictive or astrological authority.",
      },
      forbiddenLanguageNote:
        "Avoid overclaiming mystical proof, astrological prediction, or academic consensus.",
    },
    {
      slug: "uku-pacha-ancestry",
      topic: "cosmovision",
      title: "Uku Pacha: Ancestry, Depth, and Integration",
      kicker: "Lesson 6",
      duration: "11 min",
      estimatedMinutes: 11,
      stage: "raiz",
      badgeTrigger: "rooted",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a cultural literacy lesson on Uku Pacha, ancestry, memory, and integration framed without therapeutic claims.",
      description:
        "Uku Pacha — the inner or lower world — holds ancestry, depth, and the roots of what we carry, offered here as cultural learning about integration and memory.",
      extendedDescription:
        "Uku Pacha is the Andean inner or lower world: not a place of punishment but of depth, ancestry, and the unseen roots of living traditions. This lesson presents Uku Pacha as a cultural lens for understanding how communities hold memory, integrate difficulty, and draw on ancestral knowledge. It is offered strictly as educational and cultural literacy — not as a therapeutic or psychological framework.",
      learningNotes: [
        "Uku Pacha is the lower or inner world in Andean cosmovision — the realm of ancestry, roots, and depth.",
        "This lesson is offered as cultural and educational literacy about how Andean traditions understand memory and integration.",
        "No therapeutic, psychological, or healing claims are made; content is strictly cultural in framing.",
        "Risk tier: Low — cultural literacy presented as educational content with no therapeutic claims.",
      ],
      reflectionPrompt:
        "What do you carry from those who came before you, and how does cultural memory shape the ground you stand on?",
      quiz: {
        id: "uku-pacha-q1",
        prompt: "Uku Pacha is presented in this lesson as:",
        options: [
          "A therapeutic treatment for trauma",
          "A cultural lens on ancestry, memory, and depth",
          "A place of punishment",
        ],
        correctIndex: 1,
        explanation:
          "It is offered as cultural literacy about ancestry and memory — not therapy, and not punishment.",
      },
      forbiddenLanguageNote:
        "Avoid therapeutic, psychological, or healing claims about integrating difficulty.",
    },
    {
      slug: "ayllu-reciprocity",
      topic: "reciprocity",
      title: "Ayllu and Reciprocity",
      kicker: "Lesson 7",
      duration: "14 min",
      estimatedMinutes: 14,
      stage: "tallo",
      badgeTrigger: "reciprocity-practice",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film interviews and B-roll showing ayllu-style reciprocity in daily life, highlighting mutual care, gratitude, and shared responsibility between community and landscape.",
      description:
        "Explore reciprocity as a living practice of mutual care, responsibility, and gratitude across community and landscape.",
      extendedDescription:
        "This lesson expands from individual reflection into collective relation. It describes reciprocity as an everyday discipline that asks what we receive, what we return, and how belonging grows through steady acts of care.",
      learningNotes: [
        "Reciprocity is described as a repeated practice rather than a symbolic slogan.",
        "Community is sustained through exchange, gratitude, and accountability.",
        "The lesson asks learners to consider how place and people both require response.",
      ],
      reflectionPrompt:
        "Where in your daily life do you receive support, and what would a more reciprocal response look like?",
      quiz: {
        id: "ayllu-reciprocity-q1",
        prompt: "Reciprocity in this lesson is best understood as:",
        options: [
          "A one-time transaction",
          "A repeated, everyday practice of mutual care",
          "A marketing slogan",
        ],
        correctIndex: 1,
        explanation:
          "Reciprocity is a repeated practice of mutual care, not a transaction or slogan.",
      },
      forbiddenLanguageNote:
        "Avoid framing reciprocity as a transactional exchange or sales metaphor.",
    },
    {
      slug: "kay-pacha-reciprocity",
      topic: "reciprocity",
      title: "Kay Pacha: Reciprocity and Daily Practice",
      kicker: "Lesson 8",
      duration: "13 min",
      estimatedMinutes: 13,
      stage: "tallo",
      badgeTrigger: "reciprocity-practice",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a daily-life lesson showing Kay Pacha reciprocity practices with land, community, gratitude, and ordinary routine footage.",
      description:
        "Kay Pacha — the present world of everyday life — is where reciprocity becomes practice: in land, community, and the rhythms of ordinary days.",
      extendedDescription:
        "Kay Pacha is the Andean middle world: the lived present, the ground beneath our feet, the community we move within. This lesson explores how Andean cosmovision asks humans to engage Kay Pacha through reciprocal attention — caring for land, upholding community, and practicing gratitude as a daily discipline rather than a ritual occasion.",
      learningNotes: [
        "Kay Pacha is the present world in Andean cosmovision — the domain of everyday human life and relationship.",
        "Reciprocity in Kay Pacha is a daily practice, not a symbolic gesture: it governs how one treats land, community, and self.",
        "Grounding the Three Pachas in everyday life connects cosmological study to lived behaviour.",
        "Risk tier: Low — cultural and ethical education with no health or outcome claims.",
      ],
      reflectionPrompt:
        "Where in your daily life do you experience the present world asking something of you — and how do you respond?",
      quiz: {
        id: "kay-pacha-q1",
        prompt: "Kay Pacha is:",
        options: [
          "The upper world of the sky",
          "The present world of everyday life",
          "The inner world of ancestry",
        ],
        correctIndex: 1,
        explanation:
          "Kay Pacha is the present, middle world — the domain of everyday human life.",
      },
      forbiddenLanguageNote:
        "Avoid medical or therapeutic framing of daily practice.",
    },
    {
      slug: "ritual-attention",
      topic: "ritual",
      title: "Ritual Attention",
      kicker: "Lesson 9",
      duration: "11 min",
      estimatedMinutes: 11,
      stage: "tallo",
      badgeTrigger: "reciprocity-practice",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a respectful demonstration of simple repeated ritual gestures that show preparation, intention, and embodied attention without spectacle.",
      description:
        "Learn how ritual attention gathers memory, intention, and embodied care without spectacle or performance pressure.",
      extendedDescription:
        "Ritual attention is presented here as a way of concentrating care. The lesson emphasizes preparation, consistency, and respect, showing how simple repeated gestures can hold meaning when they are practiced with clarity.",
      learningNotes: [
        "Ritual is shown as focused attention, not dramatic display.",
        "Consistency matters because meaning deepens through repetition.",
        "Embodied gestures can anchor memory when they are practiced with care.",
      ],
      reflectionPrompt:
        "Which small repeated action helps you return to intention, and what gives that action its meaning?",
      quiz: {
        id: "ritual-attention-q1",
        prompt: "Ritual attention in this lesson is shown as:",
        options: [
          "Dramatic public spectacle",
          "Focused, consistent attention to simple gestures",
          "A ceremony you must purchase",
        ],
        correctIndex: 1,
        explanation:
          "Ritual here is focused, repeated attention — not spectacle, and never something sold.",
      },
      forbiddenLanguageNote:
        "Avoid any ceremony-access, in-person, or purchase framing.",
    },
    {
      slug: "ayni-sacred-reciprocity",
      topic: "reciprocity",
      title: "Ayni: Sacred Reciprocity",
      kicker: "Lesson 10",
      duration: "12 min",
      estimatedMinutes: 12,
      stage: "tallo",
      badgeTrigger: "reciprocity-practice",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film an ethics lesson defining Ayni as sacred reciprocity and contrasting relational balance with transactional exchange.",
      description:
        "Ayni is the Andean principle of sacred reciprocity: give and receive in balance, with the land, the community, and the cosmos.",
      extendedDescription:
        "Ayni — often translated as sacred reciprocity — is one of the most foundational principles in Andean culture. This lesson explores Ayni as a relational ethic that binds individuals to community, to place, and to the wider cosmic order. It examines how Ayni differs from transactional exchange and why it remains a living practice rather than a historical artefact.",
      learningNotes: [
        "Ayni is usually translated as 'sacred reciprocity' — a relational ethic at the centre of Andean cultural life.",
        "Ayni differs from transactional exchange: it is relational, ongoing, and rooted in mutual care rather than equivalence.",
        "Understanding Ayni helps situate Kay Pacha, Ayllu, and the Five Andean Values within a single coherent cultural framework.",
        "Risk tier: Low — cultural and ethical education with no health or outcome claims.",
      ],
      reflectionPrompt:
        "Where in your relationships do you practice balance in giving and receiving, and where does that balance feel most challenging to hold?",
      quiz: {
        id: "ayni-q1",
        prompt: "Ayni differs from transactional exchange because it is:",
        options: [
          "Relational, ongoing, and rooted in mutual care",
          "A strict equal-value trade",
          "A paid service",
        ],
        correctIndex: 0,
        explanation:
          "Ayni is a relational, ongoing ethic of mutual care — not a strict trade or a paid service.",
      },
      forbiddenLanguageNote:
        "Avoid framing Ayni as commerce, pricing, or paid exchange.",
    },
    {
      slug: "values-munay-yachay-llankay",
      topic: "ritual",
      title: "Munay, Yachay, Llank'ay, Sami, and Hucha: Values as Curriculum",
      kicker: "Lesson 11",
      duration: "15 min",
      estimatedMinutes: 15,
      stage: "tallo",
      badgeTrigger: "reciprocity-practice",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a curriculum lesson unpacking Munay, Yachay, Llank'ay, Sami, and Hucha with grounded examples of each value in practice.",
      description:
        "The Five Andean Values — Munay, Yachay, Llank'ay, Sami, and Hucha — form the ethical spine of Andean cultural practice and the curriculum of PachaMind.",
      extendedDescription:
        "Andean tradition organises ethical life around five interlocking concepts: Munay (love and will), Yachay (knowledge and wisdom), Llank'ay (purposeful work and service), Sami (refined, light energy), and Hucha (heavy or unprocessed energy). This lesson presents these values as a curriculum framework — a way of assessing where your attention, intention, and effort currently rest, and where growth calls you.",
      learningNotes: [
        "Munay: love, intention, and the will to act from care rather than fear.",
        "Yachay: accumulated wisdom and the discipline of learning with humility.",
        "Llank'ay: meaningful work and service as a form of reciprocity with community.",
        "Sami and Hucha describe energy qualities — lightness and heaviness — as cultural, not medical, concepts.",
        "Risk tier: Low — values education presented as cultural curriculum with no therapeutic claims.",
      ],
      reflectionPrompt:
        "Which of these five values asks the most of you right now, and what would it look like to tend to it this week?",
      quiz: {
        id: "values-q1",
        prompt: "Sami and Hucha are described as:",
        options: [
          "Medical diagnoses",
          "Cultural concepts of light and heavy energy",
          "Payment tiers",
        ],
        correctIndex: 1,
        explanation:
          "Sami and Hucha are cultural concepts of energy quality — not medical, and not payment tiers.",
      },
      forbiddenLanguageNote:
        "Avoid retail self-help hype or therapy claims about the values.",
    },
    {
      slug: "huacas-sacred-sites",
      topic: "stewardship",
      title: "Huacas and Sacred Sites: Academic Interpretation and Living Tradition",
      kicker: "Lesson 12",
      duration: "13 min",
      estimatedMinutes: 13,
      stage: "flor",
      badgeTrigger: "steward",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film on-location and archival-supported coverage of huacas, balancing academic interpretation with living community meaning and stewardship ethics.",
      description:
        "Huacas — Andean sacred places and objects — sit at the intersection of archaeology, living tradition, and cultural stewardship.",
      extendedDescription:
        "A huaca is a place, object, or being considered sacred in Andean tradition — a mountain, a spring, a carved stone, or an ancestor site. This lesson navigates the difference between academic archaeological interpretation and the living significance that Andean communities continue to hold. It asks learners to sit with that difference with respect rather than resolving it prematurely.",
      learningNotes: [
        "Huaca (wak'a) refers to a sacred place, object, or being in Andean tradition — the term encompasses a wide range of sites and entities.",
        "Archaeological and academic interpretations of huacas differ from the living meaning held by Andean communities; both deserve careful attention.",
        "This lesson practices cultural stewardship: holding complexity, avoiding extraction, and crediting living traditions as sources.",
        "Risk tier: Medium — verify academic sources; avoid overclaiming spiritual authority; respect community intellectual property.",
      ],
      reflectionPrompt:
        "How do you hold the difference between studying a sacred site as an outsider and respecting its living meaning for the community that calls it home?",
      quiz: {
        id: "huacas-q1",
        prompt: "A huaca is:",
        options: [
          "A sacred place, object, or being in Andean tradition",
          "A type of currency",
          "A travel package",
        ],
        correctIndex: 0,
        explanation:
          "A huaca is a sacred place, object, or being — never a product or travel package.",
      },
      forbiddenLanguageNote:
        "Avoid travel offers, site-visit booking, and overclaiming spiritual authority.",
    },
    {
      slug: "carrying-the-teaching",
      topic: "stewardship",
      title: "Carrying the Teaching Forward",
      kicker: "Lesson 13",
      duration: "13 min",
      estimatedMinutes: 13,
      stage: "flor",
      badgeTrigger: "steward",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a closing stewardship lesson on carrying teachings forward with humility, context, attribution, and shared responsibility.",
      description:
        "Consider how teachings are carried forward through humility, accuracy, and shared responsibility.",
      extendedDescription:
        "This lesson focuses on stewardship. Rather than treating learning as a personal collection, it asks how teachings are remembered faithfully, shared with care, and kept connected to the communities that hold them.",
      learningNotes: [
        "Stewardship requires humility about what belongs to you and what does not.",
        "Sharing a teaching responsibly includes context, credit, and care with language.",
        "Learning becomes durable when it changes practice, not only memory.",
      ],
      reflectionPrompt:
        "How can you carry a teaching forward in a way that preserves context, credit, and responsibility?",
      quiz: {
        id: "carrying-the-teaching-q1",
        prompt: "Responsible stewardship of a teaching includes:",
        options: [
          "Context, credit, and care with language",
          "Removing the source to simplify it",
          "Selling access to it",
        ],
        correctIndex: 0,
        explanation:
          "Carrying a teaching forward means preserving context, credit, and care — never extraction or sale.",
      },
      forbiddenLanguageNote:
        "Avoid implying paid access or commercial distribution of teachings.",
    },
    {
      slug: "puma-path-orientation",
      topic: "stewardship",
      title: "Puma Path Orientation: Semilla to Puma as Learning Progression",
      kicker: "Lesson 14",
      duration: "9 min",
      estimatedMinutes: 9,
      stage: "flor",
      badgeTrigger: "steward",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a program-orientation lesson mapping Semilla-to-Puma progression as a study framework, not initiation or ceremony.",
      description:
        "The Puma Path is PachaMind's learning progression — a structured curriculum arc from Semilla (seed) to Puma — not an initiation or ceremony.",
      extendedDescription:
        "The Puma Path organises the PachaMind curriculum into a progression of study. Semilla (seed) marks the beginning — an orientation to listening, presence, and cultural context. Puma marks a sustained engagement with Andean values, cosmovision, and reciprocal practice. This progression is a learning framework only: it is not a ceremony, not an initiation, and not a qualification. It is a map for studious, humble, long-term engagement with a living tradition.",
      learningNotes: [
        "The Puma Path is a curriculum arc — a learning progression — not a ceremony, initiation, or spiritual qualification.",
        "Stages run from Semilla (seed) through to Puma; each stage corresponds to deepening study and practice, not ritual advancement.",
        "Completion of the Puma Path confers no authority over Andean tradition; it is a personal learning record only.",
        "Risk tier: Low — learning-progression framing only; no initiation, ceremony, or outcome-promise language.",
      ],
      reflectionPrompt:
        "What does it mean to follow a learning path with genuine humility — treating each stage as a deepening of attention rather than an achievement to collect?",
      quiz: {
        id: "puma-path-orientation-q1",
        prompt: "The Puma Path is:",
        options: [
          "An initiation or ceremony",
          "A learning progression and study framework",
          "A paid membership tier",
        ],
        correctIndex: 1,
        explanation:
          "The Puma Path is a learning progression — never an initiation, ceremony, or paid tier.",
      },
      forbiddenLanguageNote:
        "Never tie stages to ceremony access, travel, discounts, or paid priority.",
    },
    {
      slug: "path-of-integration",
      topic: "integration",
      title: "The Path of Integration",
      kicker: "Lesson 15",
      duration: "15 min",
      estimatedMinutes: 15,
      stage: "puma",
      badgeTrigger: "integration",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film an integration wrap-up showing how listening, reciprocity, ritual, and stewardship interconnect as an ongoing cyclical practice.",
      description:
        "Draw the stages into a living practice: how listening, reciprocity, ritual, and stewardship sustain and renew each other over time.",
      extendedDescription:
        "Integration is not a final destination but a continuing movement. This lesson asks how the previous stages support each other as a whole practice — and how learners can return to any stage with new eyes, deepened by everything that came before.",
      learningNotes: [
        "Integration is understood as an ongoing cycle rather than a finished state.",
        "Each stage deepens the others when held together with steady attention.",
        "Carrying a complete practice means welcoming return as much as forward movement.",
      ],
      reflectionPrompt:
        "How do listening, reciprocity, ritual, and stewardship already move together in your daily life, and where do they call for more attention?",
      quiz: {
        id: "path-of-integration-q1",
        prompt: "Integration is best understood as:",
        options: [
          "A finished, final achievement",
          "An ongoing cycle of return and renewal",
          "A graduation certificate to purchase",
        ],
        correctIndex: 1,
        explanation:
          "Integration is a continuing cycle of return — not a finish line or a purchase.",
      },
      forbiddenLanguageNote:
        "Avoid framing completion as a credential to buy or an outcome promise.",
    },
  ],
  conservation: {
    title: "Andean Conservation",
    intro:
      "Through the lens of Andean cosmovision, conservation is not a policy or a project — it is a living relationship. These themes explore how Andean teachings offer a grounded approach to caring for water, land, biodiversity, and community across generations.",
    attributionLabel: "Tradition-holder",
    principlesHeading: "Core principles",
    reflectionHeading: "A reflection for your learning",
    reflectionPrompt:
      "Which relationship with the natural world around you has been shaped by reciprocity, and what would it mean to tend that relationship with greater care?",
    bands: [
      {
        title: "Reciprocity with the land (Ayni)",
        body: "In Andean cosmovision, the earth is not a resource to be managed but a living being to be in relationship with. The principle of ayni — reciprocity — shapes every interaction with land: what you take, you return; what you receive, you care for. Conservation becomes an act of ongoing gratitude.",
        image: "/images/andes/machu-picchu-general.png",
      },
      {
        title: "Water as a living being",
        body: "Water is honoured in Andean tradition as a source of life that carries memory and intention. Conservation begins with listening: understanding where water comes from, how it moves, and what it needs to keep flowing across communities and generations. Protecting watersheds is an act of communal reciprocity.",
        image: "/images/andes/machu-picchu-urubamba-canyon.jpg",
      },
      {
        title: "Biodiversity and the web of life",
        body: "Andean cosmological thinking recognises that all living beings — plants, animals, fungi, soils — participate in a shared existence. Diversity is not ornamental; it is the structural integrity of the living world, and each loss diminishes the whole. Tending biodiversity is tending relationship itself.",
        image: "/images/andes/machu-picchu-aster-nasa.jpg",
      },
      {
        title: "Sustainable practices rooted in ancestral knowledge",
        body: "Andean farming and land management traditions — terracing, crop rotation, water channelling, polyculture — evolved through centuries of careful observation and communal stewardship. These practices are not folklore; they are sophisticated responses to complex ecosystems, refined over generations of attentive care.",
        image: "/images/andes/machu-picchu-hb10.jpg",
      },
    ],
    principles: [
      "The earth is a living being deserving care, not a resource to be extracted.",
      "Water carries memory; protecting watersheds is an act of communal reciprocity.",
      "Biodiversity reflects the richness of relations among all living beings.",
      "Ancestral ecological knowledge offers grounded, tested guidance for land stewardship.",
      "Conservation is a collective practice sustained through shared responsibility and attention.",
    ],
  },
  reflections: {
    title: "Reflections",
    intro:
      "A contemplative space to sit with each lesson's journaling prompt. Write privately — your notes remain in this browser only and are never transmitted or stored by this site.",
    promptsHeading: "Journaling prompts",
    noteLabel: "Your private notes",
    notePlaceholder:
      "Write freely. Your notes stay in this browser only — nothing is shared or transmitted.",
    saveLabel: "Save note",
    savedLabel: "Saved",
    clearLabel: "Clear",
    storageHint:
      "Notes are stored only in this browser. Nothing is transmitted to or collected by this site.",
    attributionLabel: "Reflective prompts drawn from teachings by Mallku Aribalo",
    parallaxSections: [
      {
        title: "Writing as listening",
        body: "Journaling within a cosmovision framework is not analysis — it is a way of attending to what is already present. Write toward noticing, not toward conclusions.",
        image: "/images/andes/machu-picchu-aster-nasa.jpg",
      },
      {
        title: "Private and unhurried",
        body: "These notes belong only to you. There are no submissions and no right answers — only the quiet space between a question and your response.",
        image: "/images/andes/machu-picchu-partial-1911.jpg",
      },
    ],
  },
};
