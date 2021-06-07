'use strict';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const config = require('./webpack.config');

webpack(config, function(err, stats) {
  if (err) { throw err; }
});
