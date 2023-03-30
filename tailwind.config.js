const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js, ts, jsx, tsx}',
    './src/components/**/*.{js, ts, jsx, tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'navbar-gray': '#70738A',
        'dark-blue': '#1F3D8C',
        'soft-gray': '#70738A'
      },
      fontFamily: {
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
        'serif': ['"Exo 2"', ...defaultTheme.fontFamily.serif]
      }
    }
  },
  plugins: []
};
