'use client'

import { motion } from 'framer-motion'

interface MarqueeProps {
  items: string[]
}

export default function Marquee({ items }: MarqueeProps) {
  // Fallback for safety, though data should come from page props
  if (!items || items.length === 0) {
    return null
  }

  // Triple the items to ensure a seamless loop
  const marqueeItems = [...items, ...items, ...items]

  return (
    <div className="overflow-hidden border-t border-primary/[.08] bg-primary py-5">
      <motion.div 
        className="flex w-max items-center"
        animate={{
          x: ['0%', '-33.33%']
        }}
        transition={{
          duration: 38,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {marqueeItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-11 whitespace-nowrap px-11 font-serif text-sm font-light italic text-cream/30"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-accent/40" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}