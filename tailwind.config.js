/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "649px" }, // Everything up to 649px
      md: { min: "650px", max: "700px" }, // Between 650px and 800px
      lg: { min: "801px" }, // Everything larger than 800px
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
