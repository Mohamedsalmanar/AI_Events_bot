/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/app/**/*.{ts,tsx}", "./frontend/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0F10",
        panel: "#101414",
        nvidia: "#76B900",
        frost: "#D9F99D"
      },
      boxShadow: {
        glow: "0 0 28px rgba(118, 185, 0, 0.28)"
      }
    }
  },
  plugins: []
};
