var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ngtools = require('@ngtools/webpack');
let wpc = require('./config/webpack');
let wp = {};
let plugins = [];
Object.assign(wp, wpc(__dirname, path));
wp.plugins = plugins.concat(wp.plugins);
//官网的指导地址 https://angular.io/guide/webpack#plugins
module.exports = wp;