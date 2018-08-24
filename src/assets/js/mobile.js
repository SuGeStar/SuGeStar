import axios from 'axios'
import { Toast } from 'mint-ui'
// 接口url
var url = 'http://ycstar.test/api/'
var urlImg = 'http://ycstar.test/'

// axios 配置
axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = url

// 定义一个对象，名字是$$
var $$ = function () {}
// 开始封装
$$.prototype = {
  askData: function (fn, form) {
    axios({
      method: 'post',
      url: url,
      data: form
    }).then(function (response) {
      fn(response)
      console.log(response)
      if (response.data.code === 403) {
        Toast({
          message: response.data.msg,
          position: 'bottom',
          duration: 4000
        })
        localStorage.removeItem('token')
        localStorage.removeItem('userinfo')
        this.$router.push('/login')
      } else {
        Toast({
          message: response.data.msg,
          position: 'bottom',
          duration: 2000
        })
      }
    })
      .catch(function (error) {
        console.log(error)
      })
  }
}
// 在框架中实例化
$$ = new $$()
export default $$
export { url }
