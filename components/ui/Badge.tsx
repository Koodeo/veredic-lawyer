interface BadgeProps {
  children: React.ReactNode
  variant?: "light" | "dark" | "primary"
  className?: string
}

export function Badge({ children, variant = "light", className = "" }: BadgeProps) {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
  
  const variants = {
    light: "bg-[var(--color-bg-alt)] text-[var(--color-muted)]",
    dark: "bg-[var(--color-dark)] text-white",
    primary: "bg-[var(--color-primary)] text-white"
  }
  
  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
