<template>
<div class="wrapper">
  <div class="classify">
    <!--<header class="classify-top">
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
          <img :src="getImg(AD)" alt="">
          <ul class="content-list">
            <li v-for="(classifyCont,index) in classBox" :key="index">
              <router-link :to="{path:'/list/'+classifyCont.cid}">
                <img :src="getImg(classifyCont.logo)" alt="">
                <p>
                  {{classifyCont.name}}
                </p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>-->
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
    /*active (idx, e) {
      this.ins = idx
      this.getTwoClass(e.cid)
      this.AD = (this.advImg)[idx]
    },
    getTwoClass (id) {
      this.$http.get(url + '/cateList?cate_id=' + id)
        .then(res => {
          this.classBox = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }*/
  },
  created () {
    /*this.firstId = this.$route.params.id
    this.classIndex = this.$route.params.idx
    this.ins = parseInt(this.$route.params.idx)*/
    // 获取商品一级分类
    this.$http.get(url + 'cateList')
      .then(response => {
        console.log(response)
        /*this.classList = response.data.data
        for (var i in this.classList) {
          this.advImg.push((this.classList)[i].img)
        }
        this.getTwoClass(this.firstId)
        this.AD = (this.advImg)[this.classIndex]*/
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
