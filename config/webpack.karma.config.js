const webpack = require('webpack');
const path = require('path');

module.exports = {
	cache: true,
	debug: true,
	hot:false,
	output: {},
	entry: {},
	module: {
		postLoaders: [{
			test: /\.js?$/,
			exclude: /(src\/dist|packages|.git|node_modules|__tests__)/,
			include: path.resolve('src/'),
			loader: 'isparta',
			query: {
				cacheDirectory: true
			}
		}],
		loaders: [
			// This is what allows us to author in future JavaScript
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
          plugins: [
            'babel-plugin-rewire'
          ]
				}
			},
			// This allows the test setup scripts to load `package.json`
			{
				test: /\.json$/,
				exclude: /node_modules/,
				loader: 'json-loader'
			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: []
};
