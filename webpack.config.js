const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: "./home",
    output: {
        // path: __dirname + "/dist",
        filename: "bundle.js",
        library: 'home'
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 200
    },

    devtool: "source-map",

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