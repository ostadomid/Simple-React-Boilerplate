module.exports = {
    entry: './js/app.js',
    output: {
        path: './public',
        filename: 'bundle.js',
    },
module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react','es2015']
      }
    }
  ]
}
	
}