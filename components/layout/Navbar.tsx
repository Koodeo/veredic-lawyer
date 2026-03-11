'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-expo ${isScrolled ? 'py-4 bg-cream/90 backdrop-blur-lg border-b border-primary/5' : 'py-8'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        <Link href="/" className="font-serif text-xl font-medium uppercase tracking-[0.22em] text-primary">
          {siteConfig.name}
          <sup className="text-[8px] font-light opacity-40">TM</sup>
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {siteConfig.nav.links.map((link) => (
            <Link key={link.href} href={link.href} className="group relative font-sans text-xs font-light uppercase tracking-widest text-primary/50 transition-colors hover:text-primary">
              {link.label}
              <span className="absolute bottom-[-4px] left-0 h-px w-0 bg-accent transition-all duration-300 ease-expo group-hover:w-full" />
            </Link>
          ))}
          <Link href="#contact" className="rounded-full bg-secondary px-7 py-3 font-sans text-xs font-normal uppercase tracking-widest text-white transition-colors hover:bg-slate2">
            {siteConfig.nav.cta}
          </Link>
        </nav>
        {/* Mobile menu can be added here if needed in the future */}
      </div>
    </header>
  )
}

