// 函数
// http
function http(url,callback){
    wx.request({
      url: url,
      method:'GET',
      header:{
        'content-type':'application/xml'
      },
      success:function(res){
        callback(res.data)
      },
      fail:function(error){
        console.log("request failed") 
        console.log(error)
      },
      complete:function(){

      }
    })

}
// getStorage
function getStorage(key,callback){
  wx.getStorage({
    key: key,
    success: function(data) {
      return data;
    }
  })
}
// setStorage
function setStorage(key,data){
  wx.setStorage({
    key: key,
    data: data
  })
}
// 数据转化百分数
function converseToPer(num){
  var per=""
  return per=(parseFloat(num)*10>>0)+"%"
}

module.exports={
  http:http,
  getStorage:getStorage,
  setStorage:setStorage,
  converseToPer:converseToPer
}