const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: './index.jsx',
	output: {
		filename: 'bundle.js'
	},
	mode: 'production',
	module: {
		rules: [
   		{
      		test: /\.js|\.jsx$/,
   			exclude: /(node_modules)/,
   			use: {
      			loader: 'babel-loader',
      			options: {
						presets: ['env', 'react']
					}
      		}
   		},{
			test: /(\.scss|\.sass)$/,
			use: [
				{
					loader: 'style-loader'
				},
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2,
						sourceMap: true,
						localsConvention: 'camelCase',
						onlyLocals: false
					}
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: true
					}
				}
			]
		}
		]
	},
	plugins: [HtmlWebpackPluginConfig, new CompressionPlugin()]
}
