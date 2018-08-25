// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import './assets/less/base.less'
import axios from 'axios'
import qs from 'qs'
import Carousel3d from 'vue-carousel-3d'
import echarts from 'echarts'
import mobile from './assets/js/mobile.js'
import api from './assets/js/api.js'
import Progress from 'vue-multiple-progress'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(Progress)
Vue.use(Carousel3d)
// Vue.use(InfiniteScroll);
// Vue.use(VueResource)
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.prototype.$mobile = mobile
Vue.prototype.$api = api
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 这里判断用户是否登录，我例子中是验证本地存储是否有token
    if (!localStorage.token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
    // 确保一定要调用 next()
  }
})
