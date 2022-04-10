const paths = require('./paths.webpack.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  commonModules: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        loader: 'babel-loader'
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
                  })
                ],
                sourceMap: true
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      }
    ]
  },
  commonPlugins: [
    new HtmlWebpackPlugin({
      template: paths.src + '/template.html',
      title: 'Webpack 5 & Vanilla JS boilerplate',
      favicon: paths.src + '/img/favicon.svg',
      filename: 'index.html'
    }),
    new StylelintPlugin()
  ],
  commonResolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '~': paths.src
    }
  },
};