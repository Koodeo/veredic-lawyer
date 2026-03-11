import { siteConfig } from '@/lib/config'

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="team-header">
        <div>
          <div className="t-kicker">{siteConfig.team.kicker}</div>
          <h2 
            className="t-title"
            dangerouslySetInnerHTML={{ __html: siteConfig.team.title }}
          />
        </div>
        <a href="#contact" className="t-more">
          {siteConfig.team.moreLink}
          <svg viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="team-grid">
        {siteConfig.team.members.map((member) => (
          <div key={member.id} className="t-card sr">
            <div className="t-photo">
              <div className="t-photo-inner">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="t-member-img"
                />
                <div className="t-photo-grad"></div>
              </div>
            </div>
            <div className="t-info">
              <h3 className="t-name">{member.name}</h3>
              <p className="t-role">{member.role}</p>
              <p className="t-spec">{member.specialty}</p>
              
              <div className="t-social">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" 
                     rel="noopener" className="t-social-link" 
                     aria-label="LinkedIn">
                    <svg width="14" height="14" viewBox="0 0 24 24" 
                         fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 
                               2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                )}
                {member.x && (
                  <a href={member.x} target="_blank" 
                     rel="noopener" className="t-social-link"
                     aria-label="X">
                    <svg width="14" height="14" viewBox="0 0 24 24" 
                         fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 
                               11.24H16.17l-4.714-6.231-5.401 6.231H2.744l
                               7.73-8.835L1.254 2.25H8.08l4.253 5.622 
                               5.912-5.622zm-1.161 17.52h1.833L7.084 
                               4.126H5.117z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
