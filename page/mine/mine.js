// page/mine/mine.js
var dataAPI = require("../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalMoney:0,
    waitMoney:0,
    avatarUrl:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    var that = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.getUserInfo({
                success: function (res) {
                  wx.setStorageSync('userInfo', res.userInfo);
                  var openid = wx.getStorageSync('openid');
                  console.log(openid);
                  let data = {
                    openId: openid,
                    nickName: res.userInfo.nickName,
                    portrait: res.userInfo.avatarUrl
                  }
                  that.loginSystem(data);
                  that.setData({
                    avatarUrl: res.userInfo.avatarUrl
                  })
                }
              })
            },
            fail() {
              wx.openSetting({

              })
            }
          })
        }else{
          var userInfo = wx.getStorageSync('userInfo');
          console.log(userInfo);
          //var openid = wx.getStorageSync('openid');
          if (!userInfo) {    
            wx.getUserInfo({
              success: function (res) {
                wx.setStorageSync('userInfo', res.userInfo);
                var openid = wx.getStorageSync('openid');
                console.log(openid);
                let data = {
                  openId:openid,
                  nickName:res.userInfo.nickName,
                  portrait: res.userInfo.avatarUrl
                }
                that.loginSystem(data);
                that.setData({
                  avatarUrl: res.userInfo.avatarUrl
                })
              }
            })
          } else {
            that.setData({
              avatarUrl: userInfo.avatarUrl
            })
          }
        }
      }
    })
    let openid = wx.getStorageSync('openid');
    let params = {
      openId: openid,
    };
    dataAPI.getUserInfo(params).then((res) => {
      this.setData({
        totalMoney: res.data.total_money,
        waitMoney: res.data.wait_money,
        name: res.data.name
      });
    })
    
  },
  loginSystem(data){
    dataAPI.wechatLoginSystem(data).then((res) => {
      console.log(res);
    })
  },
  navToOrderList: function () {
    wx.navigateTo({
      url: '../orderlist/orderlist',
    })
  },
  navToContact: function () {
    wx.navigateTo({
      url: '../contact/contact',
    })
  },
  navToWithdrawals: function () {
    wx.navigateTo({
      url: '../withdrawals/withdrawals',
    })
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