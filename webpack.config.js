const path = require('path');
const isDevMode = process.env.NODE_ENV === 'development' ? true : false;

const CleanWebpackPlugin = require('clean-webpack-plugin');
const LessThemePlugin = require('webpack-less-theme-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({ filename: isDevMode ? '[name].css' : 'css/[name].[hash].css' }),
    new CssoWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './dev/page/index.html'
    })
  ]
}
