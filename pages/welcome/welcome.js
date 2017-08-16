// pages/welcome/welcome.js
var app=getApp();

Page({
  data: {
  },
  onLoad:function(){
    this.setData({
      bg:app.globalData.indexBg
    })
    wx.hideShareMenu()
  },
  onReady: function () {
     var animation=wx.createAnimation({
       duration:100,
       timingFunction:"ease-in-out"
     })
     this.animation=animation;
     animation.top('600rpx').step();
     this.setData({
       animationData:animation.export()
     })
  },
  onTap:function(){
     wx.redirectTo({
       url: '/pages/category/category',
     })
  }
})