/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')

module.exports ={
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
   
    
  ],

  theme: {
    fontFamily: {
     /*  'sans': ['Barlow Semi Condensed', 'sans-serif'],
      'serif': ['Barlow Semi Condensed', 'serif',], */
      'google': ['Helvetica', 'Arial', 'sans-serif'],
      
    },
    extend: {
   
    },
  },
  plugins: [
    require('flowbite/plugin'),
    addDynamicIconSelectors()
  ],

}

