import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import store from '@/components/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/store',
      name: 'store',
      component: store
    }
  ]
})
