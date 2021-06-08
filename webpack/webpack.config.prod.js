const baseConfig = require('./webpack.config.base')

const config = {
   mode: 'production'
};

module.exports = Object.assign({}, baseConfig, config);
