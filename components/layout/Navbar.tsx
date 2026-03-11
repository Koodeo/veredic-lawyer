import { siteConfig } from '@/lib/config'

export default function Navbar() {
  const waLink = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessages.cta)}`
  
  return (
    <header id="header">
      <a href="/" className="h-logo">{siteConfig.name}</a>
      
      <nav>
        {siteConfig.nav.links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      
      <a href="#contact" className="h-cta">
        {siteConfig.nav.cta}
      </a>
    </header>
  )
}
