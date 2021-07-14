const baseConfig = require('./webpack.config.base')
const TerserPlugin = require('terser-webpack-plugin')

const config = {
   mode: 'production',
   optimization: {
      minimizer: [new TerserPlugin({
         extractComments: false,
      })],
   },
};

module.exports = Object.assign({}, baseConfig, config);
