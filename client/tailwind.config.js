/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '650px',
        'lg': '960px',
        'xl': '1260px',
      },
      fontFamily: {
        'Roboto': ["Roboto", 'sans-serif']
      }
    },
  },
  plugins: [
  ],
}