<template>
  <div class="wrapper">
    <mt-header fixed title="商品详情">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
   <div class="swiperContianer">
      <div class="swiperCenter">
        <div class="the-swiper">
          <mt-swipe class="det-swiper" :show-indicators="true" :auto="4000">
            <mt-swipe-item v-for="(swiper,index) in swiperBox" :key="index">
              <img cover :src="imgUrl+swiper" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="the-txt">
          <h3>{{goodsInfo.goods_name}}</h3>
          <p>星币： <span>{{showPrice}}</span></p>
          <button @click="format()" v-if="goodsInfo.stock !=0">立即购买</button>
          <button v-if="goodsInfo.stock ==0" class="over-btn">已售罄</button>
        </div>
      </div>
    </div>
    <div class="detail-pic">
      <p><span></span>图文详情</p>
      <div class="details-imgBox">
        <img v-for="(img,index) in imgBox" :key="index" :src="imgUrl+img" alt="">
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../../assets/less/details.less";
</style>
<script>
import { Toast } from 'mint-ui';
import api from '../../assets/js/api.js'
import {imgUrl} from '../../assets/js/api.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      goodsId: 0,
      goodsInfo: [],
      swiperBox: [],
      showPrice: 0,
      showGold: 0,
      imgUrl: imgUrl,
      imgBox: []
    }
  },
  methods: {
    // 立即购买
    format () {
      if (token) {
        localStorage.setItem('sdGoods', JSON.stringify(this.goodsInfo))
        this.$router.push({
          path: '/confirmOrderSd'
        })
      } else {
        Toast({
          message: '您还未登录，请先登录',
          position: 'middle',
          duration: 2000
        });
        return false
      }
    }
  },
  created () {
    let self = this
    self.goodsId = this.$route.params.goodsId
    api.goodsSdDetialInfo(self.goodsId)
      .then(res => {
        self.goodsInfo = res.data;
        self.swiperBox = self.goodsInfo.main_img
        self.imgBox = self.goodsInfo.detail_img
        self.showPrice = self.goodsInfo.price
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
