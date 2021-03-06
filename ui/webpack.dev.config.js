const {resolve} = require('path');
const webpack = require('webpack');
// const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.config.js');

module.exports = {
    context: resolve(__dirname, 'src'),
    resolve: {
        alias: {
            // Sets Alias names for routes to use in import statements
            'Utils': resolve(__dirname, 'src/utils/'),
            'Components': resolve(__dirname, 'src/components/'),
            'StyleGuide': resolve(__dirname, 'src/components/StyleGuide/'),
            'Actions': resolve(__dirname, 'src/actions/'),
            'Api': resolve(__dirname, 'src/api/'),
            'Images': resolve(__dirname, 'src/images/'),
            'Reducers': resolve(__dirname, 'src/reducers/')
        }
    },
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading only- means to only hot reload for
        // successful updates

        './index.js'
        // the entry point of our app
    ],
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: resolve(__dirname),
        // match the output path

        publicPath: '/'
        // match the output `publicPath`
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader" // translates CSS into CommonJS
                        }, {
                            loader: "sass-loader" // compiles Sass to CSS
                        }
                    ],
                    fallback: "style-loader" // used when css not extracted
                }))
            }, {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new ExtractTextPlugin({filename: 'styles.css', allChunks: true})
    ]
};