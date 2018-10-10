<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>{{store.name}}
    </div>
    <div class="storeDetial">
      <div class="title">
        <div class="title-desc">
          <div class="title-img">
            <!--<img :src="imgUrl + brand.logo" alt="">-->
          </div>
          <div class="title-box">
            <p></p>
            <span></span>
          </div>
        </div>
      </div>
      <div class="store-box">
        <ul>
          <li v-for="(goods,index) in mallList" class="store-list" :key="index">
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
        <!--<p class="add-more" @click="addMores" v-if="addMore">点击加载更多</p>-->
      </div>
    </div>
  </div>
</template>

<script>
import { imgUrl } from '@/assets/js/api.js'
import api from '@/assets/js/api.js'
export default {
  data () {
    return {
      mallList: [],
      imgUrl: imgUrl,
      store: []
    }
  },
  created () {
    api.storeDetail(this.$route.params.id)
      .then(res => {
        console.log(res)
        this.mallList = res.data.goods
        this.store = res.data.store
      })
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/storeDetial.less';
</style>
