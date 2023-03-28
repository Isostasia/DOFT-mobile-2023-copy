//Importing default theme settings of TailwindCSS
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  extend: {
    //Override, sobreescribir la funte por defecto en las propiedades de Tailwind con nuestra propia fuente
    fontFamily: {
      sans: ['Tajawal', ...defaultTheme.fontFamily.sans]
    }
  },
  //Adding minimal styling to forms
  plugins: [
    require('@tailwindcss/forms')
  ],
}
