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
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        dark: 'var(--color-dark)',
        bg: 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        success: 'var(--color-success)',
      },
    },
  },
  plugins: [],
}
