<template>
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

   <mt-tabbar fixed>
      <mt-tab-item id="home" href="#/">
        <i slot="icon" class="icon icon-star"></i>
        SG星球
      </mt-tab-item>
      <mt-tab-item id="classify" class="active" href="#/store">
        <i slot="icon" class="icon icon-shore"></i>
        星球商城
      </mt-tab-item>
      <mt-tab-item id="shop" href="#/my">
        <i slot="icon" class="icon icon-my"></i>
        我的基地
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style lang="less" scoped>
  @import '../../assets/less/store.less';
</style>
<script>

export default {
  created () {
    return {
      swiperOption: {
      }
    }
  }
}
</script>
