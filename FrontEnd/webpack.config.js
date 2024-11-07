const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },

  target: "web",

  devServer: {
    // port of dev server
    port: "9500",

    // tells web pack what static file to serve
    static: ["./public"],

    // open browser after starting dev server
    open: true,

    // enable and disable hot module replacement (HMR)
    // takes "true", "false", and "only" (only enables HMR without page refresh in case of build failures)
    hot: true,

    // enable live reload for browser, HMR ("hot") must be set to "false"
    liveReload: true,

    // allows url routing with react router
    historyApiFallback: true,
  },

  resolve: {
    // file extensions to pack
    extensions: [".js", ".jsx", ".json"],
  },

  module: {
    rules: [
      {
        // use babel loader for js and jsx files, and ignore node_modules folder
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // use style loader and css loader for css files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
      },
    ],
  },
};
