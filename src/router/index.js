import Vue from 'vue'
import Router from 'vue-router'
import VueClipboard from 'vue-clipboard2'
import index from '@/components/star/index'
import miji from '@/components/star/miji'
import speed from '@/components/star/speed'
import friend from '@/components/star/friend'
import firInvitation from '@/components/star/firInvitation'
import secInvitation from '@/components/star/secInvitation'
import store from '@/components/store/store'
import classify from '@/components/store/classify'
import list from '@/components/store/list'
import my from '@/components/mine/my'
import myProperty from '@/components/mine/myProperty'
import login from '@/components/login/login'
import register from '@/components/register/register'
import car from '@/components/store/car'
import apply from '@/components/store/apply'
import smelting from '@/components/mine/smelting/'
import releaseOrSend from '@/components/mine/releaseOrSend/'
import release from '@/components/mine/release/'
import addressManage from '@/components/mine/addressManage/'
import set from '@/components/mine/set/'
import addAddress from '@/components/mine/addAddress/'
import editAddress from '@/components/mine/editAddress/'
import proofIdent from '@/components/mine/proofIdent'
import resetPassword from '@/components/mine/resetPassword'
import details from '@/components/store/details'
import applypop from '@/components/comp/applyPop'
import city from '@/components/comp/city'
import realName from '@/components/mine/realName'
import changename from '@/components/mine/changeName'
import bindBankCard from '@/components/mine/bindBankCard'
import addBankCard from '@/components/mine/addBankCard'
import myOrder from '@/components/store/myOrder'
import confirmOrder from '@/components/store/confirmOrder'
import search from '@/components/store/search'
import information from '@/components/mine/information'
import team from '@/components/mine/team'
import relation from '@/components/mine/relation'
import upgrade from '@/components/mine/upgrade'
import giftBag from '@/components/store/giftBag'
Vue.use(Router)
Vue.use(VueClipboard)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      meta: { requiresAuth: true },
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
      path: '/list',
      name: 'list',
      component: list
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
      path: '/releaseOrSend', // 释放/赠送
      name: 'releaseOrSend',
      component: releaseOrSend
    },
    {
      path: '/smelting', // 熔炼
      name: 'smelting',
      component: smelting
    },
    {
      path: '/release/:way/:num', // 释放
      name: 'release',
      component: release
    },
    {
      path: '/addressManage/:way', // 收货地址管理
      name: 'addressManage',
      component: addressManage
    },
    {
      path: '/addAddress/:way', // 新增地址管理
      name: 'addAddress',
      component: addAddress
    },
    {
      path: '/editAddress/:id', // 编辑地址管理
      name: 'editAddress',
      component: editAddress
    },
    {
      path: '/set', // 设置
      name: 'set',
      component: set
    },
    {
      path: '/realName', // 实名认证
      name: 'realName',
      component: realName
    },
    {
      path: '/bindBankCard', // 实名认证
      name: 'bindBankCard',
      component: bindBankCard
    },
    {
      path: '/myOrder', // 我的商城订单
      name: 'myOrder',
      component: myOrder
    },
    {
      path: '/confirmOrder', // 确认订单
      name: 'confirmOrder',
      component: confirmOrder
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
      path: '/proofIdent/:id', // 验证身份
      name: 'proofIdent',
      component: proofIdent
    },
    {
      path: '/resetPassword/:id', // 重置密码
      name: 'resetPassword',
      component: resetPassword
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/applypop', // 支付盘
      name: 'applypop',
      component: applypop
    },
    {
      path: '/city', // 三级城市联动
      name: 'city',
      component: city
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/changename',
      name: 'changename',
      component: changename
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/relation/:id',
      name: 'relation',
      component: relation
    },
    {
      path: '/addBankCard',
      name: 'addBankCard',
      component: addBankCard
    },
    {
      path: '/upgrade',
      name: 'upgrade',
      component: upgrade
    },
    {
      path: '/giftBag', // 礼包
      name: 'giftBag',
      component: giftBag
    }
  ]
})
