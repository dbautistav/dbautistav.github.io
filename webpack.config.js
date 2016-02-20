var webpack = require("webpack");

var config = {
    context: __dirname + "/app",
    entry: "./main.js",
    output: {
        path: __dirname + "/app",
        filename: "app.js"
    },

    plugins: [],

    module: {
        loaders: [
            { test: /\.js$/, loader: "ng-annotate!babel", exclude: /node_modules/ },
            { test: /\.html$/, loader: "raw", exclude: /node_modules/ }
        ]
    }
};

if (process.env.NODE_ENV === "production") {
    config.output.path = __dirname + "/dist";
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.devtool = "source-map";
}

module.exports = config;
