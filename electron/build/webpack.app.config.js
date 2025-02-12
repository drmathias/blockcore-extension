const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");

module.exports = env => {
  return merge(base(env), {
    entry: {
      "electron-main": "./src/electron-main.js",
      "electron-app": "./src/electron-app.js"
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "../app")
    }
  });
};
