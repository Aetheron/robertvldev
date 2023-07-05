/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors: {
      gray: {
        '100': '#d0ccd0',
        '200': '#b9b5b9',
        '300': '#a2a0a2',
        '400': '#8c8a8c',
        '500': '#777577',
        '600': '#626162',
        '700': '#4e4d4e',
        '800': '#3b3b3b',
        '900': '#292929',
        DEFAULT: '#777577',
      },
      orange: {
        '100': '#fae1d3',
        '200': '#f4c3a8',
        '300': '#eba47c',
        '400': '#e1854e',
        '500': '#d66400',
        '600': '#9e4800',
        '700': '#6a2e00',
        '800': '#3b1600',
        '900': '#100300',
        DEFAULT: '#d66400',
      },
      transparent: colors.transparent,
      white: colors.white,
      red: colors.red,
      amber: colors.amber,
      yellow: colors.yellow,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
