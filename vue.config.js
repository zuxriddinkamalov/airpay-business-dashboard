module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '$BASE_COLOR: ' + process.env.BASE_COLOR + ';'
      }
    }
  }
};
