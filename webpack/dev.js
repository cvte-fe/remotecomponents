'use strict';
process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = 7788;

const server = new WebpackDevServer(webpack(config), {
  contentBase: './dist',
  writeToDisk: true,
});

server.listen(port, '127.0.0.1', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('WebpackDevServer listening at localhost:', port);
})
