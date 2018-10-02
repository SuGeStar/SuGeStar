<template>
  <div class="wrapper">
    <mt-header fixed title="邀请好友">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="friend">
      <div class="friend-con">
        <h3>
          <p class="p1">YC星球</p>
          <p class="p2">链接你我，共筑YC星球</p>
        </h3>
        <div class="invit-pop">
          <div class="friend-cls">
            <div class="friend-box">
              <p class="friend-txt">我的邀请码</p>
              <input class="friend-int" v-model="copy" readonly>
              <mt-button @click="copyBtn" class="copy-btn">一键复制</mt-button>
            </div>
            <div class="invit-desc">
              <p>我是{{levelTxt}}{{name}},YC星球的{{number}}位居民</p>
              <p>我在YC星球等你，不见不散</p>
            </div>
            <div class="invit-line"></div>
          </div>
          <div class="invit-qr">
            <div class="invit-img">
              <img class="img" :src="src" alt=""/>
              <p>扫描二维码，加入SG星球</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '../../assets/less/friend.less';
</style>
<script>
import { url } from '../../assets/js/mobile.js'
import { Toast, MessageBox } from 'mint-ui'
let token = localStorage.getItem('token')
let userinfo = JSON.parse(localStorage.getItem('userinfo'))
export default {
  data () {
    return {
      name: '张三',
      number: '100156',
      popupVisible1: false,
      copy: '123456789',
      src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png',
      first: {
        pople: '1000',
        ylz: '1000'
      },
      second: {
        pople: '1000',
        ylz: '1000'
      },
      levelTxt: ''
    }
  },
  created () {
    this.name = userinfo.realname;
    this.copy = userinfo.invite_code;
    this.number = userinfo.number;
    this.src = url + 'registerLink?token=' + token
    if (userinfo.level === 1) {
      this.levelTxt = '发现者'
      this.popupVisible1 = true
    } else {
      this.levelTxt = '探索者'
      this.popupVisible1 = false
    }
  },
  methods: {
    invit () {
      this.copy = userinfo.invite_code
      this.src = url + 'registerLink?token=' + token
      this.popupVisible1 = true
    },
    copyBtn () {
      this.$copyText(this.src).then(function (e) {
        Toast('复制成功')
        // console.log(e)
      }, function (e) {
        Toast('复制失败')
        // console.log(e)
      })
    }
  }
}
</script>
