import Link from 'next/link'
import { siteConfig } from '@/lib/config'

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="block text-sm text-cream/50 transition-colors hover:text-accent">
    {children}
  </Link>
)

export default function Footer() {
  return (
    <footer className="bg-primary text-cream">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-16 py-20 lg:grid-cols-3 lg:py-28">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-medium tracking-widest uppercase text-cream">
              {siteConfig.name}
            </h3>
            <p className="mt-4 max-w-xs font-serif text-lg italic leading-relaxed text-cream/40">
              {siteConfig.footer.tagline}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold2">Áreas</h4>
              <div className="mt-4 space-y-3">
                {siteConfig.footer.links.practiceAreas.map((link) => (
                  <FooterLink key={link} href="#">{link}</FooterLink>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold2">La Firma</h4>
              <div className="mt-4 space-y-3">
                {siteConfig.footer.links.firm.map((link) => (
                  <FooterLink key={link} href="#">{link}</FooterLink>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold2">Oficinas</h4>
              <div className="mt-4 space-y-3">
                {siteConfig.footer.links.offices.map((link) => (
                  <FooterLink key={link} href="#">{link}</FooterLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between border-t border-cream/10 py-8 sm:flex-row">
          <p className="mt-4 text-xs text-cream/30 sm:mt-0">
            {siteConfig.footer.legal.copyright}
          </p>
          <div className="flex items-center gap-6">
            {siteConfig.footer.legal.links.map((link) => (
              <Link key={link} href="#" className="text-xs text-cream/30 transition-colors hover:text-accent">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
