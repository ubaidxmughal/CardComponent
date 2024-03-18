/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
        ss: { max: "867px" }, // Define custom breakpoint for screens smaller than 640px
      },
      colors: {
        customBlue: "#007aff",
      },
      width: {
        29: "29%",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
