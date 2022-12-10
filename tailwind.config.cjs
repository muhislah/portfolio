/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            "pacifico": ["Pacifico", 'sans-serif'],
            "bebas": ["Bebas Neue", 'sans-serif']
        }
    },
  },
  plugins: [],
}
