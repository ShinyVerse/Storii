const path = require("path");
const webpack = require("webpack");
// const Dotenv = require("dotenv-webpack");
require("dotenv").config();

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devtool: false,
  performance: {
    hints: false,
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: __dirname + "/",
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        STORII_SERVER_URL: JSON.stringify(process.env.STORII_SERVER_URL),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader?name=dist/images/[name].[ext]",
      },
    ],
  },
};
