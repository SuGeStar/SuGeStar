<template>
  <div class="wrapper">
    <mt-header fixed title="邀请好友">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="friend">
      <div class="friend-con">
        <div class="friend-cls">
          <h3>我的战绩</h3>
          <div class="friend-box">
            <router-link to="/firInvitation">
              <div class="invitation fir-invit">
                <div class="invit-pople">
                  <span>我的邀请：</span>
                  <span>{{first.pople}}人>></span>
                </div>
                <div class="invit-ylz">
                  <p>累计获得星币（个）</p>
                  <span class="ylz-color">{{first.ylz}}</span>
                </div>
              </div>
            </router-link>
            <router-link to="/secInvitation">
              <div class="invitation sec-invit">
                <div class="invit-pople">
                  <span>我的推荐：</span>
                  <span>{{second.pople}}人>></span>
                </div>
                <div class="invit-ylz">
                  <p>累计获得收益（元）</p>
                  <span class="ylz-color">{{second.ylz}}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="notice-user" v-if="popupVisible1">
          <p>提示：</p>
          <h2>您还不是星球的创世居民，暂时没有分享功能，是否拥有此功能？</h2>
          <span>去拥有</span>
        </div>
        <div class="invited-img-container" v-if="!popupVisible1">
          <input class="friend-int" v-model="copy" readonly>
          <mt-button @click="copyBtn" class="copy-btn">一键复制</mt-button>
          <div class="invit-qr">
            <div class="invit-desc">
              <p>我是YC星球{{levelTxt}}{{name}}</p>
              <p>是YC星球的{{number}}位居民</p>
              <p>邀请你共同参与YC星球的区块开发</p>
              <p>我在YC星球等你，不见不散</p>
            </div>
            <div class="invit-img">
              <img class="img" :src="src" alt=""/>
              <p>扫描二维码，加入SG星球</p>
            </div>
          </div>
        </div>
        <!--<div class="friend-cls">
          <h3>邀请规则</h3>
          <div class="friend-box">
            <div class="invit-rule">
              <p>
                ① 首次邀请两人入驻SG星球，即可解封原力值（必须与邀请人同级）；
              </p>
              <p>
                ② 原力值解封之后，每成功邀请两人入驻SG星球，则赠送邀请人相应的原力值（若被邀请人身份等级低于邀请人，则按被邀请人等级赠送相应的原力值；若被邀请人身份等级高于邀请人，则按邀请人等级赠送相应的原力值）；
              </p>
              <p>
                ③ 每个被邀请人成功解封原力值，邀请人均可获赠相应等级10%的原力值（若被邀请人身份等级低于邀请人，则按被邀请人等级赠送相应的原力值；若被邀请人身份等级高于邀请人，则按邀请人等级赠送相应的原力值）。
              </p>
            </div>
          </div>
        </div>-->
      </div>
     <!-- <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="invit-pop">
        <div class="friend-cls">
          <img class="invit-tit" src="../../assets/image/friend-tit.png" alt="">
          <div class="friend-box">
            <input class="frie nd-int" v-model="copy" readonly>
            <mt-button @click="copyBtn" class="copy-btn">一键复制</mt-button>
          </div>
          <div class="invit-line"></div>
        </div>
        <div class="invit-qr">
          <div class="invit-desc">
            <p>我是YC星球{{levelTxt}}{{name}}</p>
            <p>是YC星球的{{number}}位居民</p>
            <p>邀请你共同参与YC星球的区块开发</p>
            <p>我在YC星球等你，不见不散</p>
          </div>
          <div class="invit-img">
            <img class="img" :src="src" alt=""/>
            <p>扫描二维码，加入SG星球</p>
          </div>
        </div>
      </mt-popup>
      <mt-button class="ivint-btn" @click="invit">生成邀请卡</mt-button>-->
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
    this.copy = userinfo.invite_code
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
    /*invit () {
      this.copy = userinfo.invite_code
      this.src = url + 'registerLink?token=' + token
      this.popupVisible1 = true
    },*/
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
