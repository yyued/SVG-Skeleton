'use strict';

const path = require('path');
const webpack = require('webpack');
const fs = require('fs-extra');

const util = require('./util');
const packageJSON = require('../package.json');

const distFileName = 'svg-skeleton.min.js';

const banner = `
SVG-Skeleton

@file: [file]
@author: ${ packageJSON.author }
@version: ${ packageJSON.version }
@update: ${ ( new Date() ).format('YYYY-MM-DD hh:mm:ss') }

(c) 2018 YY UEDC
Released under the MIT License.
`;

const extensions = [ '.js', '.vue', '.tpl', '.sass', '.scss', '.ts', '.tsx', '.json', '.jpg', '.jpeg', '.png', '.gif' ];

const configuration = {
    entry: {
        'SVGSkeleton': './src/index.js',
    },
    output: {
        path: path.resolve( __dirname, '../dist' ),
        filename: distFileName,
        libraryTarget: 'umd',
        // global window object name
        library: 'SVGSkeleton',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['env', {
                            targets: {
                                browsers: [
                                    'last 2 versions',
                                    'safari >= 8',
                                ],
                            }
                        }],
                        'stage-0',
                    ],
                },
                exclude: [
                    path.resolve( __dirname, '../node_modules' ),
                ],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'css-to-string-loader',
                    'css-loader',
                    'autoprefixer-loader',
                    'sass-loader',
                ],
                exclude: [
                    path.resolve( __dirname, '../node_modules' ),
                ],
            },
            {
                test: /\.tpl$/,
                loader: 'tmodjs-loader',
                exclude: [
                    path.resolve( __dirname, '../node_modules' ),
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                exclude: /\.raw\.svg/,
                loader: require.resolve('url-loader'),
                query: {
                    limit: 1024 * 1024 * 100,
                },
                exclude: [
                    path.resolve( __dirname, '../node_modules' ),
                ],
            },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                unused: false,
            },
            output: {
                comments: false,
            },
            mangle: {
                except: [ '$' ],
            },
            minimize : true,
            sourceMap: false,
        }),
        new webpack.BannerPlugin({
            banner: banner.replace(/^\s+|\s+$/g, ''),
        }),
    ],
    resolve: {
        extensions,
    },
}

const distFile = path.resolve( __dirname, `../dist/${ distFileName }` );
const testFolder = path.resolve( __dirname, `../__test__` );
const testFile = `${ testFolder }/src/assets/${ distFileName }`;

webpack( configuration, ( err, stats ) => {
    if ( err ) throw err;

    const success = ( ) => {
        console.info( '[build success]' );
    }

    if ( fs.existsSync( testFolder ) ) {
        fs.copy( distFile, testFile ).then(() => {
            success();
        })
    }
    else {
        success();
    }
});
