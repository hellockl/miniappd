const API_URL = 'https://myetm.com/api/lyy/index.php/Index/';
const SEND_MSG_URL = 'http://192.168.1.124:1340/v1/sendMessage'
const Promise = require('./bluebird')

function fetchApi(URL,params,method) {
  
  return new Promise((resolve, reject) => {
    wx.request({
      url: URL,
      data: Object.assign({}, params),
      method: method,
      header: { 
        "Content-Type": "application/json",  //post
      },
      success: resolve,
      fail: reject
    })

  })
}

//得到产品列表
function getProductList(params){
  return fetchApi(API_URL + "getProductList",params,"GET").then(res=>res.data);
}
//得到产品详情
function getProductDetail(params){
  return fetchApi(API_URL + "getProductInfoById" ,params,"POST").then(res => res.data);
}
//新增甩单
function createProduct(params) {
  return fetchApi(API_URL + "createProduct", params, "POST").then(res => res.data);
}
function updateProduct(params) {
  return fetchApi(API_URL + "doUpdateProduct", params, "POST").then(res => res.data);
}


module.exports = {
  API_URL: API_URL,
  getProductList : getProductList,
  getProductDetail: getProductDetail,
  createProduct: createProduct,
  updateProduct:updateProduct
  
}