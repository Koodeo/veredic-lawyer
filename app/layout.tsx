import { Inter, JetBrains_Mono } from "next/font/google"
import { siteConfig } from "@/lib/config"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const display = Inter({ 
  subsets: ["latin"],
  variable: "--font-display"
})

const body = Inter({ 
  subsets: ["latin"],
  variable: "--font-body"
})

const mono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
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
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      style={{
        "--color-primary": siteConfig.colors.primary,
        "--color-primary-light": siteConfig.colors.primaryLight,
        "--color-primary-dark": siteConfig.colors.primaryDark,
        "--color-dark": siteConfig.colors.dark,
        "--color-bg": siteConfig.colors.bg,
        "--color-bg-alt": siteConfig.colors.bgAlt,
        "--color-muted": siteConfig.colors.muted,
        "--color-border": siteConfig.colors.border,
        "--color-success": siteConfig.colors.success,
      } as React.CSSProperties}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
