'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/lib/config'
import Icon from '@/components/ui/Icon'

function ServiceCard({ service, index }: { service: typeof siteConfig.services.items[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 + index * 0.05 }}
      viewport={{ once: true, amount: 0.5 }}
      className={`group relative h-[460px] w-[380px] flex-shrink-0 overflow-hidden rounded-2xl border border-cream/10 p-8 transition-all duration-500 ease-expo hover:-translate-y-1.5 hover:border-cream/20 ${service.featured ? 'bg-slate' : 'bg-primary'}`}>
      
      {service.featured && (
        <>
          <div className="absolute top-[-90px] right-[-90px] h-[300px] w-[300px] rounded-full border border-accent/10" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate via-slate/50 to-primary" />
        </>
      )}

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-6 font-sans text-xs uppercase tracking-widest text-cream/50">
            {service.id}
            {service.featured && <span className="ml-3 text-accent/70">- Destacado</span>}
          </div>
          <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-cream/5 border border-cream/10">
            <Icon name={service.icon} className="h-8 w-8 text-accent" />
          </div>
          <h3 className="mb-3 font-serif text-3xl font-medium leading-tight text-cream" dangerouslySetInnerHTML={{ __html: service.name }} />
          <p className="font-sans text-sm font-light leading-relaxed text-cream/60 max-w-sm">
            {service.description}
          </p>
        </div>
        <a href="#" className="inline-flex items-center gap-3 font-sans text-xs font-medium uppercase tracking-widest text-cream/60 transition-colors duration-300 group-hover:text-accent">
          {service.linkText}
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
        </a>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return
      e.preventDefault()
      el.scrollTo({
        left: el.scrollLeft + e.deltaY * 2,
        behavior: 'smooth'
      })
    }

    el.addEventListener('wheel', onWheel)
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-primary py-32 text-cream">
      <div className="absolute inset-0 h-full w-full border-t border-cream/5" />
      <div className="mx-auto max-w-[1600px] px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex items-end justify-between"
        >
          <div>
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-gold2">
              {siteConfig.services.kicker}
            </p>
            <h2 className="font-serif text-[clamp(42px,4.5vw,64px)] leading-none -tracking-tighter text-cream [&_em]:text-cream/40 [&_em]:font-light" dangerouslySetInnerHTML={{ __html: siteConfig.services.title }} />
          </div>
          <div className="hidden text-right lg:block">
            <div className="font-serif text-9xl font-medium text-cream/10">{siteConfig.services.count}</div>
            <div className="mt-[-15px] flex items-center justify-end gap-3 font-sans text-xs uppercase tracking-widest text-cream/30">
              <div className="h-px w-5 bg-cream/30" />
              {siteConfig.services.dragHint}
            </div>
          </div>
        </motion.div>
      </div>

      <div 
        ref={scrollRef} 
        className={`flex gap-6 px-8 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} overflow-x-auto no-scrollbar`}
      >
        {siteConfig.services.items.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}
