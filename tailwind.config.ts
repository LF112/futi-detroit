import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindcss_animate from 'tailwindcss-animate';
import createPlugin from 'windy-radix-palette';

export default {
  content: ['./src/**/*.tsx'],
  plugins: [tailwindcss_animate, createPlugin({ opacitySupport: true }).plugin],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        russoOne: ['var(--font-russo-one)'],
        kanit: ['var(--font-kanit)'],
        ubuntu: ['var(--font-ubuntu)'],
        geometos: ['var(--font-geometos)'],
        monospaceNeon: ['var(--font-monaspace-neon)'],
      },
      backgroundImage: {
        darkBackground:
          'radial-gradient(23rem 23rem at 70% 30%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)), linear-gradient(rgb(34, 37, 43) 20rem, rgb(21, 22, 26) 62rem)',
        'footer-line':
          'linear-gradient(90deg, rgba(119, 119, 119, 0.2), rgba(72, 72, 72, 0.2), rgba(103, 103, 103, 0.2), rgba(60, 60, 60, 0.2))',
        'profile-line':
          'linear-gradient(to right, rgb(55, 239, 249), rgb(0, 145, 228), rgb(100, 198, 244), rgb(100, 192, 236))',
      },
      colors: {
        futi: 'rgb(62 141 224 / <alpha-value>)',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'cursor-fade-out': {
          from: { opacity: '100%' },
          to: { opacity: '0%' },
        },
        'line-height-smooth-entry': {
          '0%': { opacity: '1' },
          '100%': {
            height: '150%',
          },
        },
        'line-width-smooth-entry': {
          '0%': { opacity: '1' },
          '100%': {
            width: '130%',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'line-height-smooth': 'line-height-smooth-entry 1.08s cubic-bezier(0.645,0.045,0.355,1) forwards 0.25s',
        'line-width-smooth': 'line-width-smooth-entry 1.08s cubic-bezier(0.645,0.045,0.355,1) forwards 0.25s',
        'cursor-line': 'cursor-fade-out 0.3s ease infinite alternate-reverse',
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
  },
} satisfies Config;
