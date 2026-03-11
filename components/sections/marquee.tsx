'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/config'

export default function Marquee() {
  // Duplicate the array to create seamless loop
  const marqueeItems = [...siteConfig.marquee, ...siteConfig.marquee]

  return (
    <div className="marquee-wrap">
      <motion.div 
        className="marquee-track"
        animate={{
          x: ['0%', '-50%']
        }}
        transition={{
          duration: 38,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="m-item">
            {item}
          </div>
        ))}
      </motion.div>

      <style jsx>{`
        .marquee-wrap {
          background: var(--charcoal);
          padding: 20px 0;
          overflow: hidden;
          border-top: 1px solid rgba(28,30,33,0.08);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .m-item {
          display: flex;
          align-items: center;
          gap: 44px;
          padding: 0 44px;
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 300;
          font-style: italic;
          color: rgba(247,243,241,0.28);
          white-space: nowrap;
        }

        .m-item::after {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0.45;
        }
      `}</style>
    </div>
  )
}
