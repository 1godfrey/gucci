module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Granjon',
    },
    container: {
      padding: {
        DEFAULT: '0',        
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',

      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.svg')",
      },
    },
  },
  plugins: [],
};
