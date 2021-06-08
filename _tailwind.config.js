const colors = require("tailwindcss/colors");

// just some WIP shit im trying out dont mind this

/**
 * @param {string} s
 */
const colorify = (s) => (s ? (/(rgb|rgba)\((.*)\)/.test(s) ? s : s.startsWith("#") ? s : `#${s}`) : undefined);

/**
 * @param {string} lighter
 * @param {string} default
 * @param {string} darker
 * @param {string} darkest
 */
const makeColor = (lighter, DEFAULT, darker, darkest) => ({
  lighter: colorify(lighter),
  DEFAULT: colorify(DEFAULT),
  darker: colorify(darker),
  darkest: colorify(darkest),
});

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.*"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: makeColor("bd4b6c", "bf4b6c"),
        secondary: makeColor("9fa0ff", "9fa0ff"),
        tertiary: makeColor("9fa0ff", "9fa0ff"),
        pink: {
          ...colors.pink,
          DEFAULT: "dab6fc",
        },
        cute: {
          green: makeColor("71e8b3", "42e09a", "17c881", "12a168"),
          aqua: makeColor("89e3fd"),
          primary: makeColor("bd4b6c", "aa3e5f", "983253", "852646"),
          pinky: makeColor("ffdedd", "ffd3d2", "ffc3c3"),
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
