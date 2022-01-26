const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Work Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography, forms],
}
