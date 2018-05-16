import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/star/index'
import miji from '@/components/star/miji'
import speed from '@/components/star/speed'
import friend from '@/components/star/friend'
import firInvitation from '@/components/star/firInvitation'
import secInvitation from '@/components/star/secInvitation'
import store from '@/components/store/store'
import my from '@/components/mine/my'

Vue.use(Router)

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
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
