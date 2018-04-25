//app.js
var dataAPI = require("./utils/data.js");
App({
  onLaunch: function () {
    
    var openid = wx.getStorageSync('openid');
    console.log(openid);
    var that = this;
    if(!openid){
      wx.login({
        success: function (res) {
          console.log(res.code);
          if (res.code) {
            //发起网络请求         
            wx.request({
              url: dataAPI.API_URL +"getOpenidByCode",
              method: 'POST',
              data: {
                code: res.code,
              },
              header: {},
              success: function (result) {
                wx.setStorageSync("openid", result.data.data)
                //that.globalData.openid = result.data.data;
               
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
    }
    
    
  },
  
  globalData: {
    userInfo: null,
    openid:'',
    id:0,
    productName:'',
  },
  productData:{
    product_name: "",
    product_type:0,
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
  },
  searchParams:{
    age: "",// '人员-年龄',
    nationality: "",//'人员-国、户籍(0中国、1港澳台、2福建)',
    house_type: "",
    land_property: "",
    area_reuqire: "",
    house_age: "",
    access_range: "",
    access_third_party_mortgage: "",
    spare_house: "",
    is_justice: ""
  }

  
 
  
})