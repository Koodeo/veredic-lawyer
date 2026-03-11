import { siteConfig } from '@/lib/config'

export default function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="stats-ghost">98</div>
      
      <div className="stats-top">
        <div>
          <div className="s-kicker">{siteConfig.stats.kicker}</div>
          <h2 
            className="s-title"
            dangerouslySetInnerHTML={{ __html: siteConfig.stats.title }}
          />
        </div>
        <p className="s-body">{siteConfig.stats.description}</p>
      </div>
      
      <div className="stats-row">
        {siteConfig.stats.items.map((stat, index) => (
          <div key={index} className="stat sr">
            <div className="stat-inner">
              <div 
                className="stat-num"
                dangerouslySetInnerHTML={{ __html: stat.value }}
              />
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}