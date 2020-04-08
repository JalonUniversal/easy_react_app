const baseBuildConfig = require('./webpack.base');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prodConfig = merge(baseBuildConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: true,
      analyzerMode: 'static',
      reportFilename: 'bundle-analyzer-report.html'
    }),
  ]
});

module.exports = prodConfig;