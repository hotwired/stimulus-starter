const path = require("path")

module.exports = {
  entry: {
    main: "./src/index.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public", "js")
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        use: [
          { loader: "babel-loader" }
        ]
      }
    ]
  }
}
