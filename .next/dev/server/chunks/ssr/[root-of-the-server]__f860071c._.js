module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── INTERFACES ───────────────────────
__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    // ─── IDENTITY ─────────────────────
    name: "Veredic",
    tagline: "Asesoría Legal Estratégica",
    year: new Date().getFullYear().toString(),
    // ─── URLS ─────────────────────────
    domain: "veredic.com",
    url: "https://veredic.com",
    // ─── CONTACT ──────────────────────
    whatsapp: "+5491123456789",
    email: "consulta@veredic.com",
    whatsappMessages: {
        general: "Hola, me gustaría conocer más sobre sus servicios legales.",
        cta: "Hola, deseo agendar una Consulta Confidencial. ¿Hablamos?",
        consultation: "Hola, soy [nombre] de [empresa]. Necesito agendar una Consulta Confidencial para discutir un asunto de [área práctica]."
    },
    // ─── FONTS ────────────────────────
    // Updated per project in first prompt
    // Loaded dynamically in layout.tsx
    fonts: {
        display: "Cormorant",
        body: "Outfit",
        mono: "JetBrains Mono"
    },
    // ─── COLORS ───────────────────────
    // Injected as CSS variables in layout.tsx
    // Never hardcode these in components
    colors: {
        primary: "#1C1E21",
        secondary: "#2A3B4E",
        accent: "#C9B398",
        cream: "#F7F3F1",
        stone: "#EBE8E3",
        cream2: "#FAF8F6",
        stone2: "#E2DED8",
        gold2: "#b89e82",
        slate2: "#3b526b",
        ink: "#0f1113",
        bg: "#FFFFFF",
        bgAlt: "#F5F5F5",
        muted: "#666666",
        border: "#E5E5E5",
        success: "#22C55E"
    },
    // ─── SOCIAL ───────────────────────
    social: {
        instagram: "",
        tiktok: "",
        linkedin: "",
        x: ""
    },
    // ─── LOCATIONS ────────────────────
    locations: [
        {
            city: "Buenos Aires",
            country: "Argentina",
            utc: "UTC -3"
        },
        {
            city: "São Paulo",
            country: "Brasil",
            utc: "UTC -3"
        },
        {
            city: "Mexico City",
            country: "México",
            utc: "UTC -6"
        },
        {
            city: "Santiago",
            country: "Chile",
            utc: "UTC -4"
        }
    ],
    // ─── METADATA ─────────────────────
    meta: {
        title: "Veredic — Asesoría Legal Estratégica Corporativa",
        description: "Firma legal premium especializada en M&A, litigio corporativo y asesoría estratégica para empresas en LATAM. Expertos en transacciones complejas y disputas internacionales.",
        ogImage: "/og-image.png"
    },
    // ─── CONTENT ───────────────────────
    // All semantic content extracted from reference design
    // Translated to professional Spanish for LATAM corporate market
    hero: {
        eyebrow: "Asesoría Legal Estratégica · Est. 2009",
        title: [
            "Donde la <em>Precisión</em>",
            "Encuentra el Dominio",
            "<em>Legal.</em>"
        ],
        subtitle: "Brindamos asesoría legal de alto impacto para las empresas más influyentes de LATAM — fusiones, litigios complejos y las decisiones estratégicas que definen industrias.",
        ctaPrimary: "Iniciar Su Asunto",
        ctaSecondary: "Áreas de Práctica",
        badges: [
            {
                label: "AUM Asesorado",
                value: "$4.2B",
                dots: [
                    true,
                    false,
                    false,
                    false
                ]
            },
            {
                label: "Tasa de Retención",
                value: "98%"
            }
        ]
    },
    marquee: [
        "M&A Corporativo",
        "Litigio de Valores",
        "Private Equity",
        "Arbitraje Internacional",
        "Cumplimiento Regulatorio",
        "Mercados de Capitales",
        "Reestructuración",
        "Estrategia Fiscal"
    ],
    stats: {
        kicker: "Por los Números",
        title: "Un legado forjado en <em>resultados</em>",
        subtitle: "Cada métrica refleja nuestro compromiso de entregar resultados excepcionales para clientes que demandan el más alto nivel de precisión legal y acumen estratégico.",
        ghostNumber: "15",
        items: [
            {
                value: "15+",
                label: "Años de Excelencia"
            },
            {
                value: "98%",
                label: "Retención de Clientes"
            },
            {
                value: "340+",
                label: "Asuntos Resueltos"
            },
            {
                value: "42+",
                label: "Jurisdicciones Globales"
            }
        ]
    },
    services: {
        kicker: "Lo Que Hacemos",
        title: "Áreas de práctica diseñadas para la <em>complejidad</em>",
        count: "06",
        dragHint: "Arrastra para explorar",
        items: [
            {
                id: "01",
                featured: true,
                name: "Fusiones y<br>Adquisiciones",
                description: "Asesoría transaccional integral para operaciones transfronterizas, consolidaciones estratégicas y LBOs de toda escala.",
                linkText: "Explorar Práctica"
            },
            {
                id: "02",
                name: "Litigio de<br>Valores",
                description: "Representación agresiva en fraudes de valores, acciones derivadas y asuntos de cumplimiento ante organismos reguladores.",
                linkText: "Explorar Práctica"
            },
            {
                id: "03",
                name: "Private Equity<br>y Fondos",
                description: "Estructuración, recaudación de fondos y asesoría a portfolio companies para los principales sponsors de private equity.",
                linkText: "Explorar Práctica"
            },
            {
                id: "04",
                name: "Arbitraje<br>Internacional",
                description: "Representación en disputas transfronterizas complejas bajo procedimientos ICC, LCIA, CIADI y arbitrajes ad hoc.",
                linkText: "Explorar Práctica"
            },
            {
                id: "05",
                name: "Regulatorio<br>y Cumplimiento",
                description: "Navegando regulaciones financieras, antimonopolio y gobernanza corporativa en un entorno regulatorio en constante evolución.",
                linkText: "Explorar Práctica"
            },
            {
                id: "06",
                name: "Reestructuración<br>Corporativa",
                description: "Guiando empresas y acreedores a través de reestructuraciones financieras complejas, workouts y procedimientos concursales.",
                linkText: "Explorar Práctica"
            }
        ]
    },
    manifesto: {
        kicker: "Nuestra Filosofía",
        text: "No solo asesoramos — nos <span class=\"highlight\">integramos</span> en el núcleo estratégico de su empresa. Donde otros ven complejidad, nosotros vemos el <span class=\"highlight\">camino preciso</span> hacia la resolución.",
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
                description: "Cada asunto es dirigido por un socio senior con responsabilidad directa. Sin delegaciones. Sin dilución de experiencia o atención."
            },
            {
                id: "III",
                number: "III.",
                title: "Perspectiva Global",
                description: "Experiencia transfronteriza abarcando 42 jurisdicciones asegura ejecución sin fisuras sin importar la complejidad o geografía."
            }
        ]
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
                initials: "WA"
            },
            {
                id: "EP",
                name: "Eleanor S. Park",
                role: "Socia Senior",
                specialty: "Valores · Litigio",
                initials: "EP"
            },
            {
                id: "MC",
                name: "Marcus J. Chen",
                role: "Socio",
                specialty: "Private Equity · Fondos",
                initials: "MC"
            },
            {
                id: "AL",
                name: "Adrienne Laval",
                role: "Socia",
                specialty: "Arbitraje Internacional",
                initials: "AL"
            }
        ]
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
                text: "Su respuesta a nuestra investigación regulatoria fue inmediata y decisiva — el asunto se resolvió con cero hallazgos en nuestra contra.",
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
        ]
    },
    clients: {
        label: "Confían en nosotros",
        names: [
            {
                name: "Meridian"
            },
            {
                name: "Vantage Group"
            },
            {
                name: "Helix Capital"
            },
            {
                name: "Arden Partners"
            },
            {
                name: "NorthStar"
            },
            {
                name: "Apex Holdings"
            }
        ]
    },
    contact: {
        kicker: "Iniciar Su Asunto",
        title: "Hablemos de su <em>asunto</em>",
        subtitle: "Nuestro equipo de intake responde dentro de 4 horas hábiles. Cada consulta es manejada con estricta confidencialidad por un socio senior.",
        trustBadges: [
            "Confidencial",
            "Liderado por Socios",
            "Alcance Global"
        ],
        form: {
            fields: {
                firstName: "Nombre",
                lastName: "Apellido",
                email: "Email Corporativo",
                company: "Empresa / Organización",
                practiceArea: "Área de Práctica de Interés",
                message: "Descripción breve del asunto (opcional)"
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
    footer: {
        tagline: "\"Donde la precisión encuentra el dominio legal.\"",
        links: {
            practiceAreas: [
                "Fusiones y Adquisiciones",
                "Litigio de Valores",
                "Private Equity",
                "Arbitraje Internacional",
                "Cumplimiento Regulatorio"
            ],
            firm: [
                "Nuestra Filosofía",
                "Nuestros Socios",
                "Asuntos Notables",
                "Insights",
                "Carreras"
            ],
            offices: [
                "Buenos Aires",
                "São Paulo",
                "Mexico City",
                "Santiago",
                "Consultas de Prensa"
            ]
        },
        legal: {
            copyright: `© ${new Date().getFullYear()} Veredic LLP. Todos los Derechos Reservados. Publicidad de Abogados.`,
            links: [
                "Política de Privacidad",
                "Términos de Uso",
                "Descargo de Responsabilidad"
            ]
        }
    }
};
}),
"[project]/components/sections/hero.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/hero.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/hero.tsx <module evaluation>", "default");
}),
"[project]/components/sections/hero.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/hero.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/hero.tsx", "default");
}),
"[project]/components/sections/hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sections/hero.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sections/hero.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/sections/marquee.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/marquee.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/marquee.tsx <module evaluation>", "default");
}),
"[project]/components/sections/marquee.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/marquee.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/marquee.tsx", "default");
}),
"[project]/components/sections/marquee.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$marquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sections/marquee.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$marquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sections/marquee.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$marquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/sections/stats.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/stats.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/stats.tsx <module evaluation>", "default");
}),
"[project]/components/sections/stats.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/stats.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/stats.tsx", "default");
}),
"[project]/components/sections/stats.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$stats$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sections/stats.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$stats$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sections/stats.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$stats$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/sections/services.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/services.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/services.tsx <module evaluation>", "default");
}),
"[project]/components/sections/services.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/services.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/services.tsx", "default");
}),
"[project]/components/sections/services.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$services$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sections/services.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$services$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sections/services.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$services$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/sections/manifesto.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/manifesto.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/manifesto.tsx <module evaluation>", "default");
}),
"[project]/components/sections/manifesto.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/manifesto.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/manifesto.tsx", "default");
}),
"[project]/components/sections/manifesto.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$manifesto$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sections/manifesto.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$manifesto$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sections/manifesto.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$manifesto$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$marquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/marquee.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$stats$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/stats.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$services$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/services.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$manifesto$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/manifesto.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-col min-h-screen bg-cream",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$marquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                items: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].marquee
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$stats$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$services$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$manifesto$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f860071c._.js.map