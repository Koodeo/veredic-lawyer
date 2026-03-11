# Veredic - Premium Law Firm Template

![Veredic Template](https://img.shields.io/badge/Template-Law%20Firm-2A3B4E?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

Template premium para firmas de abogados corporativos desarrollado por **[Koodeo Studio](https://koodeo.com)** con diseño nivel Awwwards y enfoque en conversión.

---

## 🎯 Características Principales

### Diseño Premium Awwwards
- ✨ Animaciones scroll reveal con stagger effects
- 🎨 Paleta de colores sofisticada (Charcoal, Cream, Gold, Slate)
- 🖼️ Tipografía premium (Cormorant Serif + Outfit Sans)
- 🎭 Custom cursor con efectos interactivos
- 📱 Completamente responsive (mobile-first)

### Secciones Incluidas
1. **Hero** - Video background con badges dinámicos y scroll indicator
2. **Marquee** - Infinite scroll de áreas de práctica
3. **Stats** - Métricas con count-up animation
4. **Services** - Carousel horizontal con 6 servicios
5. **Manifesto** - 3 pilares con animación de palabras
6. **Team** - 4 socios con fotos y redes sociales
7. **Testimonials** - 4 testimonios con sistema de ratings
8. **Clients** - Marquee de clientes destacados
9. **FAQ** - Accordion interactivo con 6 preguntas
10. **CTA Final** - Call-to-action con anillos decorativos
11. **Contact** - Formulario con WhatsApp integration
12. **Footer** - 4 columnas con links y redes sociales

### Páginas Adicionales
- **404** - Error page con diseño premium
- **Términos** - Términos de servicio completos
- **Privacidad** - Política de privacidad GDPR-compliant

### Optimizaciones
- ⚡ Performance optimizado (Lighthouse 90+)
- 🔍 SEO-ready con metadata configurables
- ♿ Accesibilidad (ARIA labels, semantic HTML)
- 🌐 Multiidioma ready (español LATAM)
- 📊 Analytics-ready

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5
- **Styling:** CSS Modules (className only, no Tailwind)
- **Fonts:** Google Fonts (next/font)
- **Animations:** Framer Motion + CSS transitions
- **Icons:** Lucide React
- **Package Manager:** pnpm

---

## 📝 Gestión de Contenido

**Todo el contenido se gestiona desde un único archivo:** `lib/config.ts`

### Estructura del Config

```typescript
export const siteConfig = {
  // Información general
  name: "Veredic",
  tagline: "Asesoría Legal Estratégica",
  
  // Contacto
  whatsapp: "+5491112345678",
  email: "consulta@veredic.com",
  
  // Secciones
  hero: { ... },
  stats: { ... },
  services: { ... },
  team: { ... },
  testimonials: { ... },
  faq: { ... },
  contact: { ... },
  // ... y más
}
```

### Cómo Actualizar Contenido

1. Abra `lib/config.ts`
2. Busque la sección que desea modificar
3. Edite el texto directamente
4. Guarde el archivo
5. Los cambios se reflejan automáticamente

**Ejemplo - Actualizar título del Hero:**
```typescript
hero: {
  title: [
    "Su nuevo <em>título</em>",
    "Segunda línea",
    "<em>Tercera línea</em>"
  ]
}
```

---

## 🚀 Instalación y Desarrollo

### Requisitos Previos
- Node.js 18+ 
- pnpm (recomendado) o npm

### 1. Clonar el Repositorio
```bash
git clone [repository-url]
cd veredic-lawyer
```

### 2. Instalar Dependencias
```bash
pnpm install
# o
npm install
```

### 3. Iniciar Servidor de Desarrollo
```bash
pnpm dev
# o
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

### 4. Build para Producción
```bash
pnpm build
# o
npm run build
```

### 5. Iniciar Servidor de Producción
```bash
pnpm start
# o
npm start
```

---

## 📁 Estructura del Proyecto

```
veredic-lawyer/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Homepage
│   ├── not-found.tsx       # Página 404
│   ├── terminos/           # Términos de servicio
│   └── privacidad/         # Política de privacidad
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Team.tsx
│   │   ├── FAQ.tsx
│   │   └── ... (todas las secciones)
│   └── ui/
│       ├── SiteEffects.tsx # Cursor + scroll effects
│       └── KoodeoTag.tsx   # Badge flotante
├── lib/
│   └── config.ts           # ⭐ Configuración principal
├── public/
│   ├── favicon.svg
│   ├── veredict-video.webm
│   └── ... (imágenes del equipo)
└── styles/
    └── globals.css         # Estilos globales
```

---

## 🎨 Personalización

### Colores
Edite las variables CSS en `styles/globals.css`:

```css
:root {
  --charcoal: #1C1E21;
  --slate: #2A3B4E;
  --cream: #F7F3F1;
  --cream2: #FAF8F6;
  --gold: #C9B398;
  --gold2: #B8A188;
  --ink: #0F1113;
}
```

### Fuentes
Cambie las fuentes en `app/layout.tsx`:

```typescript
import { TuFuenteSerif, TuFuenteSans } from "next/font/google"
```

### Animaciones
Ajuste los efectos en `lib/animations.ts` (si existe) o directamente en `globals.css`

---

## 📱 WhatsApp Integration

El template incluye integración con WhatsApp en múltiples CTAs:

```typescript
whatsapp: "+5491112345678",
whatsappMessages: {
  general: "Hola, me gustaría conocer más...",
  cta: "Hola, deseo agendar una Consulta...",
  consultation: "Hola, soy [nombre] de [empresa]..."
}
```

Los links se generan automáticamente con mensajes pre-llenados.

---

## 🔧 Configuración Avanzada

### Metadata SEO
Edite en `lib/config.ts`:

```typescript
meta: {
  title: "Veredic - Asesoría Legal Estratégica",
  description: "Firma de abogados corporativos...",
  ogImage: "/og-image.jpg"
}
```

### Analytics
Agregue su código de tracking en `app/layout.tsx` o cree un componente `Analytics.tsx`

### Formulario de Contacto
El formulario actual es estático. Para hacerlo funcional:
1. Integre con un servicio como Formspree, SendGrid, o Resend
2. O cree un API route en `app/api/contact/route.ts`

---

## 📄 Licencia

Este template es propiedad de **Koodeo Studio**. 

Para uso comercial o licenciamiento, contacte: [hola@koodeo.com](mailto:hola@koodeo.com)

---

## 🤝 Soporte

¿Necesita ayuda con la personalización o implementación?

- **Email:** hola@koodeo.com
- **Website:** [koodeo.com](https://koodeo.com)
- **WhatsApp:** Disponible bajo solicitud

---

## 🏆 Créditos

**Diseñado y Desarrollado por:**  
[Koodeo Studio](https://koodeo.com) - Premium Web Design & Development

**Tecnologías:**  
Next.js · TypeScript · Framer Motion · Google Fonts

---

**© 2024 Koodeo Studio. Todos los derechos reservados.**
