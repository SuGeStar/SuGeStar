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
                  <span>一级邀请人数：</span>
                  <span>{{first.pople}}人>></span>
                </div>
                <div class="invit-ylz">
                  <p>累计获得原力值</p>
                  <span class="ylz-color">{{first.ylz}}</span>
                </div>
              </div>
            </router-link>
            <router-link to="/secInvitation">
              <div class="invitation sec-invit">
                <div class="invit-pople">
                  <span>二级邀请人数：</span>
                  <span>{{second.pople}}人>></span>
                </div>
                <div class="invit-ylz">
                  <p>累计获得原力值</p>
                  <span class="ylz-color">{{second.ylz}}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="friend-cls">
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
        </div>
      </div>
      <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="invit-pop">
        <div class="friend-cls">
          <img class="invit-tit" src="../../assets/image/friend-tit.png" alt="">
          <div class="friend-box">
            <input class="friend-int" v-model="copy" readonly>
            <mt-button @click="copyBtn" class="copy-btn">一键复制</mt-button>
          </div>
          <div class="invit-line"></div>
        </div>
        <div class="invit-qr">
          <div class="invit-desc">
            <p>我是"{{name}}"</p>
            <p>是SG星球的{{number}}位居民</p>
            <p>我在SG星球等你，不见不散</p>
          </div>
          <div class="invit-img">
            <img class="img" :src="src" alt=""/>
            <p>扫描二维码，加入SG星球</p>
          </div>
        </div>
      </mt-popup>
      <mt-button class="ivint-btn" @click="invit">生成邀请卡</mt-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '../../assets/less/friend.less';
</style>
<script>
import { Toast, MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      name: '张三',
      number: '12345',
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
      }
    }
  },
  methods: {
    invit () {
      this.popupVisible1 = true
    },
    copyBtn () {
      console.log('222')
      this.$copyText(this.copy).then(function (e) {
        MessageBox('复制成功')
        console.log(e)
      }, function (e) {
        Toast('复制失败')
        console.log(e)
      })
    }
  }
}
</script>
