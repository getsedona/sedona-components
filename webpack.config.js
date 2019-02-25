require("dotenv").config();

const pkg = require("./package.json");
const path = require("path");
const isProduction = process.env.NODE_ENV === "production" ? true : false;

const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlLayoutPlugin = require("html-layout-plugin");

const htmlMinifyConfig = {
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  decodeEntities: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: [
      "./dev/assets/js/main.js",
      "./dev/assets/less/main.less",
    ],
  },
  output: {
    filename: "assets/[name].[contenthash].js",
    path: path.resolve(__dirname, "docs"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      }, {
        test: /\.(le|c)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
  stats: "errors-only",
  devServer: {
    stats: "errors-only",
    host: process.env.HOST,
    port: process.env.PORT,
  },
  plugins: [
    new CleanWebpackPlugin(["docs"]),
    new CopyWebpackPlugin([{ from: "./dev/static/" }]),
    new MiniCssExtractPlugin({ filename: isProduction ? "assets/[name].[contenthash].css": "[name].css" }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./dev/pages/index.html",
      filename: "index.html",
      minify: isProduction ? htmlMinifyConfig : false,
      version: pkg.version,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/base/examples.html",
      filename: "base.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/header/examples.html",
      filename: "header.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/scene/examples.html",
      filename: "scene.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/grid/examples.html",
      filename: "grid.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/group/examples.html",
      filename: "group.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/card/examples.html",
      filename: "card.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/feature/examples.html",
      filename: "feature.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/form/examples.html",
      filename: "form.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/icon/examples.html",
      filename: "icon.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/table/examples.html",
      filename: "table.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/wysiwyg/examples.html",
      filename: "wysiwyg.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./dev/pages/404.html",
      filename: "404.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./dev/pages/tests.html",
      filename: "tests.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlLayoutPlugin(),
  ],
};
