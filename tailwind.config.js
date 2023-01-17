const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'Jost': ['Jost', ...defaultTheme.fontFamily.sans],
        'Parisienne': ['Parisienne', ...defaultTheme.fontFamily.serif, 'cursive'],
        'Mrs Saint Delafield': ['Mrs Saint Delafield', ...defaultTheme.fontFamily.serif, 'cursive']
      }
    }
  }
}
