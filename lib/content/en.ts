import type { SiteContent } from "@/lib/types";

export const en: SiteContent = {
  locale: "en",
  meta: {
    title: "PachaMind",
    description:
      "A bilingual sacred documentary learning platform with free lessons, reflective notes, and local progress tracking.",
  },
  brand: {
    name: "PachaMind",
    eyebrow: "Sacred documentary learning",
    promise: "No cost, no sales — only learning",
    traditionHolderLabel: "Tradition-holder",
    traditionHolderName: "Mallku Aribalo",
    disclaimer:
      "These lessons are offered for cultural learning and reflection. They do not replace medical, therapeutic, or legal guidance.",
  },
  nav: {
    home: "Home",
    library: "Library",
    pumaPath: "Puma Path",
    dashboard: "Dashboard",
    about: "About",
    contact: "Contact",
    conservation: "Conservation",
    english: "English",
    spanish: "Español",
  },
  home: {
    title: "Enter a mountain-paced library of listening, reciprocity, and remembrance.",
    intro:
      "PachaMind is a free bilingual learning space shaped like a documentary field notebook: spacious, visual, and grounded in community reflection.",
    primaryCta: "Explore the library",
    secondaryCta: "View your dashboard",
    featuredLabel: "Featured lesson",
    sections: [
      {
        title: "Documentary pacing",
        body: "Slow visuals, layered notes, and grounded prompts help each lesson feel like a field visit instead of a sales funnel.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Bilingual access",
        body: "English and Spanish stay in sync so every reflection, lesson note, and next step carries the same meaning across both routes.",
        image:
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Free and nonprofit",
        body: "Every page repeats the core promise clearly: no pricing, no checkout, no reservation pressure, and no donations asked here.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },
  library: {
    title: "Lesson library",
    intro:
      "Watch directly from the library, then open the full lesson for richer notes, reflection prompts, and progress tracking.",
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
    reflectionHeading: "Reflection prompt",
    backToLibrary: "Back to library",
    markComplete: "Mark lesson complete",
    markIncomplete: "Mark lesson incomplete",
    completedLabel: "Saved in this browser as completed",
    progressHint:
      "Progress is stored locally on this device only. No account is required.",
    nextLessonLabel: "Continue to next lesson",
    dashboardLabel: "Go to dashboard",
  },
  dashboard: {
    title: "Your learning dashboard",
    intro:
      "Track what you have finished in this browser, see overall progress, and jump back into the next lesson without signing in.",
    completedLabel: "Lessons completed",
    percentLabel: "Progress",
    totalLabel: "Total lessons",
    continueLearning: "Continue learning",
    allComplete: "You have completed every lesson in this browser. Revisit any lesson anytime.",
    completedState: "Completed",
    notStartedState: "Not completed yet",
  },
  about: {
    title: "About this learning space",
    intro:
      "PachaMind preserves a sacred documentary atmosphere: cinematic pacing, earth-toned visuals, and reflective study rooted in free access.",
    missionHeading: "Our mission",
    missionBody:
      "PachaMind exists to carry Andean teachings into a freely accessible digital space without distortion, commercialisation, or pressure. Every design decision — slow pacing, visual spaciousness, no checkout language — is a direct expression of that commitment.",
    storyHeading: "How this space came to be",
    storyBody:
      "PachaMind grew out of a desire to honour living traditions and the people who keep them. The platform was shaped around the teachings of Mallku Aribalo, who shared them so that they could travel respectfully beyond their original geography and reach anyone ready to listen carefully. Nothing here is sold, tokenised, or extracted from its context.",
    traditionHolderHeading: "Mallku Aribalo — tradition-holder and shamanic teacher",
    traditionHolderBody:
      "Mallku Aribalo is an Andean shamanic teacher and tradition-holder whose knowledge of cosmological practice, community reciprocity, and sacred attention forms the living foundation of every lesson in this space. His teachings are offered here for cultural learning and reflection, and are credited to him throughout the experience.",
    valuesHeading: "Grounding commitments",
    values: [
      "100% free and nonprofit, with no pricing, sales funnel, or checkout language.",
      "Mallku Aribalo is credited as tradition-holder throughout the experience.",
      "Lessons support cultural learning and reflection without therapeutic or medical claims.",
    ],
  },
  footer: {
    credit: "Tradition-holder: Mallku Aribalo",
    mission: "No cost, no sales — only learning",
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
    messagePlaceholder: "Questions, reflections, or feedback — write as freely as you like",
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
      "A five-stage learning progression shaped by Andean teachings. Move through each stage at your own pace, carry nothing but attention, and let each lesson deepen the next.",
    stagesHeading: "Five stages of learning",
    progressLabel: "Your learning progression",
    noticeMission: "No cost, no sales — only learning",
    attributionNote:
      "The Puma Path is drawn from the teachings of Mallku Aribalo, Andean tradition-holder and shamanic teacher. All five stages are offered here for cultural learning and reflection — not as an initiation or therapeutic programme.",
    stageLabel: "Stage",
    completedLabel: "Completed",
    notStartedLabel: "Not yet visited",
    openStageLabel: "Begin this stage",
    revisitLabel: "Revisit this stage",
    stages: [
      {
        key: "listening",
        title: "Listening",
        body: "Arrive before you interpret. The first stage trains attention to receive before it reacts — learning to notice weather, rhythm, silence, and the space between words.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        key: "reciprocity",
        title: "Reciprocity",
        body: "Shift from receiving to responding. Reciprocity asks what you hold in relation — to community, to land, to teaching — and how steady care sustains belonging over time.",
        image:
          "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=80",
      },
      {
        key: "ritual",
        title: "Ritual",
        body: "Anchor intention in repeated action. Ritual attention is the discipline of showing up consistently: small, focused gestures practiced with care accumulate into living memory.",
        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80",
      },
      {
        key: "stewardship",
        title: "Stewardship",
        body: "Hold what you have learned lightly and faithfully. Stewardship asks how teachings travel without losing their roots — and how credit, context, and humility travel with them.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      },
      {
        key: "integration",
        title: "Integration",
        body: "Let the four stages move together. Integration is not a final destination but a continuing return: each practice renews the others when held as a whole rather than a sequence.",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },
  lessons: [
    {
      slug: "mountain-listening",
      topic: "listening",
      title: "Mountain Listening",
      kicker: "Lesson 1",
      duration: "12 min",
      youtubeId: "ScMzIvxBSi4",
      description:
        "Begin with attentive listening: pacing your attention, noticing place, and letting silence do part of the teaching.",
      extendedDescription:
        "This opening lesson frames listening as a disciplined way of arriving. It invites learners to notice weather, rhythm, pause, and tone before jumping into explanation, keeping the documentary atmosphere calm and observant.",
      learningNotes: [
        "Listening is treated as an act of relationship, not passive consumption.",
        "A slower pace can reveal context that is lost when a lesson rushes toward conclusions.",
        "Silence, landscape, and voice all carry meaning inside a sacred documentary frame.",
      ],
      reflectionPrompt:
        "What changes when you pause long enough to notice the space around a teaching before interpreting it?",
    },
    {
      slug: "ayllu-reciprocity",
      topic: "reciprocity",
      title: "Ayllu and Reciprocity",
      kicker: "Lesson 2",
      duration: "14 min",
      youtubeId: "aqz-KE-bpKQ",
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
    },
    {
      slug: "ritual-attention",
      topic: "ritual",
      title: "Ritual Attention",
      kicker: "Lesson 3",
      duration: "11 min",
      youtubeId: "ysz5S6PUM-U",
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
    },
    {
      slug: "carrying-the-teaching",
      topic: "stewardship",
      title: "Carrying the Teaching Forward",
      kicker: "Lesson 4",
      duration: "13 min",
      youtubeId: "M7lc1UVf-VE",
      description:
        "Close the sequence by considering how teachings are carried forward through humility, accuracy, and shared responsibility.",
      extendedDescription:
        "The final lesson focuses on stewardship. Rather than treating learning as a personal collection, it asks how teachings are remembered faithfully, shared with care, and kept connected to the communities that hold them.",
      learningNotes: [
        "Stewardship requires humility about what belongs to you and what does not.",
        "Sharing a teaching responsibly includes context, credit, and care with language.",
        "Learning becomes durable when it changes practice, not only memory.",
      ],
      reflectionPrompt:
        "How can you carry a teaching forward in a way that preserves context, credit, and responsibility?",
    },
    {
      slug: "what-pachamind-is",
      topic: "listening",
      title: "What PachaMind Is",
      kicker: "Lesson 5",
      duration: "8 min",
      youtubeId: "dQw4w9WgXcQ",
      description:
        "An orientation to PachaMind: a free, nonprofit Andean wisdom education space dedicated to cultural preservation and open access.",
      extendedDescription:
        "This lesson introduces the purpose and commitments of PachaMind. It explains why this space is structured as a documentary learning environment, why no cost or sales language ever appears, and how every lesson connects to the living traditions held by Mallku Aribalo. PachaMind exists to make Andean cultural knowledge freely available without distortion, commercialisation, or pressure.",
      learningNotes: [
        "PachaMind is a free, nonprofit learning space — no pricing, no checkout, no donations asked.",
        "Every lesson is grounded in the living tradition held by Mallku Aribalo, credited as tradition-holder throughout.",
        "Content is offered for cultural learning and reflection only; it does not replace medical, therapeutic, or legal guidance.",
        "Risk tier: Low — orientation content with no health or outcome claims.",
      ],
      reflectionPrompt:
        "What draws you to learning from an Andean cultural tradition, and how do you want to hold what you receive here?",
    },
    {
      slug: "mallku-aribalo-tradition-holder",
      topic: "stewardship",
      title: "Mallku Aribalo: Tradition-Holder and Andean Teacher",
      kicker: "Lesson 6",
      duration: "10 min",
      youtubeId: "9bZkp7q19f0",
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
    },
    {
      slug: "kausay-pacha-living-universe",
      topic: "cosmovision",
      title: "Kausay Pacha: The Living Universe",
      kicker: "Lesson 7",
      duration: "12 min",
      youtubeId: "eVTXPUF4Oz4",
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
    },
    {
      slug: "hanaq-pacha-sky-cycles",
      topic: "cosmovision",
      title: "Hanaq Pacha: Sky, Cycles, and Archaeo-Astronomy",
      kicker: "Lesson 8",
      duration: "14 min",
      youtubeId: "pFqgFbDLMKk",
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
    },
    {
      slug: "kay-pacha-reciprocity",
      topic: "reciprocity",
      title: "Kay Pacha: Reciprocity and Daily Practice",
      kicker: "Lesson 9",
      duration: "13 min",
      youtubeId: "J---aiyznGQ",
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
    },
    {
      slug: "uku-pacha-ancestry",
      topic: "cosmovision",
      title: "Uku Pacha: Ancestry, Depth, and Integration",
      kicker: "Lesson 10",
      duration: "11 min",
      youtubeId: "kJQP7kiw5Fk",
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
    },
    {
      slug: "ayni-sacred-reciprocity",
      topic: "reciprocity",
      title: "Ayni: Sacred Reciprocity",
      kicker: "Lesson 11",
      duration: "12 min",
      youtubeId: "RgKAFK5djSk",
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
    },
    {
      slug: "values-munay-yachay-llankay",
      topic: "ritual",
      title: "Munay, Yachay, Llank'ay, Sami, and Hucha: Values as Curriculum",
      kicker: "Lesson 12",
      duration: "15 min",
      youtubeId: "OPf0YbXqDm0",
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
    },
    {
      slug: "huacas-sacred-sites",
      topic: "stewardship",
      title: "Huacas and Sacred Sites: Academic Interpretation and Living Tradition",
      kicker: "Lesson 13",
      duration: "13 min",
      youtubeId: "4N1iwQxiHrs",
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
    },
    {
      slug: "puma-path-orientation",
      topic: "stewardship",
      title: "Puma Path Orientation: Semilla to Puma as Learning Progression",
      kicker: "Lesson 14",
      duration: "9 min",
      youtubeId: "tgbNymZ7vqY",
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
    },
    {
      slug: "path-of-integration",
      topic: "integration",
      title: "The Path of Integration",
      kicker: "Lesson 15",
      duration: "15 min",
      youtubeId: "ScMzIvxBSi4",
      description:
        "Draw the four stages into a living practice: how listening, reciprocity, ritual, and stewardship sustain and renew each other over time.",
      extendedDescription:
        "Integration is not a final destination but a continuing movement. This lesson asks how the four previous stages support each other as a whole practice — and how learners can return to any stage with new eyes, deepened by everything that came before.",
      learningNotes: [
        "Integration is understood as an ongoing cycle rather than a finished state.",
        "Each stage deepens the others when held together with steady attention.",
        "Carrying a complete practice means welcoming return as much as forward movement.",
      ],
      reflectionPrompt:
        "How do listening, reciprocity, ritual, and stewardship already move together in your daily life, and where do they call for more attention?",
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
        image:
          "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Water as a living being",
        body: "Water is honoured in Andean tradition as a source of life that carries memory and intention. Conservation begins with listening: understanding where water comes from, how it moves, and what it needs to keep flowing across communities and generations. Protecting watersheds is an act of communal reciprocity.",
        image:
          "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Biodiversity and the web of life",
        body: "Andean cosmological thinking recognises that all living beings — plants, animals, fungi, soils — participate in a shared existence. Diversity is not ornamental; it is the structural integrity of the living world, and each loss diminishes the whole. Tending biodiversity is tending relationship itself.",
        image:
          "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Sustainable practices rooted in ancestral knowledge",
        body: "Andean farming and land management traditions — terracing, crop rotation, water channelling, polyculture — evolved through centuries of careful observation and communal stewardship. These practices are not folklore; they are sophisticated responses to complex ecosystems, refined over generations of attentive care.",
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
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
};
