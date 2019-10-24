// pages/editor/editor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onStartPullDownRefresh:function(){
    console.log(1)
  },
  onLoad: function (options) {
    
    // wx.showNavigationBarLoading()
    wx.setNavigationBarTitle({
      title: '当前页面'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success(res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail(res) {
    //     console.log(res.errMsg)
    //   }
    // })
    // wx.showLoading({
    //   title: '加载中',
    // })
    // setTimeout(function(){
    //   wx.hideLoading()
    // },2000)
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000,
    //   mask:true
    // })
    // wx.clearStorage()
    // wx.setStorage({
    //   key: 'example',
    //   data: '1111',
    // })
    // wx.getSystemInfo({
    //   success(res) {
    //     console.log(res)
    //     console.log(res.model)
    //     console.log(res.pixelRatio)
    //     console.log(res.windowWidth)
    //     console.log(res.windowHeight)
    //     console.log(res.language)
    //     console.log(res.version)
    //     console.log(res.platform)
    //   }
    // })
    wx.checkIsSupportSoterAuthentication({
      success(res) {
        console.log(11111111111111)
        console.log(res)
        // res.supportMode = [] 不具备任何被SOTER支持的生物识别方式
        // res.supportMode = ['fingerPrint'] 只支持指纹识别
        // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
    // wx.request({
    //   url: 'test.php', //仅为示例，并非真实的接口地址
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    // wx.requestPayment({
    //   timeStamp: '',
    //   nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    //   package: 'prepay_id=wx2017033010242291fcfe0db70013231072',
    //   signType: 'MD5',
    //   paySign: '',
    //   success(res) { },
    //   fail(res) { }
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
