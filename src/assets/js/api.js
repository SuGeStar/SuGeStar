import axios from 'axios'
import { Toast } from 'mint-ui'
// 接口url
var url = 'http://www.sugebei.com/'
let token = localStorage.getItem('token')
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = url

export function Post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
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
        resolve(response.data)
      }, err => {
        reject(err)
        Toast({
          message: err.msg
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
  }
}
