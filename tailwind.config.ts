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
      'montserrat': ['"Roboto"', '"Montserrat"', 'Tahoma', 'Verdana', 'sans-serif'],
    },
    backgroundColor: theme => ({
      'red': '#E66352',
      'grey': '#E4DFD7',
      'black': '#4A5360',
     }),
    textColor: {
      'white-50': 'rgba(255, 255, 255, 0.5)',
      'white': '#fff',
      'black': '#4A5360',
    },
    borderColor: theme => ({
      'black': '#4A5360',
    }),
    screens: {
      'bs': '1330px',
      'ms': '1200px',
    },
    spacing: {
      '110': '28rem',
      '56': '14rem',
      '20': '5rem',
      '4': '1rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '2': '0.5rem',
      '84': '21rem',
      '92': '23rem',
      '28': '7rem',
      '0': '0',
      '26': '6.5rem',
    },
  },
  plugins: [],
};
export default config;
