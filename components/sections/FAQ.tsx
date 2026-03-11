'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/config'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="faq-left">
          <div className="faq-kicker">{siteConfig.faq.kicker}</div>
          <h2 
            className="faq-title"
            dangerouslySetInnerHTML={{ __html: siteConfig.faq.title }}
          />
        </div>
        
        <div className="faq-right">
          {siteConfig.faq.items.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleItem(index)}
            >
              <div className="faq-q">
                <span>{item.q}</span>
                <div className="faq-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </div>
              <div className="faq-a">
                <div>
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
