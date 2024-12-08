/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b35',    // Orange
        secondary: '#f7c59f',  // Light Orange
        background: '#2a2d34', // Dark background
      }
    },
  },
  plugins: [],
}