// /** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Galada': ['Galada', 'sans-serif'],
      },
      textShadow: {
        DEFAULT: '-1px -1px 10px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [ 
    plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),
  ],
}

