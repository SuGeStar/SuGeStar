<template>
  <div class="wrapper">
    <div class="search">
      <header>
        <a class="icon icon-back-b" href="javascript:history.go(-1);"></a>
        <div class="search-input">
          <div class="inputBox">
            <label class="icon icon-search searchIcon" for="search"></label>
            <input type="text" id='search' v-model="key_words" placeholder='搜索商品' />
          </div>
        </div>
        <button class="search-button" @click="search">确定</button>
      </header>
      <div class="content">
        <div class="cont-box hot-search" v-show="isHot">
          <p>热门搜索</p>
          <div class="search-hot">
            <input type="button" @click="hotA" v-model="hot1">
            <input type="button" @click="hotB" v-model="hot2">
            <input type="button" @click="hotC" v-model="hot3">
          </div>
        </div>
        <div class="search-list">
          <ul>
            <li class="is-null" v-show="isNull">
              <img src="../../assets/image/nodata.png" alt="">
            </li>
            <li v-for="(item,index) in searchList" :key="index">
              <router-link :to="{path: '/details/'+item.id}" class="search-box">
                <div class="search-img">
                  <img :src="imgUrl + item.default_img" alt="">
                </div>
                <div class="search-desc">
                  <p class="search-title">{{item.goods_name}}</p>
                  <p class="search-price">星币 <span>{{item.spec.gold}}</span> +￥ <i>{{item.spec.cash}}</i></p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/search.less';
</style>

<script>
import { imgUrl } from '../../assets/js/api.js'
import api from '../../assets/js/api.js'
export default {
  data () {
    return {
      isHot: true,
      isNull: false,
      hot1: '男鞋',
      hot2: '羽绒服',
      hot3: '棉袄',
      value: '',
      key_words: '',
      imgUrl: imgUrl,
      searchList: []
    };
  },
  computed: {

  },
  methods: {
    search () {
      api.search({
        key_words: this.key_words
      })
        .then((res) => {
          this.isHot = false
          if (res.data.length == 0) {
            this.isNull = true
          } else {
            this.isNull = false
            this.searchList = res.data
          }
        })
    },
    hotA () {
      this.key_words = this.hot1
      this.search()
    },
    hotB () {
      this.key_words = this.hot2
      this.search()
    },
    hotC () {
      this.key_words = this.hot3
      this.search()
    }
  }
}
</script>
