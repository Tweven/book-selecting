
Page({

  data: {
  },

  onLoad: function (options) {
    this.setData({
    })
    var that = this
    wx.request({
      url: "http://api.avatardata.cn/MingRenMingYan/LookUp?key=4cc5f23fa7f24acfa3bb5087f72db7d2&keyword="+options.name+"&page=1&rows=8",
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        console.log(res)
         
          that.setData({
            mingyan: res.data
          })
        wx.setNavigationBarTitle({
          title: options.name,
        })
        wx.hideNavigationBarLoading()
      }
    })
    wx.showNavigationBarLoading()
  }

})