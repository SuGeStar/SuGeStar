<template>
  <div class="wrapper">
    <mt-header fixed :title="brand.name">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="storeDetial">
      <div class="title">
        <div class="title-desc">
          <div class="title-img">
            <img :src="imgUrl + brand.logo" alt="">
          </div>
          <div class="title-box">
            <p>{{brand.name}}</p>
            <span>{{brand.desc}}</span>
          </div>
        </div>
      </div>
      <div class="store-box">
        <ul>
          <li v-for="(goods,index) in newList" class="store-list" :key="index">
              <router-link class="goods-box" :to="{path:'/details/' + goods.spec.goods_id}">
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
        <p class="add-more" @click="addMores" v-if="addMore">点击加载更多</p>
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
        score: ''
      },
      imgUrl: imgUrl,
      page: 1,
      newList: [],
      addMore: true
    }
  },
  created () {
    this.goodsList(1)
  },
  methods: {
    goodsList (page) {
      api.brandGoodsList({
        brand_id: this.$route.params.id,
        page: page
      })
        .then((res) => {
          this.brand = res.data.brand
          this.newList = res.data.goods
          if (res.data.goods.length <= 9) {
            this.addMore = false
          }
        })
    },
    addMores () {
      this.page += 1 ;
      api.brandGoodsList({
        brand_id: this.$route.params.id,
        page: this.page
      })
        .then(res => {
          var moreD = res.data.goods ;
          console.log(moreD.length)
          if (moreD.length === 0) {
            this.addMore = false
          } else {
            for (var i in moreD) {
              this.newList.push(moreD[i])
            }
          }
        })
    }
  }
}
</script>
