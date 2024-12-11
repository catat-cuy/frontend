/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2bb5ff',
        secondary: '#ef863e',
      },
    },
  },
  plugins: [],
}
