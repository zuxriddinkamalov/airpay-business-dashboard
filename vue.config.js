const bgColor = process.env.VUE_APP_BG_COLOR
  ? process.env.VUE_APP_BG_COLOR
  : '#F6F6F6'

const logo = process.env.VUE_APP_LOGO
  ? process.env.VUE_APP_LOGO
  : 'https://s3.us-east-2.amazonaws.com/airpay-network/logo/an-logo.png'

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
      args[0].VUE_APP_LOGO = JSON.stringify(logo)
      args[0].VUE_APP_MAIN_COLOR = JSON.stringify(mainColor)
      args[0].VUE_APP_BG_COLOR = JSON.stringify(bgColor)
      return args
    })
  },
  css: {
    loaderOptions: {
      sass: {
        data: `$--color-primary: ${mainColor}; $bg-color: ${bgColor}`
      }
    }
  }
}
