/** @type {import('tailwindcss').Config} */
// All values map to CSS custom properties defined in src/index.css (the token file).
// No raw hex/px values live in component files.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      ink: 'rgb(var(--color-ink-rgb) / <alpha-value>)',
      'ink-raise': 'rgb(var(--color-ink-raise-rgb) / <alpha-value>)',
      paper: 'rgb(var(--color-paper-rgb) / <alpha-value>)',
      'paper-deep': 'rgb(var(--color-paper-deep-rgb) / <alpha-value>)',
      jade: 'rgb(var(--color-jade-rgb) / <alpha-value>)',
      'jade-deep': 'rgb(var(--color-jade-deep-rgb) / <alpha-value>)',
      coral: 'rgb(var(--color-coral-rgb) / <alpha-value>)',
      gold: 'rgb(var(--color-gold-rgb) / <alpha-value>)',
      line: 'rgb(var(--color-line-rgb) / <alpha-value>)',
      'line-dark': 'rgb(var(--color-line-dark-rgb) / <alpha-value>)',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      display: ['Fraunces', 'Georgia', 'serif'],
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
    },
    fontSize: {
      'display-xl': ['var(--font-size-display-xl)', { lineHeight: 'var(--line-height-display-xl)', letterSpacing: '-0.02em' }],
      'display-lg': ['var(--font-size-display-lg)', { lineHeight: 'var(--line-height-display-lg)', letterSpacing: '-0.015em' }],
      'display-md': ['var(--font-size-display-md)', { lineHeight: 'var(--line-height-display-md)', letterSpacing: '-0.01em' }],
      'body-lg': ['var(--font-size-body-lg)', { lineHeight: 'var(--line-height-body-lg)' }],
      body: ['var(--font-size-body)', { lineHeight: 'var(--line-height-body)' }],
      small: ['var(--font-size-small)', { lineHeight: 'var(--line-height-small)' }],
      tiny: ['var(--font-size-tiny)', { lineHeight: 'var(--line-height-tiny)' }],
      'mono-xl': ['var(--font-size-mono-xl)', { lineHeight: 'var(--line-height-mono-xl)' }],
      'mono-lg': ['var(--font-size-mono-lg)', { lineHeight: 'var(--line-height-mono-lg)' }],
      mono: ['var(--font-size-mono)', { lineHeight: 'var(--line-height-mono)' }],
    },
    borderRadius: {
      none: '0',
      sm: '0.375rem',
      button: 'var(--radius-button)',
      card: 'var(--radius-card)',
      full: '9999px',
    },
    extend: {
      transitionTimingFunction: {
        reveal: 'var(--ease-reveal)',
      },
      transitionDuration: {
        reveal: 'var(--duration-reveal)',
      },
    },
  },
  plugins: [],
};
