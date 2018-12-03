module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data:
          '$--color-primary: ' +
          process.env.VUE_APP_MAIN_COLOR +
          '; $BG_COLOR: ' +
          process.env.VUE_APP_BG_COLOR +
          '; $BASE_COLOR: ' +
          process.env.VUE_APP_BASE_COLOR +
          ';'
      }
    }
  }
};
