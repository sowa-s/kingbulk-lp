/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'primary': '#896E44',
      'white': 'white',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#1C1A1A',
      'gray': '#292626',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [],
}
