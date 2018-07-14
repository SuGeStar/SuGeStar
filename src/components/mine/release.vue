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
        <div class="chose-bank" >到账银行卡 <span>{{bankName}}(尾号{{bankCard}})</span></div>
      </router-link>
      <mt-button type="default" class="releaseBtn" @click="releaseBtn">{{titleTxt}}</mt-button>
    </div>
    <applyPop @hidden="hiddenShow"  @password="passwordGro" :password="password" v-show="applyPop_pop_up"></applyPop>
  </div>
</template>

<script>
import { url } from '../../assets/js/mobile.js'
import { Toast, MessageBox } from 'mint-ui'
import api from '@/assets/js/api.js'
import applyPop from '../comp/applyPop.vue'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      z_tel: /^1[3|4|5|6|7|8|9]\d{9}$/,
      SGB: this.$route.params.num,
      titleTxt: '释放',
      isS: false,
      isR: false,
      id: '',
      bankName: '',
      bankCard: '',
      applyPop_pop_up: false,
      password: [],
      sendTel: ''
    }
  },
  components: {
    applyPop
  },
  methods: {
    releaseBtn () {
      // 释放
      if (this.isR) {
        if (this.SGB < 500) {
          Toast('释放代币不能小于500')
        } else if (this.SGB%100 !== 0) {
          Toast('释放代币需是100的倍数')
        } else {
          this.applyPop_pop_up = true
        }
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
        // 赠送金币
        let form = this.$qs.stringify({
          token: token,
          phone: this.sendTel,
          gold: this.SGB,
          mark: '转出'+this.SGB
        })
        this.$http.post(url+'transfer', form)
        .then(response => {
          console.log(response)
          Toast({
            message: response.data.msg,
            position: 'bottom',
            duration: 2000
          })
          if (response.data.code == 200) {
            this.$router.push('/myProperty')
          }
        })
        .catch(error => {
          console.log(error)
          Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
        })  
      }
    },
    getBank () {
      // 获取默认银行卡
      api.getBankDefault()
      .then((res) => {
        // console.log(res)
        if (res.data == null) {
          this.$router.push('/bindBankCard')
          return false
        }
        let card = res.data.card
        this.bankName = res.data.bank
        this.bankCard = card.substr(card.length-4)
        this.id = res.data.id
      })
    },
    hiddenShow(){
      let that = this;
      that.applyPop_pop_up = false
    },
    passwordGro (e) {
      this.password = e
      if (this.password.length == 6) {
        let psw = this.password.toString().replace(/,/g, "")
        let form = this.$qs.stringify({
          token: token,
          money: this.SGB,
          bank_id: this.id,
          mark: '提现备注',
          payment_password: psw
        })
        api.applyWithdraw(form)
        .then((res) => {
          console.log(res)
          Toast({
            message: res.msg,
            position: 'bottom',
            duration: 5000
          })
          this.$router.replace('/index')
        })
      }
    }
  },
  mounted () {
    var way = parseInt(this.$route.params.way)
    // console.log(way)
    switch (way) {
      case 0:
        this.titleTxt = '释放'
        this.isR = true
        this.getBank()
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
