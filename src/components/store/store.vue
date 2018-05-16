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
    <div class="nav">
      <mt-button class="nav-1" size="small" @click.native.prevent="active = 'tab-container1'">今日上新</mt-button>
      <mt-button class="nav-2" size="small" @click.native.prevent="active = 'tab-container2'">精选好物</mt-button>
    </div>
<div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <mt-cell>
            <div class="bar-content">
              <div class="new-box">
              <img  src="../../assets/image/banner01.png">
              <p class="new-desc">复古原宿条纹外套女2017冬加加厚显加厚显加厚第三方房贷首付斯蒂芬斯蒂芬</p>
              <p class="method">￥200+矿币36或</p>
              <p class="price">￥236</p>
              </div>
                 <div class="new-box">
              <img  src="../../assets/image/banner01.png">
              <p class="new-desc">复古原宿条纹外套女2017冬加加厚显加厚显加厚第三方房贷首付斯蒂芬斯蒂芬</p>
              <p class="method">￥200+矿币36或</p>
              <p class="price">￥236</p>
              </div>
            </div>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="n in 10" title="tab-container 2" :key="n"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
    <footGuide></footGuide>
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
  name: 'page-tab-container',
  data () {
    return {
      active: 'tab-container1'
    }
  }
}
</script>
