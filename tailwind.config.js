/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(var(--primary-light) / <alpha-value>)',
          dark: 'rgb(var(--primary-dark) / <alpha-value>)',
          DEFAULT: 'rgb(var(--primary-dark) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--primary-light) / <alpha-value>)',
        }
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

