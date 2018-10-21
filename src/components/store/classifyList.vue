<template>
  <div class="wrapper">
    <mt-header fixed :title="classify.title">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="classifyList">
      <!-- 标题 -->
      <div class="title">
        <ul :style="{width: classify.width + 'rem'}">
          <li v-for="(title,index) in classify.classifys" :key="index" :id="title.cid" :class="{active:index===classify.nowIndex}" @click="goodsList(title.id,classify.page,index)">{{title.name}}</li>
        </ul>
      </div>
      <div>
        <mt-tab-container class="classify-box" v-model="classify.selected">
          <mt-tab-container-item v-for="(title,index) in classify.classifys" :key="index"  :id="index">
            <ul>
              <li v-for="(goods,index) in classify.newList" :key="index">
                <router-link class="goods-box" :to="{path:'/details/' + goods.id}">
                  <img :src=" classify.imgUrl + goods.default_img" alt="">
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
            <p class="add-more" @click="classifyAddMore()" v-if="classify.isAddMore">点击加载更多</p>
            <img src="../../assets/image/noDate.png" alt="" v-if="classify.isNoDate" class="no-data-img">
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/classifyList.less';

</style>

<script>
import { imgUrl } from '@/assets/js/api.js'
import api from '@/assets/js/api.js'
import cache from '@/assets/js/catch.js'
export default {
  data () {
    return {
      classify: {
        title: '',
        selected: 0,
        classifys: [],
        S_width: 0,
        newList: [],
        page: 1,
        nowIndex: 0,
        cid: '',
        nowCid: '',
        imgUrl: imgUrl,
        width: 0,
        isAddMore: true,
        isNoDate: false,
        comeId1: this.$route.params.id
      },
      cache: cache,
      comeId: this.$route.params.id
    }
  },
  beforeDestroy () {
    let currentData = this.classify
    this.cache.setCache('leave', {cd: currentData})
  },
  created () {
    let cacheData = this.cache.getCache('leave')
    if (cacheData) {
      if (this.comeId == cacheData.cd.comeId1) {
        this.classify = cacheData.cd
      } else {
        this.classify.title = this.$route.params.name
        this.classTit()
      }
    } else {
      this.classify.title = this.$route.params.name
      this.classTit()
    }
  },
  methods: {
    classTit () {
      api.cateList({
        cate_id: this.$route.params.id
      })
        .then((res) => {
          this.classify.classifys = res.data
          this.classify.cid = this.classify.classifys[0].id
          this.goodsList(this.classify.cid, 1, 0)
          this.classify.width = this.classify.classifys.length * 1.5
        })
    },
    goodsList (cid, page, index) {
      this.classify.page = 1
      this.classify.nowIndex = index
      this.classify.nowCid = cid
      this.classify.newList = []
      api.goodsList({
        cate_id: cid,
        page: page
      })
        .then((res) => {
          if (res.data == '') {
            this.classify.isAddMore = false
            this.classify.isNoDate = true
          } else {
            if (res.data.length <= 9) {
              this.classify.isAddMore = false
            } else {
              this.classify.isAddMore = true
            }
            this.classify.isNoDate = false
            this.classify.newList = res.data
          }
        })
    },
    classifyAddMore () {
      this.classify.page += 1
      api.goodsList({
        cate_id: this.classify.nowCid,
        page: this.classify.page
      })
        .then(res => {
          // console.log(res)
          if (res.data == '') {
            this.classify.isAddMore = false
          } else {
            for (var i in res.data) {
              this.classify.newList.push((res.data)[i])
            }
          }
        })
    }
  }
}
</script>
