// page/orderlist/orderlist.js
var dataAPI = require("../../utils/data.js");
var util = require('../../utils/util.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let params = { page: 0, size: 2 };
    let status_arr = ["待审核", "已审核", "客户对接中", "进件审核", "费用结算", "已放款","审核未通过"];
    dataAPI.getMyOrderList(params).then((res) => {
      for(var i=0;i<res.data.length;i++){
        res.data[i].createTime = util.formatTime2(res.data[i].createTime,"Y-M-D" );
        res.data[i].status_name = status_arr[res.data[i].status];
      }
      this.setData({
        orderList: res.data
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  onPullDownRefresh: function () {
    // Do something when pull down.
    console.log("下拉刷新。。。。");
    this.onLoad();
    wx.showNavigationBarLoading() ;
    wx.stopPullDownRefresh();
    //wx.hideNavigationBarLoading();
  },
  onReachBottom() {
    console.log("上拉加载更多。。。");
    // var arr = this.data.dataList, max = Math.max(...arr);
    // if (this.data.count < 3) {
    //   for (var i = max + 1; i <= max + 5; ++i) {
    //     arr.push(i);
    //   }
    //   this.setData({
    //     dataList: arr,
    //     count: ++this.data.count
    //   });
    // } else {
    //   wx.showToast({
    //     title: '没有更多数据了！',
    //     image: '../../src/images/noData.png',
    //   })
    // }
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