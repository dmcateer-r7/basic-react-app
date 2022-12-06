const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name : 'assets/img/[name].[ext]'
                }
            }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts'],
    // fallback: {
    //   "stream": require.resolve("stream-browserify"),
    //   "buffer": require.resolve("buffer/"),
    //   "crypto": require.resolve("crypto-browserify"),
    //   "os": require.resolve("os-browserify/browser"),
    //   "http": require.resolve("stream-http"),
    //   "https": require.resolve("https-browserify"),
    //   "zlib": require.resolve("browserify-zlib"),
    //   "process": require.resolve("process"),
    //   "fs": false
    // }
  },
  performance: {
    hints: false
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ]
};
