const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
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
};
