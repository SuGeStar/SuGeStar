<template>
<div class="wrapper">
  <div class="classify">
    <header>
      <div class="search-input">
        <a href="javascript:history.go(-1);" class="icon icon-back"></a>
        <router-link to="/search">
          <div class="inputBox">
            <label  for="search" class="icon icon-search searchIcon"></label>
            <input type="text" placeholder="搜索" id="search">
            <button>确定</button>
          </div>
        </router-link>
      </div>
    </header>
    <div class="class-head">
      <div class="classify-list">
        <ul>
          <li v-for="(classify,index) in classifyList" :key="index">
            <router-link :to="{path: '/classifyList/'+classify.id+'/'+classify.name}">
              <div class="classify-card" >
                <img :src="imgUrl + classify.logo" alt="">
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
</style>
<script>
import { imgUrl } from '@/assets/js/api.js'
import api from '@/assets/js/api.js'
export default {
  data () {
    return {
      ins: 0,
      classifyList: [],
      firstId: 0,
      AD: '',
      classId: 0,
      classIndex: 0,
      classBox: [],
      advImg: [],
      imgUrl: imgUrl
    }
  },
  methods: {
  },
  created () {
    // 获取商品一级分类
    api.cateList({})
      .then((res) => {
        this.classifyList = res.data
      })
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/classify.less";
</style>
