<template>
<div class="wrapper">
  <div class="store">
    <header>
      <div class="home-total">
        <img class="home-search" src="../../assets/image/search.png">
      <input class="home-input" type="" name="" id="" placeholder="搜索商品">
      </div>
      <img class="home-shopping" src="../../assets/image/shopping.png">
        <img class="home-order" src="../../assets/image/order.png">
    </header>
    <mt-swipe class="swiper" :auto="4000">
      <mt-swipe-item><img src="../../assets/image/banner01.png"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/image/banner02.png"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/image/banner01.png"></mt-swipe-item>
    </mt-swipe>
    <mt-swipe class="swiper1" :auto="0" :show-indicators="false">
      <mt-swipe-item class="box">
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
       <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
      </mt-swipe-item>
      <mt-swipe-item class="box">
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
       <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
        <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
      </mt-swipe-item>
    </mt-swipe>
    <div class="commodity">
      <span class="commodity1">今日上新</span>
      <span class="commodity2">今日上新</span>
    </div>
    <footGuide></footGuide>
  </div>
</div>
</template>
<style lang="less" scoped>
  @import '../../assets/less/store.less';

</style>
<script>

import footGuide from '../footer/footGuide.vue'
export default {
  components: {
    footGuide
  },
  created () {
  }
}
</script>
