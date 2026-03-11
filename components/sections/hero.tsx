import { siteConfig } from '@/lib/config'

export default function Hero() {
  const waLink = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessages.cta)}`
  
  return (
    <section className="hero" id="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-wordmark">{siteConfig.name.charAt(0)}</div>
      
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="eyebrow-bar"></span>
          <span className="eyebrow-dot"></span>
          {siteConfig.hero.eyebrow}
        </div>
        
        <h1 className="hero-h1">
          <span className="ln">
            <span className="word">Precisión <em>Legal.</em></span>
          </span>
          <span className="ln">
            <span className="word">Dominio</span>
          </span>
          <span className="ln">
            <span className="word"><em>Estratégico.</em></span>
          </span>
        </h1>
        
        <p className="hero-body">
          {siteConfig.hero.subtitle}
        </p>
        
        <div className="hero-actions">
          <a href={waLink} className="btn-solid">
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            {siteConfig.hero.ctaPrimary}
          </a>
          <a href="#services" className="btn-line">
            {siteConfig.hero.ctaSecondary}
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        
        <div className="hero-scroll">
          <div className="scroll-pipe"></div>
          <div className="scroll-label">Scroll</div>
        </div>
      </div>
      
      <div className="hero-right">
        <div id="heroPhoto" className="hero-photo show">
          <div className="hero-photo-inner">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="hero-video"
              src="/veredict-video.webm"
            />
          </div>
          
          <div className="badge badge-1">
            <div className="b-label">{siteConfig.hero.badges[0].label}</div>
            <div className="b-value">{siteConfig.hero.badges[0].value}</div>
            <div className="b-dots">
              {siteConfig.hero.badges[0].dots?.map((active, i) => (
                <span key={i} className={active ? 'active' : ''}></span>
              ))}
            </div>
          </div>
          
          <div className="badge badge-2">
            <div className="b-label">{siteConfig.hero.badges[1].label}</div>
            <div className="b-value">{siteConfig.hero.badges[1].value}</div>
          </div>
        </div>
      </div>
    </section>
  )
}