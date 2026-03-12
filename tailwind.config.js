/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%, 30%': { transform: 'translateY(0%)' },
          '33%, 63%': { transform: 'translateY(-100%)' },
          '66%, 96%': { transform: 'translateY(-200%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        slide: 'slide 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}