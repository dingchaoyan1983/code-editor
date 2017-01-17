import Faker from 'faker';
import {PROJECT, FOLDER, FILE, EXTENTION_JAVA, EXTENTOION_JAVASCRIPT} from '../constants';

const types = [FOLDER, FILE];
const extentionTypes = [EXTENTION_JAVA, EXTENTOION_JAVASCRIPT];

function contributors() {
    const contributors = [];

    for(let i = 0; i < Faker.random.number({min: 1, max: 5}); i++) {
        contributors.push([Faker.name.lastName(), Faker.name.firstName()].join('.'));
    }

    return contributors;
}

function project() {
    return {
        id: Faker.random.uuid(),
        name: Faker.random.word(),
        description: Faker.random.words(Faker.random.number({min: 15, max: 25})),
        contributors: contributors(),
        createTime: Faker.date.recent(200),
        type: PROJECT
    };
}

function projectList() {
    let arr = [];

    for(let i = 0; i < Faker.random.number({min: 2, max: 5}); i++) {
        arr.push(project());
    }

    return arr;
}

function folderList(count = Faker.random.number({min: 10, max: 15})) {
    const arr = [];

    for(let i =0; i < count; i++){
        let o = {
            type: types[parseInt(Math.random() * 100 % types.length)],
            modifiedBy: [Faker.name.lastName(), Faker.name.firstName()].join('.'),
            modifiedTime: Faker.date.recent(200)
        }

        if(o.type === FOLDER) {
            o.name = Faker.random.word()
        } else {
            o.name = Faker.random.word() + '.' + extentionTypes[parseInt(Math.random() * 100 % extentionTypes.length)]
        }

        arr.push(o);
    }

    return arr.sort(function(a, b) {
        return a.type < b.type
    });
}

function fileContent(extname) {
    let content = '';

    if(extname === `.${EXTENTION_JAVA}`) {
          content = `var webpack = require('webpack');
                    var HtmlWebpackPlugin = require('html-webpack-plugin');
                    var CleanWebpackPlugin = require('clean-webpack-plugin');
                    var ExtractTextPlugin = require('extract-text-webpack-plugin');
                    var path = require('path');
                    var autoprefixer = require('autoprefixer');
                    var src = 'src';
                    var dist = 'dist';
                    var cssLoader = 'css?sourceMap&-minimize';

                    if (process.env.NODE_ENV === 'production') {
                    cssLoader = 'css?-sourceMap&minimize';
                    }

                    var config = {
                    devtool: 'cheap-module-source-map',
                    entry: {
                        app: path.join(__dirname, src, 'index.js'),
                        vendor: ['react', 'react-dom']
                    },
                    output: {
                        path: path.join(__dirname, dist),
                        filename: '[name].[hash].js',
                        pathinfo: true
                    },
                    resolve: {
                        root: path.resolve(__dirname)
                    },
                    module: {
                        loaders: [
                        {
                            test: /\.(js|jsx)$/,
                            loader: 'babel',
                            exclude: /(node_modules|bower_components)/,
                            query: {
                            cacheDirectory: true
                            }
                        }, {
                            test: /\.css$/,
                            loader: ExtractTextPlugin.extract('style', cssLoader + '!postcss')
                        }, {
                            test: /\.scss$/,
                            loader: ExtractTextPlugin.extract('style', cssLoader + '!postcss!sass')
                        },
                        { 
                            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
                            loader: 'url-loader?limit=50000&name=[path][name].[ext]'
                        }
                        ]
                    },
                    postcss: [autoprefixer({browsers: ['last 2 versions']})],
                    debug: true,
                    plugins: [
                        new HtmlWebpackPlugin({
                        template: path.join(__dirname, src, 'index.html'),
                        hash: false,
                        filename: 'index.html',
                        inject: 'body',
                        minify: {
                            collapseWhitespace: false
                        }
                        }),
                        new CleanWebpackPlugin([path.join(__dirname, dist)]),
                        new webpack.optimize.CommonsChunkPlugin({names: ['vendor']}),
                        new webpack.optimize.OccurrenceOrderPlugin(),
                        new webpack.optimize.DedupePlugin(),
                        new webpack.DefinePlugin({
                        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
                        }),
                        new webpack.HotModuleReplacementPlugin(),
                        new ExtractTextPlugin('[name].[hash].css')
                    ],
                    devServer: {
                        inline: true,
                        hot: true
                    }
                    };

                    if (process.env.NODE_ENV === 'production') {
                    config.output.filename = '[name].min.js';
                    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
                        compress: {
                        unused: true,
                        dead_code: true,
                        warnings: false
                        },
                        sourceMap: false,
                        comments: false
                    }));
                    }

                    module.exports = config;
        `
    }else if (extname === `.${EXTENTOION_JAVASCRIPT}`) {
        content = `var webpack = require('webpack');
                    var HtmlWebpackPlugin = require('html-webpack-plugin');
                    var CleanWebpackPlugin = require('clean-webpack-plugin');
                    var ExtractTextPlugin = require('extract-text-webpack-plugin');
                    var path = require('path');
                    var autoprefixer = require('autoprefixer');
                    var src = 'src';
                    var dist = 'dist';
                    var cssLoader = 'css?sourceMap&-minimize';

                    if (process.env.NODE_ENV === 'production') {
                    cssLoader = 'css?-sourceMap&minimize';
                    }

                    var config = {
                    devtool: 'cheap-module-source-map',
                    entry: {
                        app: path.join(__dirname, src, 'index.js'),
                        vendor: ['react', 'react-dom']
                    },
                    output: {
                        path: path.join(__dirname, dist),
                        filename: '[name].[hash].js',
                        pathinfo: true
                    },
                    resolve: {
                        root: path.resolve(__dirname)
                    },
                    module: {
                        loaders: [
                        {
                            test: /\.(js|jsx)$/,
                            loader: 'babel',
                            exclude: /(node_modules|bower_components)/,
                            query: {
                            cacheDirectory: true
                            }
                        }, {
                            test: /\.css$/,
                            loader: ExtractTextPlugin.extract('style', cssLoader + '!postcss')
                        }, {
                            test: /\.scss$/,
                            loader: ExtractTextPlugin.extract('style', cssLoader + '!postcss!sass')
                        },
                        { 
                            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
                            loader: 'url-loader?limit=50000&name=[path][name].[ext]'
                        }
                        ]
                    },
                    postcss: [autoprefixer({browsers: ['last 2 versions']})],
                    debug: true,
                    plugins: [
                        new HtmlWebpackPlugin({
                        template: path.join(__dirname, src, 'index.html'),
                        hash: false,
                        filename: 'index.html',
                        inject: 'body',
                        minify: {
                            collapseWhitespace: false
                        }
                        }),
                        new CleanWebpackPlugin([path.join(__dirname, dist)]),
                        new webpack.optimize.CommonsChunkPlugin({names: ['vendor']}),
                        new webpack.optimize.OccurrenceOrderPlugin(),
                        new webpack.optimize.DedupePlugin(),
                        new webpack.DefinePlugin({
                        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
                        }),
                        new webpack.HotModuleReplacementPlugin(),
                        new ExtractTextPlugin('[name].[hash].css')
                    ],
                    devServer: {
                        inline: true,
                        hot: true
                    }
                    };

                    if (process.env.NODE_ENV === 'production') {
                    config.output.filename = '[name].min.js';
                    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
                        compress: {
                        unused: true,
                        dead_code: true,
                        warnings: false
                        },
                        sourceMap: false,
                        comments: false
                    }));
                    }

                    module.exports = config;
        `
    } else {
        content = `var webpack = require('webpack');
                    var HtmlWebpackPlugin = require('html-webpack-plugin');
                    var CleanWebpackPlugin = require('clean-webpack-plugin');
                    var ExtractTextPlugin = require('extract-text-webpack-plugin');
                    var path = require('path');
                    var autoprefixer = require('autoprefixer');
                    var src = 'src';
                    var dist = 'dist';
                    var cssLoader = 'css?sourceMap&-minimize';

                    if (process.env.NODE_ENV === 'production') {
                    cssLoader = 'css?-sourceMap&minimize';
                    }

                    var config = {
                    devtool: 'cheap-module-source-map',
                    entry: {
                        app: path.join(__dirname, src, 'index.js'),
                        vendor: ['react', 'react-dom']
                    },
                    output: {
                        path: path.join(__dirname, dist),
                        filename: '[name].[hash].js',
                        pathinfo: true
                    },
                    resolve: {
                        root: path.resolve(__dirname)
                    },
                    module: {
                        loaders: [
                        {
                            test: /\.(js|jsx)$/,
                            loader: 'babel',
                            exclude: /(node_modules|bower_components)/,
                            query: {
                            cacheDirectory: true
                            }
                        }, {
                            test: /\.css$/,
                            loader: ExtractTextPlugin.extract('style', cssLoader + '!postcss')
                        }, {
                            test: /\.scss$/,
                            loader: ExtractTextPlugin.extract('style', cssLoader + '!postcss!sass')
                        },
                        { 
                            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
                            loader: 'url-loader?limit=50000&name=[path][name].[ext]'
                        }
                        ]
                    },
                    postcss: [autoprefixer({browsers: ['last 2 versions']})],
                    debug: true,
                    plugins: [
                        new HtmlWebpackPlugin({
                        template: path.join(__dirname, src, 'index.html'),
                        hash: false,
                        filename: 'index.html',
                        inject: 'body',
                        minify: {
                            collapseWhitespace: false
                        }
                        }),
                        new CleanWebpackPlugin([path.join(__dirname, dist)]),
                        new webpack.optimize.CommonsChunkPlugin({names: ['vendor']}),
                        new webpack.optimize.OccurrenceOrderPlugin(),
                        new webpack.optimize.DedupePlugin(),
                        new webpack.DefinePlugin({
                        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
                        }),
                        new webpack.HotModuleReplacementPlugin(),
                        new ExtractTextPlugin('[name].[hash].css')
                    ],
                    devServer: {
                        inline: true,
                        hot: true
                    }
                    };

                    if (process.env.NODE_ENV === 'production') {
                    config.output.filename = '[name].min.js';
                    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
                        compress: {
                        unused: true,
                        dead_code: true,
                        warnings: false
                        },
                        sourceMap: false,
                        comments: false
                    }));
                    }

                    module.exports = config;
        `
    }

    return content;
}

export default {
    project,
    projectList,
    folderList,
    fileContent
}
