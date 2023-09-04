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
      padding: '20px',
      center: true,
      screens: {
        '2xl': '1280px'
      },
    },
    fontSize: {
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
      }],
      'mob-xxl-size': ['2.25rem', {
        lineHeight: '3.6rem',
        fontWeight: 700
      }],
      'mob-xl-size': ['1.5rem', {
        lineHeight: '2rem',
        fontWeight: 400
      }],
      'mob-md-size': ['1.5rem', {
        lineHeight: '1.12em',
        fontWeight: 400
      }]
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

