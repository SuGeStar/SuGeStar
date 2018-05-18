<template>
  <div class="wrapper">
    <div class="store">
      <!--头部-->
      <div class="store-head">
        <div class="store-head-center"></div>
        <p class="user-nickname">{{userNickName}}</p>
        <p class="user-order">SG星球第{{userOrder}}位居民</p>
        <div class="user-property">
          <div class="user-property-title"><router-link to="myProperty"><p>我的资产</p></router-link></div>
          <div class="user-property-data">
            <ul>
              <li>
                <p class="user-property-notice">当前原力值</p>
                <p class="user-property-num">{{userPV}}</p>
              </li>
              <li>
                <p class="user-property-notice">当前SG矿币</p>
                <p class="user-property-num">{{userSGK}}</p>
              </li>
              <li>
                <p class="user-property-notice">当前SG金币</p>
                <p class="user-property-num">{{userSGK}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="store-link">
        <div>
          <router-link to="register"><p class="user-real-name-authentication">实名认证</p></router-link>
        </div>
        <div style="border: none">
          <router-link to="login"><p class="user-set">设置</p></router-link>
        </div>
      </div>
      <!--底部-->
      <footGuide></footGuide>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '../../assets/less/my.less';
</style>
<script>
import footGuide from '../footer/footGuide.vue'
// import { Navbar, TabItem } from 'mint-ui'

export default {
  components: {
    footGuide
  },
  data () {
    return {
      userNickName: 'づ塟送じò ぴéā', // 用户昵称
      userOrder: '100203', // 用户排名
      userPV: '11002', // 用户原力值
      userSGK: '46546', // 用户SG矿币
      userSGJ: '465465' // 用户SG金币
    }
  }
}
</script>
