//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onChange(event) {
    wx.showToast({
      icon: 'none',
      title: `当前值：${event.detail}`
    });
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
