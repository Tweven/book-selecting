Page({
  data:{
    p: [
      {
        name: "毛泽东"
      },
      {
        name: "鲁迅"
      },
      {
        name: "周恩来"
      },
      {
        name: "史铁生"
      },
      {
        name: "张爱玲"
      },
      {
        name: "郭敬明"
      },
      {
        name: "郭沫若"
      },
      {
        name: "奥巴马"
      },
      {
        name: "周星驰"
      },
      {
        name: "孔子"
      },
      {
        name: "朱熹"
      },
      {
        name: "金庸"
      },
      {
        name: "培根"
      },
      {
        name: "三毛"
      },
      {
        name: "金星"
      },
      {
        name: "莎士比亚"
      },
      {
        name: "雨果"
      },
      {
        name: "列宁"
      },
      {
        name: "邓小平"
      },
      {
        name: "爱因斯坦"
      },
      {
        name: "爱国主义"
      },
      {
        name: "集体"
      },
      {
        name: "人生"
      },
      {
        name: "情感"
      },
      {
        name: "勤俭"
      },
      {
        name: "诚信"
      },
      {
        name: "谦虚"
      },
      {
        name: "立志"
      }
    ]
  },
  f1:function(event){
    var name = event.currentTarget.dataset.name
    wx.navigateTo({
      url: '../url2/url2?name='+name,
    })
  }

})