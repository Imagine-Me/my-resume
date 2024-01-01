/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      lineHeight: {
        h1: '48px'
      },
      fontSize: {
        base: '',
        '4xl': '38px',
      }
    },
  },
  plugins: [],
}

