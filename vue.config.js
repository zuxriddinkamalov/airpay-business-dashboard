const bgColor = process.env.VUE_APP_BG_COLOR
  ? process.env.VUE_APP_BG_COLOR
  : '#F6F6F6';
const logo = process.env.VUE_APP_LOGO
  ? process.env.VUE_APP_LOGO
  : 'https://s3.us-east-2.amazonaws.com/airpay-network/logo/an-logo.png';

const mainColor = process.env.VUE_APP_MAIN_COLOR
  ? process.env.VUE_APP_MAIN_COLOR
  : '#377DFE';
console.log(mainColor);

const baseColor = process.env.VUE_APP_BASE_COLOR
  ? process.env.VUE_APP_BASE_COLOR
  : '#f6f6f6';

const name = process.env.VUE_APP_NAME ? process.env.VUE_APP_NAME : 'DIP';
const fav = process.env.VUE_APP_FAV
  ? process.env.VUE_APP_FAV
  : 'http://airpay-network-website.herokuapp.com/favicon.ico';

const webpack = require('webpack');

module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0].VUE_APP_NAME = JSON.stringify(name);
      args[0].VUE_APP_FAV = JSON.stringify(fav);
      args[0].VUE_APP_LOGO = JSON.stringify(logo);
      args[0].VUE_APP_MAIN_COLOR = JSON.stringify(mainColor);
      args[0].VUE_APP_BASE_COLOR = JSON.stringify(baseColor);
      args[0].VUE_APP_BG_COLOR = JSON.stringify(bgColor);
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        data: `$--color-primary: ${mainColor}; $bg-color: ${bgColor}; $BASE-COLOR: ${baseColor};`
      }
    }
  }
};
