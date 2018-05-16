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
          <div class="box-input">
            <div class="buy-num">
              <span class="buy-tit">购买数量</span>
              <input class="buy-int" type="number" placeholder="请输入购买数量" v-model="number">
            </div>
            <div class="buy-num">
              <span class="buy-tit">所需金额</span>
              <input class="buy-int" type="number" :placeholder="data+'SG金币'" v-model="pay" readonly>
            </div>
          </div>
          <mt-button class="buy-btn">立即购买</mt-button>
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
      data: '200',
      pay: ''
    }
  }
}
</script>
