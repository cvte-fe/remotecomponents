'use strict';
process.env.NODE_ENV = 'development';
const path = require('path');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = 7788;

const server = new WebpackDevServer(webpack(config), {
  static: path.resolve(__dirname, '../dist'),
  devMiddleware: {
    writeToDisk: true,
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  },
  port
});

server.listen(port, '127.0.0.1', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('WebpackDevServer listening at localhost:', port);
})
