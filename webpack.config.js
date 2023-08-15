const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    mode: 'development',
        module: {
            rules: [{
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }]
        },
        plugins: [htmlPlugin],
        devServer: {
            static : {
                publicPath: '/build',
                directory: path.resolve(__dirname, 'build'),
            },
            proxy: {
                '/api': 'http://localhost:3000'
            }
        }
};
