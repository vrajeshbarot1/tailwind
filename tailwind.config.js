module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  plugins: [
    require("tailwindcss-nested-groups"),
    require("@tailwindcss/line-clamp") 
  ],
  theme: {
    groupLevel: 10,
    groupScope: "scope",
    groupVariants: ["hover", "focus"],
    extend: {
      fontFamily: {
        'Playfair': ["'Playfair Display', serif"],
      },
      fontSize: {
        '5xl': '2.5rem'
      },
      colors: {
        'green': {
          100: '#E7F2ED',
          200: '#D0D0A7',
          300: '#808013',
          500: '#04282D',
          600: '#a3b6b3',
          700: 'rgba(4, 40, 45, 0.3)'
        },
        'yellow': {
          100:'#F2F2E6'
        },
        'orange': {
          100: '#F8A488'
        },
        'blue': {
          400: '#0B8497',
          800: '#141C13'
        },
        'grey': {
          100: '#777777',
          200: 'rgba(0,0,0,.5)',
          300: 'rgba(255,255,255,.3)'
        },
        'overlay': {
          100: 'rgba(0,0,0,.7)'
        },
      }
    },
  }
}
