const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // other PostCSS plugins here
    // ...
    // PurgeCSS plugin here
    //purgecss({
    //  content: ['./**/*.html']
    //})
    require('@fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.svelte'
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      //remover las variables que no se utilizan
      variables: true
    })
  ]
}