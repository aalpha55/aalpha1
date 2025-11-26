/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#DC2626', // Red-600
          orange: '#F97316', // Orange-500
          navy: '#0F172A', // Slate-900
          light: '#F8FAFC', // Slate-50
        }
      }
    },
  },
  plugins: [],
}