// page/shuaidan/shuaidan.js
var app = getApp();
var dataAPI = require("../../utils/data.js");
var maxTime = 2
var currentTime = maxTime //倒计时的事件（单位：s） 
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      { value: '1', name: '黄浦' },
      { value: '2', name: '徐汇' },
      { value: '3', name: '长宁' },
      { value: '4', name: '静安' }
    ],
    access_range_item: [
      { value: 0, name: '未成年人' },
      { value: 1, name: '老人' }
    ],
    access_third_party_mortgage_item: [
      { value: 0, name: '直系亲属' },
      { value: 1, name: '其它' }
    ],
    spare_house_item: [
      { value: 1, name: '需要' },
      { value: 0, name: '不需要' }
    ],
    is_justice_item: [
      { name: '有', value: 1 },
      { name: '无', value: 0 },
    ],

    age: "",// '人员-年龄',
    nationality: "",//'人员-国、户籍(0中国、1港澳台、2福建)',
    house_type: "",
    land_property: "",
    area_reuqire: "",
    house_age:"",
    access_range:"",
    access_third_party_mortgage:"",
    spare_house:"",
    is_justice:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  input1: function (e) {
     this.setData({
       age:e.detail.value
     })
  },
  input2: function (e) {
    console.log(e.detail.value.sort());
    this.setData({
      nationality: e.detail.value.sort()
    })
  },
  input3: function (e) {
    this.setData({
      house_type: e.detail.value.sort()
    })
  },
  input4: function (e) {
    this.setData({
      land_property: e.detail.value.sort()
    })
  },
  input5: function (e) {
    this.setData({
      area_reuqire: e.detail.value
    })
  },
  input6: function (e) {
    this.setData({
      house_age: e.detail.value
    })
  },
  input7: function (e) {
    this.setData({
      access_range: e.detail.value.sort()
    })
  },
  input8: function (e) {
    this.setData({
      access_third_party_mortgage: e.detail.value.sort()
    })
  },
  input9: function (e) {
    this.setData({
      spare_house: e.detail.value.sort()
    })
  },
  input10: function (e) {
    this.setData({
      is_justice: e.detail.value
    })
  },
  formSubmit: function (e) {   
    // age: "",// '人员-年龄',
    // nationality: "",//'人员-国、户籍(0中国、1港澳台、2福建)',
    // house_type: "",
    // land_property: "",
    // area_reuqire: "",
    // house_age:"",
    // access_range:"",
    // access_third_party_mortgage:"",
    // spare_house:"",
    // is_justice:""
    var data = app.searchParams;
    data.age =  this.data.age 
    data.nationality= this.data.nationality.toString();
    data.house_type = this.data.house_type.toString();
    data.land_property = this.data.land_property.toString();
    data.area_reuqire=  this.data.area_reuqire;
    data.house_age=  this.data.house_age;
    data.access_range = this.data.access_range.toString();
    data.access_third_party_mortgage = this.data.access_third_party_mortgage.toString();
    data.spare_house = this.data.spare_house.toString();
    data.is_justice=  this.data.is_justice;
    
    wx.switchTab({
      url: '../productlist/productlist',
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