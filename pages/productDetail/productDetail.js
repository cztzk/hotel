// pages/productDetail/productDetail.js
var util = require('../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图属性
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // 产品id值
    id: null,
    // 多少条评论
    comment: 5415,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: options.id
    })
    // 获取banner图
    let that = this;
    let bannerData = {
      type: "hotel"
    };
    util.getBanner(bannerData, that);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // 获得入住时间及离店时间
    let value = wx.getStorageSync('time');
    let occupancy, leave;
    // 判断是否已选择入住及离开时间
    if (value) {
      occupancy = value[0].substring(5, 11);
      leave = value[1].substring(5, 11)
      this.setData({
        occupancy: occupancy,
        leave: leave
      });
    } else {
      // 未选择，默认当天及次日
      occupancy = util.getDateStr(null, 0).substring(5, 11);
      leave = util.getDateStr(null, 1).substring(5, 11)
      this.setData({
        occupancy: occupancy,
        leave: leave
      });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  toorder: function() {
    wx.navigateTo({
      url: '/pages/order/order?id=' + this.data.id,
    })
  }
})