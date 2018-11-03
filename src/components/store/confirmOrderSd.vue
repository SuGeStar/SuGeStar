<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>
      确认订单
    </div>
    <router-link to="/addressManage/set">
      <div class="clear_address_container">
        <p class="receiver_name fl">{{buyerName}}</p>
        <div class="receiver_address_container fl">
          <p class="receiver_phone">{{buyerTel}}</p>
          <p class="receiver_address">{{buyerAds}}</p>
        </div>
      </div>
    </router-link>
    <!--订单信息-->
    <div class="clear_order_list_container">
      <div class="each_order_list ng-scope">
        <div class="eol_img fl">
          <img :src="imgUrl+shopData.default_img">
        </div>
        <div class="eol_info fl">
          <p class="eol_name">{{shopData.goods_name}}</p>
          <p class="eol_prices" style="margin-top: .5rem">星币：<span>{{shopData.price}}</span></p>
        </div>
        <span class="eol_num">X 1</span>
      </div>
    </div>
    <!--订单总量-->
    <div class="clear_money_container">
      <div>商品总金额：  <span class="clearStrict">星币 {{shopData.price}}</span> </div>
      <div>商品总数量：<span>1</span></div>
      <div>运费：<span></span></div>
      <div>留言：<input type="text" placeholder="（选填）请输入买家留言" v-model="buyerMsg"></div>
    </div>
    <!--去支付-->
    <div class="went_apply">
      <div class="apple_total fl">应支付：
        <div class="applyPrice">
          <p class="applyPriceCommon"><span class="clearStrict">星币 {{shopData.price}}</span></p>
        </div>
      </div>
      <div class="go_apply fl" @click="goApply">去支付</div>
    </div>
  </div>
</template>

<script>
let token = localStorage.getItem('token')
import { MessageBox } from 'mint-ui'
import api from '@/assets/js/api.js'
import { imgUrl } from '@/assets/js/api.js'
export default {
  data () {
    return {
      buyerName: '',
      buyerTel: '',
      buyerAds: '',
      AdsId: '',
      buyerMsg: '',
      shopData: [],
      shopSinglePrice: '',
      shopSingleGold: '',
      shopFinalPrice: 0,
      shopFinalGold: 0,
      imgUrl: imgUrl
    }
  },
  methods: {
    // 去支付
    goApply () {
      var applyOrder = {
        address_id: this.AdsId,
        goods_id: this.shopData.id,
        num: 1,
        remark: this.buyerMsg
      }
      localStorage.setItem('applyOrder', JSON.stringify(applyOrder))
      this.$router.push({
        path: '/apply/' + 9
      })
    }
  },
  created () {
    // 获取默认收货地址
    api.getDefaultAddress()
      .then(res => {
        if (res.code === 500) {
          MessageBox({
            title: '提示',
            message: '你还没有收货地址，是否去添加?',
            showCancelButton: true
          })
            .then(ret => {
              if (ret == 'confirm') {
                this.$router.push({
                  path: '/addressManage/set'
                })
              } else {
                window.history.go(-1)
              }
            })
        } else {
          this.buyerName = res.data.name
          this.buyerTel = res.data.phone
          this.AdsId = res.data.id
          this.buyerAds = res.data.province + ' ' + res.data.city + ' ' + res.data.area + ' ' + res.data.detail
        }
      })
      .catch(err => {
        console.log(err)
      })
    this.shopData = JSON.parse(localStorage.getItem('sdGoods'))
    /*this.shopSinglePrice = this.shopData.shopPrice
    this.shopSingleGold = this.shopData.shopGold
    this.shopFinalPrice = parseFloat(this.shopSinglePrice) * parseFloat(this.shopData.shopCount)
    this.shopFinalGold = parseFloat(this.shopSingleGold) * parseFloat(this.shopData.shopCount)*/
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/confirmOrder.less";
</style>
