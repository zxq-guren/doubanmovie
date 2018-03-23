// detail.js

Page({
  data: {
    title: '话题详情',
    detail: {},
    replies: [],
    hidden: false
  },
 
  onLoad: function (options) {
    this.setData({
      hidden: false
    })
    
  }
})
