var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/app.ts')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json']
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        include:  [path.resolve(__dirname, '../src/views')]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/views/index.pug'),
      inject: 'body',
      chunks: ['app']
    })
  ]
};
