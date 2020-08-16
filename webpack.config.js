const glob = require('glob')
const path = require('path')
const JsPlugins = require('./webpack/Js')
const CssPlugins = require('./webpack/Css')
const SassPlugins = require('./webpack/Sass')
const CopyPlugins = require('./webpack/Copy')
const CleanPlugins = require('./webpack/Clean')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let pages = glob.sync(__dirname + '/src/pages/*.pug')

let files = pages.map(file => {
    let base = path.basename(file, '.pug')

    return new HtmlWebpackPlugin({
        inject: true,
        filename: './' + base + '.html',
        template: './src/pages/' + base + '.pug'
    })
})

module.exports = {
    mode: 'production',
    output: { filename: './js/bundle.js' },
    entry: ['./src/js/app.js', './src/scss/main.scss'],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            JsPlugins,
            SassPlugins
        ]
    },
    plugins: [
        CleanPlugins(),
        CssPlugins(),
        CopyPlugins(),
        ...files
    ],
    node: {
        fs: 'empty'
    }
}
