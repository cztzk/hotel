//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList:new Array,
    pageSize: 8,
    more:true,
    page:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 产品列表
    let that=this;
    let productData = {
      categoryId: 17355
    }
    util.getProductList(productData, that);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getmore:function(){
    let that=this;
    that.setData({
      page:++that.data.page
    })
    console.log(that.data.page);
    let productData = {
      categoryId: 17355,
      page: that.data.page,
      pageSize: that.data.pageSize,
    }
    util.getProductList(productData, that);
  }
})