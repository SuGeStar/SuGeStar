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
        <img ng-src="http://www.sgyxmall.com//Upload/goods/store_20/2018-05-01/5ae7dba4d3eb2.jpg"
             alt="&nbsp;Spring Leaf绿芙绵羊油（添加维生素E和羊胎素和玫瑰精油）9327269000383"
             src="http://www.sgyxmall.com//Upload/goods/store_20/2018-05-01/5ae7dba4d3eb2.jpg">
      </div>
      <div class="eol_info fl">
        <p class="eol_name">&nbsp;Spring Leaf绿芙绵羊油（添加维生素E和羊胎素和玫瑰精油）9327269000383</p>
        <p class="eol_type" style="width: 4.2rem;height: .3rem;overflow: hidden">颜色：如图，尺寸：100克</p>
        <p class="eol_prices">¥ 108</p>
        <p class="eol_enc">或
          <span class="eol_price ng-binding">50.00</span>
          <span class="eol_and"> + </span>
          <span class="eol_point ng-binding">积分58.00</span>
        </p>
      </div>
      <span class="eol_num">X 1</span>
    </div>
    </div>
    <!--订单总量-->
    <div class="clear_money_container">
      <div>商品总金额：  <span class="clearStrict ng-binding">或 ¥50.00 + 积分58.00</span>  <span class="ng-binding">108.00 元 </span>   </div>
      <div>商品总数量：<span class="ng-binding">1</span></div>
      <div>运费：<span></span></div>
    </div>
    <!--去支付-->
    <div class="went_apply">
      <div class="apple_total fl">应支付：
        <div class="applyPrice">
          <p class="ng-binding">108.00 元 </p>
          <p class="applyPriceCommon ng-binding">或 ¥50.00 + 积分58.00</p>
        </div>
      </div>
      <div class="go_apply fl" @click="goApply">去支付</div>
    </div>
  </div>
</template>

<script>
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      
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
  }
}
</script>

<style scoped lang="less">
@import "../../assets/less/confirmOrder.less";
</style>
