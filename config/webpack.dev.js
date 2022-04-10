const common = require('./common.webpack.js');
const paths = require('./paths.webpack.js');

const { commonModules, commonPlugins, commonResolve } = common;

module.exports = {
  mode: 'development',
  entry: [paths.src + '/index.js'],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 14134
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
