/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4352FF",
        anchor: {
          primary: "#4352FF",
          secondary: "#F04438",
        },
        gray: {
          light: "#F9FAFB",
          main: "#6E737D",
        },
        bColor: "#D2D5DA",
        error: "#F00",
      },
      backgroundImage: {
        hero: "url('https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80')",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2000px",
      tall: { raw: "(min-height: 800px)" },
    },
  },
  plugins: [],
};
