var url = 'http://www.sugebei.com/'
var $$ = function () {}
// 封装
$$.prototype = {
  askData: function (fn, form, async) {
    // form.app_id = app_id;
    // form.nonce = $$.getRandom(0, 1000000);
    // form.sign = $$.mysign(form);
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