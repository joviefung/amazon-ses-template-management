module.exports = {
  chainWebpack: config => config.optimization.minimize(false),
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/amazon-ses-template-management-page"
      : "/"
};
