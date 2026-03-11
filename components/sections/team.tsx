'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/lib/config'

const sectionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
}

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

function TeamCard({ member }: { member: typeof siteConfig.team.members[0] }) {
  return (
    <motion.div variants={itemVariants} className="group relative cursor-pointer overflow-hidden rounded-2xl border border-primary/5 bg-cream transition-all duration-500 ease-expo hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative h-72 overflow-hidden bg-stone2">
        <div className="flex h-full w-full items-center justify-center">
          <div className="font-serif text-6xl font-medium text-secondary/10">{member.initials}</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-primary">{member.name}</h3>
        <p className="mt-1 font-sans text-xs uppercase tracking-widest text-gold2">{member.role}</p>
        <p className="mt-3 font-sans text-xs text-primary/40">{member.specialty}</p>
      </div>
    </motion.div>
  )
}

export default function Team() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={sectionRef}
      variants={sectionVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      className="bg-stone py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-8">
        <motion.div variants={itemVariants} className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-gold2">
              {siteConfig.team.kicker}
            </p>
            <h2 
              className="font-serif text-[clamp(42px,4.5vw,60px)] leading-none -tracking-tighter text-primary max-w-lg [&_em]:text-secondary [&_em]:font-light"
              dangerouslySetInnerHTML={{ __html: siteConfig.team.title }}
            />
          </div>
          <a href="#" className="hidden items-center gap-2 font-sans text-xs uppercase tracking-widest text-primary/50 transition-colors hover:text-primary md:flex">
            {siteConfig.team.moreLink}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.team.members.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
