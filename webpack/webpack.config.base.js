const webpack = require('webpack');
const path = require('path');
const entry = require('./utils/entry');
const AssetsPlugin = require('assets-webpack-plugin');
const assetsPluginInstance = new AssetsPlugin();
const ASSET_PATH = 'http://127.0.0.1:7788/';
const config = {
   entry,
   output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: ASSET_PATH,
      filename: '[name].bundle.js',
      libraryTarget: 'umd',
      library: 'remoteComponent',
      umdNamedDefine: true,
   },
   plugins: [assetsPluginInstance],
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
