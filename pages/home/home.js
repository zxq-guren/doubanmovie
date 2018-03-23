//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    imgUrls: [
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', 
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 
    ],
    indicatorDots: true,
    autoplay: true,    // 轮播图自动播放
    circular: true,    
    interval: 3000,
    duration: 1000,
    moves:[],   // 当前热映相关数据
  },

  onLoad: function () {
    this.moveList();
  },

  // 加载首页目录
  moveList() {
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 5000
    })
    let thisPage = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
       thisPage.setData({
         movies:res.data.subjects,
         })
       console.log(res.data.subjects)
       wx.hideLoading();
      },
    })
  },

})