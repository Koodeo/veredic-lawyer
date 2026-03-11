import { siteConfig } from '@/lib/config'

export default function Navbar() {
  return (
    <header id="header">
      <a href="/" className="logo">
        {siteConfig.name}
        <sup>™</sup>
      </a>
      <nav>
        {siteConfig.nav.links.map((link) => (
          <a key={link.href} href={link.href}>
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
