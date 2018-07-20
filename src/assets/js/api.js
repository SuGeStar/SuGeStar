import axios from 'axios'
import { Toast } from 'mint-ui'
// 接口url
var url = 'http://www.sugebei.com/'
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
    return Get(`/registers?token=${token}&page=${params.page}`)
  },
  upgrades (params) {
    // 我的推荐
    return Get(`/upgrades?token=${token}&page=${params.page}`)
  },
  profit (params) {
    // 代币收入
    return Get(`/profit?token=${token}&page=${params.page}`)
  },
  expenses (params) {
    // 代币支出
    return Get(`/expenses?token=${token}&page=${params.page}`)
  },
  kbExpenses (params) {
    // 星币支出
    return Get(`/kbExpenses?token=${token}&page=${params.page}`)
  },
  alreadyGetMonth () {
    // 星币收入(月)
    return Get(`/alreadyGetMonth?token=${token}`)
  },
  alreadyGetDay (params) {
    // 星币收入(天)
    return Get(`/alreadyGetDay?token=${token}&times=${params.time}&page=${params.page}`)
  },
  getRecordCode () {
    // 推荐码和节点人码
    return Get(`/getRecordCode?token=${token}`)
  },
  waitPlacement () {
    // 我的待安置
    return Get(`/waitPlacement?token=${token}`)
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
  prompt () {
    // 首页提示信息
    return Get(`/prompt?token=${token}`)
  },
  recommendNum () {
    // 直推人数
    return Get(`/recommendNum?token=${token}`)
  },
  getSonNum () {
    // 旗下人数
    return Get(`/getSonNum?token=${token}`)
  },
  present () {
    // 礼包列表
    return Get(`/present`)
  },
  presentGoods (params) {
    //  礼包下商品
    return Get(`/presentGoods?goods_type=${params.goods_type}`)
  }
}
export { imgUrl }
