/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        // Semantic color variables from config.ts
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        cream: 'var(--cream)',
        stone: 'var(--stone)',
        cream2: 'var(--cream2)',
        stone2: 'var(--stone2)',
        gold2: 'var(--gold2)',
        slate2: 'var(--slate2)',
        ink: 'var(--ink)',
        // Legacy variables for compatibility
        'primary-light': 'var(--primary)',
        'primary-dark': 'var(--primary)',
        dark: 'var(--primary)',
        bg: 'var(--cream)',
        'bg-alt': 'var(--stone)',
        muted: 'var(--secondary)',
        border: 'var(--stone)',
        success: 'var(--accent)',
      },
    },
  },
  plugins: [],
}
