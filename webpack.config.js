const path = require('path');
const mode = process.env.NODE_ENV;

const CleanWebpackPlugin = require('clean-webpack-plugin');
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
    new HtmlWebpackPlugin({
	  filename: 'index.html',
	  template: 'dev/page/index.html',
      hash: true
    })
  ]
}
