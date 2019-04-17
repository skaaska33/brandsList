const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'static/'),
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
        use: ['style-loader', 'css-loader'],
      },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
                title: 'Brands Service',
                filename: 'index.html',
                template: 'base.html',
                inject: true
            }
        )
    ],
};