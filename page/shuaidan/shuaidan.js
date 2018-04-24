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
    marry_status: [
      { name: '已婚', value: 1 },
      { name: '未婚', value: 0, checked: 'true'},
    ],
    daka_status: [
      { name: '是', value: 1},
      { name: '否', value: 0, checked: 'true' },
    ],
    shebao_status: [
      { name: '有', value: 1 },
      { name: '无', value: 0, checked: 'true' },
    ],
    gjj_status: [
      { name: '有', value: 1 },
      { name: '无', value: 0, checked: 'true' },
    ],
    baodan_status: [
      { name: '有', value: 1 },
      { name: '无', value: 0, checked: 'true'},
    ],
    
    afterTaxMoney: "", //税后工资
    age: "", //年龄
    amountMoney: "", //意向金额
    backReat: "", //返佣比例
    basicWages: "", //打卡工资
    continuousWorklife: "", //工作年限
    customerName: "",//客户姓名
    gjjBase: "",//公积金缴纳基数
    gjjStatus: 1,//公积金状态1有0无
    marryStatus: 1,//0未婚1已婚
    policDetail: "",//保单情况
    policStatus: 1,//保单状态0无1有
    productId: "",//产品ID
    socialSecurityBase: "",//社保缴纳基数
    socialSecurityStatus: 1,//社保状态 0无1有
    cardPicture: "",
    grantPicture: "",
    selected:0,//0未选择产品1已选择产品
    id:0,
    productName:"",
    sbIsShow:false,
    gjjIsShow:false,
    bdIsShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  formSubmit:function(e){
    
        let params = e.detail.value;
        if(e.detail.value.amountMoney==""){
          wx.showToast({
            title: '请输入手机号',
            image: '../../image/error.png',
            duration: 2000
          })
          return false;
        }
        params.productId = parseInt(this.data.id);
        params.cardPicture = this.data.cardPicture;
        params.grantPicture = this.data.grantPicture;
        params.gjjStatus = parseInt(e.detail.value.gjjStatus);
        params.basicWages = parseInt(e.detail.value.basicWages);
        params.marryStatus = parseInt(e.detail.value.marryStatus);
        params.policStatus = parseInt(e.detail.value.policStatus);
        params.socialSecurityStatus = parseInt(e.detail.value.socialSecurityStatus);
        params.socialSecurityBase = e.detail.value.socialSecurityBase == "" ? 0 : parseInt(e.detail.value.socialSecurityStatus);
        params.gjjBase = e.detail.value.gjjBase == "" ? 0 : parseInt(e.detail.value.gjjBase);
        console.log(params);
        var that = this;
        dataAPI.createOrder(params).then((res) => {
          if(res.result==0){
            that.setData({
              
              afterTaxMoney: "", //税后工资
              age: "", //年龄
              amountMoney: "", //意向金额
              backReat: "", //返佣比例
              basicWages: "", //打卡工资
              continuousWorklife: "", //工作年限
              customerName: "",//客户姓名
              gjjBase: "",//公积金缴纳基数
              gjjStatus: 1,//公积金状态1有0无
              marryStatus: 1,//0未婚1已婚
              policDetail: "",//保单情况
              policStatus: 1,//保单状态0无1有
              productId: "",//产品ID
              socialSecurityBase: "",//社保缴纳基数
              socialSecurityStatus:1,//社保状态 0无1有
              cardPicture: "",
              grantPicture: "",
              selected:0,
              id: 0,
              productName: "",

            });
            wx.showToast({
              title: '甩单成功',
              icon: 'success',
              duration: 2000,
              success: function (res) {
                setTimeout(function () {
                  //要延时执行的代码
                  wx.switchTab({
                    url: '../index/index'
                  })
                }, 2000) //延迟时间
              }

            })
         
      }
    });
    
  },
  radioChangeSB:function(e){
    console.log(e.detail.value);
    this.setData({
      sbIsShow:e.detail.value==0?false:true
    })
  },
  radioChangeGJJ: function (e) {
    this.setData({
      gjjIsShow: e.detail.value == 0 ? false : true
    })
  },
  radioChangeBD: function (e) {
    this.setData({
      bdIsShow: e.detail.value == 0 ? false : true
    })
  },
  navToProductList: function () {
    wx.navigateTo({
      url: '../productlist/productlist',
    })
  },
  navToEmail:function(){
    wx.navigateTo({
      url: '../email/email',
    })
  },
  //传图片
  chooseImage:function(){
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        wx.uploadFile({
          url: dataAPI.API_URL + "uploadPicture", //图片上传接口地址
          filePath: res.tempFilePaths[0],
          name: 'file',
          header:{
            "Content-Type": "application/json",  //post
            "Authorization": "Bearer 39764c78-e9e6-4ba5-b17b-909d79eb42b0"
          },
          formData: {
            'imagefile': res.tempFilePaths[0]
          },
          success: function (ress) {
            console.log(JSON.parse(ress.data).data);
            that.setData({
              cardPicture: JSON.parse(ress.data).data
            })
          },
          fail: function (res) {
            console.log("error")
          },
        })

      }
    })
  },
  chooseImage2: function () {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        wx.uploadFile({
          url: dataAPI.API_URL + "/uploadPicture", //图片上传接口地址
          filePath: res.tempFilePaths[0],
          name: 'file',
          header: {
            "Content-Type": "application/json",  //post
            "Authorization": "Bearer 39764c78-e9e6-4ba5-b17b-909d79eb42b0"
          },
          formData: {
            'imagefile': res.tempFilePaths[0]
          },
          success: function (ress) {
            console.log(JSON.parse(ress.data).data);
            that.setData({
              grantPicture: JSON.parse(ress.data).data
            })
          },
          fail: function (res) {
            console.log("error")
          },
        })

      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src

    wx.previewImage({
      current: current,
      urls: this.data.imageList
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
    let params_data = { openId: "olRyZ5ZwFkJrNz9bBzmbo6JLGsRY" };
    dataAPI.getUserInfo(params_data).then((res) => {
      if (!res.data.telephone) {
        wx.navigateTo({
          url: '../contact/contact',
        })
        return false;
      } else {
        if (app.globalData.id != 0) {
          this.setData({
            selected: 1,
            id: app.globalData.id,
            productName: app.globalData.productName
          })
        } else {
          this.setData({
            selected: 0,
          })
        }
      }
    })
    

    // var that = this;
    // wx.getSetting({
    //   success(res) {
    //     if (!res.authSetting['scope.userInfo']) {

    //       wx.authorize({
    //         scope: 'scope.userInfo',
    //         success() {
    //           // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
    //           wx.getUserInfo({
    //             success: function (res) {
    //               wx.setStorageSync('userInfo', res.userInfo);
    //               var openid = wx.getStorageSync('openid');
    //               let data = {
    //                 openId: openid,
    //                 nickName: res.userInfo.nickName,
    //                 portrait: res.userInfo.avatarUrl
    //               }
    //               that.loginSystem(data);
    //             }
    //           })
    //         },
    //         fail() {
    //           wx.openSetting({

    //           })
    //         }
    //       })
    //     } else {
    //       var userInfo = wx.getStorageSync('userInfo');
    //       if (!userInfo) {
    //         wx.getUserInfo({
    //           success: function (res) {
    //             wx.setStorageSync('userInfo', res.userInfo);
    //             var openid = wx.getStorageSync('openid');
                
    //             let data = {
    //               openId: openid,
    //               nickName: res.userInfo.nickName,
    //               portrait: res.userInfo.avatarUrl
    //             }
    //             that.loginSystem(data);
    //           }
    //         })
    //       } 
    //     }
    //   }
    // })
  },
  loginSystem(data) {
    dataAPI.wechatLoginSystem(data).then((res) => {
      console.log(res);
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