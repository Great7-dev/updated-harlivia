/** @format */

import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   neue: ["'Neue Haas Grotesk Display Pro'", "sans-serif"],
      // },
    },
  },
  plugins: [],
};

export default config;
