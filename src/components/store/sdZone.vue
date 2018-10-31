<template>
  <div class="wrapper">
    <mt-header fixed title="YC星币市场">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="sd-zone-container">
      <div class="sd-zone-head"></div>
      <div class="sd-zone-list">
        <p class="sd-zone-title"></p>
        <div class="sz-list">
          <ul>
            <li v-for="(bk, index) in bkList" :key="index">
              <router-link :to="{path:'/sdDetail/' + bk.id}">
                <img :src="imgUrl+bk.default_img" :alt="bk.goods_name">
                <div class="sl-info">
                  <p class="sl-name">{{bk.goods_name}}</p>
                  <div class="sl-buy">
                    <div class="sl-buy-center">
                      <p class="sl-price">星币：<span>{{bk.price}}</span></p>
                      <div class="sl-buy-now"><span>立即兑换</span></div>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <p class="sz-star-title"></p>
        <div class="sz-star-container">
          <ul>
            <li v-for="(st, index) in star" :key="index">
              <router-link :to="{path:'/sdDetail/' + st.id}">
                <img :src="imgUrl+st.default_img" :alt="st.goods_name">
                <p class="sz-name">{{st.goods_name}}</p>
                <div class="sz-buy">
                  <p class="sz-price">星币：<span>{{st.price}}</span></p>
                  <div class="sz-buy-now"><span>立即兑换</span></div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
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
      imgUrl: imgUrl,
      star: [],
      bkList: []
    }
  },
  created () {
    // this.sdZone()
    api.starCoinMarket()
      .then(res => {
        console.log(res)
        if (res.code === 200) {
          this.star = res.data.star
          this.bkList = res.data.explosion
        }
      })
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/sdZone";
</style>
