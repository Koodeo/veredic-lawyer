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

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={sectionRef}
      variants={sectionVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      className="relative overflow-hidden bg-primary py-28 text-cream md:py-40"
    >
      {/* Decorative circles */}
      <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/5" />
      <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/3" />

      <div className="relative z-10 mx-auto max-w-3xl px-8 text-center">
        <motion.div variants={itemVariants}>
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-gold2">
            {siteConfig.contact.kicker}
          </p>
          <h2 
            className="font-serif text-[clamp(42px,5vw,64px)] leading-tight -tracking-tighter text-cream [&_em]:text-cream/50 [&_em]:font-light"
            dangerouslySetInnerHTML={{ __html: siteConfig.contact.title }}
          />
          <p className="mx-auto mt-6 max-w-xl font-sans text-sm font-light leading-relaxed text-cream/60">
            {siteConfig.contact.subtitle}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 flex justify-center gap-4">
          {siteConfig.contact.trustBadges.map((badge, index) => (
            <div key={index} className="rounded-full border border-cream/10 px-4 py-1.5 font-sans text-xs text-cream/50">
              {badge}
            </div>
          ))}
        </motion.div>

        <motion.form variants={itemVariants} className="mt-16 grid grid-cols-1 gap-x-6 gap-y-5 text-left sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="sr-only">{siteConfig.contact.form.fields.firstName}</label>
            <input type="text" name="firstName" id="firstName" placeholder={siteConfig.contact.form.fields.firstName} className="block w-full rounded-lg border-0 bg-cream/5 px-4 py-3 text-sm text-cream ring-1 ring-inset ring-cream/10 placeholder:text-cream/40 focus:ring-2 focus:ring-inset focus:ring-accent transition-all duration-300" />
          </div>
          <div>
            <label htmlFor="lastName" className="sr-only">{siteConfig.contact.form.fields.lastName}</label>
            <input type="text" name="lastName" id="lastName" placeholder={siteConfig.contact.form.fields.lastName} className="block w-full rounded-lg border-0 bg-cream/5 px-4 py-3 text-sm text-cream ring-1 ring-inset ring-cream/10 placeholder:text-cream/40 focus:ring-2 focus:ring-inset focus:ring-accent transition-all duration-300" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="sr-only">{siteConfig.contact.form.fields.email}</label>
            <input type="email" name="email" id="email" placeholder={siteConfig.contact.form.fields.email} className="block w-full rounded-lg border-0 bg-cream/5 px-4 py-3 text-sm text-cream ring-1 ring-inset ring-cream/10 placeholder:text-cream/40 focus:ring-2 focus:ring-inset focus:ring-accent transition-all duration-300" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="sr-only">{siteConfig.contact.form.fields.company}</label>
            <input type="text" name="company" id="company" placeholder={siteConfig.contact.form.fields.company} className="block w-full rounded-lg border-0 bg-cream/5 px-4 py-3 text-sm text-cream ring-1 ring-inset ring-cream/10 placeholder:text-cream/40 focus:ring-2 focus:ring-inset focus:ring-accent transition-all duration-300" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="practiceArea" className="sr-only">{siteConfig.contact.form.fields.practiceArea}</label>
            <select id="practiceArea" name="practiceArea" className="block w-full rounded-lg border-0 bg-cream/5 px-4 py-3 text-sm text-cream ring-1 ring-inset ring-cream/10 focus:ring-2 focus:ring-inset focus:ring-accent transition-all duration-300">
              <option disabled selected>{siteConfig.contact.form.fields.practiceArea}</option>
              {siteConfig.contact.form.practiceAreas.map((area) => (
                <option key={area} value={area} className="bg-primary text-cream">{area}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="sr-only">{siteConfig.contact.form.fields.message}</label>
            <textarea name="message" id="message" rows={4} placeholder={siteConfig.contact.form.fields.message} className="block w-full rounded-lg border-0 bg-cream/5 px-4 py-3 text-sm text-cream ring-1 ring-inset ring-cream/10 placeholder:text-cream/40 focus:ring-2 focus:ring-inset focus:ring-accent transition-all duration-300" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="w-full rounded-full bg-accent py-4 font-sans text-sm font-medium uppercase tracking-widest text-primary transition-colors hover:bg-gold2">
              {siteConfig.contact.form.submitText}
            </button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  )
}
