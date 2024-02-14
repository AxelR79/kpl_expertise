import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      'navbar': ['"Roboto"', '"Montserrat"', 'Tahoma', 'Verdana', 'sans-serif'],
    },
    backgroundColor: theme => ({
      'red': '#E66352'
     }),
    textColor: {
      'white-50': 'rgba(255, 255, 255, 0.5)',
      'white': '#fff',
    },
    screens: {
      'bs': '1330px',
      'ms': '1200px',
    },
  },
  plugins: [],
};
export default config;
