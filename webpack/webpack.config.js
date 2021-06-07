const env = process.env.NODE_ENV
let envName = 'dev'
if (env === 'production' || env === 'prod') {
   envName = 'prod'
}

module.exports = require('./webpack.config.' + envName);
