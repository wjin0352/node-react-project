var path = require('path');
var webpack = require('webpack');
var packageData = require('./package.json');
var filename = [packageData.name, packageData.version, 'js'];

module.exports = {
  entry:
    {
      "client": packageData.main,
      "react": "./react/index.js"
    },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "[name].js",
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

