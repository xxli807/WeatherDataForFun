var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common');
var helpers = require('./pathHelpers');

module.exports = webpackMerge.smart(commonConfig, {
  output: {
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: helpers.root('client', 'app'),
        loaders: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin( { name: 'vendor', filename: 'vendor.js' } ),
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    contentBase: helpers.root('client', 'app'),
    hot: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:5000/',
        secure: false
      },
      '/images/*': {
        target: 'http://localhost:5000/',
        secure: false
      }
    }
  }
});
