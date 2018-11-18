const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 15000,
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => autoprefixer({
                browsers: ['last 3 versions', '> 1%'],
              }),
            },
          },
          {
            loader: 'less-loader', // compiles Less to CSS,
            options: {
              paths: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src/styles'), // sets absolute path to files in this folder
              ],
            },
          },
        ],
      },
    ],
  },
};
