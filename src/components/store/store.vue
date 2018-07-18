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
        <router-link to="/car">
          <i class="icon icon-car"></i>
        </router-link>
        <router-link to="myOrder">
          <i class="icon icon-order"></i>
        </router-link>
      </div>
    </header>
    <mt-swipe class="swiper" :show-indicators="false" :auto="4000">
      <mt-swipe-item><img src="../../assets/image/banner01.png"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/image/banner02.png"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/image/banner01.png"></mt-swipe-item>
    </mt-swipe>
    <mt-swipe class="swiper1" :auto="0">
      <mt-swipe-item class="box">
        <div v-for="(classify,_index) in swiperBox" :key="classify.cid">
          <router-link :to="{path:'/classify/'+classify.cid+'/'+_index}">
            <img :src="getImg(classify.logo)">
            <p>{{classify.name}}</p>
          </router-link>
        </div>
      </mt-swipe-item>
      <mt-swipe-item class="box" v-if="s2">
        <div class="swiper-box2" v-for="classify in swiperBox2" :key="classify.cid">
          <router-link to="/classify">
            <img :src="getImg(classify.logo)">
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
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="content-box">
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
import { url } from '../../assets/js/mobile.js'
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
      s2: false,
      swiperBox: [],
      swiperBox2: [],
      newList: [],
      goodsList: [],
      getImg (url) {
        return 'http://img.sugebei.com' + url
      }
    }
  },
  created () {
    // 获取商品一级分类
    this.$http.get(url + 'cateList')
      .then(response => {
        let _len = response.data.data.length;
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
        }
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
  }
}
</script>
