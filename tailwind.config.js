const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{ts,js,tsx,jsx,vue,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#8e94f2",
        secondary: "#9fa0ff",
        tertiary: "bbadff",
        pink: {
          ...colors.pink,
          DEFAULT: "dab6fc",
        },
      },
      fontFamily: {
        sans: ["DM Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
