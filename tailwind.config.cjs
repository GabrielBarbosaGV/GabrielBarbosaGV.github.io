const { sm, md, lg, xl } = require('tailwindcss/defaultTheme').screens;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {},
    screens: {
      sm,
      fold: '700px',
      md,
      lg,
      xl
    }
  },
  plugins: [],
}
