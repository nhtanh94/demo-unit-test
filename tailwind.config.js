const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '0rem'
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#1A76E3',
        gray_200: '#E5E7EB'
      },
      lineHeight: {
        '15': '15px',
        '17': '17px',
        '19': '19px',
        '29': '29px',
        '44': '44px',
        '22': "22px",
      }
    },
    screens: {
      'xs': '480px',
      'sm': '600px',
      'md': '782px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    }
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')],
};
