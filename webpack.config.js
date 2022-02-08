const path = require('path');
const webpack = require('webpack');
const refreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'bottom-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client']
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets:{
                            browsers: ['> 5% in KR'] //browserslist
                        },
                        debug: true
                    }], 
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
            }
        }]
    }, // 적용
    target: ['web','es5'],
    plugins: [
        new refreshWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({debug: true})
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/', 
    }, // 출력

    devServer: {
        devMiddleware: {publicPath: '/dist/'}, //생성해주는 경로
        static: {directory: path.resolve(__dirname)}, //실제 경로
        hot: true
    }
}