import axios from 'axios'
import { Toast } from 'mint-ui'
// 接口url
var url = 'http://ycstar.sugebei.com/api/'
var imgUrl = 'http://img.sugebei.com/'
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
        Toast({
          message: '服务器出问题了~快去找程序员'
        })
      })
      .catch((error) => {
        reject(error)
        Toast({
          message: '服务器出问题了~快去找程序员'
        })
      })
  })
}

export default {
  sendSms (params) {
    // 发送手机验证码
    return Get(`/sendSms?phone=${params.phone}`)
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
    // 获取可用金钱
    return Get(`/availableGold?token=${token}`)
  },
  applyWithdraw (params) {
    // 申请提现
    return Post('/applyWithdraw', params)
  },
  withdrawList (params) {
    // 提现列表
    return Get(`/withdrawList?token=${token}&page=${params.page}`)
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
    return Get(`/profit?token=${token}&page=${params.page}`)
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
  goodsList (params) {
    // 类型下商品列表
    return Get(`/goodsList?cate_id=${params.cate_id}&page=${params.page}`)
  },
  brandList () {
    // 品牌列表
    return Get(`/brandList`)
  },
  brandGoodsList (params) {
    // 品牌下商品列表
    return Get(`/brandGoodsList/${params.page}?brand_id=${params.brand_id}`)
  },
  search (params) {
    //  搜索
    return Get(`/search?key_words=${params.key_words}`)
  }
}
export { imgUrl }
