const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main-[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
}