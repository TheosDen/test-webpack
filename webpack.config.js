const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/frontend',

    entry: {
        common: './common',
        home: './home',
        about: './about'
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js",
        library: '[name]'
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 200
    },

    devtool: "eval",
    // devtool: "source-map",

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