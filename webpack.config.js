// Generated using webpack-cli https://github.com/webpack/webpack-cli
/* pathモジュールの読み込み */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = MiniCssExtractPlugin.loader;
/* env */
const Dotenv = require("dotenv-webpack");

const config = {
  // モジュールの依存関係解決の起点
  entry: "./index.tsx",
  // バンドルされたファイルの出力先,ファイル名の設定
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // ソースマップの設定
  devtool: "inline-source-map",

  devServer: {
    open: true,
    host: "localhost",
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),

    new Dotenv(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        generator: {
          filename: "./src/assets/img/[name][ext][query]",
        },
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel_preset-env"],
          },
        },
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    // 本番用
    config.mode = "production";
  } else {
    // 開発用
    config.mode = "development";
  }
  return config;
};
