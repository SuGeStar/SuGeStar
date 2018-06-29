<template>
    <div class="wrapper">
      <div class="moduleHead">
        <a href="javascript:window.history.go(-1)"></a>{{titleTxt}}
      </div>
      <div class="smelting-container">
        <p>{{titleTxt}}金币：<span>{{SGB}}</span></p>
        <p v-if="isS">请输入赠送人账号</p>
        <div class="smelting-withdraw" v-if="isS">
          <span class="account_s">账号：</span><input type="number" v-model="sendTel">
        </div>
        <router-link to="/bindBankCard" v-if="isR">
          <div class="chose-bank" >到账银行卡 <span>中国工商银行(尾号1234)</span></div>
        </router-link>
        <mt-button type="default" class="releaseBtn" @click="releaseBtn">{{titleTxt}}</mt-button>
      </div>
    </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      z_tel: /^1[3|4|5|6|7|8|9]\d{9}$/,
      SGB: this.$route.params.num,
      titleTxt: '释放',
      isS: false,
      isR: false,
      sendTel: ''
    }
  },
  methods: {
    releaseBtn: function () {
      console.log(this.isS)
      console.log(this.isR)
      // 释放
      if (this.isR) {

      }
      // 赠送
      if (this.isS) {
        if (!this.sendTel) {
          Toast('电话号码不能为空！！！')
          return false
        }
        if (this.z_tel.test(this.sendTel) == false){
          Toast('电话号码格式错误!')
          return false
        }
        
        MessageBox.confirm('确定执行此操作?').then(action => {
          console.log('aaa')
        })
      }
    }
  },
  mounted () {
    var way = parseInt(this.$route.params.way)
    console.log(way)
    switch (way) {
      case 0:
        this.titleTxt = '释放'
        this.isR = true
        break
      case 1:
        this.titleTxt = '赠送'
        this.isS = true
        break
      default:
        return false
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/smelting.less";
</style>
