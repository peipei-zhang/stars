// pages/detail/detail.js
var utils = require('../.././utils/utils.js');
var app = getApp();
Page({
  data: {
     idx:"",
     star:""
  },
  onLoad: function (event) {
    var that = this;
    var idx = event.id;
    this.data.idx=idx;
    var star=event.star;
    this.data.star=star;
    var dataUrl = app.globalData.dataUrl;
    var appkey = app.globalData.appkey;
    var url = dataUrl + "?astroid=" + idx + "&appkey=" + appkey;
    var starDate = app.globalData.stars[idx-1].date;
    var starImage = app.globalData.stars[idx - 1].starImage;
    var headTitle=star+"-"+starDate;
    this.setData({
      headData:{
        starImage:starImage,
        headTitle:headTitle
      }
    });
    var starData=wx.getStorage({
      key: star,
      complete: function(res) {
        var starData=res.data;
        console.log(typeof starData)
        if (starData =="undefined"){
          utils.http(url, that.getPageData);
        }else{
          that.setData({
            starData: starData
          });
        }
      },
    })
  },
  onTap: function (event) {
    var type = event.currentTarget.dataset.type;
    if (type == '星座') {
      wx.navigateTo({
        url: '../category/category',
      })
    } else if (type == '更多') {
      wx.navigateTo({
        url: '../more/more?star='+this.data.star
      })
    }
  },
  onShareAppMessage:function(){
    return{
      title:this.data.star+"今天的星座运势竟然是？？？",
      path:"/pages/category/category",
      success:function(res){
         console.log(res)
      },
      fail:function(res){
        console.log(res)
      }
    }
  },
  getPageData: function (data) {
    var presummary = data.result.today.presummary;
    var career = utils.converseToPer(data.result.today.career);
    var love = utils.converseToPer(data.result.today.love);
    var health = utils.converseToPer(data.result.today.health);
    var money = utils.converseToPer(data.result.today.money);
    var starData = {
      presummary: presummary,
      barData: [
        { type: "事业", per: career },
        { type: "爱情", per: love },
        { type: "健康", per: health },
        { type: "金钱", per: money }
      ]
    };
    this.setData({
       starData:starData
    });
    wx.setStorage({
      key: this.data.star,
      data: starData,
    })
  }
})