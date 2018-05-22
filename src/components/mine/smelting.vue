<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>熔炼
    </div>
    <div class="smelting-container">
      <p>可用{{oreType}}矿石：<span>1200</span></p>
      <p>熔炼{{oreType}}数量</p>
      <div class="smelting-withdraw">
        <span>¥</span><input type="number" >
      </div>
      <mt-button type="default">熔炼</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oreType: this.$route.params.id
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/less/smelting.less";
</style>
