/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
    },
    fontFamily: {
      sans: ["Inter var, sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
