const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        publicPath: '/static/',
        filename: 'js/index.[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader'}
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/static/',
                        }
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/index[hash].css'
        }),
        new HtmlWebpackPlugin({
                title: 'Brands Service',
                filename: 'index.html',
                template: 'base.html',
                inject: true
            }
        ),
    ],
};