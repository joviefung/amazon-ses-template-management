module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/amazon-ses-template-management-page"
      : "/"
};
