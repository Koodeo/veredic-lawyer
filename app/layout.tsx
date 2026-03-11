import { Cormorant, Outfit } from "next/font/google"
import { siteConfig } from "@/lib/config"
import "../styles/globals.css"
import CustomCursor from "@/components/ui/custom-cursor"
import PageLoader from "@/components/ui/page-loader"

const cormorant = Cormorant({ 
  subsets: ["latin"], 
  variable: "--font-cormorant", 
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"]
})

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit", 
  display: "swap",
  weight: ["200", "300", "400", "500"]
})

export const metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [siteConfig.meta.ogImage],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      suppressHydrationWarning
      className={`${cormorant.variable} ${outfit.variable}`}
      style={{
        "--primary": siteConfig.colors.primary,
        "--secondary": siteConfig.colors.secondary,
        "--accent": siteConfig.colors.accent,
        "--cream": siteConfig.colors.cream,
        "--stone": siteConfig.colors.stone,
        "--cream2": siteConfig.colors.cream2,
        "--stone2": siteConfig.colors.stone2,
        "--gold2": siteConfig.colors.gold2,
        "--slate2": siteConfig.colors.slate2,
        "--ink": siteConfig.colors.ink,
        "--color-primary": siteConfig.colors.primary,
        "--color-primary-light": siteConfig.colors.primary,
        "--color-primary-dark": siteConfig.colors.primary,
        "--color-dark": siteConfig.colors.primary,
        "--color-bg": siteConfig.colors.cream,
        "--color-bg-alt": siteConfig.colors.stone,
        "--color-muted": siteConfig.colors.secondary,
        "--color-border": siteConfig.colors.stone,
        "--color-success": siteConfig.colors.accent,
      } as React.CSSProperties}
    >
      <body className={`${cormorant.variable} ${outfit.variable} font-sans bg-cream text-primary antialiased`}>
        <PageLoader />
        <CustomCursor />
        {/* Navbar y Footer comentados para que Hero ocupe toda la pantalla */}
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
