const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/autocomplete.js'),
  output: {
    library: 'Autocomplete',
    libraryTarget: 'umd',
    path: 'dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      }, {
        test: /\.css$/,
        loader: 'style!css',
      }, {
        test: /\.woff2?$/,
        loader: 'null',
      }, {
        test: /\.ttf$/,
        loader: 'null',
      }, {
        test: /\.eot$/,
        loader: 'null',
      }, {
        test: /\.svg$/,
        loader: 'null',
      },
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
    },
  },
};
