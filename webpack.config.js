const path = require('path');
const mode = process.env.NODE_ENV;

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const LessThemePlugin = require('webpack-less-theme-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './dev/assets/js/app.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    stats: 'errors-only',
    host: '192.168.1.36'
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new LessThemePlugin({ theme: './dev/assets/less/variables.less' }),
    new LessThemePlugin({ theme: './dev/assets/less/mixins.less' }),
    new CssoWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './dev/page/index.html',
      hash: true
    })
  ]
}
