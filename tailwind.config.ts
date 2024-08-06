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
      },
      backgroundImage: {
        darkBackground:
          'radial-gradient(23rem 23rem at 70% 30%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)), linear-gradient(rgb(34, 37, 43) 20rem, rgb(21, 22, 26) 62rem)',
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
