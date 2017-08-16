var data= require("data/star-data.js")
App({
  globalData: {
    indexBg:"../../images/background.jpg",
    detailBg: "../../images/bg.jpg",
    dataUrl:"http://api.jisuapi.com/astro/fortune",
    appkey:"461a2c345d98b34c",
    stars: data.stars
  },
})
