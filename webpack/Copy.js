const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = () => new CopyWebpackPlugin([
  { from: './src/fonts', to: '../dist/fonts' },
  { from: './src/favicon.ico', to: '../dist/favicon.ico' },
  { from: './src/img', to: '../dist/img' }
])
