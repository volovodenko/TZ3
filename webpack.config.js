'use strict';
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const {CheckerPlugin} = require('awesome-typescript-loader');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

const devMode = process.env.NODE_ENV !== 'production';
const publicPath = '/';

dotenv.config();

module.exports = {

    context: __dirname,  //The base directory, an absolute path, for resolving entry points and loaders from configuration

    devtool: devMode ? 'cheap-module-eval-source-map' : false, //This option controls if and how source maps are generated

    mode: devMode ? 'development' : 'production',

    // Configure how performance hints are shown. For example if you have an asset that is over 250kb,
    // webpack will emit a warning notifying you of this.
    performance: {
        assetFilter: function (assetFilename) { //применяеться фильтр только для файлов js
            return assetFilename.endsWith('.ts');
        },
        hints: false
    },


    entry: [ //The point or points to enter the application
        './src/index',
    ],

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.jsx'],

        alias: {
            'src': path.resolve(__dirname, './src'),
        },
    },

    output: {
        filename: 'static/js/[name].js',
        publicPath: publicPath,
        path: path.resolve(__dirname, 'public'),
    },

    watch: devMode, //Turn on watch mode.


    //for production mode
    stats: {
        children: false,
        entrypoints: false,
        modules: false,
    },


    //webpack-dev-server configuration
    devServer: {
        open: true, //When open is enabled, the dev server will open the browser.
        contentBase: path.resolve(__dirname, 'src'),
        port: 3000,
        hot: true, //Enable Hot Module Replacement
        overlay: true, //Виводить помилки в браузер
        noInfo: true,

    },

    module: { //These options determine how the different types of modules within a project will be treated
        rules: [

            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    },
                    {
                        loader: 'tslint-loader'
                    }
                ]
            },

            {
                test: /\.s?[ac]ss$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules'),
                ],
                use: [
                    //Style-loader нужен для инжекта стилей в head
                    //Adds CSS to the DOM by injecting a <style> tag
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,


                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            minimize: !devMode,
                            modules: true,
                            localIdentName: '[local]__[hash:base64:5]'
                        }
                    },

                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [

                                autoprefixer({
                                    browsers: [
                                        '>5%',
                                        'last 2 versions',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],


                                }),


                            ]
                        }

                    },

                    'sass-loader'
                ]
            },

            {
                test: /\.jpe?g|png|svg$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/images/[name].[ext]',
                    }
                }
            }
        ]
    },

    optimization: {
        minimizer: [
            //A Webpack plugin to optimize/minimize CSS assets.
            new OptimizeCssAssetsPlugin({})
        ]
    },

    plugins: [

        //экспорт стилей из js в отдельный файл
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].css',
            // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),


        new CleanWebpackPlugin(['public/static'], {dry: devMode, verbose: !devMode}),

        // `CheckerPlugin` is optional. Use it if you want async error reporting.
        new CheckerPlugin(),

        //The DefinePlugin allows you to create global constants which can be configured at compile time.
        new webpack.DefinePlugin({
            "process.env": {
                APP_ENV: JSON.stringify(process.env.APP_ENV),
                APP_PORT: JSON.stringify(process.env.APP_PORT),
                APP_URL: JSON.stringify(process.env.APP_URL),

                CLIENT_ID: JSON.stringify(process.env.CLIENT_ID),
                CLIENT_SECRET: JSON.stringify(process.env.CLIENT_SECRET)
            }
        }),
    ]

};