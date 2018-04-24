// page/productlist/productlist.js
var dataAPI = require("../../utils/data.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let params = { page: 0, size: 10, type: 0 };
    
    dataAPI.getProductList(params).then((res) => {

      this.setData({
        product_list: res.data
      });
    });
  },
  navToProductDetail: function (e) {
    wx.navigateTo({
      url: '../productdetail/productdetail?id=' + e.currentTarget.id,
    })
  },
  navToAddProduct: function (e) {
    wx.navigateTo({
      url: '../addproduct/addproduct',
    })
  },
  navToSearchProduct: function (e) {
    wx.navigateTo({
      url: '../search/search',
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
    console.log(app.searchParams);
    let params = { page: 0, size: 10, type: 0 };
    var data = app.searchParams;
    if (data.age) {
      params.age = data.age;
    }
    if (data.nationality!="") {
      params.nationality = data.nationality;
    }
    if (data.house_type != "") {
      params.house_type = data.house_type;
    }
    if (data.land_property != "") {
      params.land_property = data.land_property;
    }
    if (data.area_reuqire != "") {
      params.area_reuqire = data.area_reuqire;
    }
    if (data.house_age) {
      params.house_age = data.house_age;
    }
    if (data.access_range != "") {
      params.access_range = data.access_range;
    }
    if (data.access_third_party_mortgage!="") {
      params.access_third_party_mortgage = data.access_third_party_mortgage;
    }
    if (data.spare_house!="") {
      params.spare_house = data.spare_house;
    }
    if (data.is_justice != "") {
      params.is_justice = data.is_justice;
    }
    dataAPI.getProductList(params).then((res) => {

      this.setData({
        product_list: res.data
      });
      app.searchParams={
        age: "",// '人员-年龄',
        nationality: "",//'人员-国、户籍(0中国、1港澳台、2福建)',
        house_type: "",
        land_property: "",
        area_reuqire: "",
        house_age: "",
        access_range: "",
        access_third_party_mortgage: "",
        spare_house: "",
        is_justice: ""
      }
    });
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