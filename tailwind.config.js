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
        primary: '#4c519f',
        secondary: '#3f5bcc',
        grad: '#c183a0',
        violet: '#4c519f',
        search: '#6c3b8b',
        time: '#d2d3e7',
        num:'#454545',
        attendance: '#d2d3e7',
        csv: '#797cb7'
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

