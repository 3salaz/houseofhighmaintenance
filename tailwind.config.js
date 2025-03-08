/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure Tailwind scans your HTML
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, TSX files
    "./src/styles/main.scss", // ✅ Only needed if SCSS is used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
