<template>
<div class="wrapper">
  <div class="store">
    <header  class="bgHeight">
      <div class="search-input">
        <router-link to="/search">
          <div class="inputBox">
            <label class="icon icon-search searchIcon" for="search"></label>
            <input type="text" v-model="search" id='search' placeholder='搜索商品' />
            <button @click="determine">确定</button>
          </div>
        </router-link>
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
     <!--轮播图 -->
    <div class="head-con">
      <div class="store-swiper">
        <carousel-3d :autoplay="true" :autoplay-timeout="5000" :display="3" style="border: none" :style="{height: slideHeight + 'px'}">
          <slide v-for="(slide,i) in slides" :key="i" :index="i" style="border: none" :style="{height: 180 + 'px', width: 98 + '%',marginLeft: 1 + '%',borderRadius: 0.1 +'rem'}">
            <img :src="getImg(slide.pic)" class="swiper-imgs">
          </slide>
        </carousel-3d>
      </div>
    </div>
    <div class="aaa">
      <div class="classify-container" id="searchBar">
        <ul>
          <li v-for="(cls,index) in swiperBox" :key="index">
            <router-link :to="{path: '/classifyList/'+cls.id+'/'+cls.name}">
              <div><img :src="getImg(cls.img)" alt=""></div>
              <p>{{cls.name}}</p>
            </router-link>
          </li>
          <li>
            <router-link to="classify">
              <div><img src="../../assets/image/icon5.png" alt=""></div><p>更多</p>
            </router-link>
          </li>
        </ul>
      </div>
      <!--logo图片位置-->
      <div class='logo-img'>
        <router-link to="sdZone">
          <div class="logo-img-con">
            <img src="../../assets/image/data_icon.png" alt="">
            <div class="logo-title"><p>YC星球商品数据中心</p></div>
          </div>
        </router-link>
      </div>
      <!--品牌-->
      <div class="band-goods-container">
        <p class="band-goods-title"><span>品牌</span></p>
        <div class="band-container">
          <ul :style="{width: S_width + 'rem'}">
            <li v-for="(sImg,index) in storeImg" :key="index">
              <router-link :to="{path: '/storeDetial/'+sImg.id}">
                <img :src="getImg(sImg.logo)" alt="">
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!--精品-->
      <div class="band-goods-container">
        <p class="band-goods-title"><span>精品</span></p>
        <div class="goods-container">
          <ul>
            <li class="content-list" v-for="item in goodsList" :key="item.id">
              <router-link :to="{path:'/details/' + item.id}">
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
          <span class="add-mores" v-if="addMoreLogo"><mt-spinner :type="3" color="#000">.</mt-spinner></span>
          <p class="no-more" v-if="!addMoreLogo">没有更多了...</p>
        </div>
      </div>
    </div>
  </div>
  <footGuide></footGuide>
</div>
</template>
<style lang="less" scoped>
  @import '../../assets/less/store.less';
  .store-swiper{
    /*padding-top: 1.5rem;*/
    margin-top: 1rem;
    z-index: 999999;
  }
.carousel-3d-slide{
  z-index: 999999;
}
  .swiper-imgs{
    z-index: 9999999;
  }
  .carousel-3d-container {
    margin: 0 auto;
  .carousel-3d-slide {
    padding: 0;
    width: 300px;
    /*height: 200px;*/
    .title { font-size: 22px; }
  }
}
</style>
<script>
import footGuide from '../comp/footGuide.vue'
import { url } from '../../assets/js/mobile.js'
import { Carousel3d, Slide } from 'vue-carousel-3d'
// import { InfiniteScroll } from 'mint-ui';
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
      search: '',
      selected: '1',
      s2: false,
      swiperBox: [],
      swiperBox2: [],
      newList: [],
      goodsList: [],
      storeImg: [],
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
      slideHeight: 190,
      isHeight: false,
      S_width: 0,
      loading: false,
      page: 1,
      isScroll: true,
      addMoreLogo: true,
      getImg (url) {
        return 'http://img.sugebei.com/' + url
      }
    }
  },
  mounted () {
    // 给window添加一个滚动滚动监听事件

  },
  beforeDestroy () {
    // window.removeEventListener('scroll', () => {
    //   this._st()
    // })
    this.isScroll = false
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
    // 轮播图
    this.$http.get(url + 'slides')
      .then(res => {
        // console.log(res)
        this.slides = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
    // 品牌
    this.$http.get(url + 'brandList/1')
      .then(res => {
        // console.log(res)
        this.storeImg = res.data.data
        // this.newList = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
    // 获取精选好物数据
    this.$http.get(url + 'goodsSelected/' + 1)
      .then(res => {
        this.goodsList = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
    let _l = this.storeImg.length
    this.S_width = _l * 1.28 + (_l - 1) * 0.26

    this.scrollBottom()
  },
  methods: {
    determine () {
      // 搜索

    },
    scrollBottom () {
      window.addEventListener('scroll', () => {
        this._st()
      })
    },
    _st () {
      if (this.isScroll) {
        var st = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        if (st + window.innerHeight + 1 > document.body.offsetHeight) {
          this.page += 1
          this.$http.get(url + 'goodsSelected/' + this.page)
            .then(res => {
              for (var i in res.data.data) {
                this.goodsList.push((res.data.data)[i])
              }
              if (res.data.data == '') {
                this.isScroll = false
                this.addMoreLogo = false
              }
            })
            .catch(err => {
              console.log(err)
            })
        }
      }
    }
  }
}
</script>
