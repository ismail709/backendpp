module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#2E0249",
          700: "#570A57",
          500: "#A91079",
          300: "#F806CC",
        },
      },
      fontFamily: {
        logo: ["Maven Pro"],
        body: ["Roboto"],
      },
      animation: {
        opennav: "opennav 0.2s linear 1",
        closenav: "closenav 0.2s linear 1",
      },
      keyframes: {
        opennav: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        closenav: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
