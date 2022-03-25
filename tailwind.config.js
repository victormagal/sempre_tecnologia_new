const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js, ts, jsx, tsx}",
    "./src/components/**/*.{js, ts, jsx, tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#7A9192',
        'custom-purple': '#9E61A4',
        'soft-green': '#77C8D2'
      },
      fontFamily: {
        'sans': ['Fauna One', ...defaultTheme.fontFamily.sans],
        'serif': ['PT Sans', ...defaultTheme.fontFamily.serif]
      },
      spacing: {
        '112': '28rem'
      }
    },
  },
  plugins: [],
}
