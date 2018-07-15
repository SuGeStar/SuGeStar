<template>
  <div class="wrapper">
    <mt-header fixed title="去支付">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <ul class="apply">
      <li class="apply-way" @click="applyPop(0)">
        <router-link to="">
          <i class="icon icon-wx"></i>
          <p>微信支付</p>
        </router-link>
      </li>
      <li class="apply-way" @click="applyPop(1)">
        <router-link to="">
          <i class="icon icon-sgj"></i>
          <p>SG金币支付</p>
        </router-link>
      </li>
      <li class="apply-way" @click="applyPop(2)">
        <router-link to="">
          <i class="icon icon-sgk"></i>
          <p>微信+SG矿币支付</p>
        </router-link>
      </li>
    </ul>
    <applyPop @hidden="hiddenShow"  v-show="applyPop_pop_up"  @password="passwordArr" :password="applyPsd" ></applyPop>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/store.less';
</style>
<script>
import applyPop from '../comp/applyPop.vue';
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
      finalPsd: ''
    }
  },
  components: {
    applyPop
  },
  methods: {
    applyPop (idx) {
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
          this.applyWay = 'gb';
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
      //
    },
    passwordArr (e) {
      this.applyPsd = e;
      this.finalPsd = this.applyPsd.toString().replace(/,/g, '');
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
    },
    hiddenShow () {
      let that = this;
      that.applyPop_pop_up = false
    }
  },
  created () {
    this.finalOrder = JSON.parse(localStorage.getItem('applyOrder'))
  }
}
</script>
