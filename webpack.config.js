const path = require('path');

module.exports = {
	entry: "./app/public/assets/scripts/app.js",
	output: {
		path: path.join(__dirname, "./app/public/temp/scripts"),
		filename: "app.js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				// loader: 'babel',
				query: {
					// presets: [require.resolve('babel-preset-es2015')]
					presets: ['es2015']
				},
				// only apply babel to JS files, but not every single JS file
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
};