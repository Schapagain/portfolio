const path = require("path");
module.exports = {
  devServer: {
    host: "0.0.0.0",
    hot: true,
    disableHostCheck: true,
    port: 8080,
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
