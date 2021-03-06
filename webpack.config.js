const path = require("path");


module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, "/client/src/app.jsx"),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, "/server/static/js"),
    filename: "app.js",
  },

  devServer: {
    historyApiFallback: true
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, "/client/src"),
        loader: 'babel-loader',
        query: {
          presets: ["react", "env"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ],
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: false
};
