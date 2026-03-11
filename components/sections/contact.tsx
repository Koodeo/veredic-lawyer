import { siteConfig } from '@/lib/config'

export default function Contact() {
  const waLink = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessages.cta)}`
  
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div>
          <div className="c-kicker sr">{siteConfig.contact.kicker}</div>
          <h2 
            className="c-title sr d1"
            dangerouslySetInnerHTML={{ __html: siteConfig.contact.title }}
          />
          <p className="c-sub sr d2">{siteConfig.contact.subtitle}</p>
          <div className="c-trust sr d3">
            {siteConfig.contact.trustBadges.map((badge, index) => (
              <span key={index} className="trust-i">{badge}</span>
            ))}
          </div>
        </div>
        
        <form className="c-form sr d2">
          <div className="form-row">
            <input 
              type="text" 
              className="f-in" 
              placeholder={siteConfig.contact.form.fields.firstName}
            />
            <input 
              type="text" 
              className="f-in" 
              placeholder={siteConfig.contact.form.fields.lastName}
            />
          </div>
          <input 
            type="email" 
            className="f-in" 
            placeholder={siteConfig.contact.form.fields.email}
          />
          <input 
            type="text" 
            className="f-in" 
            placeholder={siteConfig.contact.form.fields.company}
          />
          <select className="f-in">
            <option value="">{siteConfig.contact.form.fields.practiceArea}</option>
            {siteConfig.contact.form.practiceAreas.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
          <textarea 
            className="f-in" 
            placeholder={siteConfig.contact.form.fields.message}
          />
          <a 
            href={waLink}
            className="f-btn"
          >
            {siteConfig.contact.form.submitText}
          </a>
        </form>
      </div>
    </section>
  )
}
