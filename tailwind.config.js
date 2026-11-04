/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fcf6f7',
          100: '#f8ecf0',
          200: '#f1dbe2',
          300: '#e4bcc9',
          400: '#cf92a6',
          500: '#b4657f',
          600: '#94445e',
          700: '#7d334b',
          800: '#692d40',
          900: '#582838',
          950: '#34121d',
        },
        cream: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f4ede0',
          300: '#ebe1ce',
          400: '#ddcdb2',
        },
        sage: {
          50: '#f4f7f5',
          100: '#e5ede8',
          200: '#cedece',
          300: '#adc8b8',
          600: '#3d6f58',
          700: '#325a47',
          800: '#2a483a',
          900: '#233c31',
        },
        amberGold: {
          50: '#fefcf6',
          100: '#fef7e8',
          200: '#fdeac5',
          300: '#fcd896',
          400: '#f9be58',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
        },
        charcoal: {
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        arabic: ['Amiri', 'Traditional Arabic', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(28, 25, 23, 0.06), 0 2px 6px -2px rgba(28, 25, 23, 0.04)',
        'elevated': '0 10px 30px -5px rgba(28, 25, 23, 0.08), 0 4px 10px -3px rgba(28, 25, 23, 0.04)',
      }
    },
  },
  plugins: [],
}
