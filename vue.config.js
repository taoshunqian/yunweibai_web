const { defineConfig } = require('@vue/cli-service');
// const { default: config } = require('vux/src/plugins/config');

function formartDate() {
  var dates = new Date();
  // 2020-2-2 21:30:21
  // 月
  var month = dates.getMonth() + 1
  month = month < 10 ? "0" + month : month
  // 日
  var date = dates.getDate()
  date = date < 10 ? "0" + date : date
  // 时
  var hours = dates.getHours()
  hours = hours < 10 ? "0" + hours : hours
  // 分
  var minutes = dates.getMinutes()
  minutes = minutes < 10 ? "0" + minutes : minutes
  // 秒
  var seconds = dates.getSeconds()
  seconds = seconds < 10 ? "0" + seconds : seconds
  var arr = [
    month,
    date,
    hours,
    minutes,
    seconds
  ]
  return arr.join('')
}
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'ywb' + formartDate(),
  publicPath: './',
  lintOnSave: false,
  devServer: {
    // port: 8085,
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            "presets": [
              ["@babel/preset-env", {
                "useBuiltIns": "usage",
                "corejs": {
                  "version": 3
                },
                "targets": {
                  "chrome": "70", // 兼容chrome
                  "firefox": "60", // 兼容火狐
                  "ie": "7", // 兼容ie
                  "safari": "10", // 兼容苹果
                  "edge": "17", // 兼容edge
                }
              }]

            ]
          }
        }
      ]
    }
  }
})
