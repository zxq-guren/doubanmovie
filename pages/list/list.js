// list.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    moves: [],   // 当前热映相关数据
  },

  onLoad: function () {
    this.moveList();
  },

  // 加载口碑榜电影目录
  moveList() {
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 5000
    })
    let thisPage = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250',
      method:'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        thisPage.setData({
          movies: res.data.subjects,
        })
        console.log(res.data.subjects)
        wx.hideLoading();
      },
    })
  },

})