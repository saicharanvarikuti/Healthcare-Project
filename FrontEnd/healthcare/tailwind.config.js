/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'mali':['mali'],
        'varela-round':['varela-round'],
        'inter':['inter'],
        'merriweather':['merriweather']
      },
      colors: {
        'whistler-green':'#12A721',
        'special-gray':'#666666',
        'whistler-blue':'#152232',
        'gredient-green':'#effff0',
        'subscribe-gray':'#585858',
        'subscribe-input':'#D9D9D9'
      },
      lineHeight: {
        'tight': '1.25',
        'normal': '1.5',
        'relaxed': '1.75',
        'loose': '2',
        'extraloose':'3'
      }
  },
  plugins: [],
}}