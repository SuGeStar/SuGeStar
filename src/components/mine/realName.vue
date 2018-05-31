<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>实名认证
    </div>
    <div class="real-name-container">
      <div class="real-name-head">
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: ''
    }
  }
}
</script>

<style scoped lang="less">
@import "../../assets/less/realName.less";
</style>
