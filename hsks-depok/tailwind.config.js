/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl':['64px','68px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors:{
        "primary": "#1A69F0",
        "secondary": "#3D84FF",
        "green": "#30CD8C",
        "blue-soft":"#ECF7FF",
        "blue-strong-500":"#003797",
        "blue-soft-500":"#0175C5",
        "blue-opacity":"#3D78BC",
        "cream":"#E5EEFD"  
      },
      screens:{
        'xl' : '1220px',
        "wide":"1440px",
      },
    },
  },
  plugins: [],
}

