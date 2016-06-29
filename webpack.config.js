

var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['','.js']
  },
  
  entry:[
    './src/index'
  ],
  output:{
    path: path.join(__dirname,'/dist'),
    filename:'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase:'./dist',
    hot:true
  },
  module:{
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',

    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
