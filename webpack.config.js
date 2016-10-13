const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const appSrcDirectory = __dirname + "/frontend-src";

module.exports = {
    context: appSrcDirectory,

    // devtool: 'source-map',
    // debug: true,

    entry: {
        'styles': './assets/css/main.less',
        'app': './bootstrap.ts',
        'polyfills':  './polyfills.ts'
    },
    output: {
        path: __dirname + '/web/assets/compiled',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/},
            {test: /\.html$/, loaders: ['raw-loader']},
            {test: /\.less$/, loader: ExtractTextPlugin.extract("style", "css!less-loader"), exclude: /frontend-src\/app/},
            {test: /frontend-src\/app\/.+\.less$/,  loader: "raw-loader!less-loader"},
            {test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/, loader: 'url-loader'}
        ]
    },

    resolve: {
        root: appSrcDirectory,
        extensions: ["", ".webpack.js", ".web.js", ".js", '.ts']
    },

    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
            __IS_PROD_MODE__: false
        })
    ]
};