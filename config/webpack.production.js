var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var saveHashes = require('assets-webpack-plugin');
var commonConfig = require('./webpack.common');
var helpers = require('./pathHelpers');

module.exports = webpackMerge.smart(commonConfig, {
  output: {
    publicPath: '/',
    path: helpers.root('Weather', 'Dist'),
    filename: '[name].js' // should using [name]-[hash].js to avoid all js cache
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin( { name: 'vendor', filename: 'vendor.js' } ),
    new ExtractTextPlugin('app.css'), // should using [app]-[hash].css to avoid all css caches
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new saveHashes({ path: helpers.root('Weather', 'Dist') })
  ]
});
