// page/shuaidan/shuaidan.js
var app = getApp();
var dataAPI = require("../../utils/data.js");
var util = require("../../utils/util.js");
var maxTime = 2
var currentTime = maxTime //倒计时的事件（单位：s） 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    repayment_method_item: [
      { name: '先息后本', value: 0},
      { name: '等额本息', value: 1 },
      { name: '等额本金', value: 2 },
      { name: '等本等息', value: 3 },
      { name: '其它', value: 4 }
    ],
    term_item:[
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
    quota: "",// '额度',
    quota_remarks: "",// '额度配注',
    mortgage_rate: "",// '抵押率',
    term: "",// '期限',
    term_remarks: "",// '期限配注',
    repayment_method: "",// '还款方式(先息后本、等额本息、等额本金、等本等息、其他)',
    repayment_method_remarks: "",// '还款方式配注',
    repayment_date: "",// '还款日期',
    loan_rate: "",// '贷款利率',
    loan_rate_remarks: "",// '贷款利率配注',
    late_charge: "",//'逾期罚息',
    deposit: "",// '保证金',
    is_justice: "",// '有无公正（0无；1有）',
    justice_fee: "",// '公证费',
    is_evaluate: "",//'有无评估',
    evaluate_fee: "",// '评估费',
    settle_fee: "",// '下户费',
    other_fee: "",// '其它费用',
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = app.productData;
    this.setData({
      quota: data.quota,
      quota_remarks: data.quota_remarks,
      mortgage_rate: data.mortgage_rate,
      term: data.term,
      
      term_remarks: data.term_remarks,
      repayment_method: data.repayment_method,
      repayment_method_remarks: data.repayment_method_remarks,
      repayment_date: data.repayment_date,
      loan_rate: data.loan_rate,
      loan_rate_remarks: data.loan_rate_remarks,
      late_charge: data.late_charge,
      deposit: data.deposit,
      is_justice: data.is_justice,
      justice_fee: data.justice_fee,
      is_evaluate: data.is_evaluate,
      evaluate_fee: data.evaluate_fee,
      settle_fee: data.settle_fee,
      other_fee: data.other_fee,
      term_item: util.getCheckedList(this.data.term_item, data.term),
      repayment_method_item: util.getCheckedList(this.data.repayment_method_item, data.repayment_method),
      is_justice_item: util.getCheckedList(this.data.is_justice_item, data.is_justice),
      is_evaluate_item: util.getCheckedList(this.data.is_evaluate_item, data.is_evaluate),
    })
  },
  input1: function (e) {
    app.productData.quota = e.detail.value;
  },
  input2: function (e) {
    app.productData.quota_remarks = e.detail.value;
  },
  input3: function (e) {
    app.productData.mortgage_rate = e.detail.value;
  },
  input4: function (e) {
    app.productData.term = e.detail.value;
  },
  input5: function (e) {
    app.productData.term_remarks = e.detail.value;
  },
  input6: function (e) {
    app.productData.repayment_method = e.detail.value;
  },
  input7: function (e) {
    app.productData.repayment_method_remarks = e.detail.value;
  },
  input8: function (e) {
    app.productData.repayment_date = e.detail.value;
  },
  input9: function (e) {
    app.productData.loan_rate = e.detail.value;
  },
  input10: function (e) {
    app.productData.loan_rate_remarks = e.detail.value;
  },
  input11: function (e) {
    app.productData.late_charge = e.detail.value;
  },
  
  input12: function (e) {
    app.productData.deposit = e.detail.value;
  },
  input13: function (e) {
    app.productData.is_justice = e.detail.value;
  },
  input14: function (e) {
    app.productData.justice_fee = e.detail.value;
  },
  input15: function (e) {
    app.productData.is_evaluate = e.detail.value;
  },
  input16: function (e) {
    app.productData.evaluate_fee = e.detail.value;
  },
  input17: function (e) {
    app.productData.settle_fee = e.detail.value;
  },
  input18: function (e) {
    app.productData.other_fee = e.detail.value;
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