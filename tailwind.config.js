/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3f3cbb',
        secondary: '#3f5bcc'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

