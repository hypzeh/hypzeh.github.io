const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './ClientApp/index.jsx',
  output: {
    path: path.resolve(__dirname, 'wwwroot'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
      { test: /\.html$/, use: [{ loader: 'html-loader' }] },
      {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'react-svg-loader', options: { jsx: true } },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.bundle.css',
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: false,
          annotation: true,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './ClientApp/template.html',
      filename: './index.html',
      favicon: './ClientApp/assets/ico/favicon.ico',
    }),
  ],
};
