const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require("dotenv-webpack")

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.jsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: "assets/images/[name][ext][query]"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "@api": path.resolve(__dirname, 'src/api'),
      "@assets": path.resolve(__dirname, 'src/assets'),
      "@views": path.resolve(__dirname, 'src/views'),
      "@styles": path.resolve(__dirname, 'src/styles'),
      "@config": path.resolve(__dirname, 'src/config'),
      "@models": path.resolve(__dirname, 'src/models'),
      "@controllers": path.resolve(__dirname, 'src/controllers')
    }
  },
  mode: 'development',
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
      inject: "body",
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new Dotenv(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'src/public'),
    },
    compress: false,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true
  }
}