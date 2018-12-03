const bgColor = process.env.VUE_APP_BG_COLOR
  ? process.env.VUE_APP_BG_COLOR
  : '#F6F6F6';

const mainColor = process.env.VUE_APP_MAIN_COLOR
  ? process.env.VUE_APP_MAIN_COLOR
  : '#FFC408';
const baseColor = process.env.VUE_APP_BASE_COLOR
  ? process.env.VUE_APP_BASE_COLOR
  : '#f6f6f6';

const name = process.env.VUE_APP_NAME ? process.env.VUE_APP_NAME : 'DIP';

const fav = process.env.VUE_APP_FAV
  ? process.env.VUE_APP_FAV
  : 'https://s3.us-east-2.amazonaws.com/airpay-network/fav.png';

const webpack = require('webpack');

module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      console.log(args);
      args[0].VUE_APP_NAME = JSON.stringify(name);
      args[0].VUE_APP_FAV = JSON.stringify(fav);
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
