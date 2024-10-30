/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      darkgrey: "#010010",
      lightgrey: "#E9EEEE",
      "primary-blue": "#275DA4",
      white: "#fff",
      grey50: "#BABABA",
      grey: "#4A5354",
      black: "#000",
      blue: "#9FCFE8",
      red: "#ed4c5c",
      lightblue: "#D6E7EF",
      green: "#1dbd21",
      "button-text-color": "#868E96",
      "dark-blue": "#194175",
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
        "libre-baskerville": ["Libre Baskerville", "serif"],
      },
      fontSize: {
        main: ["16px", { lineHeight: "26px", fontWeight: "400" }],
        secondary: ["14px", { lineHeight: "18px", fontWeight: "400" }],
        small: ["12px", { lineHeight: "18px", fontWeight: "400" }],
        h1: ["56px", { lineHeight: "72px", fontWeight: "400" }],
        h2: ["48px", { lineHeight: "36px", fontWeight: "500" }],
        h3: [
          "36px",
          { lineHeight: "42px", fontWeight: "400", letterSpacing: "0.01em" },
        ],
        h4: ["24px", { lineHeight: "30px", fontWeight: "700" }],
        h5: ["20px", { lineHeight: "30px", fontWeight: "400" }],
        button: ["16px", { lineHeight: "24px", fontWeight: "600" }],
      },
      padding: {
        content: "108px",
      },
      maxWidth: {
        "screen-xl": "1224px",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
        104: "1.04",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".pause-animation": {
          "animation-play-state": "paused",
        },
      });
    },
  ],
};
