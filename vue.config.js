module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data:
          '$--color-primary: ' + process.env.VUE_APP_MAIN_COLOR
            ? process.env.VUE_APP_MAIN_COLOR
            : '#FFC408' + '; $BG_COLOR: ' + process.env.VUE_APP_BG_COLOR
              ? process.env.VUE_APP_BG_COLOR
              : '#F6F6F6' + '; $BASE_COLOR: ' + process.env.VUE_APP_BASE_COLOR
                ? process.env.VUE_APP_BASE_COLOR
                : '#565656' + ';'
      }
    }
  }
};
