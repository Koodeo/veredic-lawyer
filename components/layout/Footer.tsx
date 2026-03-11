import { siteConfig } from '@/lib/config'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <a href="/" className="footer-logo">{siteConfig.name}</a>
          <p className="footer-tagline">{siteConfig.footer.tagline}</p>
          
          <div className="f-social">
            {siteConfig.social.linkedin && (
              <a href={siteConfig.social.linkedin} 
                 target="_blank" rel="noopener" 
                 className="f-social-link" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            )}
            {siteConfig.social.instagram && (
              <a href={siteConfig.social.instagram}
                 target="_blank" rel="noopener"
                 className="f-social-link" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
            )}
            {siteConfig.social.x && (
              <a href={siteConfig.social.x}
                 target="_blank" rel="noopener"
                 className="f-social-link" aria-label="X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
        
        {siteConfig.footer.columns.map((column) => (
          <div key={column.heading}>
            <div className="f-col-h">{column.heading}</div>
            <ul className="f-links">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="footer-bot">
        <div className="f-copy">{siteConfig.footer.legal.copyright}</div>
        <div className="f-legal">
          {siteConfig.footer.legal.links.map((link) => (
            <a key={link} href="#">{link}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
