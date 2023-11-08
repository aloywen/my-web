/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#12E6EE',
        secondary: '#F4EC1A',
        left: '#a8ff78',
        right: '#78ffd6'

      },
      fontFamily: {
        'secondary': 'Raleway, sans-serif',
        'primary': 'Poppins, sans-serif',
      }
    },
  },
  plugins: [],
}
