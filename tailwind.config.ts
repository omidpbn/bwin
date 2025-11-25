module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite-react/**/*.js"],
  theme: {
    extend: {
      colors: {
        slate: {
          800:"#141414",
          900: "#000",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};



