import { siteConfig } from '@/lib/config'

export default function Team() {
  return (
    <section className="team">
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
                <div className="t-avatar">
                  <div className="t-avatar-mono">{member.initials}</div>
                </div>
                <div className="t-photo-grad"></div>
              </div>
            </div>
            <div className="t-info">
              <h3 className="t-name">{member.name}</h3>
              <p className="t-role">{member.role}</p>
              <p className="t-spec">{member.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
