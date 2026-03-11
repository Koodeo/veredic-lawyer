'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/lib/config'

const sectionVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Manifesto() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={sectionRef}
      variants={sectionVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      className="relative overflow-hidden bg-cream px-8 py-24 md:px-16 md:py-40"
    >
      {/* Decorative vertical line (from reference .manifesto-deco) */}
      <div className="absolute right-16 top-16 hidden h-[110px] w-px bg-gradient-to-b from-accent to-transparent opacity-35 md:block" />

      {/* Kicker */}
      <motion.div variants={itemVariants} className="mb-14 flex items-center gap-4">
        <div className="h-px w-[38px] bg-accent opacity-55" />
        <p className="font-sans text-[10px] font-normal uppercase tracking-[0.22em] text-gold2">
          {siteConfig.manifesto.kicker}
        </p>
      </motion.div>

      {/* Main Text with innerHTML to render the <span class="highlight"> from config */}
      <motion.div variants={itemVariants}>
        <p 
          className="mb-20 max-w-[880px] font-serif text-[clamp(32px,4vw,58px)] font-normal leading-[1.28] text-primary [&_.highlight]:border-b [&_.highlight]:border-secondary/20 [&_.highlight]:pb-px [&_.highlight]:font-light [&_.highlight]:italic [&_.highlight]:text-secondary"
          dangerouslySetInnerHTML={{ __html: siteConfig.manifesto.text }}
        />
      </motion.div>

      {/* Pillars Grid */}
      <motion.div 
        variants={itemVariants} 
        className="grid grid-cols-1 gap-12 border-t border-primary/10 pt-14 md:grid-cols-3 md:gap-0"
      >
        {siteConfig.manifesto.pillars.map((pillar, index) => (
          <div 
            key={pillar.id} 
            className={`border-primary/10 md:pb-0 ${
              index === 0 ? 'md:border-r md:pr-12' : 
              index === 1 ? 'md:border-r md:px-12' : 
              'md:pl-12'
            }`}
          >
            <div className="mb-4 font-serif text-[52px] font-light italic leading-none text-secondary/10">
              {pillar.number}
            </div>
            <h3 className="mb-3 font-serif text-2xl font-medium text-primary">
              {pillar.title}
            </h3>
            <p className="font-sans text-[13px] font-light leading-[1.9] text-primary/50">
              {pillar.description}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  )
}