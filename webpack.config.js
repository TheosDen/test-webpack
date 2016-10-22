const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/frontend',

    entry: {
        app: './app'
    },
    output: {
        path: __dirname + "/public/js",
        publicPath: '/js/',
        filename: "[name].js",
        library: '[name]'
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 200
    },

    devtool: "eval",

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // don't show unreachable variables etc
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}