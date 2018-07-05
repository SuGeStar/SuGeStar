<template>
  <div class="wrapper">
    <mt-header fixed title="大礼包订单">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="giftOrder">
      <router-link to="/addressManage/set">
        <div class="address" :id="id">
          <p class="receiver_name fl">{{name}}</p>
          <div class="address-detail">
            <p>{{phone}}</p>
            <p>{{addressDetail}} </p>
          </div>
          <i class="icon icon-right"></i>
        </div>
      </router-link>
      <div class="gift-detail">
        <div class="image">
          <img src="../../assets/image/goods_pic.png" alt="">
        </div>
        <div class="gift-desc">
          <p>升级大礼包</p>
          <span>{{giftBag}}</span>
          <p class="price">￥700</p>
        </div>
      </div>
      <div class="gift-list" @click="popup">
        <p>支付方式</p>
        <div class="item-input">
          <input type="text" :id="pay_channel" :value="payment" readonly>
          <i class="icon icon-right"></i>
        </div>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
      <div class="payment">
        <ul>
          <li @click="wx"> <i class="icon icon-wx"></i> 微信支付</li>
          <li @click="gb"> <i class="icon icon-sgj"></i> 代币支付</li>
        </ul>
      </div>
    </mt-popup>
    <div class="footer">
      <div class="footer-price">
        <p>应支付：</p>
        <p>700元</p>
      </div>
      <div class="button" @click="gotoPay">
        去支付
      </div>
    </div>
    <applyPop @hidden="hiddenShow" :password="password" @passwordClick="gotoPay" v-show="applyPop_pop_up"></applyPop>
  </div>
</template>
<script>
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
import { Toast } from 'mint-ui'
import applyPop from '../comp/applyPop.vue'
export default {
  data () {
    return {
      popupVisible: false,
      id: '',
      name: '',
      phone: '',
      addressDetail: '',
      payment: '',
      giftBag: '',
      pay_channel: '',
      password: [],
      applyPop_pop_up: false
    }
  },
  components: {
    applyPop
  },
  created () {
    this.$http.get(url + 'getDefaultAddress?token=' + token)
    // 获取默认地址
    .then(response => {
      console.log(response)
      if (response.data.code == 500) {
        Toast({
          message: response.data.msg
        })
        this.$router.push('/addressManage/set')
        return false
      }
      this.id = response.data.data.id
      this.name = response.data.data.name
      this.phone = response.data.data.phone
      this.addressDetail = response.data.data.province + response.data.data.city + response.data.data.area + response.data.data.detail
    })
    .catch(error => {
      console.log(error)
      Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
    })
    if (this.$route.params.id == 1) {
      this.giftBag = '礼包一'
      return false
    }
    if (this.$route.params.id == 2) {
      this.giftBag = '礼包二'
      return false
    }
    if (this.$route.params.id == 3) {
      this.giftBag = '礼包三'
      return false
    }
  },
  methods: {
    popup () {
      this.popupVisible = true
    },
    hiddenShow(){
      let that = this;
      that.applyPop_pop_up = false
    },
    wx () {
      this.payment = '微信支付'
      this.pay_channel = 'wx'
      this.popupVisible = false
    },
    gb () {
      this.payment = '代币支付'
      this.pay_channel = 'gb'
      this.popupVisible = false
    },
    gotoPay () {
      if (this.payment == '') {
        Toast('请选择支付方式')
        return false
      }
      let form = this.$qs.stringify({
        token: token,
        gift: this.giftBag,
        address_id: this.id,
        pay_channel: this.pay_channel
      })
      this.$http.post(url+'giftOrderCreate', form)
      .then(response => {
        console.log(response)
        if (response.data.code == 200) {
          if (this.pay_channel == 'wx') {
            window.location.href = 'http://www.sugebei.com/giftOrderPay?token='+token+'&order_sn='+response.data.data
            return false
          }
          if (this.pay_channel == 'gb') {
            this.applyPop_pop_up = true
            
            // if (!this.applyPop_pop_up) {
            //   console.log('1111')
            //   // this.password = sessionStorage.getItem('password')
            //   // console.log(this.password)
            // }
            
            // let payment_password = this.password.replace(/,/g, "")
            // console.log(payment_password.length)
            // if (payment_password.length == 6) {
            //   this.$http.get(url + 'giftOrderPay?token='+token+'&order_sn='+response.data.data+'&payment_password'+payment_password)
            //     // 礼包订单支付
            //   .then( order => {
            //   console.log(order)
            //     if (order.data.code == 500) {
            //       Toast({
            //         message: order.data.msg
            //       })
            //       return false
            //     }
            //     Toast({
            //       message: order.data.msg,
            //       position: 'bottom',
            //       duration: 3000
            //     })
            //   })
            //   .catch(error => {
            //     console.log(error)
            //     Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
            //   })
            // }
          }
        }
      })
      .catch(error => {
        console.log(error)
        Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      })
      // if (this.pay_channel == 'wx') {
      //   window.location.href = 'http://www.sugebei.com/giftOrderCreate?token='+token+'&gift='+this.giftBag+'&address_id='+this.id+'&pay_channel=wx'
      //   window.location.href = 'http://www.sugebei.com/pay'
      //   return false
      // }
      // if (this.pay_channel == 'gb') {
      //   this.$http.get(url + 'giftOrderCreate?token='+token+'&gift='+this.giftBag+'&address_id='+this.id+'&pay_channel=gb')
      //   执行购买流程
      //   .then(response => {
      //   console.log(response.data)
      //   Toast({
      //       message: response,
      //       position: 'bottom',
      //       duration: 5000000
      //     })
      //   })
      //   .catch(error => {
      //     console.log(error)
      //     Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      //   })
      // }
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/less/giftOrder.less');
</style>
