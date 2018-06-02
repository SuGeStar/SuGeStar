// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import './assets/less/base.less'
import axios from 'axios'
// import VueResource from 'vue-resource'
import mobile from './assets/js/mobile.js'

Vue.config.productionTip = false
Vue.use(MintUI)
// Vue.use(VueResource)
Vue.prototype.$http = axios
Vue.prototype.$mobile = mobile
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
