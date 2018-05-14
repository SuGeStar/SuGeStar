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
    <swiper :options="swiperOption" ref="mySwiper" class="swiper1">
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
    </swiper>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
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
    return {
      swiperOption: {
      }
    }
  }
}
</script>
