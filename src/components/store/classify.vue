<template>
<div class="wrapper">
  <div class="classify">
    <header>
      <span class="icon icon-back"></span>
      <div>
        <label  for="search" class="icon icon-search searchIcon"></label>
        <input type="text" placeholder="搜索" id="search">
        <button>确定</button>
      </div>
    </header>
    <div class="class-head">
      <div class="classify-list">
        <ul>
          <li></li>
        </ul>
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
      firstId: 0,
      AD: '',
      classId: 0,
      classIndex: 0,
      classBox: [],
      advImg: [],
      getImg (url) {
        return 'http://img.sugebei.com' + url
      }
    }
  },
  methods: {
  },
  created () {
    // 获取商品一级分类
    this.$http.get(url + 'cateList')
      .then(response => {
        console.log(response)
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
