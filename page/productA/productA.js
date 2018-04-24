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
    
    
    age: "",// '人员-最小年龄',
    age_max: "",// '人员-最大年龄',
    age_remarks: "",// '人员-年龄备注',
    nationality: "",//'人员-国、户籍(0中国、1港澳台、2福建)',
    credit_line: "",//'人员-征信界定连(最高逾期)',
    credit_line2: "",//'人员-征信界定累(最高逾期)',
    credit_line_remarks: "",//'人员-征信界定配注',
    income: "",// '人员-收入',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.productData)
    var data = app.productData;
    this.setData({
      age: data.age == "" ? "":data.age,// '人员-最小年龄',
      age_max: data.age_max == "" ? "" : data.age_max,// '人员-最大年龄',
      age_remarks: data.age_remarks == "" ? "" : data.age_remarks,// '人员-年龄备注',
      nationality: data.nationality == "" ? "" : data.nationality,//'人员-国、户籍(0中国、1港澳台、2福建)',
      credit_line: data.credit_line == "" ? "" : data.credit_line,//'人员-征信界定连(最高逾期)',
      credit_line2: data.credit_line2 == "" ? "" : data.credit_line2,//'人员-征信界定累(最高逾期)',
      credit_line_remarks: data.credit_line_remarks == "" ? "" : data.credit_line_remarks,//'人员-征信界定配注',
      income: data.income == "" ? "" : data.income,// '人员-收入',
    })
  },
  input1: function (e) {
    app.productData.age = e.detail.value;
  },
  input1_1: function (e) {
    app.productData.age_max = e.detail.value;
  },
  input2: function (e) {
    app.productData.age_remarks = e.detail.value;
  },
  input3: function (e) {
    app.productData.nationality = e.detail.value;
  },
  input4: function (e) {
    app.productData.credit_line = e.detail.value;
  },
  input4_4: function (e) {
    app.productData.credit_line2 = e.detail.value;
  },
  input5: function (e) {
    app.productData.credit_line_remarks = e.detail.value;
  },
  input6: function (e) {
    app.productData.income = e.detail.value;
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