var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./web/static/js/app.js",

  output: {
    path: "./priv/static/js",
    filename: "app.js"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015", "react"]
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("css")
    }]
  },

  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new CopyWebpackPlugin([{ from: "./web/static/assets" }])
  ],

  resolve: {
    alias: {
      reduce:
        __dirname + "/web/static/js/reduce",
      phoenix_html:
        __dirname + "/deps/phoenix_html/web/static/js/phoenix_html.js",
      phoenix:
        __dirname + "/deps/phoenix/web/static/js/phoenix.js"
    }
  }
};
