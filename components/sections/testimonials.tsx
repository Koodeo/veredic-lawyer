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
        {/* Card 1 - Featured (spans full width) */}
        <div className={`tc tc-featured ${items[0].variant}`}>
          <div className="tc-stars">
            {'★'.repeat(items[0].rating)}
          </div>
          <div className="tc-qmark">❝</div>
          <p className="tc-text">{items[0].text}</p>
          <div className="tc-footer">
            <div className="tc-av">{items[0].id}</div>
            <div>
              <div className="tc-name">{items[0].author}</div>
              <div className="tc-role">{items[0].role}</div>
            </div>
          </div>
        </div>
        
        {/* Card 2 - Dark (right column, row 1) */}
        <div className={`tc ${items[1].variant}`}>
          <div className="tc-stars">
            {'★'.repeat(items[1].rating)}
          </div>
          <div className="tc-qmark">❝</div>
          <p className="tc-text">{items[1].text}</p>
          <div className="tc-footer">
            <div className="tc-av">{items[1].id}</div>
            <div>
              <div className="tc-name">{items[1].author}</div>
              <div className="tc-role">{items[1].role}</div>
            </div>
          </div>
        </div>
        
        {/* Card 3 - Light (left column, row 2) */}
        <div className={`tc ${items[2].variant}`}>
          <div className="tc-stars">
            {'★'.repeat(items[2].rating)}
          </div>
          <div className="tc-qmark">❝</div>
          <p className="tc-text">{items[2].text}</p>
          <div className="tc-footer">
            <div className="tc-av">{items[2].id}</div>
            <div>
              <div className="tc-name">{items[2].author}</div>
              <div className="tc-role">{items[2].role}</div>
            </div>
          </div>
        </div>
        
        {/* Card 4 - Light (right column, row 2) */}
        <div className={`tc ${items[3].variant}`}>
          <div className="tc-stars">
            {'★'.repeat(items[3].rating)}
          </div>
          <div className="tc-qmark">❝</div>
          <p className="tc-text">{items[3].text}</p>
          <div className="tc-footer">
            <div className="tc-av">{items[3].id}</div>
            <div>
              <div className="tc-name">{items[3].author}</div>
              <div className="tc-role">{items[3].role}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
