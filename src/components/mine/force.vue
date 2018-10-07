<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>释放/转增
    </div>
    <div class="smelting-container">
      <p>可用星币：<span>{{SGNum}}</span></p>
      <p>释放/转增</p>
      <div class="smelting-withdraw">
        <span>¥</span><input type="number" v-model="smeltingNum">
      </div>
      <!-- <p class="max-smelting">当前可熔炼最大值为：{{max_smelting}} 个</p> -->
      <!--<mt-button @click="recharge">充值</mt-button>-->
      <div class="btn-boxs">
        <div class="bb1">
          <button @click="smeltings" class="fl">释放</button>
          <button @click="give" class="fr">转赠</button>
        </div>
      </div>
    </div>
    <applyPop @hidden="hiddenShow"  @password="passwordGro" :password="password" v-show="applyPop_pop_up"></applyPop>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import api from '@/assets/js/api.js'
import applyPop from '../comp/applyPop.vue'
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      smeltingNum: '',
      SGNum: 32,
      applyPop_pop_up: false,
      password: [],
    }
  },
  components: {
    applyPop
  },
  methods: {
    smeltings () {
      let finalSmelting = Number(this.smeltingNum)
      console.log(finalSmelting)
      if (!finalSmelting) {
        Toast('数量不能为空!')
        this.smeltingNum = ''
        return false
      }
      if (!Number.isInteger(finalSmelting)) {
        Toast('请输入整数!')
        this.smeltingNum = ''
        return false
      }
      if ((finalSmelting) > this.SGNum) {
        Toast('数量有误，请认真核对!')
        this.smeltingNum = ''
        return false
      }
      this.applyPop_pop_up = true
    },
    give () {
      let finalSmelting = Number(this.smeltingNum)
      if (!finalSmelting) {
        Toast('数量不能为空!')
        this.smeltingNum = ''
        return false
      }
      if (!Number.isInteger(finalSmelting)) {
        Toast('请输入整数!')
        this.smeltingNum = ''
        return false
      }
      if ((finalSmelting) > this.SGNum) {
        Toast('数量有误，请认真核对!')
        this.smeltingNum = ''
        return false
      }
      this.$router.push('/release/3/' + this.smeltingNum)
    },
    recharge () {
      let finalSmelting = Number(this.smeltingNum)
      if (!finalSmelting) {
        Toast('数量不能为空!')
        this.smeltingNum = ''
        return false
      }
      if (!Number.isInteger(finalSmelting)) {
        Toast('请输入整数!')
        this.smeltingNum = ''
        return false
      }
      let form = this.$qs.stringify({
        token: token,
        recharge_money: this.smeltingNum,
        pay_channel: 'wx'
      })
      api.createRechargeOrder(form)
      // 充值订单创建
        .then((res) => {
          console.log(res)
          window.location.href = url + 'rechargeOrderPay?token=' + token + ' &order_sn=' + res.data
        })
    },
    judge () {
      let finalSmelting = Number(this.smeltingNum)
      if (!finalSmelting) {
        Toast('数量不能为空!')
        this.smeltingNum = ''
        return false
      }
      if (!Number.isInteger(finalSmelting)) {
        Toast('请输入整数!')
        this.smeltingNum = ''
        return false
      }
      if ((finalSmelting) > this.SGNum) {
        Toast('数量有误，请认真核对!')
        this.smeltingNum = ''
        return false
      }
    },
    hiddenShow () {
      let that = this;
      that.applyPop_pop_up = false
    },
    // 密码输入
    passwordGro (e) {
      this.password = e
      if (this.password.length == 6) {
        let psw = this.password.toString().replace(/,/g, '')
        let form = this.$qs.stringify({
          token: token,
          miners: this.smeltingNum,
          payment_password: psw
        })
        api.applyForce(form)
          .then((res) => {
            console.log(res)
            if (res.code == 200) {
              Toast({
                message: res.msg,
                position: 'bottom',
                duration: 5000
              })
              // this.$router.replace('/index')
            } else {
              Toast({
                message: res.msg,
                position: 'bottom',
                duration: 5000
              })
            }
          })
      }
    }
  },
  created () {

  },
  mounted () {
    api.availableGold()
      .then((res) => {
        console.log(res)
        this.SGNum = res.data.miners
      })
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/less/smelting.less";
</style>
