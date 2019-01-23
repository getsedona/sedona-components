const CleanWebpackPlugin = require('clean-webpack-plugin');
const LessThemePlugin = require('webpack-less-theme-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const isProduction = process.env.NODE_ENV === 'production' ? true : false;
require('dotenv').config();

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './dev/assets/js/app.js',
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.(le|c)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new LessThemePlugin({ theme: './dev/assets/less/variables.less' }),
    new LessThemePlugin({ theme: './dev/assets/less/mixins.less' }),
    new MiniCssExtractPlugin({ filename: isProduction ? 'css/[name].[hash].css': '[name].css' }),
    new CssoWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './dev/page/index.html'
    })
  ]
}
