'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/lib/config'

const sectionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
}

export default function Clients() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={sectionRef}
      variants={sectionVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      className="bg-cream border-y border-primary/10"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-16 px-8 py-12 md:py-16">
        <div className="font-sans text-xs uppercase tracking-widest text-primary/30">
          {siteConfig.clients.label}
        </div>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
          {siteConfig.clients.names.map((client) => (
            <div key={client.name} className="font-serif text-lg font-medium text-primary/20 transition-colors hover:text-primary/50 cursor-default">
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
