<template>
<div class="wrapper">
  <div class="store">
    <header :class="isHeight ? 'bgHeight' : ''">
      <div class="search-input">
        <div class="inputBox">
          <label class="icon icon-search searchIcon" for="search"></label>
          <input type="text" id='search' placeholder='搜索商品' />
          <button>确定</button>
        </div>
      </div>
      <div class="iconBox">
        <router-link to="/car">
          <i class="icon icon-car"></i>
        </router-link>
        <router-link to="myOrder">
          <i class="icon icon-order"></i>
        </router-link>
      </div>
    </header>
    <!-- 轮播图 -->
    <div class="head-con">
      <div class="store-swiper">
        <carousel-3d :autoplay="true" :autoplay-timeout="5000" :display="3" :style="{height: slideHeight + 'px'}">
          <slide v-for="(slide,i) in slides" :key="i" :index="i" :style="{height: slideHeight + 'px'}">
            <img :src="slide.src">
          </slide>
        </carousel-3d>
      </div>
    </div>
    <div class="classify-container">
      <ul>
        <li v-for="(cls,index) in swiperBox" :key="index">
          <router-link to="classify">
            <div><img :src="getImg(cls.logo)" alt=""></div>
            <p>{{cls.name}}</p>
          </router-link>
        </li>
        <li>
          <router-link to="classify">
            <div><img src="" alt=""></div><p>更多</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!--logo图片位置-->
    <div class='logo-img'>
      <div class="logo-img-con">
        <img src="../../assets/image/data_icon.png" alt="">
        <div class="logo-title"><p>SG星球数据中心</p></div>
      </div>
    </div>
    <!--品牌-->
    <div class="band-goods-container">
      <p class="band-goods-title"><span>品牌</span></p>
      <div class="band-container">
        <ul :style="{width: S_width + 'rem'}">
          <li v-for="(sImg,index) in storeImg" :key="index">
            <img :src="sImg.img" alt="">
          </li>
        </ul>
      </div>
    </div>
    <!--精品-->
    <div class="band-goods-container">
      <p class="band-goods-title"><span>品牌</span></p>
      <div class="goods-container">
        <ul>
          <li class="content-list" v-for="item in goodsList" :key="item.id">
            <router-link :to="{path:'/details/' + item.goods_id}">
              <img :src="getImg(item.default_img)" alt="">
              <p>
                {{item.goods_name}}
              </p>
              <p class="content-price">
                星币 <span>{{item.spec.gold}}</span> + ¥ <i>{{item.spec.cash}}</i>
              </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <footGuide></footGuide>
</div>
</template>
<style lang="less" scoped>
  @import '../../assets/less/store.less';
  .bgHeight{
    background-color: #fff;
  }
  .carousel-3d-container {
    margin: 0 auto;
  .carousel-3d-slide {
    padding: 0;
    width: 300px;
    height: 200px;
    .title { font-size: 22px; }
  }
}
</style>
<script>
import footGuide from '../comp/footGuide.vue'
import { url } from '../../assets/js/mobile.js'
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
  components: {
    footGuide,
    Carousel3d,
    Slide
  },
  name: 'page-tab-container',
  data () {
    return {
      active: 'tab-container1',
      value: '',
      selected: '1',
      s2: false,
      swiperBox: [],
      swiperBox2: [],
      newList: [],
      goodsList: [],
      storeImg: [
        {img: 'http://www.sgyxmall.com/Upload/goods/store_163/2018-07-11/5b4561440be31.jpg'},
        {img: 'http://www.sgyxmall.com/Upload/goods/store_163/2018-07-11/5b4561440be31.jpg'},
        {img: 'http://www.sgyxmall.com/Upload/goods/store_163/2018-07-11/5b4561440be31.jpg'},
        {img: 'http://www.sgyxmall.com/Upload/goods/store_163/2018-07-11/5b4561440be31.jpg'},
        {img: 'http://www.sgyxmall.com/Upload/goods/store_163/2018-07-11/5b4561440be31.jpg'},
        {img: 'http://www.sgyxmall.com/Upload/goods/store_163/2018-07-11/5b4561440be31.jpg'},
        {img: 'http://www.sgyxmall.com/Upload/goods/store_163/2018-07-11/5b4561440be31.jpg'},
        {img: 'http://www.sgyxmall.com/Upload/goods/store_163/2018-07-11/5b4561440be31.jpg'}
      ],
      slides: [
          {
            src: 'http://c.hiphotos.baidu.com/image/pic/item/09fa513d269759eeef490028befb43166d22df3c.jpg'
          },
          {
            src: 'http://f.hiphotos.baidu.com/image/pic/item/960a304e251f95cacc952852c5177f3e660952f5.jpg'
          },
          {
            src: 'http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b129b3b9d1c451da80cb3e17.jpg'
          },
      ],
      slideWidth: 200,
      slideHeight: 250,
      isHeight: false,
      S_width: 0,
      getImg (url) {
        return 'http://img.sugebei.com' + url
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  handleScroll () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    console.log(scrollTop)
  },
  created () {
    
    // 获取商品一级分类
    this.$http.get(url + 'cateList')
      .then(response => {
        for (var i = 0; i < 4; i++) {
          this.swiperBox.push((response.data.data)[i])
        }
        /*let _len = response.data.data.length;
        if (_len > 8) {
          this.s2 = true
          for (var i = 0; i < 8; i++) {
            this.swiperBox.push((response.data.data)[i])
          }
          for (var j = 8; j < _len; j++) {
            this.swiperBox2.push((response.data.data)[j])
          }
        } else {
          this.s2 = false
          this.swiperBox = response.data.data
        }*/
      })
      .catch(error => {
        console.log(error)
      })
    // 获取今日上线数据
    this.$http.get(url + 'goodsToday?page=' + 1)
      .then(res => {
        this.newList = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
    // 获取精选好物数据
    this.$http.get(url + 'goodsSelected?page=' + 1)
      .then(res => {
        this.goodsList = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
    console.log()
    let _l = this.storeImg.length
    this.S_width = _l * 1.28 + (_l - 1) * 0.26
  }
}
</script>
