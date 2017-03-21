var path = require('path');
var webpack = require('webpack');

var config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }

            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;