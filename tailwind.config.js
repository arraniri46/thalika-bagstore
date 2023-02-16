/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        primary: "#E5989B",
        secondary: "#6D6875",
        terniary: "#B5838D",
        textlight: "#EDF6F9",
        textdark: "#1F1F1F",
      },
    },
  },
  plugins: [],
};
