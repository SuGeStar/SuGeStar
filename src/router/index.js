import Vue from 'vue'
import Router from 'vue-router'
import VueClipboard from 'vue-clipboard2'
import index from '@/components/star/index'
import miji from '@/components/star/miji'
import speed from '@/components/star/speed'
import friend from '@/components/star/friend'
import firInvitation from '@/components/star/firInvitation'
import secInvitation from '@/components/star/secInvitation'
import demo from '@/components/star/demo'
import store from '@/components/store/store'
import classify from '@/components/store/classify'
import my from '@/components/mine/my'
import myProperty from '@/components/mine/myProperty'
import login from '@/components/login/login'
import register from '@/components/register/register'
import car from '@/components/store/car'
import apply from '@/components/store/apply'

Vue.use(Router)
Vue.use(VueClipboard)

export default new Router({
  routes: [
    { path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/miji',
      name: 'miji',
      component: miji
    },
    {
      path: '/speed',
      name: 'speed',
      component: speed
    },
    {
      path: '/friend',
      name: 'friend',
      component: friend
    },
    {
      path: '/firInvitation',
      name: 'firInvitation',
      component: firInvitation
    },
    {
      path: '/secInvitation',
      name: 'secInvitation',
      component: secInvitation
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/my', // 我的基地
      name: 'my',
      component: my
    },
    {
      path: '/myProperty', // 我的资产
      name: 'myProperty',
      component: myProperty
    },
    {
      path: '/login', // 登录
      name: 'login',
      component: login
    },
    {
      path: '/register', // 注册
      name: 'register',
      component: register
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/apply',
      name: 'apply',
      component: apply
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
