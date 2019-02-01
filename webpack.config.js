const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssoWebpackPlugin = require("csso-webpack-plugin").default;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlLayoutPlugin = require("html-layout-plugin");

const path = require("path");
const isProduction = process.env.NODE_ENV === "production" ? true : false;
require("dotenv").config();

const htmlMinifyOpt = {
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true
}

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: [
      "./dev/assets/js/main.js",
      "./dev/assets/less/main.less",
    ]
  },
  output: {
    filename: "assets/[name].[hash].js",
    path: path.resolve(__dirname, "docs")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }, {
        test: /\.(le|c)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  },
  devServer: {
    stats: "errors-only",
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new CleanWebpackPlugin(["docs"]),
    new CopyWebpackPlugin([{ from: "./dev/static/" }]),
    new MiniCssExtractPlugin({ filename: isProduction ? "assets/[name].[hash].css": "[name].css" }),
    new CssoWebpackPlugin(),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./dev/pages/index.html",
      filename: "index.html",
      minify: htmlMinifyOpt
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/common/examples.html",
      filename: "common.html",
      minify: htmlMinifyOpt
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/scene/examples.html",
      filename: "scene.html",
      minify: htmlMinifyOpt
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/grid/examples.html",
      filename: "grid.html",
      minify: htmlMinifyOpt
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/group/examples.html",
      filename: "group.html",
      minify: htmlMinifyOpt
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/icon/examples.html",
      filename: "icon.html",
      minify: htmlMinifyOpt
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/table/examples.html",
      filename: "table.html",
      minify: htmlMinifyOpt
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/wysiwyg/examples.html",
      filename: "wysiwyg.html",
      minify: htmlMinifyOpt
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./dev/pages/404.html",
      filename: "404.html",
      minify: htmlMinifyOpt
    }),
    new HtmlLayoutPlugin()
  ]
}
