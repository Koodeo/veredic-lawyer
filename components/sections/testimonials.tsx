'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/lib/config'
import Icon from '@/components/ui/Icon'

const sectionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
}

const itemVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

function TestimonialCard({ testimonial }: { testimonial: typeof siteConfig.testimonials.items[0] }) {
  return (
    <motion.div
      variants={itemVariants}
      className={`relative cursor-pointer overflow-hidden rounded-2xl p-8 md:p-10 ${testimonial.variant === 'light' ? 'bg-stone' : 'bg-primary text-cream'} transition-all duration-400 ease-expo hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10`}>
      <div className="absolute right-6 top-6 flex items-center gap-1 text-accent">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Icon key={i} name="Star" className="h-3.5 w-3.5" fill="currentColor" />
        ))}
      </div>
      <div className="mb-6 font-serif text-6xl font-semibold leading-none text-accent/40">“</div>
      <p className={`mb-8 font-serif text-lg italic leading-relaxed ${testimonial.variant === 'light' ? 'text-primary/80' : 'text-cream/80'}`}>
        {testimonial.text}
      </p>
      <div className="flex items-center gap-4 border-t pt-6 ${testimonial.variant === 'light' ? 'border-primary/10' : 'border-cream/10'}">
        <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full font-serif text-lg font-medium ${testimonial.variant === 'light' ? 'bg-primary/5 text-primary' : 'bg-cream/5 text-cream'}`}>
          {testimonial.id}
        </div>
        <div>
          <h4 className={`font-sans text-sm font-medium ${testimonial.variant === 'light' ? 'text-primary' : 'text-cream'}`}>{testimonial.author}</h4>
          <p className={`font-sans text-xs ${testimonial.variant === 'light' ? 'text-primary/50' : 'text-cream/50'}`}>{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={sectionRef}
      variants={sectionVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      className="relative bg-cream2 py-28 md:py-40"
    >
      <div className="absolute left-8 top-12 font-serif text-[420px] font-bold leading-none text-primary/3 pointer-events-none select-none">“</div>
      <div className="relative mx-auto max-w-7xl px-8">
        <motion.div variants={itemVariants} className="mb-20 max-w-2xl">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-gold2">
            {siteConfig.testimonials.kicker}
          </p>
          <h2 
            className="font-serif text-[clamp(42px,4.5vw,60px)] leading-none -tracking-tighter text-primary [&_em]:text-secondary [&_em]:font-light"
            dangerouslySetInnerHTML={{ __html: siteConfig.testimonials.title }}
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2">
          <div className="lg:col-span-2">
            <TestimonialCard testimonial={siteConfig.testimonials.items[0]} />
          </div>
          <div className="lg:row-span-2">
            <TestimonialCard testimonial={siteConfig.testimonials.items[1]} />
          </div>
          <div className="lg:col-span-2">
            <TestimonialCard testimonial={siteConfig.testimonials.items[2]} />
          </div>
        </div>
      </div>
    </motion.section>
  )
}
