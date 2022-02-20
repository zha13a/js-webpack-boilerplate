const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../dist'),
}

module.exports = {
  entry: [paths.src + '/index.js'],
  output: {
    path: path.build,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/, /\.ico$/],
        type: 'asset/resource',
        generator: {
          filename: './assets/img/[name].[ext]',
        }
      },
      {
        test: /\.(woff|woff2)$/i,
        type: 'asset/inline',
        generator: {
          filename: './assets/fonts/[name].[ext]',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.src + '/template.html',
      title: 'Webpack 5 & Vanilla JS boilerplate',
      favicon: paths.src + '/img/favicon.svg',
      filename: 'index.html'
    }),
  ]
}