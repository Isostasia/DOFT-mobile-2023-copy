//Importing default theme settings of TailwindCSS
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')

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
    require('@tailwindcss/forms')({
      strategy: 'base' //only generate global styles
    }),
    plugin(function({ addComponents }) {
      addComponents({
        '.input-mobile': {
          appearance: 'none',
          padding: '.375rem .75rem',
          border: 'none',
          borderRadius: '.375rem',
          backgroundColor: '#fff',
          transition: 'border-color .15s ease-in-out'
        },
        '.btn-mobile': {
          width: '50px',
          height: '33px',
          backgroundColor: 'transparent',
          border: '1px solid #d1d5db',
          borderRadius: '.375rem'
        },
      })
    }),
  ],
}
