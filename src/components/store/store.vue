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
    <mt-swipe class="swiper1" :auto="0">
      <mt-swipe-item class="box">
        <div v-for="classify in swiperBox" :key="classify.id">
          <router-link to="/classify">
            <img :src="classify.img">
            <p>{{classify.name}}</p>
          </router-link>
        </div>
      </mt-swipe-item>
      <mt-swipe-item class="box">
        <div class="swiper-box2" v-for="classify in swiperBox2" :key="classify.id">
          <router-link to="/classify">
            <img :src="classify.img">
            <p>{{classify.name}}</p>
          </router-link>
        </div>
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
              <li class="content-list" v-for="item in newList" :key="item.id">
                <img :src="item.img" alt="">
                <p>
                 {{item.desc}}
                </p>
                <p class="content-sgk">
                  {{item.sgk}}
                </p>
                <span class="content-price">
                  {{item.price}}
                </span>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="content-box">
            <ul>
              <li class="content-list" v-for="item in goodsList" :key="item.id">
                <img :src="item.img" alt="">
                <p>
                 {{item.desc}}
                </p>
                <p class="content-sgk">
                  {{item.sgk}}
                </p>
                <span class="content-price">
                  {{item.price}}
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
      selected: '1',
      swiperBox: [
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/754.png',
          name: '真艾宝'
        },
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/765.png',
          name: '土特产专区'
        },
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/651.png',
          name: '女装'
        },
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/606.png',
          name: '男装'
        },
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/713.png',
          name: '女鞋'
        },
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/702.png',
          name: '男鞋'
        },
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/5.png',
          name: '个护彩妆'
        },
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/4.png',
          name: '精品箱包'
        },
      ],
      swiperBox2: [
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/588.png',
          name: '珠宝配饰'
        },
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/11.png',
          name: '童装/孕婴'
        },
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/10.png',
          name: '数码家电'
        },
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/8.png',
          name: '家居家纺'
        },
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/6.png',
          name: '食全食美'
        },
        {
          img: 'http://sugemall.com/data/files/mall/gcategory/9.png',
          name: '汽车用品'
        }
      ],
      newList: [
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
          desc: '复古原宿条纹外套女2017冬加加厚显加厚显加厚lalallalala',
          sgk: '￥200+矿币36或',
          price: '￥236'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
          desc: '复古原宿条纹外套女2017冬加加厚显加厚显加厚lalallalala',
          sgk: '￥200+矿币36或',
          price: '￥236'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
          desc: '复古原宿条纹外套女2017冬加加厚显加厚显加厚lalallalala',
          sgk: '￥200+矿币36或',
          price: '￥236'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
          desc: '复古原宿条纹外套女2017冬加加厚显加厚显加厚lalallalala',
          sgk: '￥200+矿币36或',
          price: '￥236'
        }
      ],
      goodsList: [
        {
          img: 'http://sugemall.com/data/files/store_20380/goods_151/small_201804191635518179.jpg',
          desc: '复古原宿条纹外套女2017冬加加厚显加厚显加厚lalallalala',
          sgk: '￥200+矿币36或',
          price: '￥236'
        },
        {
          img: 'http://sugemall.com/data/files/store_20380/goods_151/small_201804191635518179.jpg',
          desc: '复古原宿条纹外套女2017冬加加厚显加厚显加厚lalallalala',
          sgk: '￥200+矿币36或',
          price: '￥236'
        },
        {
          img: 'http://sugemall.com/data/files/store_20380/goods_151/small_201804191635518179.jpg',
          desc: '复古原宿条纹外套女2017冬加加厚显加厚显加厚lalallalala',
          sgk: '￥200+矿币36或',
          price: '￥236'
        },
        {
          img: 'http://sugemall.com/data/files/store_20380/goods_151/small_201804191635518179.jpg',
          desc: '复古原宿条纹外套女2017冬加加厚显加厚显加厚lalallalala',
          sgk: '￥200+矿币36或',
          price: '￥236'
        }
      ]
    }
  }
}
</script>
