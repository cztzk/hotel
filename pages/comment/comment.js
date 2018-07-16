// pages/comment/comment.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 0,
    pageSize: 8,
    comment: [],
    more:false,
    tabactive:0,
    tab:[
      {
        title:"全部",
        tabid:0,
        num:5040
      },
      {
        title: "有图",
        tabid: 1,
        num:120
      },
      {
        title: "好评",
        tabid: 2,
        num:3000
      },
      {
        title: "中评",
        tabid: 3,
        num:200
      },
      {
        title: "差评",
        tabid: 4,
        num:10
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   
    this.getmorecomment();
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
  getmorecomment:function(){
    let that = this;
    let page = ++that.data.page
    let data = {
      page: page,
      pageSize: that.data.pageSize
    }
    util.getcomment(data, that);
  },
  tabfun:function(e){
    let tabid = e.currentTarget.dataset.tabid;
    this.setData({
      tabactive:tabid
    })
  }
})