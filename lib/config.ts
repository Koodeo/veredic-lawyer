export const siteConfig = {

  // ─── IDENTITY ─────────────────────
  name: "Client Name",
  tagline: "Client tagline",
  year: new Date().getFullYear().toString(),

  // ─── URLS ─────────────────────────
  domain: "clientdomain.com",
  url: "https://clientdomain.com",

  // ─── CONTACT ──────────────────────
  whatsapp: "+10000000000",
  email: "hola@clientdomain.com",
  whatsappMessages: {
    general: "Hola, me gustaría saber más.",
    cta: "Hola, quiero empezar. ¿Hablamos?",
  },

  // ─── FONTS ────────────────────────
  // Updated per project in first prompt
  // Loaded dynamically in layout.tsx
  fonts: {
    display: "Inter",
    body: "Inter",
    mono: "JetBrains Mono",
  },

  // ─── COLORS ───────────────────────
  // Injected as CSS variables in layout.tsx
  // Never hardcode these in components
  colors: {
    primary: "#000000",
    primaryLight: "#333333",
    primaryDark: "#000000",
    dark: "#111111",
    bg: "#FFFFFF",
    bgAlt: "#F5F5F5",
    muted: "#666666",
    border: "#E5E5E5",
    success: "#22C55E",
  },

  // ─── SOCIAL ───────────────────────
  social: {
    instagram: "",
    tiktok: "",
    linkedin: "",
    x: "",
  },

  // ─── LOCATIONS ────────────────────
  locations: [
    { city: "Ciudad", country: "País", utc: "UTC -X" },
  ],

  // ─── METADATA ─────────────────────
  meta: {
    title: "Client Name — Tagline",
    description: "Meta description here.",
    ogImage: "/og-image.png",
  },
}
