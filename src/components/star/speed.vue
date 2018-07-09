<template>
  <div class="wrapper">
    <mt-header fixed title="加速器">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="speed">
      <div class="speed-con">
        加速器是SG星球中加快采矿效率的专属道具，通过购买加速器，可以大幅提高S矿石的日产出，缩短转化熔炼周期，提升转化熔炼速率
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
              <input class="buy-int" type="number" v-model="num" placeholder="请输入购买数量">
            </div>
            <div class="buy-num">
              <span class="buy-tit">所需金额</span>
              <input class="buy-int" type="number" :placeholder="num*200+'SG金币'" v-model="pay" readonly>
            </div>
          </div>
          <mt-button class="buy-btn" @click="buyBtn">立即购买</mt-button>
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
      num: '1',
      pay: ''
    }
  },
  created () {
  },
  methods: {
    buyBtn () {
      console.log(this.num*200)
    }
  }
}
</script>
