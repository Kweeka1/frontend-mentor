/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ubuntu: ['ubuntu', 'sans-serif'],
      'ubuntu-md': ['ubuntu-md', 'sans-serif'],
      'ubuntu-bd': ['ubuntu-bd', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

