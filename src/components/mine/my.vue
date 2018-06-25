<template>
  <div class="wrapper">
    <div class="store">
      <!--头部-->
      <div class="store-head">
        <div class="store-head-center">
          {{userIdent}}
        </div>
        <p class="user-nickname">{{userNickName}}</p>
        <p class="user-order">SG星球第{{userOrder}}位居民</p>
        <div class="user-property">
          <div class="user-property-title"><router-link to="myProperty"><p>我的资产</p></router-link></div>
          <div class="user-property-data">
            <ul>
              <li>
                <p class="user-property-notice">金币</p>
                <p class="user-property-num">{{userSGK}}</p>
              </li>
              <li>
                <p class="user-property-notice">星币</p>
                <p class="user-property-num">{{userST}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="store-link">
        <div>
          <router-link to="realName"><p class="user-real-name-authentication">实名认证</p></router-link>
        </div>
        <div>
          <router-link to="register"><p class="user-set">注册</p></router-link>
        </div>
        <div style="border: none">
          <router-link to="set"><p class="user-set">设置</p></router-link>
        </div>
      </div> -->
      <div class="store-content">
        <ul>
          <li>
            <router-link to="/firInvitation">
              <div class="store-list">
                <div class="store-name">
                  <i class="icon icon-invit"></i>
                  我的邀请
                </div>
                <i class="icon icon-right"></i>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/secInvitation">
              <div class="store-list">
                <div class="store-name">
                  <i class="icon icon-recom"></i>
                  我的推荐
                </div>
                <i class="icon icon-right"></i>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/team">
              <div class="store-list">
                <div class="store-name">
                  <i class="icon icon-team"></i>
                  我的团队
                </div>
                <i class="icon icon-right"></i>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/upgrade">
              <div class="store-list">
                <div class="store-name">
                  <i class="icon icon-update"></i>
                  升级
                </div>
                <i class="icon icon-right"></i>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/set">
              <div class="store-list">
                <div class="store-name">
                  <i class="icon icon-setting"></i>
                  设置
                </div>
                <i class="icon icon-right"></i>
              </div>
            </router-link>
          </li>
           <li>
            <router-link to="/giftBag">
              <div class="store-list">
                <div class="store-name">
                  <i class="icon icon-setting"></i>
                  大礼包
                </div>
                <i class="icon icon-right"></i>
              </div>
            </router-link>
          </li>
        </ul>
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
import { url } from '../../assets/js/mobile.js'
import footGuide from '../comp/footGuide.vue'
// import { Navbar, TabItem } from 'mint-ui'
let token = localStorage.getItem('token')
export default {
  components: {
    footGuide
  },
  data () {
    return {
      userIdent: '创 世 居 民',
      userNickName: 'づ塟送じò ぴéā', // 用户昵称
      userOrder: '100203', // 用户排名
      userPV: '11002', // 用户原力值
      userSGK: '46546', // 用户SG金币
      userST: '465465' // 用户SG星币
    }
  },
  created () {
    this.$http.get(url + 'availableGold?token=' + token)
        .then(response => {
        console.log(response.data)
        if (response.data.code == 200) {
          this.userSGK = response.data.data.gold
        } else {
          
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
