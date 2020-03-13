const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins


module.exports = {
    entry: {
        app: './src/App.tsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    mode: process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/, loader: 'ts-loader'
            },
            {
                test: /(\.scss|\.css)$/, use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.less$/, use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            modifyVars: {
                                'primary-color': '#1DA57A',
                                'link-color': '#1DA57A',
                                'border-radius-base': '2px',
                                // or
                                // 'hack': `true; @import "your-less-file-path.less";`, // Override with less file
                            },
                            javascriptEnabled: true,
                        },

                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: './public/index.html'}),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    // cacheGroupKey here is `commons` as the key of the cacheGroup
                    name(module, chunks, cacheGroupKey) {
                        const moduleFileName = module.identifier().split('/').reduceRight(item => item);
                        const allChunksNames = chunks.map((item) => item.name).join('~');
                        return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
                    },
                    chunks: 'all'
                }
            }
        }
    }
}