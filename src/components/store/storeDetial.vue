<template>
  <div class="wrapper">
    <mt-header fixed title="店铺详情">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="storeDetial">
      <div class="title">
        <div class="title-desc">
          <img :src="imgUrl + brand.logo" alt="">
          <div class="title-box">
            <p>{{brand.nick_name}}</p>
            <span>{{brand.desc}}</span>
          </div>
        </div>
        <div class="title-eval">
          <p>评分</p>
          <span>{{brand.score}}</span>
        </div>
      </div>
      <div class="store-box">
        <ul>
          <li v-for="(goods,index) in newList" class="store-list" :key="index">
              <router-link class="goods-box" :to="{path:'/details/' + goods.goods_id}">
                <img :src=" imgUrl + goods.default_img" alt="">
                <div class="goods-txt">
                  <p>{{goods.goods_name}}</p>
                  <p class="content-price">
                    星币 <span>{{goods.spec.gold}}</span> + ¥ <span>{{goods.spec.cash}}</span>
                  </p>
                  <p class="del-text">￥{{goods.spec.total}}</p>
                </div>
              </router-link>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/storeDetial.less';
</style>
<script>
import { imgUrl } from '@/assets/js/api.js'
import api from '@/assets/js/api.js'
export default {
  data () {
    return {
      brand: {
        logo: '',
        nick_name: '',
        desc: '',
        score: '',
      },
      imgUrl: imgUrl,
      page: 0,
      newList: [{
        default_img: '/upload/2018/07/894f8201807250956093143.jpg',
        goods_name: '真维斯纯棉polo衫2018夏装新款男士短袖翻领T恤港风修身保罗衫',
        spec: {
          gold: '10000',
          cash: '10000',
          total: '20000'
        }
      }]
    }
  },
  created () {
    this.goodsList(1)
  },
  methods: {
    goodsList (page) {
      api.brandGoodsList ({
        brand_id: this.$route.params.id,
        page: page
      })
      .then ((res) => {
        console.log(res)
        this.brand = res.data.brand
        this.newList = res.data.goods
      })
    }
  }
}
</script>
