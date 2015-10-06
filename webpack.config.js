/**
 * Created by aregbede on 18/07/2015.
 */

var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var build_dir = path.resolve(__dirname,'public/build');

var commonsPlugin =
    new webpack.optimize.CommonsChunkPlugin('vendors','common.js');


var config = {
    devtool: 'eval',
    entry: {

        index :[
            'webpack/hot/dev-server',
            './public/index.js'
        ],
        vendors: ['react','react-router']
    },
    output: {
        path: build_dir,
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: [node_modules_dir],// A regexp to test the require path. accepts either js or jsx
            loaders: ['react-hot','babel-loader?stage=0'] // The module to load. "babel" is short for "babel-loader"
        },
            {
                test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
                loaders: ['react-hot','babel-loader?stage=0'] // The module to load. "babel" is short for "babel-loader"
            },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|ttf|woff|jpg|jpeg)$/, loader: 'file-loader?limit=300000' }
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee','.jsx','.css']
    },
    plugins: [
        commonsPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;