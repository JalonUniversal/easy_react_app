const baseBuildConfig = require('./webpack.base');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const proxyConfig = require('./proxyTable');

const devConfig = merge(baseBuildConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,      // enable hot replacement
    inline: true,
    port: 3000,     // using which port to load file
    https: false,   // enable https protocol
    open: true,     // open browser automatically
    quiet: true,    // quiet model
    overlay: true,  // show error info on screen
    compress: true, // gzip source
    historyApiFallback: true,
    proxy: proxyConfig.proxy,
    setup: proxyConfig.setup,
    contentBase: path.resolve(__dirname, '../public')
  }
});

module.exports = devConfig;