const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* eslint-env node */
module.exports = {
  entry: {
    index: './src/index',
  },

  output: {
    filename: '[name].[chunkhash:7].js',
    path: path.resolve(__dirname, 'live'),
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]_[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: '#eval-source-map',

  devServer: {
    port: 9910,
    inline: false,
    hot: false,
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
