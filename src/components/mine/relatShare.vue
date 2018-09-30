<template>
  <div class="wrapper">
    <div class="relatShare friend">
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
  .relatShare{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<script>
import { url } from '../../assets/js/mobile.js'
import { Toast } from 'mint-ui'
let token = localStorage.getItem('token')
let userinfo = JSON.parse(localStorage.getItem('userinfo'))
export default {
  data () {
    return {
      name: '张三',
      number: '12345',
      copy: '123456789',
      src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png',
    }
  },
  created () {
    let contact_id = this.$route.params.id
    console.log(contact_id)
    this.copy = userinfo.invite_code
    this.name = userinfo.realname
    this.src = url + 'inviteLink?token='+token+'&contact_id='+ contact_id
    // this.$http.get(url + 'inviteLink?token='+token+'&contact_id='+ contact_id)
    //   .then(response => {
    //     console.log(response)
    //     this.src = response
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
    //   })
  },
  methods: {
    copyBtn () {
      console.log('222')
      this.$copyText(this.copy).then(function (e) {
        Toast('复制成功')
        console.log(e)
      }, function (e) {
        Toast('复制失败')
        console.log(e)
      })
    }
  }
}
</script>
