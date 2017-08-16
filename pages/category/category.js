// pages/category/category.js
var app=getApp()
var appkey = app.globalData.appkey;
var dataUrl=app.globalData.dataUrl;
Page({
  data: {
    
  },
  onLoad: function (options) {
    this.setData({
       bg:app.globalData.indexBg,
       stars:app.globalData.stars
    })
  },
  onTap:function(event){
     var idx = event.currentTarget.dataset.idx;
     var star=event.currentTarget.dataset.name;
     wx.navigateTo({
       url: '/pages/detail/detail?id='+idx+'&star='+star
     })
  }
})