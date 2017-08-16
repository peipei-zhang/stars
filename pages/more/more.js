// pages/more/more.js
Page({
  data: {
  star:""
  },
  onLoad: function (event) {
      var that=this;
      var star=event.star;
      this.data.star=star;
      wx.getStorage({
        key: star,
        success: function(res) {
          var summary=res.data.presummary;
          that.setData({
            summary:summary
          })
        }
      })
  },
  onShareAppMessage: function () {
    return {
      title: this.data.star + "今天的星座运势竟然是？？？",
      path: "/pages/category/category",
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      }
    }
  },
  onTap:function(){
    wx.navigateBack({
      delta:1
    })
  }
})