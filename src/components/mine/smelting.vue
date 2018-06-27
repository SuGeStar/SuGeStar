<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>赠送/释放/充值
    </div>
    <div class="smelting-container">
      <p>可用SG金币：<span>{{SGNum}}</span></p>
      <p>释放/赠送/充值金币数量</p>
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
      if (this.smeltingNum == '') {
        this.judge()
        return false
      }
      this.$router.push('/release/0/'+this.smeltingNum)
    },
    give () {
      if (this.smeltingNum == '') {
        this.judge()
        return false
      }
      this.$router.push('/release/1/'+this.smeltingNum)
    },
    recharge () {
      this.judge()
    },
    judge () {
      var finalSmelting = this.smeltingNum
      if (!finalSmelting) {
        Toast('数量不能为空!')
        return false
      }
      if (parseInt(finalSmelting) > this.SGNum) {
        Toast('数量有误，请认真核对!')
        return false
      }
    }
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/less/smelting.less";
</style>
