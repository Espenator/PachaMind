import type {
  PathStage,
  Lesson,
  Badge,
  GlossaryTerm,
  FieldNote,
} from "./types";

// ─── Path Stages ─────────────────────────────────────────────────────────────

export const PATH_STAGES: PathStage[] = [
  {
    slug: "semilla",
    name: "Semilla",
    nameEs: "Semilla",
    description:
      "The Seed. You are planting the first roots of Andean understanding.",
    color: "#8B6F4E",
    order: 1,
  },
  {
    slug: "raiz",
    name: "Raíz",
    nameEs: "Raíz",
    description:
      "The Root. You are drawing nourishment from the deep earth teachings.",
    color: "#6B7C4A",
    order: 2,
  },
  {
    slug: "tallo",
    name: "Tallo",
    nameEs: "Tallo",
    description: "The Stem. You are growing upward through dedicated learning.",
    color: "#7A9E7E",
    order: 3,
  },
  {
    slug: "flor",
    name: "Flor",
    nameEs: "Flor",
    description:
      "The Flower. Your understanding is blossoming into daily practice.",
    color: "#C17F5E",
    order: 4,
  },
  {
    slug: "puma",
    name: "Puma",
    nameEs: "Puma",
    description:
      "The Puma. You walk with clarity, courage, and cultural stewardship.",
    color: "#4A6FA5",
    order: 5,
  },
];

// ─── Seed Lessons ─────────────────────────────────────────────────────────────

export const SEED_LESSONS: Lesson[] = [
  {
    id: "lesson-001",
    slug: "introduction-to-andean-cosmovision",
    title: "Introduction to Andean Cosmovision",
    summary:
      "Discover the living worldview of the Andes — a way of understanding the cosmos that has guided Andean peoples for thousands of years.",
    pathStage: "semilla",
    category: "andean-cosmovision",
    estimatedMinutes: 5,
    isPublished: true,
    publishedAt: "2024-01-15",
    thumbnailUrl: "/images/lessons/andean-cosmovision-thumb.jpg",
    author: "Mallku Aribalo (James Arevalo Merejildo)",
    video: {
      id: "v-001",
      title: "Introduction to Andean Cosmovision",
      durationSeconds: 180,
      url: "https://www.youtube.com/embed/placeholder-001",
      thumbnailUrl: "/images/lessons/andean-cosmovision-thumb.jpg",
      captionsUrl: "/captions/lesson-001-en.vtt",
      language: "en",
    },
    reflectionPrompts: [
      {
        id: "rp-001-1",
        lessonId: "lesson-001",
        prompt:
          "What word, image, or feeling from this lesson stayed with you most?",
        guidance:
          "There is no right answer. Take a moment to notice what arose naturally.",
      },
    ],
    glossaryTermIds: ["gt-cosmovision", "gt-pacha"],
  },
  {
    id: "lesson-002",
    slug: "the-three-pachas",
    title: "The Three Pachas: Understanding Andean Space-Time",
    summary:
      "Explore Uku Pacha, Kay Pacha, and Hanaq Pacha — the three realms that form the Andean understanding of existence.",
    pathStage: "semilla",
    category: "three-pachas",
    estimatedMinutes: 7,
    isPublished: true,
    publishedAt: "2024-01-22",
    thumbnailUrl: "/images/lessons/three-pachas-thumb.jpg",
    author: "Mallku Aribalo (James Arevalo Merejildo)",
    video: {
      id: "v-002",
      title: "The Three Pachas",
      durationSeconds: 240,
      url: "https://www.youtube.com/embed/placeholder-002",
      thumbnailUrl: "/images/lessons/three-pachas-thumb.jpg",
      captionsUrl: "/captions/lesson-002-en.vtt",
      language: "en",
    },
    reflectionPrompts: [
      {
        id: "rp-002-1",
        lessonId: "lesson-002",
        prompt:
          "Which of the Three Pachas resonates most with where you are in life right now, and why?",
        guidance:
          "Consider the Pacha not as a place but as a quality of attention.",
      },
    ],
    glossaryTermIds: ["gt-uku-pacha", "gt-kay-pacha", "gt-hanaq-pacha"],
  },
  {
    id: "lesson-003",
    slug: "ayni-the-principle-of-reciprocity",
    title: "Ayni: The Living Principle of Reciprocity",
    summary:
      "Ayni — sacred reciprocity — is the foundation of Andean relationships with people, nature, and the cosmos.",
    pathStage: "semilla",
    category: "five-values",
    estimatedMinutes: 6,
    isPublished: true,
    publishedAt: "2024-01-29",
    thumbnailUrl: "/images/lessons/ayni-thumb.jpg",
    author: "Mallku Aribalo (James Arevalo Merejildo)",
    video: {
      id: "v-003",
      title: "Ayni: The Principle of Reciprocity",
      durationSeconds: 195,
      url: "https://www.youtube.com/embed/placeholder-003",
      thumbnailUrl: "/images/lessons/ayni-thumb.jpg",
      captionsUrl: "/captions/lesson-003-en.vtt",
      language: "en",
    },
    reflectionPrompts: [
      {
        id: "rp-003-1",
        lessonId: "lesson-003",
        prompt: "Where do you experience Ayni in your daily life?",
        guidance:
          "Think of small moments of giving and receiving — with people, with land, with time.",
      },
    ],
    glossaryTermIds: ["gt-ayni"],
  },
  {
    id: "lesson-004",
    slug: "the-sacred-valley-from-above",
    title: "The Sacred Valley: Reading the Land",
    summary:
      "Walk the Sacred Valley of the Incas through Mallku's eyes — a landscape where geography and cosmology meet.",
    pathStage: "raiz",
    category: "andean-cosmovision",
    estimatedMinutes: 8,
    isPublished: true,
    publishedAt: "2024-02-05",
    thumbnailUrl: "/images/lessons/sacred-valley-thumb.jpg",
    author: "Mallku Aribalo (James Arevalo Merejildo)",
    video: {
      id: "v-004",
      title: "The Sacred Valley: Reading the Land",
      durationSeconds: 280,
      url: "https://www.youtube.com/embed/placeholder-004",
      thumbnailUrl: "/images/lessons/sacred-valley-thumb.jpg",
      language: "en",
    },
    reflectionPrompts: [
      {
        id: "rp-004-1",
        lessonId: "lesson-004",
        prompt: "What does the land you live on tell you about where you are?",
        guidance:
          "Andean cosmovision sees the land as a living teacher. What might yours be saying?",
      },
    ],
  },
  {
    id: "lesson-005",
    slug: "stars-and-the-andean-sky",
    title: "Stars and the Andean Sky",
    summary:
      "Learn how Andean peoples read the night sky — including the dark constellations invisible to most astronomy traditions.",
    pathStage: "raiz",
    category: "archaeo-astronomy",
    estimatedMinutes: 9,
    isPublished: true,
    publishedAt: "2024-02-12",
    thumbnailUrl: "/images/lessons/andean-sky-thumb.jpg",
    author: "Mallku Aribalo (James Arevalo Merejildo)",
    video: {
      id: "v-005",
      title: "Stars and the Andean Sky",
      durationSeconds: 300,
      url: "https://www.youtube.com/embed/placeholder-005",
      thumbnailUrl: "/images/lessons/andean-sky-thumb.jpg",
      language: "en",
    },
    reflectionPrompts: [
      {
        id: "rp-005-1",
        lessonId: "lesson-005",
        prompt:
          "When did you last look at the night sky with full attention? What did you notice?",
      },
    ],
    glossaryTermIds: ["gt-yacana"],
  },
  {
    id: "lesson-006",
    slug: "sumaq-kawsay-living-well",
    title: "Sumaq Kawsay: The Path of Living Well",
    summary:
      "Sumaq Kawsay — Buen Vivir — is the Andean vision of a flourishing life rooted in balance, community, and harmony with nature.",
    pathStage: "tallo",
    category: "five-values",
    estimatedMinutes: 7,
    isPublished: true,
    publishedAt: "2024-02-19",
    thumbnailUrl: "/images/lessons/sumaq-kawsay-thumb.jpg",
    author: "Mallku Aribalo (James Arevalo Merejildo)",
    video: {
      id: "v-006",
      title: "Sumaq Kawsay: Living Well",
      durationSeconds: 225,
      url: "https://www.youtube.com/embed/placeholder-006",
      thumbnailUrl: "/images/lessons/sumaq-kawsay-thumb.jpg",
      language: "en",
    },
    reflectionPrompts: [
      {
        id: "rp-006-1",
        lessonId: "lesson-006",
        prompt: "What does living well mean to you — beyond comfort or success?",
        guidance:
          "Sumaq Kawsay is about relational flourishing, not individual achievement.",
      },
    ],
    glossaryTermIds: ["gt-sumaq-kawsay"],
  },
  {
    id: "lesson-007",
    slug: "pachamama-earth-as-living-being",
    title: "Pachamama: Earth as a Living Being",
    summary:
      "In Andean tradition, the Earth is not a resource — she is Pachamama, a living presence deserving of relationship and respect.",
    pathStage: "tallo",
    category: "conservation",
    estimatedMinutes: 8,
    isPublished: true,
    publishedAt: "2024-02-26",
    thumbnailUrl: "/images/lessons/pachamama-thumb.jpg",
    author: "Mallku Aribalo (James Arevalo Merejildo)",
    video: {
      id: "v-007",
      title: "Pachamama: Earth as a Living Being",
      durationSeconds: 255,
      url: "https://www.youtube.com/embed/placeholder-007",
      thumbnailUrl: "/images/lessons/pachamama-thumb.jpg",
      language: "en",
    },
    reflectionPrompts: [
      {
        id: "rp-007-1",
        lessonId: "lesson-007",
        prompt:
          "How does thinking of the Earth as a living being change how you relate to it?",
      },
    ],
    glossaryTermIds: ["gt-pachamama"],
  },
  {
    id: "lesson-008",
    slug: "the-andean-cross-chakana",
    title: "The Chakana: The Andean Cross",
    summary:
      "The Chakana is one of the oldest symbols in the Americas — a geometric key to Andean cosmology, mathematics, and celestial observation.",
    pathStage: "tallo",
    category: "archaeo-astronomy",
    estimatedMinutes: 10,
    isPublished: true,
    publishedAt: "2024-03-05",
    thumbnailUrl: "/images/lessons/chakana-thumb.jpg",
    author: "Mallku Aribalo (James Arevalo Merejildo)",
    video: {
      id: "v-008",
      title: "The Chakana: The Andean Cross",
      durationSeconds: 330,
      url: "https://www.youtube.com/embed/placeholder-008",
      thumbnailUrl: "/images/lessons/chakana-thumb.jpg",
      language: "en",
    },
    reflectionPrompts: [
      {
        id: "rp-008-1",
        lessonId: "lesson-008",
        prompt:
          "The Chakana holds opposites in balance. What opposites are you learning to hold in your own life?",
      },
    ],
    glossaryTermIds: ["gt-chakana"],
  },
  {
    id: "lesson-009",
    slug: "conservation-through-andean-eyes",
    title: "Conservation Through Andean Eyes",
    summary:
      "How traditional Andean ecological knowledge offers a vital perspective for modern conservation efforts in the Sacred Valley.",
    pathStage: "flor",
    category: "conservation",
    estimatedMinutes: 9,
    isPublished: true,
    publishedAt: "2024-03-12",
    thumbnailUrl: "/images/lessons/conservation-thumb.jpg",
    author: "Mallku Aribalo (James Arevalo Merejildo)",
    video: {
      id: "v-009",
      title: "Conservation Through Andean Eyes",
      durationSeconds: 290,
      url: "https://www.youtube.com/embed/placeholder-009",
      thumbnailUrl: "/images/lessons/conservation-thumb.jpg",
      language: "en",
    },
    reflectionPrompts: [
      {
        id: "rp-009-1",
        lessonId: "lesson-009",
        prompt:
          "What aspect of the natural world near you is most in need of protection — and what would it mean to enter into relationship with it?",
      },
    ],
  },
  {
    id: "lesson-010",
    slug: "inti-raymi-and-the-andean-calendar",
    title: "Inti Raymi and the Living Calendar",
    summary:
      "The Andean agricultural and ceremonial calendar is a living document — a guide for planting, gratitude, and cultural continuity.",
    pathStage: "flor",
    category: "cultural-calendar",
    estimatedMinutes: 10,
    isPublished: true,
    publishedAt: "2024-03-19",
    thumbnailUrl: "/images/lessons/inti-raymi-thumb.jpg",
    author: "Mallku Aribalo (James Arevalo Merejildo)",
    video: {
      id: "v-010",
      title: "Inti Raymi and the Living Calendar",
      durationSeconds: 345,
      url: "https://www.youtube.com/embed/placeholder-010",
      thumbnailUrl: "/images/lessons/inti-raymi-thumb.jpg",
      language: "en",
    },
    reflectionPrompts: [
      {
        id: "rp-010-1",
        lessonId: "lesson-010",
        prompt:
          "What seasonal rhythms do you notice in your own life, and how might you honor them more consciously?",
      },
    ],
    glossaryTermIds: ["gt-inti-raymi"],
  },
];

// ─── Seed Badges ─────────────────────────────────────────────────────────────

export const SEED_BADGES: Badge[] = [
  {
    id: "badge-001",
    slug: "seed-of-pacha",
    name: "Seed of Pacha",
    description: "You took your first step on the Puma Path.",
    iconUrl: "/icons/badges/seed-of-pacha.svg",
    category: "milestone",
    pathStage: "semilla",
    criteria: "Complete your first lesson.",
  },
  {
    id: "badge-002",
    slug: "ayni-keeper",
    name: "Ayni Keeper",
    description: "You completed your first reflection, giving back to the teaching.",
    iconUrl: "/icons/badges/ayni-keeper.svg",
    category: "reflection",
    pathStage: "semilla",
    criteria: "Complete 3 reflection prompts.",
  },
  {
    id: "badge-003",
    slug: "three-pachas-explorer",
    name: "Three Pachas Explorer",
    description: "You have begun to move through all three Andean realms.",
    iconUrl: "/icons/badges/three-pachas-explorer.svg",
    category: "exploration",
    pathStage: "raiz",
    criteria: "Watch lessons in all three Pacha categories.",
  },
  {
    id: "badge-004",
    slug: "sky-path-observer",
    name: "Sky Path Observer",
    description:
      "You turned your gaze toward the Andean sky and its ancient teachings.",
    iconUrl: "/icons/badges/sky-path-observer.svg",
    category: "astronomy",
    pathStage: "raiz",
    criteria: "Complete all archaeo-astronomy lessons.",
  },
  {
    id: "badge-005",
    slug: "garden-steward",
    name: "Garden Steward",
    description:
      "You have deepened your understanding of Pachamama and conservation.",
    iconUrl: "/icons/badges/garden-steward.svg",
    category: "conservation",
    pathStage: "tallo",
    criteria: "Complete all conservation lessons.",
  },
  {
    id: "badge-006",
    slug: "chakana-bearer",
    name: "Chakana Bearer",
    description:
      "You have learned to read the cross that orders the Andean cosmos.",
    iconUrl: "/icons/badges/chakana-bearer.svg",
    category: "cultural",
    pathStage: "tallo",
    criteria: "Complete The Chakana lesson with reflection.",
  },
  {
    id: "badge-007",
    slug: "five-values-walker",
    name: "Five Values Walker",
    description:
      "You have explored all five foundational Andean values in your learning.",
    iconUrl: "/icons/badges/five-values-walker.svg",
    category: "cultural",
    pathStage: "flor",
    criteria: "Complete all Five Andean Values lessons.",
  },
  {
    id: "badge-008",
    slug: "field-companion",
    name: "Field Companion",
    description: "You have followed Mallku into the field through five Field Notes.",
    iconUrl: "/icons/badges/field-companion.svg",
    category: "exploration",
    pathStage: "flor",
    criteria: "Read 5 Field Notes.",
  },
  {
    id: "badge-009",
    slug: "puma-path-walker",
    name: "Puma Path Walker",
    description:
      "You have walked the Puma Path with consistency and cultural respect.",
    iconUrl: "/icons/badges/puma-path-walker.svg",
    category: "milestone",
    pathStage: "puma",
    criteria: "Complete all ten seed lessons and earn 5 badges.",
  },
  {
    id: "badge-010",
    slug: "puma-of-service",
    name: "Puma of Service",
    description:
      "You have committed to sharing these teachings with care and integrity.",
    iconUrl: "/icons/badges/puma-of-service.svg",
    category: "milestone",
    pathStage: "puma",
    criteria: "Complete the full Puma Path and all reflections.",
  },
];

// ─── Seed Glossary Terms ───────────────────────────────────────────────────

export const SEED_GLOSSARY: GlossaryTerm[] = [
  {
    id: "gt-cosmovision",
    slug: "cosmovision",
    term: "Cosmovision",
    definition:
      "A worldview or way of understanding the cosmos, nature, and humanity's place within it. Andean cosmovision is a living, relational framework passed down through oral tradition and practice.",
    relatedLessonIds: ["lesson-001"],
  },
  {
    id: "gt-pacha",
    slug: "pacha",
    term: "Pacha",
    termOriginal: "Pacha",
    language: "Quechua",
    definition:
      "Often translated as 'world' or 'time,' Pacha encompasses both space and time as an integrated living reality. It is the ground of all Andean cosmological understanding.",
    relatedLessonIds: ["lesson-001", "lesson-002"],
  },
  {
    id: "gt-uku-pacha",
    slug: "uku-pacha",
    term: "Uku Pacha",
    termOriginal: "Ukhu Pacha",
    language: "Quechua",
    definition:
      "The inner world — the realm of the deep earth, of ancestors, seeds, and gestation. Often associated with darkness, potential, and what has not yet emerged.",
    relatedLessonIds: ["lesson-002"],
  },
  {
    id: "gt-kay-pacha",
    slug: "kay-pacha",
    term: "Kay Pacha",
    termOriginal: "Kay Pacha",
    language: "Quechua",
    definition:
      "The present world — the living, breathing realm we inhabit. The world of relationships, community, nature, and daily life.",
    relatedLessonIds: ["lesson-002"],
  },
  {
    id: "gt-hanaq-pacha",
    slug: "hanaq-pacha",
    term: "Hanaq Pacha",
    termOriginal: "Hanan Pacha",
    language: "Quechua",
    definition:
      "The upper world — the realm of stars, sky, celestial beings, and expanded consciousness. Associated with light, vision, and far-reaching awareness.",
    relatedLessonIds: ["lesson-002"],
  },
  {
    id: "gt-ayni",
    slug: "ayni",
    term: "Ayni",
    termOriginal: "Ayni",
    language: "Quechua",
    definition:
      "Sacred reciprocity — the living principle of balanced exchange between people, with nature, and with the cosmos. One of the five foundational Andean values.",
    relatedLessonIds: ["lesson-003"],
  },
  {
    id: "gt-sumaq-kawsay",
    slug: "sumaq-kawsay",
    term: "Sumaq Kawsay",
    termOriginal: "Sumaq Kawsay",
    language: "Quechua",
    definition:
      "Often translated as 'Buen Vivir' (Good Living or Living Well). A vision of collective flourishing rooted in harmony with nature, community, and the cycles of life.",
    relatedLessonIds: ["lesson-006"],
  },
  {
    id: "gt-pachamama",
    slug: "pachamama",
    term: "Pachamama",
    termOriginal: "Pachamama",
    language: "Quechua",
    definition:
      "Earth Mother — the living being of the Earth in Andean tradition. Not a metaphor, but a living presence deserving of relationship, gratitude, and care.",
    relatedLessonIds: ["lesson-007"],
  },
  {
    id: "gt-chakana",
    slug: "chakana",
    term: "Chakana",
    termOriginal: "Chakana",
    language: "Quechua",
    definition:
      "The Andean Cross — a stepped cross symbol encoding cosmological, mathematical, and calendrical knowledge. One of the most enduring symbols of Andean civilization.",
    relatedLessonIds: ["lesson-008"],
  },
  {
    id: "gt-yacana",
    slug: "yacana",
    term: "Yacana",
    termOriginal: "Yacana",
    language: "Quechua",
    definition:
      "The dark constellation of the Llama, visible in the dark spaces (dark cloud constellations) of the Milky Way. Central to Andean archaeo-astronomy.",
    relatedLessonIds: ["lesson-005"],
  },
  {
    id: "gt-inti-raymi",
    slug: "inti-raymi",
    term: "Inti Raymi",
    termOriginal: "Inti Raymi",
    language: "Quechua",
    definition:
      "Festival of the Sun — a major Andean ceremony honoring Inti (the Sun) at the winter solstice. Part of the living Andean ceremonial calendar.",
    relatedLessonIds: ["lesson-010"],
  },
];

// ─── Seed Field Notes ──────────────────────────────────────────────────────

export const SEED_FIELD_NOTES: FieldNote[] = [
  {
    id: "fn-001",
    slug: "morning-at-pisac-ruins",
    title: "Morning at Pisac: When the Sun Rises Over the Andes",
    date: "2024-01-10",
    location: "Pisac, Sacred Valley, Peru",
    excerpt:
      "At dawn, before the tourists arrive, the terraces at Pisac speak in a language older than stone.",
    body: "Placeholder body — field note content from Mallku Aribalo to be added.",
    imageUrl: "/images/field-notes/pisac-dawn.jpg",
    tags: ["Sacred Valley", "archaeo-astronomy", "sunrise"],
    author: "Mallku Aribalo (James Arevalo Merejildo)",
  },
  {
    id: "fn-002",
    slug: "reading-the-milky-way-from-moray",
    title: "Reading the Milky Way from Moray",
    date: "2024-02-08",
    location: "Moray, Sacred Valley, Peru",
    excerpt:
      "The circular agricultural terraces of Moray align with more than crops — they align with the sky.",
    body: "Placeholder body — field note content from Mallku Aribalo to be added.",
    imageUrl: "/images/field-notes/moray-night.jpg",
    tags: ["archaeo-astronomy", "Moray", "Milky Way"],
    author: "Mallku Aribalo (James Arevalo Merejildo)",
  },
  {
    id: "fn-003",
    slug: "the-living-terraces-of-andenes",
    title: "The Living Terraces: Andenes as a Conservation Model",
    date: "2024-03-01",
    location: "Ollantaytambo, Sacred Valley, Peru",
    excerpt:
      "The ancient andenes are not ruins. In the communities that still work them, they are a living conservation technology.",
    body: "Placeholder body — field note content from Mallku Aribalo to be added.",
    imageUrl: "/images/field-notes/andenes-ollantaytambo.jpg",
    tags: ["conservation", "andenes", "Ollantaytambo"],
    author: "Mallku Aribalo (James Arevalo Merejildo)",
  },
];
