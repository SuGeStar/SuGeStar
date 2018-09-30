<template>
  <div class="wrapper">
    <div class="store">
      <!--头部-->
      <div class="store-head">
        <div class="store-head-center">
          {{userIdent}}
        </div>
        <p class="user-nickname">{{userNickName}}</p>
        <!--<p class="user-order">YC星球第{{userOrder}}位居民</p>-->
        <div class="user-property">
          <div class="user-property-title">
            <router-link to="/myProperty">
              <p>我的资产</p>
            </router-link>
          </div>
          <div class="user-property-data">
            <ul>
              <li>
                <p class="user-property-notice">星钻</p>
                <p class="user-property-num">{{userSGK}}</p>
              </li>
              <li>
                <p class="user-property-notice">算力</p>
                <p class="user-property-num">{{userPOW}}</p>
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
                  发现者部落
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
                  探索者部落
                </div>
                <i class="icon icon-right"></i>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/relation">
              <div class="store-list">
                <div class="store-name">
                  <i class="icon icon-team"></i>
                  星球区块
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
                  创建我的星球区块
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
            <router-link to="/gift">
              <div class="store-list">
                <div class="store-name">
                  <i class="icon icon-setting"></i>
                  星球礼包
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
import { Toast } from 'mint-ui'
import { url } from '../../assets/js/mobile.js'
import footGuide from '../comp/footGuide.vue'
// import { Navbar, TabItem } from 'mint-ui'
let token = localStorage.getItem('token');

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
      userSGK: '', // 用户SG代币
      userPOW: 0, // 用户算力
      userST: '465465', // 用户SG星币
      baseUserInfo: JSON.parse(localStorage.getItem('userinfo')), // 用户个人信息
      level: localStorage.getItem('level')
    }
  },
  created () {
    if (!token) {
      this.$router.push('/login')
    }
    this.userNickName = this.baseUserInfo.realname;
    if (this.level == 2) {
      this.userIdent = '创 世 居 民'
    } else {
      this.userIdent = '居 民'
    }
    /*
    * 获得金币数量
    * */
    this.$http.get(url + 'availableGold?token=' + token)
      .then(response => {
        console.log(response.data)
        if (response.data.code == 200) {
          this.userSGK = response.data.data.gold
          this.userST = response.data.data.miners
          this.userPOW = response.data.data.power
        } else {
          Toast({
            message: response.data.msg,
            position: 'middle',
            duration: 2000
          })
        }
      })
      .catch(error => {
        console.log(error)
        Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      })
    localStorage.removeItem('selectMy')
  }
}
</script>
