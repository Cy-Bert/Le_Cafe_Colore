/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'h1': ['Montserrat','Arial'],
      'h2': ['Assistant','sans-serif'],
      'p': ['Noto Sans','Roboto'],
    },
    extend: {
      colors: {
        'vivid-red': '#FF0018',
        'deep-saffron': '#FFA52C',
        'vivid-yellow': '#FACC15',
        'ao': '#008018',
        'blue-royal': '#0000F9',
        'philippine-violet': '#86007D',
      },
      animation: {
        unicorn: 'unicorn 1s ease forwards'
      },
      keyframes: {
        unicorn : {
          '0%': {
            transform: 'rotate(0deg) translateY(-50px) scale(0.5)',
            opacity: '1',
          },
        
          '100%': {
            transform: 'rotate(360deg) translateY(calc(20vh + 50px)) scale(1.5)',
            opacity: '0',
          }
        }
      }
    },
    plugins: [],
  },
}