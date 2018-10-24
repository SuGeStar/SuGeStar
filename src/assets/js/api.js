import axios from 'axios'
import { Toast } from 'mint-ui'
// 接口url
var url = 'http://www.nyycstar.com/api/'
// var url = 'http://ycstar.test/api/'
var imgUrl = 'http://img.nyycstar.com/'
let token = localStorage.getItem('token')
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = url

export function Post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        if (response.data.code === 200) {
          resolve(response.data)
        } else if (response.data.code === 403) {
          Toast({
            message: '您在已经在其他地方登录，请重新登录',
            position: 'bottom',
            duration: 2000
          })
        } else {
          Toast({
            message: response.data.msg
          })
        }
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export function Get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        if (response.data.code === 200 || response.data.code === 500) {
          resolve(response.data)
        } else if (response.data.code === 403) {
          Toast({
            message: '您在已经在其他地方登录，请重新登录',
            position: 'bottom',
            duration: 2000
          })
        } else {
          Toast({
            message: response.data.msg
          })
        }
      }, err => {
        reject(err)
        Toast({
          message: '网络延时，请稍后重试'
        })
      })
      .catch((error) => {
        reject(error)
        Toast({
          message: '网络延时，请稍后重试'
        })
      })
  })
}

export default {
  sendSms (params) {
    // 发送手机验证码
    return Get(`/sendSms?phone=${params.phone}`)
  },
  mine (params) {
    // 开采矿石
    return Post(`/get`, params)
  },
  noMine () {
    // 获得用户未开采矿石
    return Get(`/notGet?token=` + token)
  },
  checkSmsCode (params) {
    // 检查手机验证码
    return Get(`/checkSmsCode?phone=${params.phone}&code=${params.code}`)
  },
  apply (params) {
    // 申请升级
    return Post('/apply', params)
  },
  availableGold () {
    // 获取可用星钻
    return Get(`/availableGold?token=${token}`)
  },
  applyWithdraw (params) {
    // 申请提现
    return Post('/applyWithdraw', params)
  },
  applyForce (params) {
    return Post('/freed', params)
  },
  withdrawList (params) {
    // 提现列表
    return Get(`/withdrawList/${params.page}?token=${token}`)
  },
  createRechargeOrder (params) {
    // 充值订单创建
    return Post('/createRechargeOrder', params)
  },
  getBankDefault () {
    // 获取默认银行卡信息
    return Get(`/getBankDefault?token=${token}`)
  },
  occupancyRate () {
    // 团队看板
    return Get(`/occupancyRate?token=${token}`)
  },
  registers (params) {
    // 我的邀请
    return Get(`/registers/${params.page}?token=${token}`)
  },
  upgrades (params) {
    // 我的推荐
    return Get(`/upgrades/${params.page}?token=${token}`)
  },
  profit (params) {
    // 代币收入
    return Get(`/profit/${params.page}?token=${token}`)
  },
  expenses (params) {
    // 代币支出
    return Get(`/expenses/${params.page}?token=${token}`)
  },
  kbExpenses (params) {
    // 星币支出
    return Get(`/kbExpenses/${params.page}?token=${token}`)
  },
  alreadyGetMonth () {
    // 星币收入(月)
    return Get(`/alreadyGetMonth/1?token=${token}`)
  },
  alreadyGetDay (params) {
    // 星币收入(天)
    return Get(`/alreadyGetDay/${params.page}?token=${token}&times=${params.time}`)
  },
  getRecordCode () {
    // 推荐码和节点人码
    return Get(`/getRecordCode?token=${token}`)
  },
  waitPlacement () {
    // 我的待安置
    return Get(`/waitPlacement/1?token=${token}`)
  },
  relationList () {
    // 团队看板
    return Get(`/branches?token=${token}`)
  },
  setNickname (params) {
    // 修改昵称
    return Post('/setNickname', params)
  },
  forgetPassword (params) {
    // 忘记登录密码
    return Post('forgetPassword', params)
  },
  resetPassword (params) {
    // 重置登录密码
    return Post('resetPassword', params)
  },
  verifyPasswd (params) {
    // 验证登录密码
    return Post('verifyPasswd', params)
  },
  forgetPaymentPassword (params) {
    // 忘记支付密码
    return Post('forgetPaymentPassword', params)
  },
  verifyPaymentPasswd (params) {
    // 验证支付密码
    return Post('verifyPaymentPasswd', params)
  },
  resetPayment (params) {
    // 重置支付密码
    return Post('resetPayment', params)
  },
  present () {
    // 礼包列表
    return Get(`/present`)
  },
  presentGoods (params) {
    //  礼包下商品
    return Get(`/presentGoods?goods_type=${params.goods_type}`)
  },
  cateList (params) {
    // 类型列表
    return Get(`/cateList?cate_id=${params.cate_id}`)
  },
  firstCateList () {
    // 类型列表
    return Get(`/cateList`)
  },
  storeSwiper () {
    // 类型列表
    return Get(`/slides`)
  },
  goodsList (params) {
    // 类型下商品列表
    return Get(`/goodsList/${params.page}?cate_id=${params.cate_id}`)
  },
  brandList () {
    // 品牌列表
    return Get(`/brandList/1`)
  },
  brandGoodsList (params) {
    // 品牌下商品列表
    return Get(`/brandGoodsList/${params.page}?brand_id=${params.brand_id}`)
  },
  goodsSelectedList (params) {
    // 好物精选列表
    return Get(`/goodsSelected/${params}`)
  },
  zoneList (params) {
    // 品牌下商品列表
    return Get(`/starCateList`)
  },
  goodsDetialInfo (params) {
    // 商品详情
    return Get(`/goodsInfo?goods_id=${params}`)
  },
  search (params) {
    //  搜索
    return Get(`/goodsSearch/1?key_words=${params.key_words}`)
  },
  addToShopCar (params) {
    // 添加购物车
    return Post(`/addToCart`, params)
  },
  getShopCarList (params) {
    // 获取购物车列表
    return Get(`/cartList?token=${params}`)
  },
  deleteShopCar (params) {
    // 删除购物车
    return Post(`/deleteFromCart`, params)
  },
  getShopCarNum (params) {
    return Get(`/numCart?token=${params}`)
  },
  getUserTreasure (params) {
    // 获取用户财富
    return Get(`/availableGold?token=` + token)
  },
  getEveryDayGold (params) {
    // 点击获取每天星钻红包
    return Post(`/getRedPacket`, params)
  },
  starToPowerRec (params) {
    // 星币转算力记录
    return Get(`/freedList/${params.page}?token=${token}`)
  },
  transfer (params) {
    // 星币、星钻转账
    return Post(`/transfer`, params)
  },
  starCoinIncome (params) {
    // 星币转入列表
    return Get(`/starCoinIncome/${params.page}?token=${token}`)
  },
  starCoinOutlay (params) {
    // 星币转出列表
    return Get(`/starCoinOutlay/${params.page}?token=${token}`)
  },
  income (params) {
    // 星钻转入列表
    return Get(`/income/${params.page}?token=${token}`)
  },
  outlay (params) {
    // 星钻转出列表
    return Get(`/outlay/${params.page}?token=${token}`)
  },
  powerReturnList (params) {
    // 算力每日定反记录
    return Get(`/powerReturnList/${params.page}?token=${token}`)
  },
  systemNotice () {
    // 系统公告
    return Get(`/aboutus`)
  },
  buyAction () {
    // 购买须知
    return Get(`/purchasenotes`)
  },
  refund (params) {
    return Post(`/createReundOrder`, params)
  },
  storeDetail (params) {
    // 店铺详情
    return Get(`/storeGoodsList/${params.page}?store_id=${params.id}`)
  },
  getDefaultAddress () {
    // 获取默认收货地址
    return Get(`/getDefaultAddress?token=${token}`)
  },
  getOrderData (params) {
    // 获取商城订单列表数据
    return Get(`/${params.way}/${params.page}?token=${token}`)
  },
  cancelShopOrder (params) {
    // 商城订单--取消订单
    return Post(`/cancelOrder`, params)
  },
  receiveOrder (params) {
    // 确认收货
    return Post(`/orderReceive`, params)
  }
}
export { imgUrl }
