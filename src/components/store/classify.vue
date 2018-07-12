<template>
<div class="wrapper">
  <div class="classify">
    <header class="classify-top">
      <a href="javascript:history.go(-1);" slot="left">
        <i class="icon icon-back back"></i>
      </a>
      <router-link to="/">
        <div class="search">
          <span>
            搜索商品
          </span>
        </div>
      </router-link>
    </header>
    <div class="classify-content">
      <div class="classify-left">
        <ul>
          <li v-for="(classifyName,index) in classList" :key="index" :class="{active:index===ins}" @click="active(index,classifyName)">
            {{classifyName.name}}
          </li>
        </ul>
      </div>
      <div class="classify-right">
        <div class="content-box">
          <img src="http://www.sgyxmall.com//Upload/category/2018-05-03/5aea6fee29278.jpg" alt="">
          <ul class="content-list">
            <li v-for="(classifyCont,index) in classBox" :key="index">
              <router-link to="/list">
                <img :src="classifyCont.img" alt="">
                <p>
                  {{classifyCont.name}}
                </p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style lang="less" scoped>
</style>
<script>
import { url } from '../../assets/js/mobile.js'
export default {
  data () {
    return {
      ins: 0,
      classList: [],
      classBox: [
        {
          img: 'http://www.sgyxmall.com//Upload/category/2018-05-03/5aea7306f28c1.png',
          name: '真艾宝'
        },
        {
          img: 'http://www.sgyxmall.com//Upload/category/2018-05-03/5aea7306f28c1.png',
          name: '真艾宝'
        },
        {
          img: 'http://www.sgyxmall.com//Upload/category/2018-05-03/5aea7306f28c1.png',
          name: '真艾宝'
        },
        {
          img: 'http://www.sgyxmall.com//Upload/category/2018-05-03/5aea7306f28c1.png',
          name: '真艾宝'
        }
      ]
    }
  },
  methods: {
    active (idx, e) {
      this.ins = idx
      this.$http.get(url + '/cateList?cate_id=' + e.cid)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    // 获取商品一级分类
    this.$http.get(url + 'cateList')
      .then(response => {
        console.log(response)
        this.classList = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/classify.less";
</style>
