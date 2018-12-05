const bgColor = process.env.VUE_APP_BG_COLOR
  ? process.env.VUE_APP_BG_COLOR
  : '#F6F6F6'

const mainColor = process.env.VUE_APP_MAIN_COLOR
  ? process.env.VUE_APP_MAIN_COLOR
  : '#FFC408'

const name = process.env.VUE_APP_NAME ? process.env.VUE_APP_NAME : 'DIP'

const fav = process.env.VUE_APP_FAV
  ? process.env.VUE_APP_FAV
  : 'https://s3.us-east-2.amazonaws.com/airpay-network/fav.png'

module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0].VUE_APP_NAME = JSON.stringify(name)
      args[0].VUE_APP_FAV = JSON.stringify(fav)
      return args
    })
  },
  css: {
    loaderOptions: {
      sass: {
        data: `$--color-primary: ${mainColor}; $bg-color: ${bgColor};`
      }
    }
  }
}
