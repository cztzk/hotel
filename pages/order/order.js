// pages/order/order.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: [], //产品id
    basicInfo: new Array, //产品相关数据
    occupancy: "", //入住时间
    leave: "", //离开时间
    amount: 0, //总价
    rooms: 1, //房间数
    service: 0, //服务费
    ispay: false, //是否支付
    ischoose: 1, //判断支付方式
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let uid = 66626;
    // let id = this.data.id.push(options.id);
    this.data.id.push(uid);
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
    let that = this;
    for (let i = 0; i < this.data.id.length; i++) {
      let productDetailData = {
        id: this.data.id[i]
      };
      util.getProductDetail(productDetailData, that);
    }
    this.gettime();
  },
  // 获得入住时间及离店时间
  gettime: function() {
    let value = wx.getStorageSync('time');
    let occupancy, leave;
    // 判断是否已选择入住及离开时间
    if (value) {
      occupancy = value[0].substring(5, 6) + "月" + value[0].substring(7, 9) + "日";
      leave = value[1].substring(5, 6) + "月" + value[1].substring(7, 9) + "日";
      this.setData({
        occupancy: occupancy,
        leave: leave
      });
    } else {
      // 未选择，默认当天及次日
      occupancy = util.getDateStr(null, 0).substring(5, 6) + "月" + util.getDateStr(null, 0).substring(7, 9) + "日";
      leave = util.getDateStr(null, 1).substring(5, 6) + "月" + util.getDateStr(null, 1).substring(7, 9) + "日";
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
  // 检查房间数格式及不超过最低房间数
  roomcheck: function(e) {
    let str = e.detail.value;
    let reg = /^[1-9]\d*$/;
    if (!reg.test(str)) {
      wx.showModal({
        title: '提示',
        content: '房间数只能为正整数',
      });
      this.setData({
        rooms: 1
      });
    } else {
      let stores = this.data.basicInfo[0].stores;
      if (str > stores) {
        wx.showModal({
          title: '提示',
          content: '没有更多的房间',
        });
        this.setData({
          rooms: 1
        });
      }
    }
  },
  settlement: function() {
    this.setData({
      ispay: true
    })
  },
  canpay: function() {
    this.setData({
      ispay: false
    })
  },
  choosefun: function(e) {
    let id = e.currentTarget.dataset.id;
    this.setData({
      ischoose: id
    })
  },
  payfun:function(){
   wx.showModal({
     title: '提示',
     content: '未有几口，默认支付',
     success: function (res) {
       if (res.confirm) {
         wx.navigateTo({
           url: '/pages/paying/paying',
         })
       } 
     }
   })
  }
})