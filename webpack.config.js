const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        // contentBase: 'src',
        port: 3000,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            // ... 其它规则
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf)$/,
                loader: 'url-loader'
            }
        ]
    },
}