const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = [
  {
    mode: devMode ? "development" : "production",
    entry: {
      "admin.min": ["./src/client/app.js"]
    },
    output: {
      path: path.join(__dirname, "public/js"),
      filename: "bundle.[name].js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          query: {
            cacheDirectory: true
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
                minimize: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            },
            "sass-loader"
          ]
        }
      ]
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "../css/bundle.[name].css",
        chunkFilename: "../css/[id].css"
      })
    ]
  }
];
