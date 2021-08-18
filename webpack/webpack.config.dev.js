const baseConfig = require('./webpack.config.base')

const config = {
   // devtool: "source-map",
   optimization: {
      minimize: false
   },
   mode: 'production',
   // mode: 'development',
   output: {
      ...baseConfig.output,
      filename: '[name].bundle.js',
   },
};

module.exports = Object.assign({}, baseConfig, config);
