import { space } from 'postcss/lib/list';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#00ADB5',
        grey: '#393E46',
        space: '#EEEEEE'
      },
    },
  },
  plugins: [],
}
