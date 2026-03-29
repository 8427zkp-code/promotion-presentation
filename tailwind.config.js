/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to bottom, #1a1a2e, #0f0f1e, #050510)',
        'blue-gradient': 'linear-gradient(to right, #0ea5e9, #06b6d4)',
      },
      colors: {
        pink: {
          100: '#fef3c7',
          200: '#fde047',
          300: '#fb7185',
          400: '#f472b6',
          500: '#ec4899',
        },
        blue: {
          400: '#3b82f6',
          500: '#2563eb',
        },
        yellow: {
          300: '#fbbf24',
          400: '#f59e0b',
        },
        green: {
          400: '#10b981',
          500: '#059669',
        },
        purple: {
          400: '#8b5cf6',
          500: '#7c3aed',
        },
        black: {
          DEFAULT: '#000000',
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}