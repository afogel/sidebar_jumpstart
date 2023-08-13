const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    colors: {
      primary: colors.blue,
      secondary: colors.emerald,
      tertiary: colors.indigo,
      danger: colors.red,
      neutral: colors.gray,
      alert: colors.yellow,
      "code-400": "#fefcf9",
      "code-600": "#3c455b",
    },
  }
}
