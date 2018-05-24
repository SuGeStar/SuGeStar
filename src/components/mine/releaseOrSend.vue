<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>释放/赠送
    </div>
    <div class="smelting-container">
      <p>可用SG金币：<span>{{SGJ}}</span></p>
      <p>释放/赠送数量</p>
      <div class="smelting-withdraw">
        <span>¥</span><input type="number" v-model="rsNum">
      </div>
      <div class="btn-box">
        <mt-button type="default" class="fl" @click="releaseSG">释放</mt-button>
        <mt-button type="default" class="fr" @click="sendSG">赠送</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      SGJ: 1200,
      rsNum: ''
    }
  },
  methods: {
    // 释放
    releaseSG: function () {
      var rs = this.rsNum
      if (!rs) {
        Toast('释放数量不能为空!')
        return false
      } else {
        this.$router.push({
          path: '/release/0/' + rs
        })
      }
    },
    // 赠送
    sendSG: function () {
      var rs = this.rsNum
      if (!rs) {
        Toast('赠送数量不能为空!')
        return false
      } else {
        this.$router.push({
          path: '/release/1/' + rs
        })
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
