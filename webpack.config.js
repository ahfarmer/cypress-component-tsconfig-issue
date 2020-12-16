module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    // https://github.com/microsoft/TypeScriptSamples/blob/master/react-flux-babel-karma/webpack.config.js#L38
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
