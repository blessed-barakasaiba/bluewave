/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        70: "17.5rem", // px-48 equivalent
      },
    },
  },
  plugins: [],
}