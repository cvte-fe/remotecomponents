const baseConfig = require('./webpack.config.base')

const config = {
   devtool: "source-map",
   optimization: {
      minimize: false
   },
   mode: 'development'
};

module.exports = Object.assign({}, baseConfig, config);
