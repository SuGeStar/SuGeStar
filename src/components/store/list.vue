<template>
  <div class="wrapper">
    <div class="list">
      <header class="classify-top">
        <a href="javascript:history.go(-1);" slot="left">
          <i class="icon icon-back back"></i>
        </a>
        <mt-search class="search" v-model="value"  placeholder="请输入搜索内容"></mt-search>
      </header>
      <div class="list-content">
        <ul>
          <li v-for="(listCont,index) in listBix" :key="index">
            <router-link class="con-list" :to="{path:'/details/' + listCont.goods_id}">
              <div class="img-box">
                <img :src="getImg(listCont.default_img)" alt="">
              </div>
              <div class="cont-box">
                <h3>{{listCont.goods_name}}</h3>
                <p>星币:<span>{{listCont.spec.gold}}</span> + <i> ¥</i> <u>{{listCont.spec.cash}}</u></p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/list.less';
</style>
<script>
import { url } from '../../assets/js/mobile.js'
export default {
  data () {
    return {
      value: '',
      cid: 0,
      listBix: [],
      getImg (url) {
        return 'http://img.sugebei.com' + url
      }
    }
  },
  created () {
    this.cid = this.$route.params.cid
    this.$http.get(url + 'goodsList?cate_id=' + this.cid + '&page=1')
      .then(res => {
        this.listBix = res.data.data
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
