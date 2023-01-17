const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'Jost': ['Jost', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
