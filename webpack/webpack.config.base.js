const webpack = require('webpack');
const path = require('path');
const entry = require('./utils/entry');
const config = {
   entry,
   output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: 'auto',
      filename: '[name].[contenthash].bundle.js',
      libraryTarget: 'umd',
      library: 'remoteComponent',
      umdNamedDefine: true,
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: ['babel-loader'],
            exclude: /node_modules/
         },
         {
            test: /\.less$/,
            use: [
               'style-loader',
               'css-loader',
               'less-loader'
            ]
         }
      ]
   },
   resolve: {
      extensions: [
         '.js',
         // '.jsx',
         '.tsx',
         // '.ts'
      ]
   },
   externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
   }
};

module.exports = config;
