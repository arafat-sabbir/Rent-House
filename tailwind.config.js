/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      colors:{
        "main":'#1C61E7'
      }
    },
  },
  plugins: [require("daisyui")],
}

