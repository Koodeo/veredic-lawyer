import Link from "next/link"
import { siteConfig } from "@/lib/config"

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Tagline */}
          <div>
            <h3 className="text-xl font-bold text-[var(--color-dark)] mb-2">
              {siteConfig.name}
            </h3>
            <p className="text-[var(--color-muted)]">
              {siteConfig.tagline}
            </p>
          </div>
          
          {/* Locations */}
          <div>
            <h4 className="font-semibold text-[var(--color-dark)] mb-4">Ubicación</h4>
            {siteConfig.locations.map((location, index) => (
              <div key={index} className="text-[var(--color-muted)]">
                <p>{location.city}, {location.country}</p>
                <p className="text-sm">{location.utc}</p>
              </div>
            ))}
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold text-[var(--color-dark)] mb-4">Legal</h4>
            <div className="space-y-2">
              <Link 
                href="/terminos" 
                className="block text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                Términos y Condiciones
              </Link>
              <Link 
                href="/privacidad" 
                className="block text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom row */}
        <div className="mt-8 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--color-muted)] text-sm">
            © {siteConfig.year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {siteConfig.social.instagram && (
              <a 
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                Instagram
              </a>
            )}
            {siteConfig.social.tiktok && (
              <a 
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                TikTok
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a 
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                LinkedIn
              </a>
            )}
            {siteConfig.social.x && (
              <a 
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                X
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
