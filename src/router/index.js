import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/star/index'
import store from '@/components/store/store'
import my from '@/components/mine/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
