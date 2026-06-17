import type { SiteContent } from "@/lib/types";

export const es: SiteContent = {
  locale: "es",
  meta: {
    title: "PachaMind",
    description:
      "Una plataforma bilingüe de aprendizaje documental sagrado con lecciones gratuitas, notas reflexivas y progreso local.",
  },
  brand: {
    name: "PachaMind",
    eyebrow: "Aprendizaje documental sagrado",
    promise: "No cost, no sales — only learning",
    traditionHolderLabel: "Guardián de la tradición",
    traditionHolderName: "Mallku Aribalo",
    disclaimer:
      "Estas lecciones se ofrecen para aprendizaje cultural y reflexión. No sustituyen orientación médica, terapéutica ni legal.",
  },
  nav: {
    home: "Inicio",
    library: "Biblioteca",
    pumaPath: "Camino del Puma",
    dashboard: "Panel",
    reflections: "Reflexiones",
    about: "Acerca de",
    contact: "Contacto",
    conservation: "Conservación",
    english: "English",
    spanish: "Español",
    skipToContent: "Saltar al contenido principal",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",
    languageToggleLabel: "Elegir idioma",
    mainNavLabel: "Navegación principal",
  },
  home: {
    title:
      "Entra en una biblioteca al ritmo de la montaña, hecha de escucha, reciprocidad y memoria.",
    intro:
      "PachaMind es un espacio bilingüe y gratuito diseñado como un cuaderno documental de campo: amplio, visual y arraigado en la reflexión comunitaria.",
    primaryCta: "Explorar la biblioteca",
    secondaryCta: "Ver tu panel",
    featuredLabel: "Lección destacada",
    sections: [
      {
        title: "Ritmo documental",
        body: "Visuales lentos, notas en capas y preguntas serenas hacen que cada lección se sienta como una visita de campo y no como un embudo de ventas.",
        image:
          "/images/andes/andes-iss59-range.jpg",
      },
      {
        title: "Acceso bilingüe",
        body: "El inglés y el español se mantienen sincronizados para que cada reflexión, nota y siguiente paso conserve el mismo sentido en ambas rutas.",
        image:
          "/images/andes/andes-iss64-range.jpg",
      },
      {
        title: "Gratuito y sin fines de lucro",
        body: "Cada página repite la promesa central con claridad: sin precios, sin checkout, sin presión para reservar y sin solicitudes de donación.",
        image:
          "/images/andes/andes-western-slope-aster.jpg",
      },
    ],
  },
  library: {
    title: "Biblioteca de lecciones",
    intro:
      "Mira directamente desde la biblioteca y luego abre la lección completa para ver notas más amplias, preguntas de reflexión y seguimiento de progreso.",
    lessonLabel: "Lección",
    watchLabel: "Ver ahora",
    notesLabel: "Notas de aprendizaje",
    openLessonLabel: "Abrir lección completa",
    searchPlaceholder: "Buscar lecciones…",
    filterAllLabel: "Todas",
    emptyState: "Ninguna lección coincide con tu búsqueda. Prueba otro término o tema.",
    topics: {
      listening: "Escucha",
      reciprocity: "Reciprocidad",
      ritual: "Ritual",
      stewardship: "Custodia",
      cosmovision: "Cosmovisión",
      integration: "Integración",
    },
  },
  lessonPage: {
    watchHeading: "Ver la lección",
    notesHeading: "Notas de aprendizaje",
    reflectionHeading: "Pregunta de reflexión",
    backToLibrary: "Volver a la biblioteca",
    markComplete: "Marcar lección como completada",
    markIncomplete: "Marcar lección como no completada",
    completedLabel: "Guardada en este navegador como completada",
    progressHint:
      "El progreso se guarda solo en este dispositivo. No necesitas una cuenta.",
    nextLessonLabel: "Continuar a la siguiente lección",
    dashboardLabel: "Ir al panel",
    videoComingSoonLabel: "Video próximamente",
  },
  dashboard: {
    title: "Tu panel de aprendizaje",
    intro:
      "Sigue lo que terminaste en este navegador, mira tu progreso total y vuelve a entrar en la siguiente lección sin iniciar sesión.",
    completedLabel: "Lecciones completadas",
    percentLabel: "Progreso",
    totalLabel: "Lecciones totales",
    continueLearning: "Continuar aprendiendo",
    allComplete:
      "Ya completaste todas las lecciones en este navegador. Puedes volver a cualquiera cuando quieras.",
    completedState: "Completada",
    notStartedState: "Aún no completada",
    lastWatchedLabel: "Última vista",
    topicsHeading: "Progreso por tema",
    resetLabel: "Restablecer progreso",
    resetConfirmHeading: "¿Restablecer todo el progreso?",
    resetConfirmLabel: "Sí, restablecer",
    resetCancelLabel: "Cancelar",
    certificateTitle: "Certificado de finalización",
    certificateIntro: "Has completado las cuatro lecciones en este navegador.",
    certificateBody:
      "Este es un reconocimiento gratuito de tu recorrido de aprendizaje en PachaMind. Guardián de la tradición: Mallku Aribalo. Sin costo, sin ventas — solo aprendizaje.",
    certificateNameLabel: "Tu nombre (opcional, guardado solo en este navegador)",
    certificateNamePlaceholder: "Escribe tu nombre",
    certificatePrintLabel: "Imprimir certificado",
  },
  about: {
    title: "Acerca de este espacio de aprendizaje",
    intro:
      "PachaMind conserva una atmósfera documental sagrada: ritmo cinematográfico, visuales en tonos tierra y estudio reflexivo con acceso gratuito.",
    missionHeading: "Nuestra misión",
    missionBody:
      "PachaMind existe para llevar las enseñanzas andinas a un espacio digital de libre acceso, sin distorsión, comercialización ni presión. Cada decisión de diseño —ritmo lento, amplitud visual, ausencia de lenguaje transaccional— es una expresión directa de ese compromiso.",
    storyHeading: "Cómo surgió este espacio",
    storyBody:
      "PachaMind nació del deseo de honrar las tradiciones vivas y a quienes las custodian. La plataforma se construyó en torno a las enseñanzas de Mallku Aribalo, quien las compartió para que pudieran viajar con respeto más allá de su geografía original y alcanzar a quienes estén dispuestos a escuchar con atención. Aquí nada se vende, se tokeniza ni se extrae de su contexto.",
    traditionHolderHeading: "Mallku Aribalo — guardián de la tradición y maestro chamánico",
    traditionHolderBody:
      "Mallku Aribalo es un maestro chamánico andino y guardián de la tradición cuyo conocimiento de la práctica cosmológica, la reciprocidad comunitaria y la atención sagrada forma el fundamento vivo de cada lección en este espacio. Sus enseñanzas se ofrecen aquí para el aprendizaje cultural y la reflexión, y aparecen acreditadas a él en toda la experiencia.",
    valuesHeading: "Compromisos que nos orientan",
    values: [
      "100 % gratuito y sin fines de lucro, sin precios, embudos de venta ni lenguaje de checkout.",
      "Mallku Aribalo aparece acreditado como guardián de la tradición en toda la experiencia.",
      "Las lecciones apoyan el aprendizaje cultural y la reflexión sin afirmaciones terapéuticas ni médicas.",
    ],
  },
  footer: {
    credit: "Guardián de la tradición: Mallku Aribalo",
    mission: "No cost, no sales — only learning",
  },
  contact: {
    title: "Escríbenos",
    intro:
      "Preguntas, traducciones o comentarios sobre el espacio de aprendizaje — este formulario abre un mensaje en tu aplicación de correo. Este sitio no almacena ningún dato.",
    nameLabel: "Tu nombre",
    namePlaceholder: "Cómo te gustaría que te llamaran",
    emailLabel: "Tu dirección de correo",
    emailPlaceholder: "Para poder responderte",
    messageLabel: "Tu mensaje",
    messagePlaceholder: "Preguntas, reflexiones o comentarios — escribe con libertad",
    submitLabel: "Abrir en la app de correo",
    successHeading: "Mensaje redactado",
    successBody:
      "Tu aplicación de correo se ha abierto con el mensaje ya preparado. Envíalo cuando estés listo.",
    validationName: "Por favor, escribe tu nombre.",
    validationEmail: "Por favor, ingresa una dirección de correo válida.",
    validationMessage: "Por favor, escribe un mensaje antes de enviar.",
    noteLabel:
      "Este formulario abre un enlace mailto: en tu aplicación de correo. No se transmite ni almacena ninguna información en este sitio.",
  },
  pumaPath: {
    title: "El Camino del Puma",
    intro:
      "Una progresión de aprendizaje de cinco etapas modelada por enseñanzas andinas. Avanza a tu propio ritmo, lleva solo atención y deja que cada lección profundice la siguiente.",
    stagesHeading: "Cinco etapas de aprendizaje",
    progressLabel: "Tu progresión de aprendizaje",
    noticeMission: "No cost, no sales — only learning",
    attributionNote:
      "El Camino del Puma se nutre de las enseñanzas de Mallku Aribalo, guardián de la tradición andina y maestro chamánico. Las cinco etapas se ofrecen aquí para el aprendizaje cultural y la reflexión — no como iniciación ni programa terapéutico.",
    stageLabel: "Etapa",
    completedLabel: "Completada",
    notStartedLabel: "Aún no visitada",
    openStageLabel: "Comenzar esta etapa",
    revisitLabel: "Volver a esta etapa",
    stages: [
      {
        key: "listening",
        title: "Escucha",
        body: "Llega antes de interpretar. La primera etapa entrena la atención para recibir antes de reaccionar: aprender a notar el clima, el ritmo, el silencio y el espacio entre las palabras.",
        image:
          "/images/andes/andes-iss59-range.jpg",
      },
      {
        key: "reciprocity",
        title: "Reciprocidad",
        body: "Pasa de recibir a responder. La reciprocidad pregunta qué sostienes en relación —con la comunidad, con la tierra, con la enseñanza— y cómo el cuidado constante sostiene el sentido de pertenencia.",
        image:
          "/images/andes/machu-picchu-urubamba-canyon.jpg",
      },
      {
        key: "ritual",
        title: "Ritual",
        body: "Ancla la intención en la acción repetida. La atención ritual es la disciplina de aparecer con constancia: gestos pequeños y enfocados practicados con cuidado se acumulan en memoria viva.",
        image:
          "/images/andes/machu-picchu-inti-punku.jpg",
      },
      {
        key: "stewardship",
        title: "Custodia",
        body: "Sostén lo que aprendiste con ligereza y fidelidad. La custodia pregunta cómo viajan las enseñanzas sin perder sus raíces, y cómo el crédito, el contexto y la humildad viajan con ellas.",
        image:
          "/images/andes/andes-western-slope-aster.jpg",
      },
      {
        key: "integration",
        title: "Integración",
        body: "Deja que las cuatro etapas se muevan juntas. La integración no es un destino final sino un retorno continuo: cada práctica renueva las otras cuando se sostienen como un todo y no como una secuencia.",
        image:
          "/images/andes/andes-iss47-mountain-road.jpg",
      },
    ],
  },
  lessons: [
    {
      slug: "mountain-listening",
      topic: "listening",
      title: "Escucha de la montaña",
      kicker: "Lección 1",
      duration: "12 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar una lección de apertura en paisaje andino que muestre escucha atenta, pausas, sonido ambiente y observación del lugar antes de interpretar.",
      description:
        "Comienza con una escucha atenta: regula tu atención, observa el lugar y deja que el silencio también enseñe.",
      extendedDescription:
        "Esta lección de apertura presenta la escucha como una forma disciplinada de llegar. Invita a notar el clima, el ritmo, la pausa y el tono antes de saltar a la explicación, manteniendo la atmósfera documental serena y observadora.",
      learningNotes: [
        "La escucha se trata como un acto de relación y no como consumo pasivo.",
        "Un ritmo más lento puede revelar contexto que se pierde cuando una lección corre hacia conclusiones.",
        "El silencio, el paisaje y la voz también llevan significado dentro de un marco documental sagrado.",
      ],
      reflectionPrompt:
        "¿Qué cambia cuando haces una pausa suficiente para notar el espacio que rodea una enseñanza antes de interpretarla?",
    },
    {
      slug: "ayllu-reciprocity",
      topic: "reciprocity",
      title: "Ayllu y reciprocidad",
      kicker: "Lección 2",
      duration: "14 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar entrevistas y tomas de apoyo que muestren reciprocidad tipo ayllu en la vida diaria, con cuidado mutuo, gratitud y responsabilidad compartida.",
      description:
        "Explora la reciprocidad como una práctica viva de cuidado mutuo, responsabilidad y gratitud entre comunidad y territorio.",
      extendedDescription:
        "Esta lección amplía la reflexión individual hacia la relación colectiva. Describe la reciprocidad como una disciplina cotidiana que pregunta qué recibimos, qué devolvemos y cómo el sentido de pertenencia crece mediante actos constantes de cuidado.",
      learningNotes: [
        "La reciprocidad se describe como una práctica repetida y no como un eslogan simbólico.",
        "La comunidad se sostiene mediante intercambio, gratitud y responsabilidad.",
        "La lección invita a considerar cómo tanto el lugar como las personas requieren respuesta.",
      ],
      reflectionPrompt:
        "¿En qué parte de tu vida diaria recibes apoyo y cómo sería una respuesta más recíproca?",
    },
    {
      slug: "ritual-attention",
      topic: "ritual",
      title: "Atención ritual",
      kicker: "Lección 3",
      duration: "11 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar una demostración respetuosa de gestos rituales simples y repetidos que expresen preparación, intención y atención encarnada sin espectáculo.",
      description:
        "Aprende cómo la atención ritual reúne memoria, intención y cuidado encarnado sin espectáculo ni presión performativa.",
      extendedDescription:
        "La atención ritual se presenta aquí como una manera de concentrar el cuidado. La lección enfatiza preparación, constancia y respeto, mostrando cómo gestos simples y repetidos pueden sostener sentido cuando se practican con claridad.",
      learningNotes: [
        "El ritual se muestra como atención enfocada y no como despliegue dramático.",
        "La constancia importa porque el significado se profundiza con la repetición.",
        "Los gestos encarnados pueden anclar la memoria cuando se practican con cuidado.",
      ],
      reflectionPrompt:
        "¿Qué acción pequeña y repetida te ayuda a volver a tu intención y qué le da sentido a esa acción?",
    },
    {
      slug: "carrying-the-teaching",
      topic: "stewardship",
      title: "Llevar la enseñanza hacia adelante",
      kicker: "Lección 4",
      duration: "13 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar una lección de cierre sobre custodia: cómo llevar la enseñanza con humildad, contexto, atribución y responsabilidad compartida.",
      description:
        "Cierra la secuencia considerando cómo las enseñanzas se transmiten con humildad, precisión y responsabilidad compartida.",
      extendedDescription:
        "La lección final se centra en la custodia. En lugar de tratar el aprendizaje como una colección personal, pregunta cómo recordar las enseñanzas con fidelidad, compartirlas con cuidado y mantenerlas conectadas con las comunidades que las sostienen.",
      learningNotes: [
        "La custodia requiere humildad para reconocer qué te pertenece y qué no.",
        "Compartir una enseñanza con responsabilidad incluye contexto, crédito y cuidado con el lenguaje.",
        "El aprendizaje se vuelve duradero cuando transforma la práctica y no solo la memoria.",
      ],
      reflectionPrompt:
        "¿Cómo puedes llevar una enseñanza hacia adelante de una manera que preserve contexto, crédito y responsabilidad?",
    },
    {
      slug: "what-pachamind-is",
      topic: "listening",
      title: "Qué es PachaMind",
      kicker: "Lección 5",
      duration: "8 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar una orientación que presente PachaMind como espacio andino gratuito y sin fines de lucro, dejando explícito que no hay ventas ni checkout.",
      description:
        "Una orientación a PachaMind: un espacio de educación andina gratuito y sin fines de lucro dedicado a la preservación cultural y el acceso abierto.",
      extendedDescription:
        "Esta lección presenta el propósito y los compromisos de PachaMind. Explica por qué este espacio está estructurado como un entorno de aprendizaje documental, por qué nunca aparece ningún costo ni lenguaje de ventas, y cómo cada lección se conecta con las tradiciones vivas que sostiene Mallku Aribalo. PachaMind existe para hacer que el conocimiento cultural andino esté disponible gratuitamente, sin distorsión, comercialización ni presión.",
      learningNotes: [
        "PachaMind es un espacio de aprendizaje gratuito y sin fines de lucro — sin precios, sin checkout, sin solicitudes de donación.",
        "Cada lección está arraigada en la tradición viva de Mallku Aribalo, acreditado como guardián de la tradición en toda la experiencia.",
        "El contenido se ofrece solo para aprendizaje cultural y reflexión; no reemplaza orientación médica, terapéutica ni legal.",
        "Nivel de riesgo: Bajo — contenido de orientación sin afirmaciones de salud ni de resultados.",
      ],
      reflectionPrompt:
        "¿Qué te atrae de aprender de una tradición cultural andina y cómo quieres sostener lo que recibas aquí?",
    },
    {
      slug: "mallku-aribalo-tradition-holder",
      topic: "stewardship",
      title: "Mallku Aribalo: Guardián de la tradición y maestro andino",
      kicker: "Lección 6",
      duration: "10 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar un perfil biográfico de Mallku Aribalo que cubra su rol como guardián de la tradición, contexto de linaje docente y valor de la atribución.",
      description:
        "Conoce a Mallku Aribalo — maestro chamánico andino, guardián de la tradición y ancla cultural del espacio de aprendizaje de PachaMind.",
      extendedDescription:
        "Esta lección presenta a Mallku Aribalo como la fuente viva de las enseñanzas que se transmiten en este espacio. Aborda su rol como guardián de la tradición dentro de la práctica cosmológica andina, su compromiso con la reciprocidad comunitaria y por qué la atribución es fundamental al compartir conocimiento sagrado entre culturas. Comprender quién sostiene una enseñanza es inseparable de comprender la enseñanza misma.",
      learningNotes: [
        "Mallku Aribalo es un maestro chamánico andino cuyo conocimiento de la práctica cosmológica forma el fundamento de cada lección en este espacio.",
        "La atribución es un acto de reciprocidad: acreditar la fuente preserva la integridad de la enseñanza.",
        "Maestro chamánico aquí se refiere a un rol cultural y tradicional; no se hacen afirmaciones terapéuticas ni médicas.",
        "Nivel de riesgo: Medio — contenido biográfico y de atribución; verificar derechos antes de citar directamente sus obras publicadas.",
      ],
      reflectionPrompt:
        "¿Por qué es importante saber quién sostiene una enseñanza para la manera en que la recibes y la llevas hacia adelante?",
    },
    {
      slug: "kausay-pacha-living-universe",
      topic: "cosmovision",
      title: "Kausay Pacha: El universo viviente",
      kicker: "Lección 7",
      duration: "12 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar una lección conceptual sobre Kausay Pacha como universo viviente y relacional, introduciendo el marco de las Tres Pachas.",
      description:
        "Explora Kausay Pacha — el concepto andino del universo viviente — como fundamento cosmológico del pensamiento y la práctica andinos.",
      extendedDescription:
        "En la cosmovisión andina, Kausay Pacha describe un universo que está vivo, es relacional y se encuentra en diálogo constante con los seres humanos. Esta lección introduce el concepto como una lente para comprender cómo las Tres Pachas (Hanaq, Kay y Uku) se relacionan entre sí y con la vida cotidiana. Presenta este marco como educación cultural y filosófica, no como cosmología prescriptiva.",
      learningNotes: [
        "Kausay Pacha significa 'el universo viviente' en quechua — un cosmos entendido como animado y relacional.",
        "Este marco se presenta como educación cultural y filosófica arraigada en la tradición andina.",
        "El concepto del universo viviente proporciona el fundamento cosmológico para comprender las Tres Pachas.",
        "Nivel de riesgo: Bajo — alfabetización cultural sin afirmaciones de salud ni de resultados.",
      ],
      reflectionPrompt:
        "¿Cómo cambia la comprensión de tu lugar en el mundo cuando piensas en el universo como algo vivo y relacional?",
    },
    {
      slug: "hanaq-pacha-sky-cycles",
      topic: "cosmovision",
      title: "Hanaq Pacha: Cielo, ciclos y arqueoastronomía",
      kicker: "Lección 8",
      duration: "14 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar una lección de cielo y sitios sagrados sobre Hanaq Pacha con contexto histórico de arqueoastronomía, ciclos celestes y alineaciones.",
      description:
        "Estudia Hanaq Pacha — el mundo superior del cielo, las estrellas y los ciclos cósmicos — y cómo los pueblos andinos leyeron los cielos como un mapa del tiempo y la relación.",
      extendedDescription:
        "Hanaq Pacha es el mundo superior andino: el reino del sol, la luna, las estrellas y los ciclos cósmicos. Esta lección explora cómo las comunidades andinas desarrollaron un sofisticado conocimiento arqueoastronómico para rastrear el tiempo, alinear la arquitectura sagrada y sostener el ritmo comunitario. Todas las afirmaciones astronómicas se presentan como interpretación académica e histórica, no como autoridad predictiva ni astrológica.",
      learningNotes: [
        "Hanaq Pacha se refiere al mundo superior en la cosmovisión andina — abarca el cielo, los cuerpos celestes y los ciclos cósmicos.",
        "La arqueoastronomía andina es un campo académico documentado; las afirmaciones aquí siguen la interpretación académica.",
        "Las alineaciones de sitios sagrados (p. ej., Machu Picchu, Sacsayhuamán) se presentan como evidencia histórica y arquitectónica, no como prescripción mística.",
        "Nivel de riesgo: Medio — evitar reclamar autoridad astronómica, astrológica o predictiva; enmarcar el contenido como interpretación histórica.",
      ],
      reflectionPrompt:
        "¿Qué significa leer el cielo como un calendario y un mapa de responsabilidad comunitaria, en lugar de solo como un telón de fondo?",
    },
    {
      slug: "kay-pacha-reciprocity",
      topic: "reciprocity",
      title: "Kay Pacha: Reciprocidad y práctica cotidiana",
      kicker: "Lección 9",
      duration: "13 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar una lección de vida cotidiana que muestre prácticas de reciprocidad en Kay Pacha con tierra, comunidad y gratitud diaria.",
      description:
        "Kay Pacha — el mundo presente de la vida cotidiana — es donde la reciprocidad se convierte en práctica: en la tierra, la comunidad y los ritmos de los días ordinarios.",
      extendedDescription:
        "Kay Pacha es el mundo medio andino: el presente vivido, la tierra bajo nuestros pies, la comunidad en la que nos movemos. Esta lección explora cómo la cosmovisión andina invita a los seres humanos a relacionarse con Kay Pacha a través de la atención recíproca: cuidar la tierra, sostener la comunidad y practicar la gratitud como disciplina cotidiana más que como ocasión ritual.",
      learningNotes: [
        "Kay Pacha es el mundo presente en la cosmovisión andina — el dominio de la vida humana cotidiana y la relación.",
        "La reciprocidad en Kay Pacha es una práctica diaria, no un gesto simbólico: rige cómo uno trata la tierra, la comunidad y uno mismo.",
        "Anclar las Tres Pachas en la vida cotidiana conecta el estudio cosmológico con el comportamiento vivido.",
        "Nivel de riesgo: Bajo — educación cultural y ética sin afirmaciones de salud ni de resultados.",
      ],
      reflectionPrompt:
        "¿Dónde en tu vida cotidiana experimenta el mundo presente que te pide algo — y cómo respondes?",
    },
    {
      slug: "uku-pacha-ancestry",
      topic: "cosmovision",
      title: "Uku Pacha: Ancestralidad, profundidad e integración",
      kicker: "Lección 10",
      duration: "11 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar una lección de alfabetización cultural sobre Uku Pacha, ancestralidad, memoria e integración sin marco terapéutico.",
      description:
        "Uku Pacha — el mundo interior o inferior — sostiene la ancestralidad, la profundidad y las raíces de lo que portamos, ofrecido aquí como aprendizaje cultural sobre la integración y la memoria.",
      extendedDescription:
        "Uku Pacha es el mundo interior o inferior andino: no un lugar de castigo sino de profundidad, ancestralidad y las raíces invisibles de las tradiciones vivas. Esta lección presenta Uku Pacha como una lente cultural para comprender cómo las comunidades sostienen la memoria, integran la dificultad y se nutren del conocimiento ancestral. Se ofrece estrictamente como alfabetización educativa y cultural, no como marco terapéutico ni psicológico.",
      learningNotes: [
        "Uku Pacha es el mundo inferior o interior en la cosmovisión andina — el reino de la ancestralidad, las raíces y la profundidad.",
        "Esta lección se ofrece como alfabetización cultural y educativa sobre cómo las tradiciones andinas comprenden la memoria y la integración.",
        "No se hacen afirmaciones terapéuticas, psicológicas ni de sanación; el contenido es estrictamente cultural en su enfoque.",
        "Nivel de riesgo: Bajo — alfabetización cultural presentada como contenido educativo sin afirmaciones terapéuticas.",
      ],
      reflectionPrompt:
        "¿Qué portas de quienes te precedieron y cómo moldea la memoria cultural la tierra sobre la que te paras?",
    },
    {
      slug: "ayni-sacred-reciprocity",
      topic: "reciprocity",
      title: "Ayni: Reciprocidad sagrada",
      kicker: "Lección 11",
      duration: "12 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar una lección ética que defina el Ayni como reciprocidad sagrada y contraste equilibrio relacional con intercambio transaccional.",
      description:
        "Ayni es el principio andino de reciprocidad sagrada: dar y recibir en equilibrio, con la tierra, la comunidad y el cosmos.",
      extendedDescription:
        "El Ayni — frecuentemente traducido como reciprocidad sagrada — es uno de los principios más fundamentales de la cultura andina. Esta lección explora el Ayni como una ética relacional que une a los individuos con la comunidad, con el lugar y con el orden cósmico más amplio. Examina en qué se diferencia el Ayni del intercambio transaccional y por qué sigue siendo una práctica viva y no un artefacto histórico.",
      learningNotes: [
        "Ayni suele traducirse como 'reciprocidad sagrada' — una ética relacional en el centro de la vida cultural andina.",
        "El Ayni difiere del intercambio transaccional: es relacional, continuo y está arraigado en el cuidado mutuo más que en la equivalencia.",
        "Comprender el Ayni ayuda a situar Kay Pacha, Ayllu y los Cinco Valores Andinos dentro de un marco cultural coherente.",
        "Nivel de riesgo: Bajo — educación cultural y ética sin afirmaciones de salud ni de resultados.",
      ],
      reflectionPrompt:
        "¿Dónde en tus relaciones practicas el equilibrio entre dar y recibir, y dónde resulta más difícil mantener ese equilibrio?",
    },
    {
      slug: "values-munay-yachay-llankay",
      topic: "ritual",
      title: "Munay, Yachay, Llank'ay, Sami y Hucha: Los valores como currículo",
      kicker: "Lección 12",
      duration: "15 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar una lección curricular que desarrolle Munay, Yachay, Llank'ay, Sami y Hucha con ejemplos concretos de práctica.",
      description:
        "Los Cinco Valores Andinos — Munay, Yachay, Llank'ay, Sami y Hucha — forman la columna vertebral ética de la práctica cultural andina y el currículo de PachaMind.",
      extendedDescription:
        "La tradición andina organiza la vida ética en torno a cinco conceptos entrelazados: Munay (amor y voluntad), Yachay (conocimiento y sabiduría), Llank'ay (trabajo con propósito y servicio), Sami (energía refinada y liviana) y Hucha (energía pesada o sin procesar). Esta lección presenta estos valores como un marco curricular — una manera de evaluar dónde descansa actualmente tu atención, intención y esfuerzo, y hacia dónde te llama el crecimiento.",
      learningNotes: [
        "Munay: amor, intención y voluntad de actuar desde el cuidado más que desde el miedo.",
        "Yachay: sabiduría acumulada y la disciplina de aprender con humildad.",
        "Llank'ay: trabajo significativo y servicio como forma de reciprocidad con la comunidad.",
        "Sami y Hucha describen cualidades energéticas — ligereza y pesadez — como conceptos culturales, no médicos.",
        "Nivel de riesgo: Bajo — educación en valores presentada como currículo cultural sin afirmaciones terapéuticas.",
      ],
      reflectionPrompt:
        "¿Cuál de estos cinco valores te exige más en este momento, y cómo sería cuidarlo esta semana?",
    },
    {
      slug: "huacas-sacred-sites",
      topic: "stewardship",
      title: "Huacas y lugares sagrados: Interpretación académica y tradición viva",
      kicker: "Lección 13",
      duration: "13 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar cobertura en sitio y con apoyo de archivo sobre huacas, equilibrando interpretación académica con significado vivo comunitario.",
      description:
        "Las huacas — lugares y objetos sagrados andinos — se encuentran en la intersección de la arqueología, la tradición viva y la custodia cultural.",
      extendedDescription:
        "Una huaca es un lugar, objeto o ser considerado sagrado en la tradición andina — una montaña, un manantial, una piedra tallada o un sitio ancestral. Esta lección navega la diferencia entre la interpretación arqueológica académica y el significado vivo que las comunidades andinas continúan sosteniendo. Invita a los estudiantes a permanecer con esa diferencia con respeto, en lugar de resolverla prematuramente.",
      learningNotes: [
        "Huaca (wak'a) se refiere a un lugar, objeto o ser sagrado en la tradición andina — el término abarca una amplia gama de sitios y entidades.",
        "Las interpretaciones arqueológicas y académicas de las huacas difieren del significado vivo que sostienen las comunidades andinas; ambas merecen atención cuidadosa.",
        "Esta lección practica la custodia cultural: sostener la complejidad, evitar la extracción y acreditar las tradiciones vivas como fuentes.",
        "Nivel de riesgo: Medio — verificar fuentes académicas; evitar reclamar autoridad espiritual; respetar la propiedad intelectual comunitaria.",
      ],
      reflectionPrompt:
        "¿Cómo sostienes la diferencia entre estudiar un lugar sagrado desde afuera y respetar su significado vivo para la comunidad que lo llama hogar?",
    },
    {
      slug: "puma-path-orientation",
      topic: "stewardship",
      title: "Orientación al Camino del Puma: De Semilla a Puma como progresión de aprendizaje",
      kicker: "Lección 14",
      duration: "9 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar una orientación del Camino del Puma que explique Semilla-a-Puma como progresión de estudio y no como iniciación o ceremonia.",
      description:
        "El Camino del Puma es la progresión de aprendizaje de PachaMind — un arco curricular estructurado de Semilla (semilla) a Puma — no una iniciación ni una ceremonia.",
      extendedDescription:
        "El Camino del Puma organiza el currículo de PachaMind en una progresión de estudio. Semilla (semilla) marca el comienzo — una orientación hacia la escucha, la presencia y el contexto cultural. Puma marca un compromiso sostenido con los valores andinos, la cosmovisión y la práctica recíproca. Esta progresión es solo un marco de aprendizaje: no es una ceremonia, no es una iniciación y no es una calificación. Es un mapa para un compromiso estudioso, humilde y a largo plazo con una tradición viva.",
      learningNotes: [
        "El Camino del Puma es un arco curricular — una progresión de aprendizaje — no una ceremonia, iniciación ni calificación espiritual.",
        "Las etapas van de Semilla (semilla) hasta Puma; cada etapa corresponde a un estudio y práctica más profundos, no a un avance ritual.",
        "Completar el Camino del Puma no confiere ninguna autoridad sobre la tradición andina; es solo un registro de aprendizaje personal.",
        "Nivel de riesgo: Bajo — solo enmarcamiento como progresión de aprendizaje; sin lenguaje de iniciación, ceremonia ni promesa de resultados.",
      ],
      reflectionPrompt:
        "¿Qué significa seguir un camino de aprendizaje con genuina humildad — tratando cada etapa como una profundización de la atención en lugar de un logro que coleccionar?",
    },
    {
      slug: "path-of-integration",
      topic: "integration",
      title: "El camino de la integración",
      kicker: "Lección 15",
      duration: "15 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote: "Filmar un cierre de integración que muestre cómo escucha, reciprocidad, ritual y custodia se sostienen como práctica cíclica continua.",
      description:
        "Reúne las cuatro etapas en una práctica viva: cómo la escucha, la reciprocidad, el ritual y la custodia se sostienen y se renuevan mutuamente con el tiempo.",
      extendedDescription:
        "La integración no es un destino final sino un movimiento continuo. Esta lección pregunta cómo las cuatro etapas anteriores se apoyan mutuamente como práctica completa, y cómo los estudiantes pueden regresar a cualquier etapa con nuevos ojos, enriquecidos por todo lo que vino antes.",
      learningNotes: [
        "La integración se entiende como un ciclo continuo y no como un estado terminado.",
        "Cada etapa profundiza las demás cuando se sostienen juntas con atención constante.",
        "Mantener una práctica completa significa acoger el retorno tanto como el avance.",
      ],
      reflectionPrompt:
        "¿Cómo se mueven ya juntas la escucha, la reciprocidad, el ritual y la custodia en tu vida diaria, y dónde piden más atención?",
    },
  ],
  conservation: {
    title: "Conservación andina",
    intro:
      "Desde la perspectiva de la cosmovisión andina, la conservación no es una política ni un proyecto, sino una relación viva. Estas temáticas exploran cómo los saberes andinos ofrecen un enfoque arraigado para cuidar el agua, la tierra, la biodiversidad y la comunidad a lo largo de las generaciones.",
    attributionLabel: "Guardián de la tradición",
    principlesHeading: "Principios fundamentales",
    reflectionHeading: "Una reflexión para tu aprendizaje",
    reflectionPrompt:
      "¿Qué relación con el mundo natural que te rodea ha sido moldeada por la reciprocidad y qué significaría cuidar esa relación con mayor atención?",
    bands: [
      {
        title: "Reciprocidad con la tierra (Ayni)",
        body: "En la cosmovisión andina, la tierra no es un recurso que gestionar sino un ser vivo con quien relacionarse. El principio del ayni — reciprocidad — moldea cada interacción con la tierra: lo que tomas, lo devuelves; lo que recibes, lo cuidas. La conservación se convierte en un acto de gratitud continua.",
        image:
          "/images/andes/machu-picchu-general.png",
      },
      {
        title: "El agua como ser vivo",
        body: "En la tradición andina, el agua se honra como fuente de vida que porta memoria e intención. La conservación comienza con la escucha: comprender de dónde viene el agua, cómo se mueve y qué necesita para seguir fluyendo a través de comunidades y generaciones. Proteger las cuencas es un acto de reciprocidad comunitaria.",
        image:
          "/images/andes/machu-picchu-urubamba-canyon.jpg",
      },
      {
        title: "Biodiversidad y la trama de la vida",
        body: "El pensamiento cosmológico andino reconoce que todos los seres vivos — plantas, animales, hongos, suelos — participan en una existencia compartida. La diversidad no es ornamental; es la integridad estructural del mundo vivo, y cada pérdida lo empobrece todo. Cuidar la biodiversidad es cuidar la relación misma.",
        image:
          "/images/andes/machu-picchu-aster-nasa.jpg",
      },
      {
        title: "Prácticas sostenibles arraigadas en el saber ancestral",
        body: "Las tradiciones andinas de cultivo y gestión del territorio — terrazas, rotación de cultivos, canales de agua, policultivos — se desarrollaron durante siglos de observación cuidadosa y custodia comunitaria. Estas prácticas no son folclore; son respuestas sofisticadas a ecosistemas complejos, refinadas a lo largo de generaciones de cuidado atento.",
        image:
          "/images/andes/machu-picchu-hb10.jpg",
      },
    ],
    principles: [
      "La tierra es un ser vivo que merece cuidado, no un recurso para ser extraído.",
      "El agua porta memoria; proteger las cuencas es un acto de reciprocidad comunitaria.",
      "La biodiversidad refleja la riqueza de las relaciones entre todos los seres vivos.",
      "El conocimiento ecológico ancestral ofrece orientación arraigada y probada para el cuidado del territorio.",
      "La conservación es una práctica colectiva sostenida mediante responsabilidad compartida y atención constante.",
    ],
  },
  reflections: {
    title: "Reflexiones",
    intro:
      "Un espacio contemplativo para detenerte con la pregunta de cada lección. Escribe en privado — tus notas permanecen solo en este navegador y nunca se transmiten ni se almacenan en este sitio.",
    promptsHeading: "Preguntas para el diario",
    noteLabel: "Tus notas privadas",
    notePlaceholder:
      "Escribe con libertad. Tus notas permanecen solo en este navegador — nada se comparte ni se transmite.",
    saveLabel: "Guardar nota",
    savedLabel: "Guardada",
    clearLabel: "Borrar",
    storageHint:
      "Las notas se almacenan solo localmente en este navegador. Este sitio no transmite ni recopila ningún dato.",
    attributionLabel: "Preguntas reflexivas extraídas de las enseñanzas de Mallku Aribalo",
    parallaxSections: [
      {
        title: "Escribir como escucha",
        body: "Llevar un diario dentro de un marco de cosmovisión no es análisis — es una manera de atender a lo que ya está presente. Escribe hacia la observación, no hacia conclusiones.",
        image:
          "/images/andes/machu-picchu-aster-nasa.jpg",
      },
      {
        title: "Privado y sin prisa",
        body: "Estas notas te pertenecen solo a ti. No hay cuentas, ni envíos, ni respuestas correctas — solo el espacio tranquilo entre una pregunta y tu respuesta.",
        image:
          "/images/andes/machu-picchu-partial-1911.jpg",
      },
    ],
  },
};
