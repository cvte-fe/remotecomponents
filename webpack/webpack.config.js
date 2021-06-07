const webpack = require('webpack');
const path = require('path');

const config = {
   mode: 'development',
   entry: {
      componentDemo: './src/packages/componentDemo/index.tsx',
   },
   output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].bundle.js',
      libraryTarget: 'umd',
      library: 'remoteComponent',
      umdNamedDefine: true,
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
         },
         {
            test: /\.ts(x)?$/,
            loader: 'ts-loader',
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
         '.jsx',
         '.tsx',
         '.ts'
      ]
   }
};

module.exports = config;
