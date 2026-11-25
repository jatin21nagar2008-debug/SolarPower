/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // User's specific luxury renewable palette
        forest: {
          DEFAULT: '#0B2520',
          950: '#071815',
          900: '#0B2520',
          800: '#10362F',
          700: '#174A41',
        },
        emerald: {
          brand: '#087F5B',
          glow: '#0ca678',
        },
        lime: {
          brand: '#C8F169',
          glow: '#d9f99d',
          dark: '#9ec437',
        },
        offwhite: '#F5F7F0',
        mint: {
          DEFAULT: '#DCEFE5',
          soft: '#EBF6F0',
          dark: '#B8DEC8',
        },
        charcoal: {
          DEFAULT: '#15221F',
          950: '#0E1715',
          900: '#15221F',
          800: '#1D2F2B',
          700: '#2A433E',
        },
        navy: {
          950: '#020617',
          900: '#040d21',
          850: '#061433',
          800: '#0a1d47',
        },
        electric: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#00d2ff',
          accent: '#00f0ff',
        },
        solar: {
          gold: '#f59e0b',
          400: '#facc15',
          300: '#fef08a',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'forest-radial': 'radial-gradient(circle at 50% 0%, rgba(200, 241, 105, 0.12) 0%, rgba(8, 127, 91, 0.08) 45%, transparent 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(200, 241, 105, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(200, 241, 105, 0.45)' },
        }
      }
    },
  },
  plugins: [],
}
