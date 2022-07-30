const path = require("path");
const ASSET_PATH = process.env.ASSET_PATH || '/docs';
import webpack from 'webpack';

module.exports = {
  mode: 'production',
  entry: "./src/index.js",
  output: {
    publicPath: ASSET_PATH,
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,        
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    // This makes it possible for us to safely use env vars on our code
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
  ],
};