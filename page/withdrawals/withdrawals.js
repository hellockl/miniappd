// page/withdrawals/withdrawals.js
var dataAPI = require("../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:"",
    receiveName:"",
    bankName:"",
    bankNum:"",
    block:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  moneyInput:function(e){
    this.setData({
      money: e.detail.value
    });
    this.checkForm();
  },
  bankNumInput: function (e) {
    this.setData({
      bankNum: e.detail.value
    });
    this.checkForm();
  },
  bankNameInput: function (e) {
    this.setData({
      bankName: e.detail.value
    });
    this.checkForm();
  },
  receiveNameInput: function (e) {
    this.setData({
      receiveName: e.detail.value
    });
    this.checkForm();
  },
  submitData:function(){
    let params = {
      money: this.data.money,
      receiveName: this.data.receiveName,
      bankName: this.data.bankName,
      bankNum: this.data.bankNum
    };
    dataAPI.createWithdrawals(params).then((res) => {
      console.log(res);
    });
  },
  checkForm: function () {
    if (this.data.bankNum == "" || this.data.bankName == "" || this.data.receiveName == "" || this.data.money == "") {
      this.setData({
        block: false
      });
    } else {
      this.setData({
        block: true
      });
    }
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