//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');  
Page({
  data: {
    // 轮播图属性
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    ],
    pageSize:8,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // 多少条评论
    comment:5415,
    // 入住时间
    occupancy: null,
    // 离开时间
    leave:null,
    productList:new Array,
  },
  onLoad: function (options) {
    // 获取banner图
    let that=this;
    let bannerData={
      type: "hotel"
    };
    util.getBanner(bannerData, that);
    // 产品列表
    let productData = {
      categoryId: 17355
    }
    util.getProductList(productData,that)
  },
  onShow: function () {
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

})