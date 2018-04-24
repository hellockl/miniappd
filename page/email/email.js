// page/email/email.js
var dataAPI = require("../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    email:"",
    block: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo)
  },
  submitData: function () {
    let params = {
      mail: this.data.email,
    };
    dataAPI.createEmailAddr(params).then((res) => {
      if(res.result==0){
        wx.switchTab({
          url: '../shuaidan/shuaidan',
        })
      }else{

      }
    })


  },
  mailInput: function (e) {
    if(e.detail.value==""){
      this.setData({
        email: e.detail.value,
        block:false
      })
    }else{
      this.setData({
        email: e.detail.value,
        block:true
      })
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