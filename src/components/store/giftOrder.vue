<template>
  <div class="wrapper">
    <mt-header fixed title="大礼包订单">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="giftOrder">
      <router-link to="/addressManage/set">
        <div class="address">
          <p class="receiver_name fl">{{name}}</p>
          <div class="address-detail">
            <p>{{phone}}</p>
            <p>{{province}}{{city}}{{area}}{{detail}} </p>
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
          <input type="text" :value="payment" readonly>
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
      <div class="button">
        去支付
      </div>
    </div>
  </div>
</template>
<script>
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      popupVisible: false,
      name: '',
      phone: '',
      province: '',
      city: '',
      area: '',
      detail: '',
      payment: '',
      giftBag: ''
    }
  },
  created () {
    console.log(this.$route.params.id)
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
    wx () {
      this.payment = '微信支付'
      this.popupVisible = false
    },
    gb () {
      this.payment = '代币支付'
      this.popupVisible = false
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/less/giftOrder.less');
</style>
