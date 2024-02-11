/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
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
    colors: {
      ...colors,
      background: 'rgb(30 41 59)',
      text: 'rgb(255 255 255)'
    },
    fontFamily: {
      body: ['Teko', 'sans-serif']
    }
  },
  
  plugins: [],
}

