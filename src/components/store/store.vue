<template>
<div class="wrapper">
  <div class="store">
    <header>
      <div class="search-input">
        <div class="inputBox">
          <label class="icon icon-search searchIcon" for="search"></label>
          <input type="text" id='search' placeholder='搜索商品' />
        </div>
      </div>
      <div class="iconBox">
        <router-link to="/">
          <i class="icon icon-car"></i>
        </router-link>
        <router-link to="/">
          <i class="icon icon-order"></i>
        </router-link>
      </div>
    </header>
    <mt-swipe class="swiper" :auto="4000">
      <mt-swipe-item><img src="../../assets/image/banner01.png"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/image/banner02.png"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/image/banner01.png"></mt-swipe-item>
    </mt-swipe>
    <mt-swipe class="swiper1" :auto="0" :show-indicators="false">
      <mt-swipe-item class="box">
        <router-link to="/classify">
          <div><img src="../../assets/image/banner01.png"><p>真爱宝</p></div>
        </router-link>
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
    <div class="content">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">今日上新</mt-tab-item>
        <mt-tab-item id="2">精选好物</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="content-box">
            <ul>
              <li class="content-list">
                <img src="../../assets/image/goods_pic.png" alt="">
                <p>
                  复古原宿条纹外套女2017冬加加厚显加厚显加厚lalallalala
                </p>
                <p class="content-sgk">
                  ￥200+矿币36或
                </p>
                <span class="content-price">
                  ￥236
                </span>
              </li>
              <li class="content-list">
                <img src="../../assets/image/goods_pic.png" alt="">
                <p>
                  复古原宿条纹外套女2017冬加加厚显加厚显加厚...
                </p>
                <p>
                  ￥200+矿币36或
                </p>
                <span>
                  ￥236
                </span>
              </li>
              <li class="content-list">
                <img src="../../assets/image/goods_pic.png" alt="">
                <p>
                  复古原宿条纹外套女2017冬加加厚显加厚显加厚...
                </p>
                <p>
                  ￥200+矿币36或
                </p>
                <span>
                  ￥236
                </span>
              </li>
              <li class="content-list">
                <img src="../../assets/image/goods_pic.png" alt="">
                <p>
                  复古原宿条纹外套女2017冬加加厚显加厚显加厚...
                </p>
                <p>
                  ￥200+矿币36或
                </p>
                <span>
                  ￥236
                </span>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="content-box">
            <ul>
              <li class="content-list">
                <img src="../../assets/image/goods_pic.png" alt="">
                <p>
                  复古原宿条纹外套女2017冬加加厚显加厚显加厚...
                </p>
                <p>
                  ￥200+矿币36或
                </p>
                <span>
                  ￥236
                </span>
              </li>
              <li class="content-list">
                <img src="../../assets/image/goods_pic.png" alt="">
                <p>
                  复古原宿条纹外套女2017冬加加厚显加厚显加厚...
                </p>
                <p>
                  ￥200+矿币36或
                </p>
                <span>
                  ￥236
                </span>
              </li>
              <li class="content-list">
                <img src="../../assets/image/goods_pic.png" alt="">
                <p>
                  复古原宿条纹外套女2017冬加加厚显加厚显加厚...
                </p>
                <p>
                  ￥200+矿币36或
                </p>
                <span>
                  ￥236
                </span>
              </li>
              <li class="content-list">
                <img src="../../assets/image/goods_pic.png" alt="">
                <p>
                  复古原宿条纹外套女2017冬加加厚显加厚显加厚...
                </p>
                <p>
                  ￥200+矿币36或
                </p>
                <span>
                  ￥236
                </span>
              </li>
            </ul>
          </div>
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
import footGuide from '../comp/footGuide.vue'
export default {
  components: {
    footGuide
  },
  name: 'page-tab-container',
  data () {
    return {
      active: 'tab-container1',
      value: '',
      selected: '1'
    }
  }
}
</script>
