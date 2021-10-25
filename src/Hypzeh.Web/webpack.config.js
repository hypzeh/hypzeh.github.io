const path = require('path');
const crypto = require('crypto');
const dotenv = require('dotenv');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

dotenv.config();

module.exports = (env = {}) => {
  if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = env.production ? 'production' : 'development';
  }
  const isDevelopment = process.env.NODE_ENV !== 'production';

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: './ClientApp/index.jsx',
    output: {
      path: path.resolve(__dirname, 'wwwroot'),
      filename: !isDevelopment ? '[name].[chunkhash].js' : '[name].js',
      chunkFilename: !isDevelopment ? '[name].[chunkhash].chunk.js' : '[name].chunk.js',
      publicPath: '/',
    },
    resolve: {
      alias: {
        '~assets': path.resolve(__dirname, 'ClientApp/assets/'),
        '~components': path.resolve(__dirname, 'ClientApp/components/'),
        '~redux': path.resolve(__dirname, 'ClientApp/redux/'),
        '~style': path.resolve(__dirname, 'ClientApp/style/'),
        '~utils': path.resolve(__dirname, 'ClientApp/utils/'),
      },
      extensions: ['.js', '.jsx'],
    },
    optimization: {
      minimize: !isDevelopment,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: { safari10: true },
            output: {
              ecma: 5,
              safari10: true,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
          sourceMap: false,
          cache: true,
        }),
      ],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          defaultVendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module) {
              return (module.size() > 160000 && /node_modules[/\\]/.test(module.identifier())
              );
            },
            name(module) {
              const hash = crypto.createHash('sha1');
              if (module.type === 'css/extract-css-chunks') {
                module.updateHash(hash);
              } else if (!module.libIdent) {
                throw new Error(`Encountered unknown module type: ${module.type}.`);
              }

              return hash.digest('hex').slice(0, 8);
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
          shared: {
            name(module, chunks) {
              return crypto
                .createHash('sha1')
                .update(chunks.reduce((acc, chunk) => acc + chunk.name, ''))
                .digest('hex') + (module.type === 'css/extract-css-chunks' ? '_CSS' : '');
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
        maxInitialRequests: 25,
        minSize: 20000,
      },
    },
    devServer: {
      open: true,
      historyApiFallback: true,
      port: 5001,
      compress: true,
      quiet: true,
      hot: true,
      http2: true,
      https: true,
      pfx: path.resolve(require('os').homedir(), '.aspnet/https/smiosoft.development.pfx'),
      pfxPassphrase: process.env.PFX_CERTIFICATE_PASSWORD || (console.error('No certificate password in environment variables.')),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader?cacheDirectory=true',
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
              loader: 'file-loader',
              options: {
                outputPath: 'public',
              },
            },
          ],
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use: [
            'file-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './ClientApp/index.template.html',
        filename: 'index.html',
        favicon: './ClientApp/assets/images/favicon.png',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          removeScriptTypeAttributes: true,
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
        prefetch: [/\.js$/],
        defaultAttribute: 'async',
      }),
      new WebpackPwaManifest({
        name: 'Nick Smirnoff',
        short_name: 'NS',
        description: 'A developer from the UK, focusing all his efforts on creating useful software products and slaying dragons.',
        theme_color: '#212121',
        background_color: '#212121',
        icons: [
          {
            src: path.resolve('ClientApp/assets/images/favicon.png'),
            sizes: [36, 48, 72, 96, 144, 192, 512],
            ios: true,
          },
        ],
      }),
      new GenerateSW({
        swDest: 'sw.js',
      }),
      new FriendlyErrorsWebpackPlugin(),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
  };
};
