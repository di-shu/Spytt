module.exports = {
  rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/
    }
  ]
}
