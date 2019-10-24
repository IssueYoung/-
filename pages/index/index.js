//index.js
//获取应用实例
const app = getApp()
const AUTH_MODE = 'fingerPrint'
Page({
  data: {
    motto: 'Hello World',
    arr:[1,2,3,4,5],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goCanvas:function(){
    wx.navigateTo({
      url: '../canvas/canvas'
    })
  },
  goCamera: function () {
    wx.navigateTo({
      url: '../camera/camera'
    })
  },
  goEditor: function () {
    wx.navigateTo({
      url: '../editor/editor'
    })
  },
  onLoad: function () {
    wx.hideShareMenu()
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(res)
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    // wx.getSetting({
    //   success(res) {
    //     console.log(res)
    //     if (!res.authSetting['scope.record']) {
    //       wx.authorize({
    //         scope: 'scope.record',
    //         success() {
    //           // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
    //           wx.startRecord()
    //         }
    //       })
    //     }
    //   }
    // })
    // wx.openSetting({
    //   success(res) {
    //     console.log(res.authSetting)
    //     // res.authSetting = {
    //     //   "scope.userInfo": true,
    //     //   "scope.userLocation": true
    //     // }
    //   }
    // })
    // wx.chooseAddress({
    //   success(res) {
    //     console.log(res.userName)
    //     console.log(res.postalCode)
    //     console.log(res.provinceName)
    //     console.log(res.cityName)
    //     console.log(res.countyName)
    //     console.log(res.detailInfo)
    //     console.log(res.nationalCode)
    //     console.log(res.telNumber)
    //   }
    // })
   
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  startAuth:function() {
    console.log(11111111111)
    const startSoterAuthentication = function() {
      
      wx.startSoterAuthentication({
        requestAuthModes: [AUTH_MODE],
        challenge: 'test',
        authContent: '小程序示例',
        success:function(res){
          wx.showToast({
            title: '认证成功'
          })
        },
        fail: function(err){
          console.error(err)
          wx.showModal({
            title: '失败',
            content: '认证失败',
            showCancel: false
          })
        }
      })
    }
  }
})
