/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        color: {
          primary: '#eeeeee',
          accent: '#ffc639',
          secondary: '#393e46',
          dark: '#222831',
        },
        "pastel-pink": {
          "default": "#DD364D",
          "active": "#B31E33"
        },
        "deep-charcoal": {
          "default": "#0E1015",
          "lighter": "#181A20",
          "light": "#272B34",
          "disabled": "#51586c"
        },

      },
    }
  },
  plugins: [],
};
