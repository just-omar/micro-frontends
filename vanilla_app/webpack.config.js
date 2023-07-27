const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "vanilla_app_1",
      filename: "remoteEntry.js",
      exposes: {
        "./vanilla_init": "./src/makeBtn.js",
      },
    }),
  ],
};
