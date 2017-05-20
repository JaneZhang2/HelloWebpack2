const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './src/index.jsx',
  output: {
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    hotOnly: true,
    stats: 'errors-only'
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        use: 'url-loader'
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: 'url-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          }
        ],
      },
      {
        test: /\.jsx$/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true,
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
