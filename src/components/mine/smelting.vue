<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>赠送/释放/充值
    </div>
    <div class="smelting-container">
      <p>可用星钻：<span>{{SGNum}}</span></p>
      <p>释放/赠送/充值数量</p>
      <div class="smelting-withdraw">
        <span>¥</span><input type="number" v-model="smeltingNum">
      </div>
      <!-- <p class="max-smelting">当前可熔炼最大值为：{{max_smelting}} 个</p> -->
      <mt-button @click="smelting">释放</mt-button>
      <mt-button @click="give">转增</mt-button>
      <mt-button @click="recharge">充值</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import api from '@/assets/js/api.js'
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      smeltingNum: '',
      SGNum: 32,
      // max_smelting: 0
    }
  },
  methods: {
    smelting () {
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
      this.$router.push('/release/0/'+this.smeltingNum)
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
      this.$router.push('/release/1/'+this.smeltingNum)
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
    }
  },
  created () {

  },
  mounted () {
    api.availableGold()
    .then((res) => {
      console.log(res)
      this.SGNum = res.data.gold
    })
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/less/smelting.less";
</style>
