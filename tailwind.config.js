/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'primary':'blue',
        'secondary':'#f3f5ff',
        'light':'#f9faff'
      },
    },
  },
  plugins: [],
}

