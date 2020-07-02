const isProduction = process.env.NODE_ENV === "production" ? true : false;

module.exports = {
  plugins: [
    require("postcss-css-variables")({ preserve: true }),
    require("autoprefixer"),
    isProduction ? require("cssnano")({ preset: "default" }) : null,
  ],
};
