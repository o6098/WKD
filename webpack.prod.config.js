var config = require('./webpack.config.js');
var webpack = require('webpack');

config.plugin.push(
  new webpack.DefinePlugin({
    "process.env":{
      "NODE_ENV": JSON.stringfy("production")
    }
  })
);

config.plugin.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warning:false
    }
  })
);

module.exports = config;
