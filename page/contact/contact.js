// page/contact/contact.js
var interval = null //倒计时函数
var dataAPI = require("../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '获取验证码', //倒计时 
    currentTime: 60,
    telephone:"",
    name:"",
    smsCode:"",
    //back:"mine"
    block:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if(options.back=="shuaidan"){
    //   this.setData({
    //     back:"shuaidan"
    //   });
    // }
  },
  submitData:function(){
    let openid = wx.getStorageSync('openid');
    
    let params = {
      name:this.data.name,
      openId:openid,
      smsCode:this.data.smsCode,
      telephone:this.data.telephone
    };
    let that = this;
    dataAPI.wechatBandMobile(params).then((res) => {
      wx.navigateBack({
        delta: 1
      });
      
    })
    

  },
  nameInput: function (e) {  
    this.setData({
      name: e.detail.value
    });
    this.checkForm();
  },
  telephoneInput:function(e){
    
    this.setData({
      telephone: e.detail.value,
    });
    this.checkForm();
  },
  codeInput: function (e) {
    this.setData({
      smsCode: e.detail.value
    });
    this.checkForm();
  },
  checkForm:function(){
    if (this.data.name == "" || this.data.telephone == "" || this.data.smsCode==""){
      this.setData({        
        block: false
      });
    }else{
      this.setData({
        block: true
      });
    }
  },
  
  getCode: function (options) {
    var that = this;
    var currentTime = that.data.currentTime
    interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: currentTime + '秒'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTime: 61,
          disabled: false
        })
      }
    }, 1000)
  },
  getVerificationCode:function(event){
    if(this.data.telephone==""){
      wx.showToast({
        title: '请输入手机号',
        image: '../../image/error.png',
        duration: 2000
      })
      return false;     
    }
    let params = { telephone:this.data.telephone,"msgTemplateFlag":1};
    dataAPI.sendMessage(params).then((res) => {
     
      this.getCode();
      var that = this
      that.setData({
        disabled: true
      })
    });
    
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