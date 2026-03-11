import { siteConfig } from '@/lib/config'

export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto-deco"></div>
      
      <div className="mf-label">
        {siteConfig.manifesto.kicker}
      </div>
      
      <p 
        className="mf-text"
        dangerouslySetInnerHTML={{ __html: siteConfig.manifesto.text }}
      />
      
      <div className="mf-pillars">
        {siteConfig.manifesto.pillars.map((pillar, index) => (
          <div 
            key={pillar.id} 
            className={`mf-pillar sr d${index + 1}`}
          >
            <div className="mf-num">{pillar.number}</div>
            <h3 className="mf-pname">{pillar.title}</h3>
            <p className="mf-pbody">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}