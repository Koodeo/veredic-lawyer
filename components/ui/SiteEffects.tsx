'use client'

import { useEffect } from 'react'
import { siteConfig } from '@/lib/config'

export default function SiteEffects() {
  useEffect(() => {

    /* ══════════════════════════════════
       1. LOADER
    ══════════════════════════════════ */
    const loaderEl   = document.getElementById('loader')
    const loaderNum  = document.getElementById('loader-num')
    const loaderProg = document.getElementById('loader-progress')
    const panels     = document.querySelectorAll('.l-panel')
    let pct = 0

    const ticker = setInterval(() => {
      pct += Math.random() * 9 + 2
      if (pct >= 100) {
        pct = 100
        clearInterval(ticker)
        setTimeout(exitLoader, 180)
      }
      if (loaderNum)  loaderNum.textContent  = Math.floor(pct).toString()
      if (loaderProg) loaderProg.style.width = pct + '%'
    }, 45)

    function exitLoader() {
      panels.forEach((p, i) => {
        const panel = p as HTMLElement
        panel.style.transitionDelay = (i * 0.055) + 's'
        panel.style.transform = 'scaleY(0)'
      })
      if (loaderEl) {
        loaderEl.style.transition = 'opacity .25s ease .52s'
        loaderEl.style.opacity = '0'
        loaderEl.style.pointerEvents = 'none'
      }
      setTimeout(() => {
        if (loaderEl) loaderEl.style.display = 'none'
        const loaderHud = document.getElementById('loader-hud')
        if (loaderHud) loaderHud.style.display = 'none'
        document.querySelectorAll('.hero-h1 .word').forEach((w, i) => {
          setTimeout(() => w.classList.add('up'), i * 130)
        })
        const heroPhoto = document.getElementById('heroPhoto')
        if (heroPhoto) heroPhoto.classList.add('show')
      }, 820)
    }

    /* ══════════════════════════════════
       2. SCROLL
    ══════════════════════════════════ */
    const headerEl = document.getElementById('header')
    const progBar  = document.getElementById('scroll-prog')

    const handleScroll = () => {
      const sy  = window.scrollY
      const max = document.body.scrollHeight - window.innerHeight
      if (headerEl) {
        sy > 70 ? headerEl.classList.add('stuck') : headerEl.classList.remove('stuck')
      }
      if (progBar) progBar.style.width = ((sy / max) * 100) + '%'
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    /* ══════════════════════════════════
       3. SCROLL REVEAL
    ══════════════════════════════════ */
    const srEls = document.querySelectorAll('.sr')
    const srObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          srObs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    srEls.forEach(el => srObs.observe(el))

    /* ══════════════════════════════════
       3.5. MANIFESTO TEXT REVEAL
    ══════════════════════════════════ */
    const manifestoSection = document.querySelector('.manifesto')
    if (manifestoSection) {
      const manifestoObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            manifestoObs.unobserve(e.target)
          }
        })
      }, { threshold: 0.3 })
      manifestoObs.observe(manifestoSection)
    }

    /* ══════════════════════════════════
       4. CUSTOM CURSOR
       — states applied to #cursor-wrap, NOT body
    ══════════════════════════════════ */
    const cursorWrap = document.getElementById('cursor-wrap')
    const darkSections = document.querySelectorAll(
      '.services, .contact, footer'
    )

    const cursorObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cursorWrap?.classList.add('cursor-light')
        } else {
          // only remove if no other dark section is intersecting
          const anyDark = Array.from(darkSections).some(el => {
            const r = el.getBoundingClientRect()
            return r.top < window.innerHeight / 2 && r.bottom > window.innerHeight / 2
          })
          if (!anyDark) cursorWrap?.classList.remove('cursor-light')
        }
      })
    }, { threshold: 0.3 })

    darkSections.forEach(el => cursorObserver.observe(el))
    const cRing      = document.getElementById('cRing')
    const cLabel     = document.getElementById('cLabel')
    let mx = 0, my = 0, rx = 0, ry = 0
    let animationId: number

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }
    document.addEventListener('mousemove', handleMouseMove)

    function cursorLoop() {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11
      if (cursorWrap) {
        cursorWrap.style.transform = `translate(${mx}px, ${my}px)` 
      }
      if (cRing) {
        cRing.style.transform = 
          `translate(${rx - mx}px, ${ry - my}px) translate(-50%,-50%)` 
      }
      animationId = requestAnimationFrame(cursorLoop)
    }
    animationId = requestAnimationFrame(cursorLoop)

    function setCursor(label: string, state: string) {
      if (!cursorWrap) return
      cursorWrap.classList.remove('cur-on', 'cur-drag')
      if (state) cursorWrap.classList.add(state)
      if (cLabel) cLabel.textContent = label
    }
    function clearCursor() {
      if (!cursorWrap) return
      cursorWrap.classList.remove('cur-on', 'cur-drag')
      if (cLabel) cLabel.textContent = ''
    }

    const interactiveEls = document.querySelectorAll('a, button, .h-cta')
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', () => setCursor('View', 'cur-on'))
      el.addEventListener('mouseleave', clearCursor)
    })

    document.querySelectorAll('.sv-card').forEach(el => {
      el.addEventListener('mouseenter', () => setCursor('Explore', 'cur-on'))
      el.addEventListener('mouseleave', clearCursor)
    })

    document.querySelectorAll('.t-card').forEach(el => {
      el.addEventListener('mouseenter', () => setCursor('Profile', 'cur-on'))
      el.addEventListener('mouseleave', clearCursor)
    })

    document.querySelectorAll('.tc').forEach(el => {
      el.addEventListener('mouseenter', () => setCursor('Read', 'cur-on'))
      el.addEventListener('mouseleave', clearCursor)
    })

    /* ══════════════════════════════════
       5. SERVICES — sticky horizontal scroll
    ══════════════════════════════════ */
    const servicesOuter = document.getElementById('services')
    const svTrackEl = document.querySelector('.sv-track') as HTMLElement

    const handleServiceScroll = () => {
      if (!servicesOuter || !svTrackEl) return
      
      const rect = servicesOuter.getBoundingClientRect()
      const outerHeight = servicesOuter.offsetHeight
      const stickyHeight = window.innerHeight
      const scrollable = outerHeight - stickyHeight
      
      // progress 0→1 while section is pinned
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable))
      
      // total horizontal distance to travel
      const trackWidth = svTrackEl.scrollWidth
      const viewWidth = window.innerWidth
      const maxTranslate = -(trackWidth - viewWidth + 64)
      
      svTrackEl.style.transform = `translateX(${progress * maxTranslate}px)`
    }

    window.addEventListener('scroll', handleServiceScroll, { passive: true })

    /* ══════════════════════════════════
       6. STAT COUNT-UP
    ══════════════════════════════════ */
    document.querySelectorAll('.stat-num').forEach(el => {
      new IntersectionObserver(([entry], obs) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        const html  = el.innerHTML
        const match = html.match(/\d+/)
        if (!match) return
        const num = parseInt(match[0])
        const t0  = performance.now()
        const dur = 1300
        function tick(now: number) {
          const p = Math.min((now - t0) / dur, 1)
          const v = Math.round((1 - Math.pow(1 - p, 3)) * num)
          el.innerHTML = html.replace(/\d+/, v.toString())
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }, { threshold: 0.6 }).observe(el)
    })

    /* ══════════════════════════════════
       7. MAGNETIC BUTTONS
    ══════════════════════════════════ */
    type BtnHandler = { el: Element; move: EventListener; leave: EventListener }
    const btnHandlers: BtnHandler[] = []

    document.querySelectorAll('.btn-solid, .h-cta, .f-btn').forEach(btn => {
      const move: EventListener = (evt) => {
        const e = evt as MouseEvent
        const r  = btn.getBoundingClientRect()
        const dx = (e.clientX - (r.left + r.width  / 2)) * 0.22
        const dy = (e.clientY - (r.top  + r.height / 2)) * 0.22
        ;(btn as HTMLElement).style.transform = `translate(${dx}px,${dy}px)`
      }
      const leave: EventListener = () => {
        ;(btn as HTMLElement).style.transform = ''
      }
      btn.addEventListener('mousemove', move)
      btn.addEventListener('mouseleave', leave)
      btnHandlers.push({ el: btn, move, leave })
    })

    /* ══════════════════════════════════
       8. HERO PARALLAX
    ══════════════════════════════════ */
    const handleParallax = () => {
      const sy = window.scrollY
      if (sy > window.innerHeight) return
      const wm = document.querySelector('.hero-wordmark') as HTMLElement
      if (wm) wm.style.transform = `translateY(calc(-52% + ${sy * 0.06}px))`
    }
    window.addEventListener('scroll', handleParallax, { passive: true })

    // Cleanup
    return () => {
      clearInterval(ticker)
      cancelAnimationFrame(animationId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleParallax)
      window.removeEventListener('scroll', handleServiceScroll)
      document.removeEventListener('mousemove', handleMouseMove)
      srObs.disconnect()
      cursorObserver.disconnect()
      btnHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return (
    <>
      {/* ── CURSOR ── */}
      <div id="cursor-wrap">
        <div className="c-dot" id="cDot" />
        <div className="c-ring" id="cRing" />
        <div className="c-label" id="cLabel" />
      </div>

      {/* ── LOADER ── */}
      <div id="loader">
        <div className="l-panel" />
        <div className="l-panel" />
        <div className="l-panel" />
        <div className="l-panel" />
        <div className="l-panel" />
      </div>
      <div id="loader-hud">
        <div id="loader-num">0</div>
        {/* name from config — never hardcoded */}
        <div id="loader-word">{siteConfig.name}</div>
      </div>
      <div id="loader-progress" />

      {/* ── SCROLL PROGRESS ── */}
      <div id="scroll-prog" />
    </>
  )
}