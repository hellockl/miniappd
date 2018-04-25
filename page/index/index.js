var app = getApp();
var dataAPI = require("../../utils/data.js");
var util = require("../../utils/util.js");
Page({
  
  data: {
    isMy:false,
    product_list1:[],
    product_list2: [],
    product_list3: [],
    nationality_item: [
      { name: '中国', value: 0 },
      { name: '港澳台', value: 1 },
      { name: '福建', value: 2 },
    ],
    
      headPic:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLs1FRrgeeEYuZWfWFEdWE7ibAPye89EBqYGKPM7AZdaRwLvL739EdbYPlbaBB4xictCjzAtRejRtcw/0"
  },
  onLoad(e) {
    console.log(util.getCheckedList(this.data.nationality_item,"0,2"));
    var openid = wx.getStorageSync('openid');
    if (openid =="oJbL05SHv-F5-u1-utKJZ03RTJr4"){
      
      this.setData({
        isMy:true
      });
    }
    let params = {page:0,size:2,type:1};
    dataAPI.getProductList(params).then((res) => {
      this.setData({
        product_list1 : res.data
      });
    });
    let params2 = { page: 0, size: 2, type: 2 };
    dataAPI.getProductList(params2).then((res) => {
      this.setData({
        product_list2: res.data
      });
    });
    let params3 = { page: 0, size: 2, type: 3 };
    dataAPI.getProductList(params3).then((res) => {
      this.setData({
        product_list3: res.data
      });
    });
    
    
    
  },
  navToCall:function(){
    wx.makePhoneCall({
      phoneNumber: '18701881920' //仅为示例，并非真实的电话号码
    })
  },
  navToAddProduct: function (e) {
    wx.navigateTo({
      url: '../addproduct/addproduct',
    })
  },
  navToProductDetail: function (e) {
    wx.navigateTo({
      url: '../productdetail/productdetail?id=' + e.currentTarget.id,
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})