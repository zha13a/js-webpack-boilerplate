const common = require('./common.webpack.js');
const paths = require('./paths.webpack.js');

const { commonModules, commonPlugins, commonResolve } = common;

module.exports = {
  mode: 'production',
  entry: [paths.src + '/index.js'],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    library: 'webpackGhPages'
  },
  module: {
    ...commonModules,
  },
  plugins: [
    ...commonPlugins,
  ],
  resolve: {
    ...commonResolve,
  }
};
