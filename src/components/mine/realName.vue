<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>实名认证
    </div>
    <div class="real-name-container">
      <div class="real-name-head">
        <p class="real-name-name">姓名 <span>张三</span></p>
        <p class="real-name-id">身份证号 <span>阿斯加德</span></p>
        <p class="real-name-yp">优品账户 <span>15738669091</span></p>
      </div>
    </div>
    <div class="id-card-set" >
      <router-link to="bindBankCard"><p>银行卡 <span class="fr">去绑定</span></p></router-link>
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
