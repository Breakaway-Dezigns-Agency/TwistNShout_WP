module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily:{
        nav:['Fredoka One'],
        heading: ['Sriracha'],
        sans:['Alef']
      },
      colors:{
        yellow: '#FFBE0B',
        orange: '#FB5607',
        purple: '#FF006E',
        turquoise: '#2CDDCB',
        white: '#F5F5F5',
        black: '#0A0A0A',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    'gatsby-plugin-postcss'
  ],
}
