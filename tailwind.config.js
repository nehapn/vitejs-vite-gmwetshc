/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#FAFAF8',
          card: '#FFFFFF',
          elevated: '#F5F4F1',
          border: '#E8E6E1',
          muted: '#D4D1CA',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          secondary: '#4A4A4A',
          muted: '#8A8A8A',
          faint: '#B5B5B5',
        },
        accent: {
          gold: '#C8956C',
          purple: '#7C6BAF',
          teal: '#4A8C8C',
          rose: '#B5727E',
        },
        category: {
          fashion: '#B5727E',
          beauty: '#C8956C',
          lifestyle: '#7C9B6B',
          interiors: '#6B89A8',
          food: '#8B9B6B',
          entertainment: '#9B7CB5',
          travel: '#6BA89B',
          wellness: '#6BAF8C',
          technology: '#5B8FAF',
          luxury: '#A89B6B',
        }
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
