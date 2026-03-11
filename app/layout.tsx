import { Cormorant, Outfit, JetBrains_Mono } from "next/font/google"
import { siteConfig } from "@/lib/config"
import "../styles/globals.css"
import SiteEffects from "@/components/ui/SiteEffects"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import KoodeoTag from "@/components/ui/KoodeoTag"

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--serif',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--mono',
  display: 'swap',
})

export const metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  icons: {
    icon: '/favicon.svg',
  },
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
      className={`${cormorant.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SiteEffects />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <KoodeoTag />
      </body>
    </html>
  )
}
