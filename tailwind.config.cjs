//Importando las propiedades por defecto de Tailwind
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      light: {
        primary: '#f8f9fa',
        piedra: '#ced4da',
        white: '#fff'
      },
      dark: {
        primary: '#212529',
        black: '#000'
      }

    },
    extend: {
      //Override, sobreescribir la funte por defecto en las propiedades de Tailwind con nuestra propia fuente
      fontFamily: {
        sans: ['Tajawal', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  }
}
