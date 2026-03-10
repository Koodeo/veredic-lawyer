"use client"

import { useState } from "react"
import { siteConfig } from "@/lib/config"
import { ButtonWhatsApp } from "@/components/ui/ButtonWhatsApp"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-[var(--color-border)] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-[var(--color-dark)]">
              {siteConfig.name}
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Empty nav links array - populated per project */}
            <ButtonWhatsApp messageKey="cta">
              Empezar
            </ButtonWhatsApp>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-dark)] hover:text-[var(--color-primary)] focus:outline-none"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <ButtonWhatsApp messageKey="cta" className="w-full justify-center">
                Empezar
              </ButtonWhatsApp>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
