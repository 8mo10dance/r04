const path = require("path");

const config = {
  entry: {
    home: path.resolve(__dirname, "./src/home/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "../app/javascript"),
    filename: "[name]/webpack/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
    alias: {
      "~": path.resolve(__dirname, "src/"),
    },
  },
};

module.exports = (env, argv) => {
  if (argv.mode !== "production") {
    config.devtool = "source-map";
  }

  return config;
};
