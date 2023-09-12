const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const root = process.cwd()
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: root + '/dist',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: require.resolve('babel-loader'),
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: require.resolve('vue-loader'),
      },
      {
        test: /\.less$/i,
        exclude: /\.module\.less$/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
          },
          {
            loader: require.resolve('less-loader'),
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: root + '/public/index.html',
    }),
    new ProgressBarPlugin({
      format: `[x-dance-scripts]: [:bar] ':percent' (:elapsed seconds)`,
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    },
  },
  devServer: {
    static: {
      directory: root + '/public/',
    },
    port: 8010,
  },
}
