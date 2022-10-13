/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins:[
    require('@tailwindcss/aspect-ratio'),
  ],
}
