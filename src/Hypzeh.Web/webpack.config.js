const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = (env, argv) => {
  const { mode } = argv;

  return {
    entry: './ClientApp/index.jsx',
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[name].[chunkhash].chunk.js',
      path: path.resolve(__dirname, 'wwwroot'),
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    optimization: {
      minimize: mode !== 'development',
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            warnings: false,
            compress: {
              comparisons: false,
            },
            parse: {},
            mangle: true,
            output: {
              comments: false,
              /* eslint-disable camelcase */
              ascii_only: true,
              /* eslint-enable camelcase */
            },
          },
          parallel: true,
          cache: true,
        }),
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
          main: {
            chunks: 'all',
            minChunks: 2,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      },
      runtimeChunk: true,
    },
    devServer: {
      contentBase: path.join(__dirname, 'wwwroot'),
      compress: true,
      quiet: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['react-hot-loader/webpack', 'babel-loader?cacheDirectory=true'],
        },
        {
          test: /\.css$/,
          use: [
            ExtractCssChunks.loader,
            'css-loader',
            'clean-css-loader',
          ],
        },
        {
          test: /\.(jpe?g|png|webp|gif|svg|ico)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: '[name].[ext]',
                outputPath: 'images/',
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                },
                pngquant: {
                  speed: 5,
                },
              },
            },
          ],
        },
        {
          test: /\.(woff2|woff)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          }],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './ClientApp/template.html',
        filename: './index.html',
        favicon: './ClientApp/assets/img/favicon.png',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new ExtractCssChunks(
        {
          filename: '[name].css',
          chunkFilename: '[id].css',
          hot: true,
        },
      ),
      new ScriptExtHtmlWebpackPlugin({
        prefetch: /\.js$/,
        defaultAttribute: 'async',
      }),
      new HashedModuleIdsPlugin({
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 20,
      }),
      /* eslint-disable camelcase */
      new WebpackPwaManifest({
        name: 'Nick Smirnoff',
        short_name: 'Nick Smirnoff',
        description: 'Nick Smirnoff',
        theme_color: '#212121',
        background_color: '#212121',
        icons: [
          {
            src: path.resolve('./ClientApp/assets/img/favicon.png'),
            sizes: [36, 48, 72, 96, 144, 192, 512],
            ios: true,
          },
        ],
      }),
      /* eslint-enable camelcase */
      new GenerateSW({
        swDest: 'sw.js',
        importWorkboxFrom: 'local',
        clientsClaim: true,
        skipWaiting: true,
      }),
      new FriendlyErrorsWebpackPlugin(),
    ],
  };
};
