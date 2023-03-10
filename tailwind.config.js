/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite-react/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        primary: "#b56576",
        secondary: "#6d597a",
        terniary: "#e56b6f",
        textlight: "#FAF9F6",
        textdark: "#2b2d42",
      },
    },
  },
  plugins: [require("flowbite-react")],
};
