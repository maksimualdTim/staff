/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter-variable", 'sans-serif'],
      },
      spacing: {
        '8.5': '34px',  // Кастомное значение для расстояний
      },
    },
  },
  plugins: [],
}

