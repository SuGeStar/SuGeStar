<template>
  <div class="wrapper">
    <mt-header fixed title="加速器">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="speed">
      <div class="speed-con">
        加速器的作用加速器的作用加速器的作用加速器的作用加速器的作用加速器的作用加速器的作用器的作用加速器的作用加速器的作用加速器的作
      </div>
      <div class="speed-line">
        <img src="../../assets/image/speed-sp.png">
      </div>
      <div class="speed-buy">
        <h3>购买加速器</h3>
        <div class="buy-box">
          <mt-field label="购买数量" placeholder="请输入购买数量" type="number" v-model="number"></mt-field>
          <mt-field label="所需金额" disabled="disabled" :placeholder="data">SG金币</mt-field>
          <mt-button type="default">立即购买</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '../../assets/less/speed.less';
</style>
<script>
export default {
  data () {
    return {
      number: '',
      data: '200'
    }
  }
}
</script>
