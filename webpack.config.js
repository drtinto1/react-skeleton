const isDebug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const babelSettings = {
    presets: ['react', 'es2015'],
    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'react-hot-loader/babel'],
};

const config = {
    context: path.join(__dirname, "src"),
    debug: isDebug,
    devtool: null,
    entry: "./js/client.js",
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?'+JSON.stringify(babelSettings),
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css','sass'])
            }
        ]
    },
    output: {
        path: __dirname + "/src/",
        filename: "client.min.js"
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('development'),
            __DEV__: isDebug
        }),
    ],
};

if (!isDebug) {
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        sourcemap: false,
        compress: {
            warnings: true
        }
    }));
    config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}

module.exports = config;