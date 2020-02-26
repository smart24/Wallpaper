//category detail.js
const app = getApp();

Page({
  data: {

  },
  
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.categoryDetailTitle,
    });

    var that = this;
    wx.request({
      url: app.globalData.URL_BASE + app.globalData.COMMON_SEPARATOR + options.categoryDetailID + app.globalData.URL_CATEGORY_DETAIL,
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      success(res) {
        console.log("请求成功")
        console.log(res.data.res.vertical)
        that.setData({
          categoryDetailData: res.data.res.vertical,
        })
      },
      fail() {
        console.log("请求失败")
      }
    })
  }
})