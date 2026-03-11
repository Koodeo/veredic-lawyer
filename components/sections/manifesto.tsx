'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/lib/config'

const sectionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, staggerChildren: 0.15 } },
}

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Manifesto() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 })

  return (
    <motion.section
      ref={sectionRef}
      variants={sectionVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      className="relative bg-primary py-28 text-cream md:py-40"
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="absolute right-16 top-16 hidden h-28 w-px bg-gradient-to-b from-accent/20 to-transparent md:block" />

        <motion.div variants={itemVariants} className="mb-16 flex items-center gap-4">
          <div className="h-px w-10 bg-accent/30" />
          <p className="font-sans text-xs font-normal uppercase tracking-[0.22em] text-gold2">
            {siteConfig.manifesto.kicker}
          </p>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="mb-24 max-w-4xl font-serif text-[clamp(34px,4.2vw,58px)] font-normal leading-tight text-cream [&_em]:text-cream/50 [&_em]:font-light"
          dangerouslySetInnerHTML={{ __html: siteConfig.manifesto.text.replace(/<span class="highlight">/g, '<em>').replace(/<\/span>/g, '</em>') }}
        />

        <motion.div 
          variants={itemVariants} 
          className="grid grid-cols-1 gap-y-16 border-t border-cream/10 pt-20 md:grid-cols-3 md:gap-x-12"
        >
          {siteConfig.manifesto.pillars.map((pillar, index) => (
            <div 
              key={pillar.id} 
              className={`relative ${index < 2 ? 'md:border-r md:border-cream/10' : ''} ${index === 1 ? 'md:px-12' : ''} ${index === 2 ? 'md:pl-12' : 'md:pr-12'}`}>
              <div className="mb-5 font-serif text-5xl font-light italic leading-none text-cream/10">
                {pillar.number}
              </div>
              <h3 className="mb-3 font-serif text-2xl font-medium text-cream">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm font-light leading-relaxed text-cream/60">
                {pillar.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}