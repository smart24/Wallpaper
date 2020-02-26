//category detail view show.js
const app = getApp();

Page({
  data: {
    imageUrl: ""
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.viewShowTitle,
    });

    this.setData({
      imageUrl: options.viewShowImageUrl,
    })
  },

  saveImage: function () {
    var that  = this;
    wx.showModal({
      title: '提示',
      content: '是否保存图片到相册？',
      success(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '图片下载中...',
          })
          wx.downloadFile({
            url: that.data.imageUrl,
            success: function (res) {
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function (data) {
                  console.log("Success:  " + data);
                  wx.hideLoading();
                  wx.showToast({
                    title: '图片保存成功！',
                    icon: 'success',
                    duration: 2000,
                    success: function(){
                      setTimeout(function () {
                        wx.navigateBack({
                          delta: 1
                        });
                      }, 2100);
                    }
                  });
                },
                fail: function (err) {
                  console.log("Fail:  " + err);
                  if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
                    console.log("用户一开始拒绝了，我们想再次发起授权")
                    console.log('打开设置窗口')
                    wx.openSetting({
                      success(settingdata) {
                        console.log(settingdata)
                        if (settingdata.authSetting['scope.writePhotosAlbum']) {
                          console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                        } else {
                          console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                        }
                      }
                    })
                  }
                },
                complete: function(msg){
                  console.log("Complete:  " + msg);
                }
              })
            }
          })
        }
      }
    })
  }
})