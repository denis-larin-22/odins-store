const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        '2xl': '1280px'
      },
    },
    fontSize: {
      // 'xxl': ['6rem', {
      //   lineHeight: 'normal',
      //   fontWeight: '900',
      // }],
      'header-link': ['1.5rem', {
        lineHeight: '1.8rem',
        fontWeight: 500
      }],
      'xxl-size': ['3rem', {
        lineHeight: '3.6rem',
        fontWeight: 700
      }],
      'xl-size': ['1.75rem', {
        lineHeight: '2rem',
        fontWeight: 400
      }],
      'md-size': ['1.5rem', {
        lineHeight: '1.8em',
        fontWeight: 400
      }]
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

