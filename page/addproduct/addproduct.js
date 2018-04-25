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
    array: ['主打产品', '民间产品', '银行产品'],
    is_index_item: [
      { name: '是', value: 1 },
      { name: '否', value: 0 },
    ],
    show:true,
    product_name: "",
    product_type:0,
    is_index:"",
    trait: "",//'产品特点',
    fund: "",//'资金方',
    package_content: "",//'包装内容',
    required_materials: "",// '所需材料',
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    app.productData.product_type = e.detail.value + 1;
    this.setData({
      product_type: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.id){
      wx.setNavigationBarTitle({
        title: "编辑产品"
      });
      let param = { id: options.id };
      dataAPI.getProductDetail(param).then((res) => { 
        app.productData = res.data,       
        this.setData({
          product_name: res.data.product_name,
          product_type: res.data.product_type,
          is_index:res.data.is_index,
          trait: res.data.trait,//'产品特点',
          fund: res.data.fund,//'资金方',
          package_content: res.data.package_content,//'包装内容',
          required_materials: res.data.required_materials,// '所需材料',
          is_index_item: util.getCheckedList(this.data.is_index_item, res.data.is_index)
        });
      });
    }else{
      wx.setNavigationBarTitle({
        title: "添加产品"
      });
      app.productData = {
        product_name: "",
        product_type: 0,
        is_index:"",
        trait: "",//'产品特点',
        fund: "",//'资金方',
        age: "",// '人员-年龄',
        age_max: "",// '人员-最大年龄',
        age_remarks: "",// '人员-年龄备注',
        nationality: "",//'人员-国、户籍(0中国、1港澳台、2福建)',
        credit_line: "",//'人员-征信界定(最高逾期)',
        credit_line2: "",//'人员-征信界定(最高逾期)',
        credit_line_remarks: "",//'人员-征信界定配注',
        income: "",// '人员-收入',
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
        package_content: "",//'包装内容',
        required_materials: "",// '所需材料',
      };
    }
    console.log(app.productData);
  },
  input_isindex:function(e){
    app.productData.is_index = e.detail.value;
  },
  input1: function (e) {
    app.productData.product_name = e.detail.value;
  },
  input2: function (e) {
    app.productData.trait = e.detail.value;
  },
  input3: function (e) {
    app.productData.fund = e.detail.value;
  },
  input4: function (e) {
    app.productData.package_content = e.detail.value;
  },
  input5: function (e) {
    app.productData.required_materials = e.detail.value;
  },
  
  formSubmit:function(e){   
    let data = app.productData;
    data.nationality = data.nationality.join();
    console.log(data);
    if(data.product_name==""){
      wx.showToast({
        title: '请输入产品名称',
        image: '../../image/error.png',
        duration: 2000
      })
      return false;
    }
    
    console.log(data);
    
    var that = this;
    if(data.id){
      dataAPI.updateProduct(data).then((res) => {
        if (res.code == "200") {

          wx.showToast({
            title: '更新成功',
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
    }else{
      dataAPI.createProduct(data).then((res) => {
        if (res.code == "200") {

          wx.showToast({
            title: '添加成功',
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
    console.log('aaaaaaaaaaaaaa');
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