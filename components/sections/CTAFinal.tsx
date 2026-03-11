import { siteConfig } from '@/lib/config'

export default function CTAFinal() {
  return (
    <section className="cta-final" id="cta-final">
      <div className="cf-bg-rings">
        <div className="cf-ring"></div>
        <div className="cf-ring"></div>
        <div className="cf-ring"></div>
      </div>
      
      <div className="cf-inner">
        <div className="cf-eyebrow">
          <span className="cf-line"></span>
          {siteConfig.ctaFinal.eyebrow}
        </div>
        
        <h2 
          className="cf-title"
          dangerouslySetInnerHTML={{ __html: siteConfig.ctaFinal.title }}
        />
        
        <a href="#contact" className="cf-btn">
          {siteConfig.ctaFinal.cta}
          <svg viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        
        <p className="cf-sub">{siteConfig.ctaFinal.sub}</p>
      </div>
    </section>
  )
}
