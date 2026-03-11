'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, animate, useTransform } from 'framer-motion'
import { siteConfig } from '@/lib/config'

function useAnimatedCounter(to: number) {
  const count = useMotionValue(0)
  const inViewRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(inViewRef, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2.2, ease: [0.16, 1, 0.3, 1] })
    }
  }, [isInView, to, count])

  return { ref: inViewRef, value: count }
}

function StatCard({ value, label, index }: { value: string; label: string, index: number }) {
  const numericValue = parseInt(value.match(/\d+/)![0], 10)
  const suffix = value.replace(numericValue.toString(), '').trim()
  const counter = useAnimatedCounter(numericValue)
  const rounded = useTransform(counter.value, (latest) => Math.floor(latest))

  return (
    <div className={`group relative flex-1 overflow-hidden py-16 px-8 text-center ${index < 3 ? 'md:border-r border-primary/10' : ''}`}>
      {/* Background sweep effect */}
      <div className="absolute bottom-0 left-0 right-0 h-0 w-full bg-stone transition-all duration-500 ease-expo group-hover:h-full" />

      {/* Content */}
      <div className="relative z-10">
        <div ref={counter.ref} className="font-serif text-[clamp(54px,5.5vw,84px)] font-medium leading-none text-primary">
          <motion.span>{rounded}</motion.span>
          {suffix && <span className="text-[0.6em] font-light text-accent -ml-1">{suffix}</span>}
        </div>
        <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.1em] text-primary/50">
          {label}
        </p>
      </div>

      {/* Decorative circle on hover */}
      <div className="absolute bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="h-1.5 w-1.5 rounded-full bg-primary/80" />
      </div>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="bg-cream2 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20 md:mb-24"
        >
          <div>
            <div className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-gold2">
              {siteConfig.stats.kicker}
            </div>
            <h2 
              className="font-serif text-[clamp(42px,4.5vw,60px)] leading-none -tracking-tighter text-primary max-w-md [&_em]:text-secondary [&_em]:font-light"
              dangerouslySetInnerHTML={{ __html: siteConfig.stats.title }}
            />
          </div>
          <p className="font-sans text-sm leading-relaxed text-primary/60 max-w-sm font-light lg:justify-self-end">
            {siteConfig.stats.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col border-t border-primary/10 md:flex-row"
        >
          {siteConfig.stats.items.map((stat, index) => (
            <StatCard key={index} index={index} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}