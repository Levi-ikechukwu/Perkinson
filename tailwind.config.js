/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        custom: '0 4px 6px rgba(202, 200, 200, 0.1)',
      },
      colors: {
        darkblack: "rgba(51, 51, 51, 1)",
        darkgrey: "rgba(242, 242, 242, 1)",
        pcolor: "rgba(132, 132, 132, 1)",
      
        bgcolor: "import image2 from '../assets/image2.svg'",
        btn1: "rgba(17, 42, 70, 1)",
        bd: "rgba(245, 245, 245, 1)",
        star: "rgba(255, 254, 254, 1)",
        num: "rgba(51, 51, 51, 1)",
       
      },
      
    },
  },
  plugins: [],
}