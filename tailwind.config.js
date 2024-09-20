/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        newAmsterdam: ['New Amsterdam', 'Poppins', 'sans-serif']
      },
      container: {
        padding: '1rem'
      },
      colors: {
        primary: '#C1DCDC',
        secondary: '#494D5F'
      },
      screens: {
        xs: '420px'
      }
    }
  },
  plugins: []
}
