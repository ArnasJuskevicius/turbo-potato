const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    context: __dirname + "/app",

    entry: {
        javascript: "./src/App.jsx",
        html: "../static/index.html",
    },

    output: {
        filename: "app.js",
        path: __dirname + "static/dist",
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        root: path.resolve(__dirname, './app/src'),
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader"],
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader'),
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions'],
        }),
    ],
};