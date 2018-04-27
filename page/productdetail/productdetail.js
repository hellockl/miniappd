// page/productdetail/productdetail.js
var app = getApp();
var dataAPI = require("../../utils/data.js");
var util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: [
      '人员', '房屋', '产品'
    ],
    nationality_item: [
      { name: '中国', value: 0 },
      { name: '港澳台', value: 1 },
      { name: '福建', value: 2 },
    ],
    house_type_item: [
      { value: 0, name: '住宅' },
      { value: 1, name: '别墅' },
      { value: 2, name: '商铺（办公楼）' },
      { value: 3, name: '厂房' }
    ],
    land_property_item: [
      { value: 0, name: '划拨' },
      { value: 1, name: '出让' },
      { value: 2, name: '转让' }
    ],
    access_area_item: [
      { value: '1', name: '上海其它区域' },
      { value: '2', name: '金山' },
      { value: '3', name: '崇明' },
      { value: '4', name: '奉贤' }
    ],
    access_range_item: [
      { value: 0, name: '未成年人' },
      { value: 1, name: '老人(65周岁以上)' }
    ],
    access_third_party_mortgage_item: [
      { value: 0, name: '直系亲属' },
      { value: 1, name: '其它' }
    ],
    spare_house_item: [
      { value: 0, name: '需要' },
      { value: 1, name: '不需要' }
    ],
    repayment_method_item: [
      { name: '先息后本', value: 0 },
      { name: '等额本息', value: 1 },
      { name: '等额本金', value: 2 },
      { name: '等本等息', value: 3 },
      { name: '其它', value: 4 }
    ],
    term_item: [
      { name: '1年', value: 1 },
      { name: '最长20年', value: 2 }

    ],
    is_justice_item: [
      { name: '有', value: 1 },
      { name: '无', value: 0 },
    ],
    is_evaluate_item: [
      { name: '有', value: 1 },
      { name: '无', value: 0 }
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
      res.data.nationality = util.getNameByValue(this.data.nationality_item, res.data.nationality);
      res.data.house_type = util.getNameByValue(this.data.house_type_item, res.data.house_type);
      res.data.land_property = util.getNameByValue(this.data.land_property_item, res.data.land_property);
      res.data.access_range = util.getNameByValue(this.data.access_range_item, res.data.access_range);
      res.data.access_area = util.getNameByValue(this.data.access_area_item, res.data.access_area);
      res.data.access_third_party_mortgage = util.getNameByValue(this.data.access_third_party_mortgage_item, res.data.access_third_party_mortgage);
      res.data.spare_house = util.getNameByValue(this.data.spare_house_item, res.data.spare_house);
      res.data.repayment_method = util.getNameByValue(this.data.repayment_method_item, res.data.repayment_method);
      res.data.term = util.getNameByValue(this.data.term_item, res.data.term);
      res.data.is_justice = util.getNameByValue(this.data.is_justice_item, res.data.is_justice);
      res.data.is_evaluate = util.getNameByValue(this.data.is_evaluate_item, res.data.is_evaluate);
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