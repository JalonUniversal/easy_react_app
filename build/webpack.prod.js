const baseBuildConfig = require('./webpack.base');
const merge = require('webpack-merge');

const prodConfig = merge(baseBuildConfig, {
  mode: 'production',
});

module.exports = prodConfig;