var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./pathHelpers');

module.exports = {
  entry: {
    app: helpers.root('client', 'app', 'index.js'),
    vendor: helpers.root('client', 'app', 'vendor.js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: helpers.root('client'),
        enforce: "pre",
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader']
        })
      },
      {
        test: /\.scss$/,
        include: helpers.root('client', 'app'),
        use: ExtractTextPlugin.extract({ 
          fallback: 'style-loader', 
          use: ['css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]', 'sass-loader']
        }) 
      },
      {
        test: /\.(js|jsx)$/,
        include: helpers.root('client', 'app'),
        use: {
          loader: 'babel-loader'
        }
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
