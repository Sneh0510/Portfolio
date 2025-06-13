/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "#2E2C3A",
      lightBrown: "#3F3C4F",
      darkBrown: "#1A1823",
      black: "#0B0B0B",
      white: "#F5F7FA",
      cyan: "#6366F1",
      lightCyan: "#A5B4FC",
      darkCyan: "#4338CA",
      orange: "#F43F5E",
      lightOrange: "#FB7185",
      darkOrange: "#BE123C",
      grey: "#9CA3AF",
      lightGrey: "#D1D5DB",
      darkGrey: "#4B5563",
    },
    extend: {
      boxShadow: {
        neonShadow: "0 0 20px rgba(99, 102, 241, 0.6)",
        neonBigShadow: "10px 10px 1000px 500px rgba(99, 102, 241, 0.3)",
        neonMediumShadow: "10px 10px 200px 150px rgba(99, 102, 241, 0.5)",
        roseBigShadow: "10px 10px 10000px 500px rgba(244, 63, 94, 0.3)",
        roseMediumShadow: "10px 10px 2000px 150px rgba(244, 63, 94, 0.5)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};