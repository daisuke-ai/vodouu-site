/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white': {
          100: '#ffffff',
          200: '#f8f8f8',
          300: '#f0f0f0',
          400: '#e8e8e8',
          500: '#e0e0e0',
        },
        'black': {
          100: '#d1d1d1',
          200: '#a3a3a3',
          300: '#757575',
          400: '#474747',
          500: '#1a1a1a',
          600: '#000000',
        },
      },
    },
  },
  plugins: [],
};