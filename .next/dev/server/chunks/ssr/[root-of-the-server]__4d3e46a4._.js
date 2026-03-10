module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/components/ui/ButtonWhatsApp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonWhatsApp",
    ()=>ButtonWhatsApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-ssr] (ecmascript)");
;
;
function ButtonWhatsApp({ messageKey, children, className = "" }) {
    const whatsappUrl = `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].whatsappMessages[messageKey])}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: whatsappUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: `inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#128C7E] transition-colors ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.89-5.335 9.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                }, void 0, false, {
                    fileName: "[project]/components/ui/ButtonWhatsApp.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/ButtonWhatsApp.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/ButtonWhatsApp.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/layout/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonWhatsApp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ButtonWhatsApp.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Navbar() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-[var(--color-border)] z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-[var(--color-dark)]",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].name
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonWhatsApp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonWhatsApp"], {
                                messageKey: "cta",
                                children: "Empezar"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "text-[var(--color-dark)] hover:text-[var(--color-primary)] focus:outline-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18 6L6 18M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 37,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 39,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Navbar.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 pt-2 pb-3 space-y-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonWhatsApp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonWhatsApp"], {
                            messageKey: "cta",
                            className: "w-full justify-center",
                            children: "Empezar"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 50,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Navbar.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Navbar.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4d3e46a4._.js.map