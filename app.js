var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

if(process.env.NODE_ENV !== 'production'){
  var webpack = require('webpack');
  var webpackMiddleware = require('webpack-dev-middleware');
  var config = require('./webpack.config.js');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var compiler = webpack(config);
}

app.use(express.static(__dirname + './css'));
app.use(express.static(__dirname + './dist'));

app.get('/',function response(req,res){
  res.sendFile(path.join(__dirname ,'index.html'));
});

app.listen(PORT, function(error){
  if(error){
    console.error(error);

  }else{
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",PORT,PORT);
  }
});
