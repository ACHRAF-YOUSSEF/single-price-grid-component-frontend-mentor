/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "blue-b1": "hsl(228, 45%, 44%)",
        "Cyan-dark": "hsl(179, 62%, 30%)",
        Cyan: "hsl(179, 62%, 38%)",
        "Bright-Yellow": "hsl(71, 73%, 40%)",
        "Light-Gray": "hsl(204, 43%, 93%)",
        "Grayish-Blue": "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
