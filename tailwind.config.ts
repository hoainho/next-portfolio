/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    screens: {
      'sm': '481px',
      'md': '769px',
      'lg': '961px',
      '1024px': '1025px',
      '1072px': '1073px',
      'xl': '1201px',
      '1360px': '1361px',
      '2xl': '1441px',
      '1792px': '1793px'
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      fontFamily: {
        'public-sans': ['var(--font-public-sans)'],
        'sharp-grotesk': ['var(--font-sharp-grotesk)'],
      },
      maxWidth: {
        'xl': '1200px',
        '2xl': '1360px'
      },
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'tertiary': 'var(--color-tertiary)',
        'hover': 'var(--color-hover)',
        'active': 'var(--color-active)',
        'basics-gray-1': 'var(--color-basics-gray-1)',
        'basics-gray-2': 'var(--color-basics-gray-2)',
        'basics-gray-3': 'var(--color-basics-gray-3)',
        'basics-gray-4': 'var(--color-basics-gray-4)',
        'basics-gray-98': 'var(--color-basics-gray-98)',
        'basics-gray-border': 'var(--color-basics-gray-border)',
        'basics-gray-border-2': 'var(--color-basics-gray-border-2)',
        'basics-gray-border-3': 'var(--color-basics-gray-border-3)',
        'basics-background-default': 'var(--color-basics-background-default)',
        'basics-background-dark': 'var(--color-basics-background-dark)',
        'brand-gold': 'var(--color-brand-gold)',
        'brand-dark-blue': 'var(--color-brand-dark-blue)',
        'brown': 'var(--color-brown)',
        'neutral-background-1': 'var(--color-neutral-background-1)',
        'neutral-background-2': 'var(--color-neutral-background-2)',
        'interface-background-amber': 'var(--color-interface-background-amber)',
        'interface-background-green': 'var(--color-interface-background-green)',
        'interface-background-red': 'var(--color-interface-background-red)',
        'interface-input-idle': 'var(--color-interface-input-idle)',
        'interface-input-active': 'var(--color-interface-input-active)',
        'interface-input-disabled': 'var(--color-interface-input-disabled)',
        'interface-input-error': 'var(--color-interface-input-error)',
        'button-idle': 'var(--color-button-idle)',
        'button-hover': 'var(--color-button-hover)',
        'button-gold-idle': 'var(--color-button-gold-idle)',
        'button-gold-hover': 'var(--color-button-gold-hover)',
        'button-line-idle': 'var(--color-button-line-idle)',
        'button-line-hover': 'var(--color-button-line-hover)',
        'button-disabled': 'var(--color-button-disabled)',
        'input-error': 'var(--color-input-error)',
        'input-focus': 'var(--color-input-focus)',
        'line-button-idle': 'var(--color-line-button-idle)',
        'line-button-hover': 'var(--color-line-button-hover)',
        'solid-button-idle': 'var(--color-solid-button-idle)',
        'solid-button-hover': 'var(--color-solid-button-hover)',
        'skeleton': 'var(--color-skeleton)',
        'overlay': 'var(--color-overlay)',
        'overlay-black': 'var(--color-overlay-black)',
        'floral-white': 'var(--color-floral-white)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      cursor: {
        'special': 'url(/images/Special-Pointer.svg), auto'
      },
      boxShadow: {
        'inner-border': '0px 0px 0px 2px var(--color-basics-gray-border) inset'
      },
      transitionTimingFunction: {
        'fade': 'cubic-bezier(0.24, 0.08, 0.32, 0.88)'
      }
    },
  },
}
