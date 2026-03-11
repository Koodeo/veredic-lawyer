'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/lib/config'

const containerVariants = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
}
const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

export default function Hero() {
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true, amount: 0.3 })

  return (
    <motion.section 
      ref={heroRef} 
      variants={containerVariants} 
      initial="initial" 
      animate={isInView ? "animate" : "initial"}
      className="relative flex h-screen min-h-[820px] w-full items-center overflow-hidden bg-cream px-8 md:px-20 pt-24"
    >
      <div className="relative z-10 grid w-full grid-cols-1 lg:grid-cols-2 h-[75vh]">
        
        {/* Lado Izquierdo: Contenido */}
        <div className="flex flex-col justify-center pr-10">
          
          {/* Kicker */}
          <motion.div variants={itemVariants} className="mb-12 flex items-center gap-4">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <div className="h-[1px] w-16 bg-accent" />
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold2 font-medium">
              {siteConfig.hero.eyebrow}
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1 
            variants={itemVariants} 
            className="mb-10 font-serif text-[clamp(60px,7.5vw,110px)] font-medium leading-[0.92] tracking-tight text-primary"
          >
            {siteConfig.hero.title.map((line, index) => (
              <span key={index} className="block">
                <span dangerouslySetInnerHTML={{ __html: line }} className="[&>em]:font-light [&>em]:italic [&>em]:text-secondary" />
              </span>
            ))}
          </motion.h1>

          {/* Círculo Decorativo */}
          <motion.div 
            variants={itemVariants}
            className="absolute left-[88%] top-[40%] hidden lg:flex h-16 w-16 items-center justify-center rounded-full border border-primary/10"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
          </motion.div>

          {/* Subtítulo */}
          <motion.p variants={itemVariants} className="mb-14 max-w-[500px] font-sans text-[16px] font-extralight leading-[1.8] text-primary/50">
            {siteConfig.hero.subtitle}
          </motion.p>

          {/* Botones */}
          <motion.div variants={itemVariants} className="flex items-center gap-10">
            <button className="rounded-full bg-secondary px-10 py-5 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-cream transition-all hover:bg-primary active:scale-95 shadow-xl shadow-secondary/5">
              {siteConfig.hero.ctaPrimary} →
            </button>
            <button className="group flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-primary/40 hover:text-primary transition-colors">
              {siteConfig.hero.ctaSecondary} →
            </button>
          </motion.div>
        </div>

        {/* Lado Derecho */}
        <motion.div variants={itemVariants} className="relative hidden lg:flex h-full items-center pl-10">
          <div className="relative h-full w-full rounded-[3rem] bg-stone2">
            <div className="h-full w-full rounded-[3rem] bg-gradient-to-br from-stone2 via-stone to-stone2" />
            
            {/* Badges Dinámicos */}
            {siteConfig.hero.badges.map((badge, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.3 }}
                className={`absolute z-20 rounded-2xl p-8 shadow-2xl ${
                  index === 0 ? 'right-[-40px] top-[15%] bg-cream' : 'bottom-[10%] right-[40px] bg-secondary text-cream'
                }`}
              >
                <p className={`font-sans text-[9px] uppercase tracking-[0.2em] leading-none mb-3 ${index === 0 ? 'text-primary/40' : 'text-white/40'}`}>
                  {badge.label}
                </p>
                <p className="font-serif text-[42px] font-medium leading-none tracking-tighter">
                  {badge.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator: ARREGLADO (Más a la esquina y con z-index bajo) */}
      <motion.div 
        variants={itemVariants}
        className="absolute bottom-10 left-8 md:left-12 flex items-center gap-5 z-0 pointer-events-none"
      >
        <div className="relative h-16 w-[1px] bg-primary/10 overflow-hidden">
          <motion.div 
            animate={{ top: ["-100%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute h-full w-full bg-accent" 
          />
        </div>
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-primary/25 [writing-mode:vertical-lr] font-light leading-none">
          Scroll
        </span>
      </motion.div>

    </motion.section>
  )
}