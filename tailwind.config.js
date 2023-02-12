/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light"],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      accentGreen: "#68CABE",
      agGreen: "#75FBCD",
      agGray: "#31363F",
    },
    extend: {
      backgroundImage: {
        my_image: "url('../public/enter.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
