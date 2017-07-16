var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./pathHelpers');

module.exports = {
  entry: {
    app: helpers.root('client', 'app', 'index.js'),
    vendor: helpers.root('client', 'app', 'vendor.js')
  },
  module: {
    loaders: [
      {
        test: /\.s?(c|a)ss$/,
        include: helpers.root('client'),
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'
        )
      },
      {
        test: /\.(js|jsx)$/,
        include: helpers.root('client'),
        loaders: [
          'babel-loader'
        ]
      }
    ],
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: helpers.root('client'),
        loader: 'eslint-loader'
      }
    ]
  },
  resolve: {
    alias: {
      app: helpers.root('client', 'app'), 
      components: helpers.root('client','app','components'),
      utils: helpers.root('client', 'app', 'utils')
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ]
};
