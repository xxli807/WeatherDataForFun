var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var saveHashes = require('assets-webpack-plugin');
var commonConfig = require('./webpack.common');
var helpers = require('./helpers');

module.exports = webpackMerge.smart(commonConfig, {
  output: {
    publicPath: '/',
    path: helpers.root('Weather', 'Views', 'home'),
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[hash:base64:5]!stylus'
        )
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor-[hash].js"),
    new ExtractTextPlugin('app-[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new saveHashes({ path: helpers.root('Weather', 'Views', 'home') })
  ]
});
