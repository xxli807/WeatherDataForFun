var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var saveHashes = require('assets-webpack-plugin');
var commonConfig = require('./webpack.common');
var helpers = require('./pathHelpers');

module.exports = webpackMerge.smart(commonConfig, {
  output: {
    publicPath: '/',
    path: './Weather/Dist',
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
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
    new webpack.optimize.CommonsChunkPlugin( { name: 'vendor', filename: 'vendor-[hash].js' } ),
    new ExtractTextPlugin('app-[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new saveHashes({ path: './Weather/Dist' })
  ]
});
