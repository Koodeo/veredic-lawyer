import { siteConfig } from '@/lib/config'

export default function Testimonials() {
  const items = siteConfig.testimonials.items
  
  return (
    <section className="testi" id="testimonials">
      <div className="testi-bg-mark">❝</div>
      
      <div className="testi-header">
        <div>
          <div className="ti-kicker">{siteConfig.testimonials.kicker}</div>
          <h2 
            className="ti-title"
            dangerouslySetInnerHTML={{ __html: siteConfig.testimonials.title }}
          />
        </div>
      </div>
      
      <div className="testi-grid">
        {items.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={`tc ${testimonial.variant} sr d${index + 1}`}
          >
            <div className="tc-stars">
              {'★'.repeat(testimonial.rating)}
            </div>
            <div className="tc-qmark">❝</div>
            <p className="tc-text">{testimonial.text}</p>
            <div className="tc-footer">
              <div className="tc-av">{testimonial.id}</div>
              <div>
                <div className="tc-name">{testimonial.author}</div>
                <div className="tc-role">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
