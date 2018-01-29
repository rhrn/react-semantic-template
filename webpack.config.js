const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RewriteImportPlugin = require('less-plugin-rewrite-import');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              paths: [__dirname, path.resolve(__dirname, 'node_modules')],
              plugins: [
                new RewriteImportPlugin({
                  paths: {
                    '../../theme.config': __dirname + '/src/theme.config'
                  }
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 100000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
