let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let ngtools = require('@ngtools/webpack');
let wpc = require('./config/webpack');
let wp = {};
let plugins = [
    new webpack.optimize.UglifyJsPlugin({
        mangle: {
            keep_fnames: true
        }
    })
];
Object.assign(wp, wpc(__dirname, path));
wp.plugins = plugins.concat(wp.plugins);
//官网的指导地址 https://angular.io/guide/webpack#plugins
module.exports = wp;