Page({
  listenerSearchInput:function(e)
  {
    var searchInput=e.detail.value;
    this.setData({
      searchInput:searchInput
    })
  },
  shoucang:function(e)
  {
    wx.navigateTo({
      url:'/pages/fav/fav',
    })
  },
  shujia: function (e) {
    wx.navigateTo({
      url: '/pages/fav/fav',
    })
  },
  mingyan: function (e) {
    wx.navigateTo({
      url: '/pages/mingyan/mingyan',
    })
  },
  suo:function(e)
  {
    var that=this
    if(that.data.searchInput)
    {
      wx.request({
        url:'',
        data:{},
        success:function(res)
        {
          console.log('success!!!')
        },
        fail:function()
        {
          console.log('failed!!!')
        }
      })
    }
    else{
      wx.showModal({
        title:'提示',
        content:'请输入搜索内容',
        showCancel:false
      })
      return
    }
  }
})