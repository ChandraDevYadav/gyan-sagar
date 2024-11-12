/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f16126',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // rotateReverse: {
        //   '0%': { transform: 'rotate(0deg)' },
        //   '100%': { transform: 'rotate(-360deg)' },
        // },
      },
      animation: {
        rotate: 'rotate 1s linear infinite',
        rotateReverse: 'rotate 1s linear infinite',
      },
    },
  },
  plugins: [],
}