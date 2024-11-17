/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
      }
    },
    colors: {
      anuprerna: {
        50: "#8D7961",
	    100: "#B7A990",
	    200: "#F0EEE9",
      250: "#28282D",
      10: "#32a850",
      20: "#e3ce14",
      300: "#efeee9",
      350: "#f6f6f6",
      400: "#808080"
      },
      
    }
  },
  plugins: [],
}

