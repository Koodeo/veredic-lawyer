interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  onClick?: () => void
  className?: string
}

export function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick, 
  className = "" 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors"
  
  const variants = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]",
    secondary: "bg-[var(--color-bg-alt)] text-[var(--color-dark)] hover:bg-[var(--color-border)]",
    ghost: "text-[var(--color-dark)] hover:bg-[var(--color-bg-alt)]"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
