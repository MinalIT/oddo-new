/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      abc: ['Caveat', 'cursive'],
    },
    fontWeight: {
      customWeight: 1000, // Replace with desired weight
    },
  },
  plugins: [],
}


