// page/productdetail/productdetail.js
var app = getApp();
var dataAPI = require("../../utils/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: [
      '人员', '房屋', '产品'
    ],
    isMy: false,
    index: 0,
    currentTab: 0, // 导航栏切换索引，
    
    productName:"",
    productInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var openid = wx.getStorageSync('openid');
    if (openid == "oJbL05SHv-F5-u1-utKJZ03RTJr4") {
      
      this.setData({
        isMy: true
      });
    }
    let param = {id:options.id};
    dataAPI.getProductDetail(param).then((res) => {
      
      wx.setNavigationBarTitle({
        title: res.data.product_name
      });
      this.setData({
        productInfo: res.data,
        
        productName:res.data.product_name
      });
    });
    
  },
  // 导航栏操作
  onNavbarTap: function (ev) {
    this.setData({ currentTab: ev.currentTarget.dataset.index });
  },
  navToEditProduct: function (e) {
    console.log(e.currentTarget.id);
    
    wx.navigateTo({
      url: '../addproduct/addproduct?id=' + e.currentTarget.id,
    })
  },
  navToFieldShow: function (e) {
    console.log(e.currentTarget.id);

    wx.navigateTo({
      url: '../fieldShow/fieldShow?id=' + e.currentTarget.id,
    })
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
  
  }
})