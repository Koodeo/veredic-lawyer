# Koodeo Starter

## Cómo usar este starter

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd koodeo-starter
```

### 2. Instalar dependencias con pnpm
```bash
pnpm install
```

### 3. Primer prompt — actualizar config.ts
Lo primero que debes hacer en cada nuevo proyecto es actualizar `/lib/config.ts` con toda la información del brief del cliente:

- **Identidad**: name, tagline, año
- **URLs**: domain, url
- **Contacto**: whatsapp, email, mensajes predefinidos
- **Fuentes**: display, body, mono
- **Colores**: paleta de colores completa
- **Social**: redes sociales
- **Ubicaciones**: ciudades y zonas horarias
- **Metadata**: título, descripción, imagen OG

**Nunca hardcodees información del cliente en los componentes**. Todo debe venir desde config.ts.

### 4. Estructura de carpetas

- `/app` - Páginas y layout de Next.js con App Router
- `/components/layout` - Navbar, Footer (componentes estructurales)
- `/components/ui` - Componentes reutilizables (Button, Badge, etc.)
- `/lib` - Configuración central y utilidades
- `/styles` - Estilos globales
- `/public` - Assets estáticos (fonts, images, icons)

### 5. Agregar secciones
Las secciones se agregan directamente en `app/page.tsx`. Importa los componentes que necesites y construye la página sección por sección.

Usa siempre los componentes UI predefinidos:
- `AnimatedSection` para animaciones al scroll
- `SectionHeader` para títulos de sección
- `ButtonWhatsApp` para CTAs de WhatsApp
- `Badge` para etiquetas

### 6. Deploy en Vercel
```bash
pnpm build
```

Conecta el repositorio a Vercel y cada push se deployará automáticamente.

---

## Reglas importantes

- **Cero colores hardcodeados** — usa variables CSS
- **Cero texto de cliente hardcodeado** — usa config.ts
- **Cero dependencias sin usar**
- **TypeScript siempre**
- **Mobile-first**
- **Performance 90+ Lighthouse**

## Flujo de trabajo

1. Actualiza config.ts primero
2. Confirma dirección de diseño antes de codear
3. Construye sección por sección
4. Verifica responsive después de cada sección
5. Suggest conversion improvements proactivamente

---

Built with ❤️ by Koodeo Studio
