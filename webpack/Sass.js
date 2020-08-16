const path = require('path')
const CssNano = require('cssnano')
const AutoPreFixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  rules: [
    {
      test: /\.(sass|scss)$/,
      include: path.resolve(__dirname, '../src/scss'),
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {}
        },
        {
          loader: 'css-loader',
          options: { sourceMap: true, url: false }
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            sourceMap: true,
            plugins: () => [
              AutoPreFixer(),
              CssNano({
                preset: ['default', { discardComments: { removeAll: true } }]
              })
            ]
          }
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }
  ]
}
