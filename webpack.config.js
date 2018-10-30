const fs = require("fs");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlLayoutPlugin = require("html-layout-plugin");
const HtmlBeautifyPlugin = require("html-beautify-webpack-plugin");
const WebpackBar = require("webpackbar");
const lessToJs = require("less-vars-to-js");

const mode = process.env.NODE_ENV;

function getViews() {
	const views = [];
	const viewsPath = path.resolve(__dirname, "dev/html/views");
	const files = fs.readdirSync(viewsPath);

	files.forEach(file => {
		views.push(
			new HtmlWebpackPlugin({
				layout: path.join(__dirname, 'dev/html/layout/index.html'),
				title: file.replace(".html", ""),
				filename: file,
				template: path.resolve(viewsPath, file)
			})
		);
	});

	return views;
}

function getLessVariables() {
	const variablesPath = path.resolve(__dirname, "dev/less/variables.less");
	const paletteLess = fs.readFileSync(variablesPath, "utf8");
	const palette = lessToJs(paletteLess, {
		resolveVariables: true,
		stripPrefix: true
	});

	return palette;
}

const plugins = [
	...getViews(),
	new HtmlLayoutPlugin(),
	new CleanWebpackPlugin(["dist"]),
	new MiniCssExtractPlugin({
		filename: "css/[name].[hash].css"
	}),
	new WebpackBar({
		name: "sedona start"
	})
];

if (mode === "production") {
	plugins.push(
		new HtmlBeautifyPlugin({
			config: {
				html: {
					indent_with_tabs: true
				}
			}
		})
	);
}

module.exports = {
	mode,
	entry: {
		app: "./dev/js/app.js"
	},
	output: {
		filename: "js/[name].[hash].js",
		path: path.resolve(__dirname, "dist")
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	stats: {
		children: false,
		version: false,
		timings: false,
		reasons: false,
		moduleTrace: false,
		builtAt: false,
		hash: false
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		open: true,
		port: 3000,
		clientLogLevel: "warning",
		stats: "errors-only"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					{
						loader: "less-loader",
						options: {
							modifyVars: getLessVariables()
						}
					}
				]
			}
		]
	},
	plugins
};
