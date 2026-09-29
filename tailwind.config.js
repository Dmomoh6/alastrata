/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1B4B",
        secondary: "#B4365C",
        accent: "#FF6B00",
      },
      fontFamily: {
        sans: ["Creato Display", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
