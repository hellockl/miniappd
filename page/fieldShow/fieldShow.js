// page/fieldShow/fieldShow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product_name: 0,
    product_type: 0,
    trait: 0,//'产品特点',
    fund: 0,//'资金方',
    age: 0,// '人员-年龄',
    age_remarks: 0,// '人员-年龄备注',
    nationality: 0,//'人员-国、户籍(0中国、1港澳台、2福建)',
    credit_line: 0,//'人员-征信界定(最高逾期)',
    credit_line_remarks: 0,//'人员-征信界定配注',
    income: 0,// '人员-收入',
    house_type: 0,// '房屋-房产类型（0住宅、1别墅、2商铺（办公楼）、3厂房）',
    house_type_remarks: 0,//'房屋-房产类型配注',
    land_property: 0,//'房屋-土地性质（划拨、出让、转让）',
    access_area: 0,// '房屋-准入区域',
    access_area_remarks: 0,// '房屋-准入区域配注',
    area_reuqire: 0,// '面积要求',
    house_age: 0,// '房龄',
    access_range: 0,// '接受未成年/老人',
    access_third_party_mortgage: 0,//'是否接受第三方抵押(直系亲属、其他)',
    spare_house: 0,//'是否需要备用房（0不需要1需要）',
    spare_house_remarks: 0,// '备用房配注',
    quota: 0,// '额度',
    quota_remarks: 0,// '额度配注',
    mortgage_rate: 0,// '抵押率',
    term: 0,// '期限',
    term_remarks: 0,// '期限配注',
    repayment_method: 0,// '还款方式(先息后本、等额本息、等额本金、等本等息、其他)',
    repayment_method_remarks: 0,// '还款方式配注',
    repayment_date: 0,// '还款日期',
    loan_rate: 0,// '贷款利率',
    loan_rate_remarks: 0,// '贷款利率配注',
    late_charge: 0,//'逾期罚息',
    deposit: 0,// '保证金',
    is_justice: 0,// '有无公正（0无；1有）',
    justice_fee: 0,// '公证费',
    is_evaluate: 0,//'有无评估',
    evaluate_fee: 0,// '评估费',
    settle_fee: 0,// '下户费',
    other_fee: 0,// '其它费用',
    package_content: 0,//'包装内容',
    required_materials: 0,// '所需材料',
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