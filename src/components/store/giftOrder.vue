<template>
  <div class="wrapper">
    <mt-header fixed title="大礼包订单">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="giftOrder">
      <router-link to="/addressManage/set" v-if="showAds">
        <div class="address" :id="id">
          <p class="receiver_name fl">{{name}}</p>
          <div class="address-detail">
            <p>{{phone}}</p>
            <p>{{addressDetail}} </p>
          </div>
          <i class="icon icon-right"></i>
        </div>
      </router-link>
      <div class="gift-detail" v-for="(list, index) in orderList" :key="index" @click="popGiftBag(list)">
        <div class="image">
          <img :src="imgUrl+list.img" alt="">
        </div>
        <div class="gift-desc">
          <p>{{list.goods_name}}</p>
          <span>{{list.desc}}</span>
          <p class="price">￥{{list.price}}</p>
        </div>
      </div>
      <div class="gift-detail">
        <div class="image">
          <img src="../../assets/image/jinbi.png" alt="">
        </div>
        <div class="gift-desc">
          <p>YC星球星币</p>
          <span>个人努力与贡献的权益投射，星币是YC星球的基础数字货币，星币具有消费、转化、点对点交易等功能</span>
          <p class="price">{{giftJBNum}} 个</p>
        </div>
      </div>
      <div class="gift-list" @click="popup">
        <p class="gift-notice" :class="{'gift-notice1':isShake}">请选择支付方式</p>
        <div class="item-input">
          <input type="text" :id="pay_channel" :value="payment" readonly onfocus="this.blur()">
          <i class="icon icon-right"></i>
        </div>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
      <div class="payment">
        <ul>
          <li @click="wx"> <i class="icon icon-wx"></i> 微信支付</li>
          <li @click="gb"> <i class="icon icon-sgd"></i> 星钻支付</li>
        </ul>
      </div>
    </mt-popup>
    <mt-popup v-model="giftBagPop" position="bottom" class="mint-popup">
        <div class="giftBagList">
          <img :src="imgUrl+gImg" alt="" v-for="(gImg, index) in giftBagDetail" :key="index">
          <button @click="popGiftBagF">已了解</button>
        </div>
    </mt-popup>
    <div class="footer">
      <div class="footer-price">
        <p>应支付：</p>
        <p>{{giftPrice}} 元</p>
      </div>
      <div class="button" @click="gotoPay">
        去支付
      </div>
    </div>
    <applyPop @hidden="hiddenShow"  @password="passwordGro" :password="password" v-show="applyPop_pop_up"></applyPop>
  </div>
</template>
<script>
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
import { Toast } from 'mint-ui'
import applyPop from '../comp/applyPop.vue'
import api from '../../assets/js/api.js'
import {imgUrl} from '../../assets/js/api.js'
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      popupVisible: false,
      giftBagPop: false,
      orderList: [],
      imgUrl: imgUrl,
      id: '',
      name: '',
      phone: '',
      addressDetail: '',
      giftBag: '',
      payment: '',
      pay_channel: '',
      password: [],
      applyPop_pop_up: false,
      giftBagDetail: ['image/497c05e01f6235ff52b3cf01a435e179.jpg'],
      giftJBNum: 0,
      giftPrice: 0,
      isShake: true,
      showAds: true
    }
  },
  components: {
    applyPop
  },
  created () {
    if (!token) {
      this.showAds = false
      Toast({
        message: '您还未登录，请先登录',
        position: 'middle',
        duration: 2000
      })
    } else {
      this.$http.get(url + 'getDefaultAddress?token=' + token)
      // 获取默认地址
        .then(response => {
          // console.log(response)
          if (response.data.code == 500) {
            var cf = confirm('你还没有收货地址，是否去添加?')
            if (cf) {
              this.$router.push('/addressManage/set')
            } else {
              window.history.go(-1)
            }
            /*MessageBox({
              title: '提示',
              message: '你还没有收货地址，是否去添加?',
              showCancelButton: true
            })
              .then(ret => {
                if (ret == 'confirm') {
                  this.$router.push('/addressManage/set')
                } else {
                  window.history.go(-1)
                }
              })*/
          } else {
            this.id = response.data.data.id
            this.name = response.data.data.name
            this.phone = response.data.data.phone
            this.addressDetail = response.data.data.province + response.data.data.city + response.data.data.area + response.data.data.detail
          }
        })
        .catch(error => {
          console.log(error)
          // Toast('网络延时，请稍后重试')
        })
    }
    if (this.$route.params.index == 0) {
      this.giftBag = '礼包一'
    } else if (this.$route.params.index == 1) {
      this.giftBag = '礼包二'
    } else if (this.$route.params.index == 2) {
      this.giftBag = '礼包三'
    }
    this.giftList()
  },
  methods: {
    popup () {
      this.popupVisible = true
      this.isShake = false
    },
    hiddenShow () {
      let that = this;
      that.applyPop_pop_up = false
    },
    wx () {
      this.payment = '微信支付'
      this.pay_channel = 'wx'
      this.popupVisible = false
    },
    gb () {
      this.payment = '星钻支付'
      this.pay_channel = 'gb'
      this.popupVisible = false
    },
    passwordGro (e) {
      // 支付盘
      this.password = e
      let order_sn = sessionStorage.getItem('order_sn')
      if (this.password.length == 6) {
        let payment_password = this.password.toString().replace(/,/g, "")
        // console.log(payment_password)
        this.$http.get(url + 'giftOrderPay?token='+token+'&order_sn='+order_sn+'&payment_password='+payment_password)
          // 礼包订单支付
          .then( order => {
          // console.log(order)
            if (order.data.code == 500) {
              Toast({
                message: order.data.msg
              })
              return false
            } else {
              Toast({
                message: order.data.msg,
                position: 'bottom',
                duration: 3000
              })
              this.$router.push('/index')
            }
          })
          .catch(error => {
            console.log(error)
            Toast('网络延时，请稍后重试')
          })
      }
    },
    gotoPay () {
      // 支付
      if (!token) {
        Toast({
          message: '您还未登录，请先登录',
          position: 'middle',
          duration: 2000
        })
        return false
      }
      if (this.payment == '') {
        Toast('请选择支付方式')
        return false
      }
      let form = this.$qs.stringify({
        token: token,
        address_id: this.id,
        gift: this.giftBag,
        pay_channel: this.pay_channel,
        present_id: this.$route.params.id
      })
      this.$http.post(url + 'giftOrderCreate', form)
        .then(response => {
          console.log(response)
          sessionStorage.setItem('order_sn', response.data.data)
          if (response.data.code === 200) {
            if (this.pay_channel === 'wx') {
              window.location.href = url + 'giftOrderPay?token=' + token + '&order_sn=' + response.data.data
              return false
            }
            if (this.pay_channel === 'gb') {
              this.applyPop_pop_up = true
              return false
            }
          } else {
            Toast({
              message: response.data.msg
            })
          }
        })
        .catch(error => {
        console.log(error)
        Toast('网络延时，请稍后重试')
      })
    },
    giftList () {
      api.presentGoods({
        goods_type: this.$route.params.id
      })
        .then((res) => {
          console.log(res)
          this.orderList = res.data.goods
          this.giftJBNum = res.data.award
          this.giftPrice = res.data.gift_price
        })
    },
    popGiftBag (e) {
      this.giftBagPop = true ;
      this.giftBagDetail = e.detail_img
    },
    popGiftBagF () {
      this.giftBagPop = false ;
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/less/giftOrder.less');
</style>
