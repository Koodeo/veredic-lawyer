'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/lib/config'

// Animation variants for the text
const containerVariants = {
  animate: { transition: { staggerChildren: 0.13, delayChildren: 0.5 } }
}
const lineVariants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
}
const wordVariants = {
  initial: { y: '110%' },
  animate: { y: '0%', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
}

export default function Hero() {
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true, amount: 0.3 })
  const [isPhotoVisible, setIsPhotoVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsPhotoVisible(true), 450)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section ref={heroRef} className="relative grid min-h-screen grid-cols-1 overflow-hidden bg-cream pt-24 lg:grid-cols-2">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(circle,rgba(28,30,33,0.09)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_30%_50%,black_0%,transparent_80%)] opacity-55" />
      <div className="pointer-events-none absolute right-[-24px] top-1/2 -translate-y-1/2 select-none font-serif text-[clamp(180px,24vw,380px)] font-bold leading-none tracking-[-0.02em] text-transparent [-webkit-text-stroke:1.5px_rgba(28,30,33,0.035)]">V</div>

      {/* Left Column: Content */}
      <div className="relative z-10 flex flex-col justify-center px-12 pb-20 pt-16 md:px-16">
        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-8 flex items-center gap-3.5 font-sans text-[10px] font-normal uppercase tracking-[0.22em] text-gold2">
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span className="h-px w-8 bg-accent opacity-60" />
          {siteConfig.hero.eyebrow}
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={containerVariants} initial="initial" animate="animate" className="mb-10 font-serif text-[clamp(62px,6.5vw,104px)] font-medium leading-[0.96] tracking-[-0.02em] text-primary">
          {siteConfig.hero.title.map((line, index) => (
            <motion.span key={index} variants={lineVariants} className="block overflow-hidden">
              <motion.span variants={wordVariants} dangerouslySetInnerHTML={{ __html: line }} className="block [&>em]:font-light [&>em]:italic [&>em]:text-secondary" />
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-14 max-w-[380px] font-sans text-sm font-extralight leading-loose text-primary/50">
          {siteConfig.hero.subtitle}
        </motion.p>

        {/* Actions */}
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex items-center gap-5">
          <a href="#contact" className="inline-flex items-center gap-2.5 rounded-full bg-secondary px-8 py-4 font-sans text-[11px] font-normal uppercase tracking-[0.13em] text-white transition-colors duration-300 hover:bg-slate2">
            {siteConfig.hero.ctaPrimary}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="#services" className="inline-flex items-center gap-2 font-sans text-[11px] font-light uppercase tracking-[0.13em] text-primary/50 transition-all duration-300 hover:gap-4 hover:text-primary">
            {siteConfig.hero.ctaSecondary}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7, duration: 1 }} className="absolute bottom-11 left-16 flex items-center gap-3.5">
          <div className="relative h-[50px] w-px overflow-hidden bg-primary/10">
            <div className="absolute top-[-100%] h-full w-full bg-accent [animation:pipe_2.2s_ease-in-out_infinite_2s]" />
          </div>
          <span className="font-sans text-[9px] font-light uppercase tracking-[0.22em] text-primary/30 [writing-mode:vertical-lr]">
            Scroll
          </span>
        </motion.div>
      </div>

      {/* Right Column: Photo Block */}
      <div className="relative hidden items-stretch lg:flex">
        <div className={`absolute bottom-4 left-[-24px] right-0 top-4 overflow-hidden rounded-l-3xl bg-stone2 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isPhotoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-7'}`}>
          <div className="relative h-full w-full [background:linear-gradient(155deg,#dedad5_0%,#cdc8c1_45%,#b8b2aa_100%)]">
            <div className="absolute inset-0 [background:radial-gradient(ellipse_60%_55%_at_35%_65%,rgba(201,179,152,0.3)_0%,transparent_55%),radial-gradient(ellipse_50%_60%_at_75%_25%,rgba(42,59,78,0.1)_0%,transparent_55%)]" />
            
            {/* Animated lines */}
            <div className="absolute h-px w-4/5 origin-left [background:linear-gradient(90deg,transparent,rgba(247,243,241,0.4),transparent)] [animation:lineIn_1.4s_cubic-bezier(0.16,1,0.3,1)_forwards] top-[22%] left-[10%] [animation-delay:1.0s]" />
            <div className="absolute h-px w-3/5 origin-left [background:linear-gradient(90deg,transparent,rgba(247,243,241,0.4),transparent)] [animation:lineIn_1.4s_cubic-bezier(0.16,1,0.3,1)_forwards] top-[44%] left-[20%] [animation-delay:1.2s]" />
            <div className="absolute h-px w-4/5 origin-left [background:linear-gradient(90deg,transparent,rgba(247,243,241,0.4),transparent)] [animation:lineIn_1.4s_cubic-bezier(0.16,1,0.3,1)_forwards] top-[66%] left-[10%] [animation-delay:1.4s]" />
            <div className="absolute h-px origin-left [background:linear-gradient(90deg,transparent,rgba(247,243,241,0.4),transparent)] [animation:lineIn_1.4s_cubic-bezier(0.16,1,0.3,1)_forwards] top-[82%] left-[28%] w-[45%] [animation-delay:1.6s]" />
            
            {/* SVG decoration */}
            <svg viewBox="0 0 500 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-15">
              <defs><linearGradient id="ag" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9B398" stopOpacity=".9" /><stop offset="100%" stopColor="#2A3B4E" stopOpacity=".4" /></linearGradient></defs>
              <rect x="55" y="90" width="38" height="510" fill="url(#ag)" opacity=".35" /><rect x="125" y="50" width="18" height="550" fill="url(#ag)" opacity=".25" /><rect x="190" y="130" width="55" height="470" fill="url(#ag)" opacity=".3" /><rect x="295" y="70" width="28" height="530" fill="url(#ag)" opacity=".22" /><rect x="360" y="110" width="75" height="490" fill="url(#ag)" opacity=".35" /><line x1="0" y1="175" x2="500" y2="175" stroke="#C9B398" strokeWidth=".6" opacity=".25" /><line x1="0" y1="355" x2="500" y2="355" stroke="#C9B398" strokeWidth=".6" opacity=".18" /><line x1="0" y1="510" x2="500" y2="510" stroke="#C9B398" strokeWidth=".6" opacity=".22" /><circle cx="370" cy="175" r="58" stroke="#C9B398" strokeWidth=".6" fill="none" opacity=".28" /><circle cx="370" cy="175" r="36" stroke="#C9B398" strokeWidth=".6" fill="none" opacity=".18" />
            </svg>
          </div>

          {/* Floating Badges */}
          {siteConfig.hero.badges.map((badge, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.35 + index * 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className={`absolute z-10 rounded-2xl px-6 py-4 ${index === 0 ? 'right-[-20px] top-9 bg-cream shadow-lg [box-shadow:0_20px_60px_rgba(28,30,33,0.12),_0_2px_8px_rgba(28,30,33,0.06)]' : 'bottom-16 right-7 bg-secondary text-cream shadow-2xl [box-shadow:0_20px_60px_rgba(42,59,78,0.3)]'}`}>
              <div className={`font-sans text-[9px] font-light uppercase tracking-[0.16em] ${index === 0 ? 'text-primary/50' : 'text-cream/60'}`}>{badge.label}</div>
              <div className={`font-serif leading-none ${index === 0 ? 'text-3xl font-semibold text-primary' : 'text-2xl font-semibold'}`}>{badge.value}</div>
              {badge.dots && (
                <div className="mt-2 flex gap-1">
                  {badge.dots.map((active, dotIndex) => (
                    <span key={dotIndex} className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-accent' : 'bg-primary/10'}`} />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes pipe { 0% { top: -100%; } 50% { top: 0%; } 100% { top: 100%; } }
        @keyframes lineIn { to { transform: scaleX(1); } }
      `}</style>
    </section>
  )
}
