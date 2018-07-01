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
          <p class="receiver_name fl">苏格时代</p>
          <div class="address-detail">
            <p>18237714532</p>
            <p>内蒙古 呼伦贝尔 根河市 离开的咖啡机 螺丝刀开房就 </p>
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
          <span>礼包一</span>
          <p class="price">￥700</p>
        </div>
      </div>
      <div class="gift-list">
        支付方式
      </div>
    </div>
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
      
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/less/giftOrder.less');
</style>
