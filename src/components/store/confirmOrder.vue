<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>
      确认订单
    </div>
    <router-link to="/addressManage/set">
      <div class="clear_address_container">
        <p class="receiver_name fl">zhuzi</p>
        <div class="receiver_address_container fl">
          <p class="receiver_phone">15738669091</p>
          <p class="receiver_address">内蒙古 呼伦贝尔 根河市 离开的咖啡机 螺丝刀开房就 </p>
        </div>
      </div>
    </router-link>
    <!--订单信息-->
    <div class="clear_order_list_container">
      <div class="each_order_list ng-scope">
      <div class="eol_img fl">
        <img :src="getImg(shopData.shopInfo.default_img)">
      </div>
      <div class="eol_info fl">
        <p class="eol_name">{{shopData.shopInfo.goods_name}}</p>
        <p class="eol_type" style="width: 4.2rem;height: .3rem;overflow: hidden">{{shopData.shopInfo.color_name}}：{{shopData.shopColor}}，{{shopData.shopInfo.size_name}}：{{shopData.shopSize}}</p>
        <p class="eol_prices">星币：<span>{{shopSingleGold}}</span> + ¥ {{shopSinglePrice}}</p>
      </div>
      <span class="eol_num">X {{shopData.shopCount}}</span>
    </div>
    </div>
    <!--订单总量-->
    <div class="clear_money_container">
      <div>商品总金额：  <span class="clearStrict">星币 {{shopFinalGold}}  + ¥ {{shopFinalPrice}}</span> </div>
      <div>商品总数量：<span>{{shopData.shopCount}}</span></div>
      <div>运费：<span></span></div>
    </div>
    <!--去支付-->
    <div class="went_apply">
      <div class="apple_total fl">应支付：
        <div class="applyPrice">
          <p class="applyPriceCommon"><span class="clearStrict">星币 {{shopFinalGold}}  + ¥ {{shopFinalPrice}}</span></p>
        </div>
      </div>
      <div class="go_apply fl" @click="goApply">去支付</div>
    </div>
  </div>
</template>

<script>
let token = localStorage.getItem('token')
import { url } from '../../assets/js/mobile.js'
export default {
  data () {
    return {
      shopData: [],
      shopSinglePrice: '',
      shopSingleGold: '',
      shopFinalPrice: 0,
      shopFinalGold: 0,
      getImg (url) {
        return 'http://img.sugebei.com' + url
      }
    }
  },
  methods: {
    goApply () {
      // todo
      this.$router.push('/apply')
    }
  },
  mounted () {
    /*
    * 获得用户默认收货地址 若没有默认地址 需要跳转到添加收货地址
    * 获得商品结算清单 （可存储本地）
    * */
    // todo
  },
  created () {
    this.shopData = JSON.parse(localStorage.getItem('finalData'))
    console.log(this.shopData)
    this.shopSinglePrice = this.shopData.shopInfo.spec[0].cash
    this.shopSingleGold = this.shopData.shopInfo.spec[0].gold
    this.shopFinalPrice = parseFloat(this.shopSinglePrice) * parseFloat(this.shopData.shopCount)
    this.shopFinalGold = parseFloat(this.shopSingleGold) * parseFloat(this.shopData.shopCount)
  }
}
</script>

<style scoped lang="less">
@import "../../assets/less/confirmOrder.less";
</style>
