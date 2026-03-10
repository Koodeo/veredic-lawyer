'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showContent, setShowContent] = useState(false)
  
  useEffect(() => {
    const ticker = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 9 + 2
        const newProgress = prev + increment
        
        if (newProgress >= 100) {
          clearInterval(ticker)
          setTimeout(() => {
            setIsLoading(false)
            setTimeout(() => {
              setShowContent(true)
            }, 820)
          }, 180)
          return 100
        }
        
        return newProgress
      })
    }, 45)
    
    return () => clearInterval(ticker)
  }, [])
  
  const panelVariants = {
    initial: { scaleY: 1 },
    exit: { scaleY: 0 }
  }
  
  return (
    <AnimatePresence>
      {isLoading && (
        <div className="loader">
          {/* Panels */}
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className="l-panel"
              variants={panelVariants}
              initial="initial"
              exit="exit"
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: index * 0.055
              }}
              style={{
                flex: 1,
                background: 'var(--charcoal)',
                transformOrigin: 'top',
              }}
            />
          ))}
          
          {/* HUD */}
          <div className="loader-hud">
            <div className="loader-num">{Math.floor(progress)}</div>
            <div className="loader-word">Veredic</div>
          </div>
          
          {/* Progress Bar */}
          <motion.div
            className="loader-progress"
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              height: 2,
              zIndex: 8001,
              background: 'linear-gradient(90deg, var(--gold) 0%, rgba(201,179,152,0.25) 100%)',
              width: `${progress}%`,
              transition: 'width 0.08s linear',
            }}
          />
          
          <style jsx>{`
            .loader {
              position: fixed;
              inset: 0;
              z-index: 8000;
              display: flex;
              pointer-events: none;
              overflow: hidden;
            }
            
            .loader-hud {
              position: fixed;
              z-index: 8001;
              bottom: 56px;
              left: 64px;
              right: 64px;
              display: flex;
              align-items: flex-end;
              justify-content: space-between;
              pointer-events: none;
            }
            
            .loader-num {
              font-family: var(--font-display);
              font-size: clamp(80px, 14vw, 180px);
              font-weight: 300;
              line-height: 1;
              color: rgba(247,243,241,0.06);
              transition: none;
            }
            
            .loader-word {
              font-family: var(--font-display);
              font-size: 15px;
              font-weight: 300;
              letter-spacing: 0.32em;
              text-transform: uppercase;
              color: rgba(247,243,241,0.26);
              align-self: center;
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  )
}
