'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [cursorLabel, setCursorLabel] = useState('')
  const [cursorState, setCursorState] = useState<'default' | 'on' | 'drag'>('default')
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  const ringX = useSpring(cursorX, { stiffness: 25, damping: 15, mass: 0.5 })
  const ringY = useSpring(cursorY, { stiffness: 25, damping: 15, mass: 0.5 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Check for interactive elements
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
          target.classList.contains('h-cta') || target.classList.contains('btn-solid') ||
          target.classList.contains('btn-line')) {
        setCursorLabel('View')
        setCursorState('on')
      } else if (target.classList.contains('sv-card')) {
        setCursorLabel('Explore')
        setCursorState('on')
      } else if (target.classList.contains('t-card')) {
        setCursorLabel('Profile')
        setCursorState('on')
      } else if (target.classList.contains('tc')) {
        setCursorLabel('Read')
        setCursorState('on')
      } else if (target.classList.contains('sv-track')) {
        setCursorLabel('Drag')
        setCursorState('drag')
      }
    }
    
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const relatedTarget = e.relatedTarget as HTMLElement
      
      // Only reset if not moving to another interactive element
      if (!relatedTarget || 
          (!relatedTarget.tagName?.match(/A|BUTTON/) && 
           !relatedTarget.classList.contains('h-cta') &&
           !relatedTarget.classList.contains('btn-solid') &&
           !relatedTarget.classList.contains('btn-line') &&
           !relatedTarget.classList.contains('sv-card') &&
           !relatedTarget.classList.contains('t-card') &&
           !relatedTarget.classList.contains('tc') &&
           !relatedTarget.classList.contains('sv-track'))) {
        setCursorLabel('')
        setCursorState('default')
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [cursorX, cursorY])
  
  // Don't show custom cursor on touch devices
  const [isTouch, setIsTouch] = useState(false)
  
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])
  
  if (isTouch) return null
  
  return (
    <>
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        
        body.cur-on .cursor-dot {
          width: 58px;
          height: 58px;
          background: var(--slate);
        }
        
        body.cur-on .cursor-label {
          opacity: 1;
        }
        
        body.cur-on .cursor-ring {
          opacity: 0;
        }
        
        body.cur-drag .cursor-dot {
          width: 68px;
          height: 68px;
          background: var(--gold);
        }
        
        body.cur-drag .cursor-label {
          opacity: 1;
          color: var(--charcoal);
        }
      `}</style>
      
      <div 
        className={`cursor-wrap ${cursorState === 'on' ? 'cur-on' : cursorState === 'drag' ? 'cur-drag' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      >
        {/* Dot - follows mouse exactly */}
        <motion.div
          className="cursor-dot"
          style={{
            position: 'absolute',
            width: 8,
            height: 8,
            background: 'var(--charcoal)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            transition: 'width 0.35s cubic-bezier(0.16, 1, 0.3, 1), height 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s, opacity 0.3s',
            x: cursorX,
            y: cursorY,
          }}
        />
        
        {/* Ring - lags behind */}
        <motion.div
          className="cursor-ring"
          style={{
            position: 'absolute',
            width: 38,
            height: 38,
            border: '1px solid rgba(28,30,33,0.2)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s, border-color 0.3s',
            x: ringX,
            y: ringY,
          }}
        />
        
        {/* Label */}
        <motion.div
          className="cursor-label"
          style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--font-body)',
            fontSize: 9,
            fontWeight: 300,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--cream)',
            whiteSpace: 'nowrap',
            opacity: 0,
            transition: 'opacity 0.25s',
            x: cursorX,
            y: cursorY,
          }}
        >
          {cursorLabel}
        </motion.div>
      </div>
    </>
  )
}
