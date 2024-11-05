/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01629C",
        secondary: "#8B5CF6",
        "edconnect-blue": "#192B4C",
        "navbar-bg": "#020617",
        "card-outline": {
          start: "rgba(209, 213, 219, 0.4)", // #D1D5DB with 40% opacity
          end: "rgba(156, 163, 175, 0.1)", // #9CA3AF with 10% opacity
        },
        gray: {
          display: "#F3F4F6", // Display Medium
          small: "#E5E7EB", // Display Small
          headline: "#D1D5DB", // Headline
          body: "#9CA3AF", // Body
          caption: "#6B7280", // Caption
          outline: "#565656", // Button and Input Outline
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["36px", { lineHeight: "1.2", fontWeight: "700" }], // Bold
        "display-md": ["30px", { lineHeight: "1.2", fontWeight: "600" }], // Semibold
        "display-sm": ["24px", { lineHeight: "1.2", fontWeight: "500" }], // Medium
        headline: ["20px", { lineHeight: "1.2", fontWeight: "400" }], // Regular
        body: ["16px", { lineHeight: "1.5", fontWeight: "400" }], // Regular
        caption: ["14px", { lineHeight: "1.5", fontWeight: "400" }], // Regular
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(to bottom, #111827, #1F2937, #030712)",
      },
      backdropBlur: {
        card: "20px",
        button: "10px",
      },
      borderRadius: {
        card: "25px",
      },
      dropShadow: {
        custom: "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
