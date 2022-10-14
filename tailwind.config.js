// @type {import('tailwindcss').Config}
// module.exports = {
//   // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
// // tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // ...
}