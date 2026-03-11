// ─── INTERFACES ───────────────────────
interface Service {
  id: string;
  icon: string;
  featured?: boolean;
  name: string;
  description: string;
  linkText: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  initials: string;
  photo: string;
  linkedin?: string;
  x?: string;
}

interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  variant: 'light' | 'dark';
}

interface ManifestoPillar {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Client {
  name: string;
}

export const siteConfig = {

  // ─── IDENTITY ─────────────────────
  name: "Veredic",
  tagline: "Asesoría Legal Estratégica",
  year: new Date().getFullYear().toString(),

  // ─── URLS ─────────────────────────
  domain: "veredic.com",
  url: "https://veredic.com",

  // ─── CONTACT ──────────────────────
  whatsapp: "+5491112345678",
  social: {
    instagram: "https://instagram.com/veredic",
    linkedin: "https://linkedin.com/company/veredic",
    x: "https://x.com/veredic",
  },
  email: "consulta@veredic.com",
  whatsappMessages: {
    general: "Hola, me gustaría conocer más sobre sus servicios legales.",
    cta: "Hola, deseo agendar una Consulta Confidencial. ¿Hablamos?",
    consultation: "Hola, soy [nombre] de [empresa]. Necesito agendar una Consulta Confidencial para discutir un caso de [área práctica].",
  },

  // ─── FONTS ────────────────────────
  // Updated per project in first prompt
  // Loaded dynamically in layout.tsx
  fonts: {
    display: "Cormorant",
    body: "Outfit",
    mono: "JetBrains Mono",
  },

  // ─── COLORS ───────────────────────
  // Injected as CSS variables in layout.tsx
  // Never hardcode these in components
  colors: {
    primary: "#1C1E21",      // Carbón
    secondary: "#2A3B4E",   // Slate
    accent: "#C9B398",       // Oro
    cream: "#F7F3F1",        // Crema
    stone: "#EBE8E3",        // Stone
    cream2: "#FAF8F6",       // Crema 2
    stone2: "#E2DED8",       // Stone 2
    gold2: "#b89e82",        // Oro 2
    slate2: "#3b526b",      // Slate 2
    ink: "#0f1113",          // Ink
    bg: "#FFFFFF",
    bgAlt: "#F5F5F5",
    muted: "#666666",
    border: "#E5E5E5",
    success: "#22C55E",
  },

  // ─── LOCATIONS ────────────────────
  locations: [
    { city: "Buenos Aires", country: "Argentina", utc: "UTC -3" },
    { city: "São Paulo", country: "Brasil", utc: "UTC -3" },
    { city: "Mexico City", country: "México", utc: "UTC -6" },
    { city: "Santiago", country: "Chile", utc: "UTC -4" },
  ],

  // ─── METADATA ─────────────────────
  meta: {
    title: "Veredic — Asesoría Legal Estratégica Corporativa",
    description: "Firma legal premium especializada en M&A, litigio corporativo y asesoría estratégica para empresas en LATAM. Expertos en transacciones complejas y disputas internacionales.",
    ogImage: "/og-image.png",
  },

  // ─── NAVIGATION ───────────────────
  nav: {
    links: [
      { label: "Servicios", href: "#services" },
      { label: "La Firma", href: "#manifesto" },
      { label: "Socios", href: "#team" },
      { label: "Contacto", href: "#contact" },
    ],
    cta: "Agendar Consulta",
  },

  // ─── CONTENT ───────────────────────
  // All semantic content extracted from reference design
  // Translated to professional Spanish for LATAM corporate market
  
  hero: {
    eyebrow: "Asesoría Legal Estratégica · Est. 2009",
    title: [
  "Precisión <em>Legal.</em>",
  "Dominio",
  "<em>Estratégico.</em>"
],
    subtitle: "Brindamos asesoría legal de alto impacto para las empresas más influyentes de LATAM — fusiones, litigios complejos y las decisiones estratégicas que definen industrias.",
    ctaPrimary: "Iniciar Su Caso",
    ctaSecondary: "Áreas de Práctica",
    badges: [
      {
        label: "AUM Asesorado",
        value: "$4.2B",
        dots: [true, false, false, false]
      },
      {
        label: "Tasa de Retención",
        value: "98%"
      }
    ]
  },

  marquee: [
    "M&A Corporativo", "Litigio de Valores", "Private Equity", 
    "Arbitraje Internacional", "Cumplimiento Regulatorio", "Mercados de Capitales",
    "Reestructuración", "Estrategia Fiscal"
  ],

  stats: {
    kicker: "Por los Números",
    title: "Impacto<br><em>cuantificado</em>",
    description: "Cada métrica refleja nuestro compromiso de entregar resultados excepcionales para clientes que demandan el más alto nivel de precisión legal y acumen estratégico.",
    items: [
      { value: "15+", label: "Años de Excelencia" },
      { value: "98%", label: "Retención de Clientes" },
      { value: "340+", label: "Casos Resueltos" },
      { value: "42+", label: "Jurisdicciones Globales" }
    ] as Stat[]
  },

  services: {
    kicker: "Lo Que Hacemos",
    title: "Especialidades de alto <em><i>impacto</i></em>",
    count: "06",
    dragHint: "Arrastra para explorar",
    items: [
      {
        id: "01",
        icon: "Layers",
        featured: true,
        name: "Fusiones y<br>Adquisiciones",
        description: "Asesoría transaccional integral para operaciones transfronterizas, consolidaciones estratégicas y LBOs de toda escala.",
        linkText: "Explorar Práctica"
      },
      {
        id: "02",
        icon: "Clock",
        name: "Litigio de<br>Valores",
        description: "Representación agresiva en fraudes de valores, acciones derivadas y casos de cumplimiento ante organismos reguladores.",
        linkText: "Explorar Práctica"
      },
      {
        id: "03",
        icon: "AppWindow",
        name: "Private Equity<br>y Fondos",
        description: "Estructuración, recaudación de fondos y asesoría a portfolio companies para los principales sponsors de private equity.",
        linkText: "Explorar Práctica"
      },
      {
        id: "04",
        icon: "Globe",
        name: "Arbitraje<br>Internacional",
        description: "Representación en disputas transfronterizas complejas bajo procedimientos ICC, LCIA, CIADI y arbitrajes ad hoc.",
        linkText: "Explorar Práctica"
      },
      {
        id: "05",
        icon: "ShieldCheck",
        name: "Regulatorio<br>y Cumplimiento",
        description: "Navegando regulaciones financieras, antimonopolio y gobernanza corporativa en un entorno regulatorio en constante evolución.",
        linkText: "Explorar Práctica"
      },
      {
        id: "06",
        icon: "GitMerge",
        name: "Reestructuración<br>Corporativa",
        description: "Guiando empresas y acreedores a través de reestructuraciones financieras complejas, workouts y procedimientos concursales.",
        linkText: "Explorar Práctica"
      }
    ] as Service[]
  },

  manifesto: {
    kicker: "Nuestra Filosofía",
    text: "No solo asesoramos — nos <span class=\"hl\">integramos</span> en el núcleo estratégico de su empresa. Donde otros ven complejidad, nosotros vemos el <span class=\"hl\">camino preciso</span> hacia la resolución.",
    pillars: [
      {
        id: "I",
        number: "I.",
        title: "Asociación Estratégica",
        description: "Alineamos nuestro asesoramiento con sus objetivos de negocio a largo plazo, no solo necesidades legales inmediatas. Su éxito es nuestro único enfoque."
      },
      {
        id: "II", 
        number: "II.",
        title: "Servicio Liderado por Socios",
        description: "Cada caso es dirigido por un socio senior con responsabilidad directa. Sin delegaciones. Sin dilución de experiencia o atención."
      },
      {
        id: "III",
        number: "III.", 
        title: "Perspectiva Global",
        description: "Experiencia transfronteriza abarcando 42 jurisdicciones asegura ejecución sin fisuras sin importar la complejidad o geografía."
      }
    ] as ManifestoPillar[]
  },

  team: {
    kicker: "Los Socios",
    title: "Las mentes detrás de <em>cada resultado</em>",
    moreLink: "Equipo Completo",
    members: [
      {
        id: "WA",
        name: "William H. Ashford",
        role: "Socio Director",
        specialty: "M&A · Gobernanza Corporativa",
        initials: "WA",
        photo: "/william.jpg",
        linkedin: "https://linkedin.com/in/william-ashford",
        x: "https://x.com/washford"
      },
      {
        id: "EP",
        name: "Eleanor S. Park", 
        role: "Socia Senior",
        specialty: "Valores · Litigio",
        initials: "EP",
        photo: "/eleanor.jpg",
        linkedin: "https://linkedin.com/in/eleanor-park",
        x: ""
      },
      {
        id: "MC",
        name: "Marcus J. Chen",
        role: "Socio",
        specialty: "Private Equity · Fondos", 
        initials: "MC",
        photo: "/marcus.jpg",
        linkedin: "https://linkedin.com/in/marcus-chen",
        x: "https://x.com/marcuschen"
      },
      {
        id: "AL",
        name: "Adrienne Laval",
        role: "Socia",
        specialty: "Arbitraje Internacional",
        initials: "AL",
        photo: "/adrienne.jpg",
        linkedin: "https://linkedin.com/in/adrienne-laval",
        x: ""
      }
    ] as TeamMember[]
  },

  testimonials: {
    kicker: "Voces de Clientes",
    title: "Resultados que <em>hablan por sí solos</em>",
    allLink: "Todos los Casos",
    items: [
      {
        id: "RH",
        text: "El equipo de M&A de Veredic navegó nuestra adquisición de $800M con una elegancia que nunca había experimentado. Su anticipación de la fricción regulatoria por sí sola ahorró meses de costosos retrasos.",
        author: "Richard Harlow",
        role: "CEO, Meridian Group",
        company: "Meridian Group",
        rating: 5,
        variant: "light"
      },
      {
        id: "SC",
        text: "En 22 años trabajando con estudios legales, nunca había encontrado un equipo que combine brillantez legal con tan raro acumen comercial.",
        author: "Sophia Chen", 
        role: "GC, Helix Capital",
        company: "Helix Capital",
        rating: 5,
        variant: "dark"
      },
      {
        id: "JM",
        text: "Su respuesta a nuestra investigación regulatoria fue inmediata y decisiva — el caso se resolvió con cero hallazgos en nuestra contra.",
        author: "James Mallory",
        role: "CFO, Vantage Group", 
        company: "Vantage Group",
        rating: 5,
        variant: "light"
      },
      {
        id: "AP",
        text: "Un socio estratégico en el sentido más verdadero. Veredic no solo responde preguntas legales — nos ayudan a ver alrededor de las esquinas.",
        author: "André Patel",
        role: "Presidente, Arden Partners",
        company: "Arden Partners", 
        rating: 5,
        variant: "light"
      }
    ] as Testimonial[]
  },

  clients: {
    label: "Confían en nosotros",
    names: [
      { name: "Meridian" },
      { name: "Vantage Group" },
      { name: "Helix Capital" },
      { name: "Arden Partners" },
      { name: "NorthStar" },
      { name: "Apex Holdings" }
    ] as Client[]
  },

  contact: {
    kicker: "Iniciar Su Caso",
    title: "Hablemos de su <em>caso</em>",
    subtitle: "Nuestro equipo de intake responde dentro de 4 horas hábiles. Cada consulta es manejada con estricta confidencialidad por un socio senior.",
    trustBadges: ["Confidencial", "Liderado por Socios", "Alcance Global"],
    form: {
      fields: {
        firstName: "Nombre",
        lastName: "Apellido", 
        email: "Email Corporativo",
        company: "Empresa / Organización",
        practiceArea: "Área de Práctica de Interés",
        message: "Descripción breve del caso (opcional)"
      },
      practiceAreas: [
        "Fusiones y Adquisiciones",
        "Litigio de Valores", 
        "Private Equity y Fondos",
        "Arbitraje Internacional",
        "Regulatorio y Cumplimiento",
        "Reestructuración Corporativa"
      ],
      submitText: "Solicitar Consulta Confidencial →"
    }
  },

  faq: {
    kicker: "Preguntas Frecuentes",
    title: "Todo lo que necesita <em>saber</em>",
    items: [
      {
        q: "¿Cómo son los honorarios de Veredic?",
        a: "Trabajamos con estructuras flexibles según el caso: tarifa fija para consultas iniciales, por hora para litigios activos, y success fee para transacciones M&A. Cada propuesta es transparente y acordada antes de iniciar."
      },
      {
        q: "¿Garantizan confidencialidad absoluta?",
        a: "Sí. Todo contacto está protegido por el secreto profesional desde el primer mensaje. Firmamos NDA antes de recibir documentación sensible si el cliente lo requiere."
      },
      {
        q: "¿En qué países operan?",
        a: "Tenemos presencia activa en Argentina, Brasil, México y Chile, con red de corresponsales en 42 jurisdicciones. Manejamos casos transfronterizos de forma integral."
      },
      {
        q: "¿Cuánto tiempo tarda una respuesta inicial?",
        a: "Nuestro equipo de intake responde dentro de las 4 horas hábiles siguientes. Para casos urgentes, disponemos de línea directa con socio senior."
      },
      {
        q: "¿Trabajan con empresas medianas o solo corporaciones grandes?",
        a: "Trabajamos con empresas en etapa de crecimiento, fondos de inversión y corporaciones establecidas. El criterio no es el tamaño sino la complejidad del caso."
      },
      {
        q: "¿Cómo inicio el proceso?",
        a: "Complete el formulario de contacto o escríbanos por WhatsApp. Un socio senior evaluará su caso personalmente y le confirmará si somos el equipo adecuado para representarle."
      }
    ]
  },

  ctaFinal: {
    eyebrow: "¿Listo para actuar?",
    title: "Su caso merece <em>precisión</em><br>y dominio legal.",
    cta: "Iniciar Consulta Confidencial",
    sub: "Respuesta en menos de 4 horas hábiles · Sin compromiso"
  },

  footer: {
    tagline: "Precisión legal. Resultados que definen industrias.",
    columns: [
      {
        heading: "Servicios",
        links: [
          { label: "Fusiones y Adquisiciones", href: "#services" },
          { label: "Litigio de Valores", href: "#services" },
          { label: "Private Equity", href: "#services" },
          { label: "Arbitraje Internacional", href: "#services" },
        ]
      },
      {
        heading: "La Firma",
        links: [
          { label: "Nuestra Filosofía", href: "#manifesto" },
          { label: "Los Socios", href: "#team" },
          { label: "Testimonios", href: "#testimonials" },
        ]
      },
      {
        heading: "Contacto",
        links: [
          { label: "Agendar Consulta", href: "#contact" },
          { label: "hola@veredic.com", href: "mailto:hola@veredic.com" },
          { label: "Buenos Aires · São Paulo · CDMX", href: "#contact" },
        ]
      }
    ],
    legal: {
      copyright: `© ${new Date().getFullYear()} Veredic LLP. Todos los derechos reservados.`,
      links: ["Política de Privacidad", "Términos de Uso"]
    }
  }

}
