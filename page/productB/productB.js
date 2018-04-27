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
    
    house_type_item: [
      { value: 0, name: '住宅' },
      { value: 1, name: '别墅' },
      { value: 2, name: '商铺（办公楼）' },
      { value: 3, name: '厂房' }
    ],
    land_property_item:[
      { value: 0, name: '划拨' },
      { value: 1, name: '出让' },
      { value: 2, name: '转让' }
    ],
    access_area_item:[
      { value: '1', name: '上海其它区域' },
      { value: '2', name: '金山' },
      { value: '3', name: '崇明' },
      { value: '4', name: '奉贤' }
    ],
    access_range_item:[
      { value: 0, name: '未成年人' },
      { value: 1, name: '老人(65周岁以上)' }
    ],
    access_third_party_mortgage_item:[
      { value: 0, name: '直系亲属' },
      { value: 1, name: '其它' }
    ],
    spare_house_item: [
      { value: 0, name: '需要' },
      { value: 1, name: '不需要' }
    ],
    house_type: "",// '房屋-房产类型（0住宅、1别墅、2商铺（办公楼）、3厂房）',
    house_type_remarks: "",//'房屋-房产类型配注',
    land_property: "",//'房屋-土地性质（划拨、出让、转让）',
    access_area: "",// '房屋-准入区域',
    access_area_remarks: "",// '房屋-准入区域配注',
    area_reuqire: "",// '面积要求',
    house_age: "",// '房龄',
    access_range: "",// '接受未成年/老人',
    access_third_party_mortgage: "",//'是否接受第三方抵押(直系亲属、其他)',
    spare_house: "",//'是否需要备用房（0不需要1需要）',
    spare_house_remarks: "",// '备用房配注',

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = app.productData;
    this.setData({
      house_type:data.house_type,
      house_type_remarks: data.house_type_remarks,
      land_property: data.land_property,
      access_area: data.access_area,
      access_area_remarks: data.access_area_remarks,
      area_reuqire: data.area_reuqire,
      house_age: data.house_age,
      access_range: data.access_range,
      access_third_party_mortgage: data.access_third_party_mortgage,
      spare_house: data.spare_house,
      spare_house_remarks: data.spare_house_remarks,
    })
  },
  input1:function(e){
    app.productData.house_type = e.detail.value;
  },
  input2: function (e) {
    app.productData.house_type_remarks = e.detail.value;
  },
  input3: function (e) {
    app.productData.land_property = e.detail.value;
  },
  input4: function (e) {
    app.productData.access_area = e.detail.value;
  },
  input5: function (e) {
    app.productData.access_area_remarks = e.detail.value;
  },
  input6: function (e) {
    app.productData.area_reuqire = e.detail.value;
  },
  input7: function (e) {
    app.productData.house_age = e.detail.value;
  },
  input8: function (e) {
    app.productData.access_range = e.detail.value;
    console.log(app.productData);
  },
  input9: function (e) {
    app.productData.access_third_party_mortgage = e.detail.value;
    console.log(app.productData);
  },
  input10: function (e) {
    app.productData.spare_house = e.detail.value;
    console.log(app.productData);
  },
  input11: function (e) {
    app.productData.spare_house_remarks = e.detail.value;
    console.log(app.productData);
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
    console.log(app.productData);
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