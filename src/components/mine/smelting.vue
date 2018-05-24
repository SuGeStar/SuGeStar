<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>熔炼
    </div>
    <div class="smelting-container">
      <p>可用{{oreType}}矿石：<span>{{SGNum}}</span></p>
      <p>熔炼{{oreType}}数量</p>
      <div class="smelting-withdraw">
        <span>¥</span><input type="number" v-model="smeltingNum">
      </div>
      <p class="max-smelting">当前可熔炼最大值为：{{max_smelting}} 个</p>
      <mt-button type="default" @click="smelting">熔炼</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      oreType: this.$route.params.id,
      smeltingNum: '',
      SGNum: 32,
      max_smelting: 0
    }
  },
  methods: {
    smelting: function () {
      var finalSmelting = this.smeltingNum
      if (!finalSmelting) {
        Toast('熔炼数量不能为空!')
        return false
      }
      if (parseInt(finalSmelting) > this.max_smelting) {
        Toast('熔炼数量有误，请认真核对!')
        return false
      }
    }
  },
  mounted () {
    if (this.oreType == 'K') {
      this.max_smelting = Math.floor((this.SGNum) / 5)
    } else {
      this.max_smelting = this.SGNum
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/less/smelting.less";
</style>
