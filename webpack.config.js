require("dotenv").config();

const pkg = require("./package.json");
const path = require("path");
const isProduction = process.env.NODE_ENV === "production" ? true : false;

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
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
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./dev/pages/index.html",
      filename: "index.html",
      minify: isProduction ? htmlMinifyConfig : false,
      version: pkg.version,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/buttons.pug",
      filename: "buttons.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/quotes.pug",
      filename: "quotes.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/prices.pug",
      filename: "prices.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/persons.pug",
      filename: "persons.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/base/examples.html",
      filename: "base.html",
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
      template: "./src/notify/examples.html",
      filename: "notify.html",
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
      template: "./src/marginalia/examples.html",
      filename: "marginalia.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      layout: path.join(__dirname, "dev/layouts/default.html"),
      template: "./src/wysiwyg/examples.html",
      filename: "wysiwyg.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlWebpackPlugin({
      template: "./dev/pages/404.pug",
      filename: "404.html",
      minify: isProduction ? htmlMinifyConfig : false,
    }),
    new HtmlLayoutPlugin(),
  ],
};
