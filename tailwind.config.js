/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "649px" }, // Everything up to 649px
      md: { min: "650px", max: "900px" }, // Between 650px and 900px
      lg: { min: "901px" }, // Everything larger than 900px
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
