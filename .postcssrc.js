const isProduction = process.env.NODE_ENV === "production" ? true : false;

module.exports = {
  plugins: [
    require("autoprefixer"),
    isProduction ? require("cssnano")({ preset: "default" }) : null,
  ],
};
