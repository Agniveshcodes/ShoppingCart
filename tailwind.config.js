/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width : {
        200 : "900px",
        180 : "880px",
        10 : "60px"
      }
    },
  },
  plugins: [],
}

