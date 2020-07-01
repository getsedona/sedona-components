require("dotenv").config();

const path = require("path");
const isProduction = process.env.NODE_ENV === "production" ? true : false;

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    index: [
      "./dev/assets/js/index.js",
      "./dev/assets/less/index.less",
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
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
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
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: isProduction ? ["**/*"] : [] }),
    new CopyWebpackPlugin({ patterns: [{ from: "./dev/static/" }] }),
    new MiniCssExtractPlugin({ filename: isProduction ? "assets/[name].[contenthash].css": "[name].css" }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/index.pug",
      filename: "index.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/common.pug",
      filename: "common.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/button.pug",
      filename: "button.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/quote.pug",
      filename: "quote.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/price.pug",
      filename: "price.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/person.pug",
      filename: "person.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/header.pug",
      filename: "header.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/base.pug",
      filename: "base.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/scene.pug",
      filename: "scene.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/grid.pug",
      filename: "grid.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/404.pug",
      filename: "404.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
  ],
};
