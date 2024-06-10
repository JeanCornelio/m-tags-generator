/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
       "./node_modules/flowbite/**/*.js"
    
  ],
  theme: {
    fontFamily: {
      'sans': ['Barlow Semi Condensed', 'sans-serif'],
      'serif': ['Barlow Semi Condensed', 'serif',],
   
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    addDynamicIconSelectors()
  ],
}

