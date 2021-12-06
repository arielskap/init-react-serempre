const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require("dotenv-webpack")
const ProgressPlugin = require('progress-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.[contenthash].js",
    assetModuleFilename: "assets/images/[hash][ext][query]",
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "@containers": path.resolve(__dirname, 'src/containers'),
      "@images": path.resolve(__dirname, 'src/assets/images'),
      "@components": path.resolve(__dirname, 'src/components'),
      "@pages": path.resolve(__dirname, 'src/pages'),
      "@styles": path.resolve(__dirname, 'src/styles'),
      "@utils": path.resolve(__dirname, 'src/utils')
    }
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]"
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new Dotenv(),
    new ProgressPlugin(true)
  ],
  optimization: {
    minimize: true
  }
}