// 接口url
var url = 'http://www.sugebei.com/'

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
