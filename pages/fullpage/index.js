// pages/fullpage/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Id:0,
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://res1.eqh5.com/2540fb72616e4c43b246d0035c003df0.mp3',
    auto:false
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio');
    // this.audioCtx.play()
  },
  autoPlay: function () {
    //音乐控制
    this.setData({
      auto: !this.data.auto
    });
    console.log(this.data.auto)
    if (this.data.auto) {
      this.audioCtx.play()
    } else {
      this.audioCtx.pause()
    }
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
  change:function(value){
    console.log(value)
    this.setData({
      Id: value.detail.current
    })

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})