/** login.js **/
const app = getApp()

Page({
  data: {
    userName: "",
    userPassword: ""
  },

  userNameInput: function(e) {
    this.setData({
      userName: e.detail.value
    })
    console.log(this.data.userName)
  },

  userPasswordInput: function(e) {
    this.setData({
      userPassword: e.detail.value
    })
    console.log(this.data.userPassword)
  },

  login: function() {
    if (this.data.userName == '') {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }

    if (this.data.userPassword == '') {
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }

    if (this.data.userName == "123456" && this.data.userPassword == "123456") {
      console.log("登陆成功")
      wx.showToast({
        title: '登陆成功！',
        icon: 'success',
        duration: 1000,
        mask: true
      })
      wx.navigateTo({
        url: '/pages/categoryroot/categoryroot',
      })
    } else {
      wx.showToast({
        title: '用户名或密码不正确',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    }
  }
})