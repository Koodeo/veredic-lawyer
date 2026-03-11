'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/lib/config'

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
}

export default function Services() {
  const scrollRef = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-cream py-24 sm:py-32">
      {/* Top Content */}
      <div className="mx-auto mb-16 max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 1 }}>
          <p className="font-sans text-sm font-light uppercase tracking-widest text-accent">
            {siteConfig.services.kicker}
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium text-primary sm:text-5xl">
            {siteConfig.services.title}
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-base font-extralight leading-relaxed text-primary/60">
            {siteConfig.services.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="relative">
        <motion.div 
          ref={scrollRef} 
          drag="x" 
          dragConstraints={{ left: -1100, right: 0 }}
          className="flex cursor-grab items-stretch gap-8 px-6 lg:px-8 active:cursor-grabbing"
        >
          {siteConfig.services.items.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex w-[320px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-2xl p-8 shadow-lg ${service.featured ? 'bg-secondary text-cream' : 'bg-cream2 text-primary'}`}>
              <div>
                <h3 className={`font-serif text-2xl font-medium ${service.featured ? 'text-white' : 'text-primary'}`}>
                  {service.name}
                </h3>
                <p className={`mt-4 font-sans text-sm font-light leading-relaxed ${service.featured ? 'text-cream/70' : 'text-primary/60'}`}>
                  {service.description}
                </p>
              </div>
              <a href="#" className={`mt-8 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest ${service.featured ? 'text-accent' : 'text-secondary'}`}>
                {service.linkText}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom Bar with counter and drag indicator */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between border-t border-primary/10 pt-4">
              <div className="font-mono text-xs text-primary/40">
                <span className="text-primary/80">{siteConfig.services.items.length}</span> Áreas de Práctica
              </div>
              <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-primary/40">
                Drag to explore
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
