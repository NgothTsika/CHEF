// tailwind.config.js
module.exports = {
  darkMode: "class", // or 'media'
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: {
          light: "rgb(227, 227, 231)", // Light theme background color
          dark: "rgb(26, 26, 26)", // Dark theme background color
        },
        bgSecondary: {
          light: "#F3F4F5", // Light theme background color
          dark: "rgb(13, 13, 13)", // Dark theme background color
        },
        bgTried: {
          light: "#FFFF", // Light theme background color
          dark: "rgb(26, 26, 26)", // Dark theme background color
        },
        navBg: {
          light: "rgb(245, 245, 248)", // Light theme background color
          dark: "rgb(28,28,29)", // Dark theme background color
        },
        primaryText: {
          light: "rgb(27, 26, 31) ", // Light theme primary color
          dark: "rgb(245, 245, 247) ", // Dark theme primary color
        },
        secondaryText: {
          light: "rgb(100, 99, 106)", // Light theme text color
          dark: "#F3F4F6", // Dark theme text color
        },
        promo: {
          light: "#1F2937", // Light theme text color
          dark: "#ffa500", // Dark theme text color
        },
        card: {
          light: "rgb(245, 245, 248)", // Light theme text color
          dark: "rgb(48,50,53)", // Dark theme text color
        },
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Geist: ["Geist", "sans-serif"],
        Bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
