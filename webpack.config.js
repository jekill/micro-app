const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const appSrcDirectory = __dirname + "/frontend-src";

module.exports = {
    context: appSrcDirectory,
    entry: {
        'styles': './assets/css/main.less'
    },
    output: {
        path: __dirname + '/web/assets/compiled',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,  loader: ExtractTextPlugin.extract("style","css!less-loader")
            },
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url-loader'
            }

        ]
    },

    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};