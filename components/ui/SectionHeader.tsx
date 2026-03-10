"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { Badge } from "./Badge"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export function SectionHeader({ 
  eyebrow, 
  title, 
  subtitle, 
  align = "left" 
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className={`${alignClasses[align]} mb-12`}
    >
      {eyebrow && (
        <Badge variant="light" className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
