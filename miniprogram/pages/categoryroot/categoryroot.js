//category root.js
const app = getApp();

Page({
  data: {

  },
  
  onLoad: function() {
    var that = this;
    wx.request({
      url: app.globalData.URL_BASE,
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      success(res) {
        console.log("请求成功")
        that.setData({
          categoryData: res.data.res.category
        })
      },
      fail() {
        console.log("请求失败")
      }
    })
  }
})