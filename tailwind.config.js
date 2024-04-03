/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl' : '1200px'
    },
    extend: {
      colors: {
        primary: '#F51767',
        secondary: '#4C0FFB',
        lightBlue: '#9BF9FF',
        neutralGray: '#373F49',
        teal: '#F6F6FB'
      }
    },
  },
  plugins: [],
}

