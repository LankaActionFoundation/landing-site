module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: "Abhaya Libre",
        body: "Poppins",
      },

      colors: {
        brandTeal: "#00534F",
        brandYellow: "#ffbd2a",
        brandRed: "#951B39",
        brandLightBlue: "#E2F6F4",

        tempA: "#00212D",
        tempB: "#00796F",

        //dark palette
        darkBg: "#0d141d",
        darkFg: "#101924",
        darkFgStrong: "#212124",
        darkFgLight: "#27272A",

        //light palette
        lightBg: "#EFF1FA",
        lightFg: "#091c34",
        lightFgStrong: "#2C3D4F",
        lightFgLight: "#8E8E93",

        customRed: "#FF2D55",
        customRedHoverDark: "#FF1F48",
        customRedHoverLight: "#FF4265",

        customGreen: "#34C759",
        customYellow: "#FFCC00",
        customYellowHoverLight: "#FFD21F",

        customBlue: "#007AFF",
        customBlueHoverDark: "#0076f5",
        customBlueHoverLight: "#0a81ff",

        customPurple: "#6038FF",
        customPurpleHoverDark: "#582EFF",
        customPurpleHoverLight: "#6842FF",

        customOrange: "#FF780A",
        customOrangeHoverLight: "#FF841F",
        customOrangeHoverDark: "#F56E00",

        customBlack: "#04040A",
        customWhite: "#f5f5f9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    //require("@tailwindcss/forms")
  ],
};
