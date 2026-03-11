import { siteConfig } from '@/lib/config'

export default function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <div className="manifesto-deco"></div>
      
      <div className="mf-label">
        {siteConfig.manifesto.kicker}
      </div>
      
      <p className="mf-text">
        No solo asesoramos — nos <span className="hl mf-word">integramos</span> en el núcleo estratégico de su empresa. Donde otros ven complejidad, nosotros vemos el <span className="hl mf-word">camino preciso</span> hacia la resolución.
      </p>
      
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