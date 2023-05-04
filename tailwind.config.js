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
      },
      height: {
        '128': '32rem',
        '144': '36rem'
      },
      maxHeight: {
        '128': '32rem',
        '144': '36rem',
        '168': '42rem'
      }
      
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

