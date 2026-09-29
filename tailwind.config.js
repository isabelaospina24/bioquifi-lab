/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
          950: '#052e16',
        },
        'sage': {
          50: '#f6f5f0',
          100: '#ede9e0',
          200: '#dbd3c3',
          300: '#c9b8a6',
          400: '#a8976e',
          500: '#8d7c61',
          600: '#6d5e47',
          700: '#584d3f',
          800: '#423a33',
          900: '#3a322c',
        },
        'teal-accent': {
          50: '#f0fdf4',
          500: '#0d9488',
          600: '#0f766e',
          700: '#115e59',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'lg': '0.625rem',
        'xl': '0.75rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
