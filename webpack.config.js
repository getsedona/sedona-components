require("dotenv").config();

const path = require("path");
const fs = require("fs");
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

const PAGES_DIR = path.resolve(__dirname, "dev/pages");
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith(".pug"));

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
    ...PAGES.map((page) => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,".html")}`,
      minify: isProduction ? htmlMinifyConfig : false,
    })),
  ],
};
