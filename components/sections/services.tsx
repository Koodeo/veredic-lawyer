import { siteConfig } from '@/lib/config'

export default function Services() {
  const waLink = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessages.consultation)}`
  
  return (
    <div className="services-outer" id="services">
      <div className="services-sticky">
        <section className="services">
          <div className="services-header">
            <div>
              <div className="sv-kicker">{siteConfig.services.kicker}</div>
              <h2 
                className="sv-title"
                dangerouslySetInnerHTML={{ __html: siteConfig.services.title }}
              />
            </div>
            <div className="sv-meta">
              <div className="sv-count">{siteConfig.services.count}</div>
            </div>
          </div>
          
          <div className="sv-track">
            {siteConfig.services.items.map((item) => (
              <div 
                key={item.id} 
                className={item.featured ? 'sv-card featured' : 'sv-card'}
              >
                <svg className="sv-rings" viewBox="0 0 280 280">
                  <circle cx="140" cy="140" r="80" />
                  <circle cx="140" cy="140" r="140" />
                  <circle cx="140" cy="140" r="200" />
                </svg>
                
                <div className="sv-idx">{item.id}</div>
                
                <div className="sv-icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                  </svg>
                </div>
                
                <div>
                  <h3 
                    className="sv-name"
                    dangerouslySetInnerHTML={{ __html: item.name }}
                  />
                  <p className="sv-desc">{item.description}</p>
                  <a href={waLink} className="sv-link">
                    {item.linkText}
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}