<template>
  <div class="wrapper">
    <mt-header fixed title="确认支付">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="payment">
      该笔订单支付金额
      <p>￥700</p>
      <mt-button>确认支付</mt-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.payment{
  margin-top: 0.86rem;
}
</style>
<script>
export default {
  data () {
    return {
      
    }
  },
  created () {
    let code = location.href.substring(location.href.indexOf('=')+1,location.href.indexOf('&'))
    localStorage.setItem('code',code)
  }
}
</script>
