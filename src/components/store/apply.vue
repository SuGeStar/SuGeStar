<template>
  <div class="wrapper">
    <mt-header fixed title="去支付">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <ul class="apply" v-if="way.way!=9">
      <!--<li class="apply-way" @click="applyPop(0)">
        <router-link to="">
          <i class="icon icon-wx"></i>
          <p>微信支付</p>
        </router-link>
      </li>-->
      <li class="apply-way" @click="applyPop(1)">
        <router-link to="">
          <i class="icon icon-sgj"></i>
          <p>星钻+星币支付</p>
        </router-link>
      </li>
      <li class="apply-way" @click="applyPop(2)">
        <router-link to="">
          <i class="icon icon-sgk"></i>
          <p>微信+星币支付</p>
        </router-link>
      </li>
    </ul>
   <div class="applySd" v-if="way.way==9" @click="sdApply">
     <img src="../../assets/image/xz.png" alt="">
     <p>星币支付</p>
   </div>
    <applyPop @hidden="hiddenShow"  v-show="applyPop_pop_up"  @password="passwordArr" :password="applyPsd" ></applyPop>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/store.less';
</style>
<script>
import applyPop from '../comp/applyPop.vue';
import api from '@/assets/js/api.js'
let token = localStorage.getItem('token');
import { url } from '../../assets/js/mobile.js';
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      applyPop_pop_up: false,
      finalOrder: [],
      applyWay: '',
      applyOrderCode: '',
      applyPsd: [],
      finalPsd: '',
      way: ''
    }
  },
  components: {
    applyPop
  },
  methods: {
    applyPop (idx) {
      if (this.way.way == 0) {
        this.finalOrder['token'] = token
        switch (idx) {
          case 0:
            this.applyWay = 'wx'
            this.finalOrder['pay_channel'] =  this.applyWay;
            let form = this.$qs.stringify(this.finalOrder);
            this.$http.post(url + 'createOrder', form)
              .then(res => {
                if (res.data.code === 200) {
                  this.applyOrderCode = res.data.data;
                  window.location.href = url + 'OrderPay?token=' + token + '&order_sn=' + this.applyOrderCode + '&payment_password=' + this.finalPsd
                }
              })
              .catch(err => {
                console.log(err)
              })
            break;
          case 1:
            this.applyWay = 'gb_kb';
            this.finalOrder['pay_channel'] =  this.applyWay;
            this.applyPop_pop_up = true;
            break;
          case 2:
            this.applyWay = 'wx_kb';
            this.finalOrder['pay_channel'] =  this.applyWay;
            let form2 = this.$qs.stringify(this.finalOrder);
            this.$http.post(url + 'createOrder', form2)
              .then(res => {
                if (res.data.code === 200) {
                  this.applyOrderCode = res.data.data;
                  window.location.href = url + 'OrderPay?token=' + token + '&order_sn=' + this.applyOrderCode + '&payment_password=' + this.finalPsd
                }
              })
              .catch(err => {
                console.log(err)
              })
            break;
          default:
            return false;
        }
      } else if (this.way.way == 1) {
        var c_orderId = localStorage.getItem('orderId');
        switch (idx) {
          case 0:
            this.applyWay = 'wx'
            let f1 = this.$qs.stringify({
              token: token,
              order_id: c_orderId,
              pay_channel: this.applyWay
            })
            this.$http.post(url + 'payOrder', f1)
              .then(res => {
                if (res.data.code === 200) {
                  window.location.href = url + 'OrderPay?token=' + token + '&order_sn=' + res.data.data + '&payment_password=' + this.finalPsd
                }
              })
              .catch(err => {
                console.log(err)
              })
            break;
          case 1:
            this.applyPop_pop_up = true;
            break;
          case 2:
            this.applyWay = 'wx_kb';
            let f3 = this.$qs.stringify({
              token: token,
              order_id: c_orderId,
              pay_channel: this.applyWay
            })
            this.$http.post(url + 'payOrder', f3)
              .then(res => {
                if (res.data.code === 200) {
                  window.location.href = url + 'OrderPay?token=' + token + '&order_sn=' + res.data.data + '&payment_password=' + this.finalPsd
                }
              })
              .catch(err => {
                console.log(err)
              })
            break;
          default:
            return false;
        }
      }
    },
    sdApply () {
      this.applyPop_pop_up = true;
    },
    passwordArr (e) {
      this.applyPsd = e;
      this.finalPsd = this.applyPsd.toString().replace(/,/g, '');
      if (this.way.way == 0) {
        let form1 = this.$qs.stringify(this.finalOrder);
        this.$http.post(url + 'createOrder', form1)
          .then(res => {
            if (res.data.code === 200) {
              this.applyOrderCode = res.data.data;
              this.$http.get(url + 'OrderPay?token=' + token + '&order_sn=' + this.applyOrderCode + '&payment_password=' + this.finalPsd)
                .then(resp => {
                  this.hiddenShow()
                  if (resp.data.code === 200) {
                    Toast({
                      message: resp.data.msg
                    })
                    this.$router.push('/myOrder')
                  } else {
                    Toast({
                      message: resp.data.msg
                    })
                  }
                })
                .catch(error => {
                  console.log(error)
                })
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else if (this.way.way == 1){
        var c_orderIds = localStorage.getItem('orderId');
        this.applyWay = 'gb_kb';
        let f2 = this.$qs.stringify({
          token: token,
          order_id: c_orderIds,
          pay_channel: this.applyWay
        });
        this.$http.post(url + 'payOrder', f2)
          .then(res => {
            if (res.data.code === 200) {
              this.$http.get(url + 'OrderPay?token=' + token + '&order_sn=' + res.data.data + '&payment_password=' + this.finalPsd)
                .then(resp => {
                  this.hiddenShow()
                  if (resp.data.code === 200) {
                    Toast({
                      message: resp.data.msg
                    })
                    this.$router.push('/myOrder')
                  } else {
                    Toast({
                      message: resp.data.msg
                    })
                  }
                })
                .catch(error => {
                  console.log(error)
                })
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else if (this.way.way == 9) {
        let ppd = this.finalPsd
        let sdF = this.$qs.stringify({
          token: token,
          payment_password: ppd,
          address_id: this.finalOrder.address_id,
          goods_id: this.finalOrder.goods_id,
          total_num: 1,
          remark: this.finalOrder.remark
        })
        api.applySd(sdF)
          .then(res => {
            if (res.code === 200) {
              Toast('兑换成功！请前往我的订单页查看！')
              setTimeout(() => {
                window.history.go(-3)
              }, 2500)
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    hiddenShow () {
      let that = this;
      that.applyPop_pop_up = false
    }
  },
  created () {
    this.finalOrder = JSON.parse(localStorage.getItem('applyOrder'))
    this.way = this.$route.params
    console.log()
  }
}
</script>
