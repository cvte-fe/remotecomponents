const baseConfig = require('./webpack.config.base')

const config = {
   devtool: "source-map",
   optimization: {
      minimize: false
   },
};

module.exports = Object.assign({}, baseConfig, config);
