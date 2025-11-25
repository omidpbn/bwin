import flowbitePlugin from "flowbite/plugin";

const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          800: "#141414",
          900: "#000",
        },
      },
    },
  },
  plugins: [flowbitePlugin],
};

export default config;
