<template>
  <div class="wrapper">
    <mt-header fixed :title="title">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
      <router-link to="/car" class="icon icon-car" slot="right"></router-link>
    </mt-header>
    <div class="classifyList">
      <!-- 标题 -->
      <div class="title">
        <ul :style="{width: width + 'rem'}">
          <li v-for="(title,index) in classify" :key="index" :id="title.cid" :class="{active:index===nowIndex}" @click="goodsList(title.id,page,index)">{{title.name}}</li>
        </ul>
      </div>
      <div>
        <mt-tab-container class="classify-box" v-model="selected">
          <mt-tab-container-item v-for="(title,index) in classify" :key="index"  :id="index">
            <ul>
              <li v-for="(goods,index) in newList" :key="index">
                <router-link class="goods-box" :to="{path:'/details/' + goods.id}">
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
            <p class="add-more" @click="classifyAddMore()" v-if="isAddMore">点击加载更多</p>
            <img src="../../assets/image/noDate.png" alt="" v-if="isNoDate" class="no-data-img">
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
export default {
  data () {
    return {
      title: '',
      selected: 0,
      classify: [],
      S_width: 0,
      newList: [],
      page: 1,
      nowIndex: 0,
      cid: '',
      nowCid: '',
      imgUrl: imgUrl,
      width: 0,
      isAddMore: true,
      isNoDate: false
    }
  },
  created () {
    this.title = this.$route.params.name
    this.classTit()
  },
  methods: {
    classTit () {
      api.cateList({
        cate_id: this.$route.params.id
      })
        .then((res) => {
          this.classify = res.data
          this.cid = this.classify[0].id
          this.goodsList(this.cid, 1, 0)
          this.width = this.classify.length * 1.5
        })
    },
    goodsList (cid, page, index) {
      this.page = 1
      this.nowIndex = index
      this.nowCid = cid
      this.newList = []
      api.goodsList({
        cate_id: cid,
        page: page
      })
        .then((res) => {
          if (res.data == '') {
            this.isAddMore = false
            this.isNoDate = true
          } else {
            if (res.data.length <= 9) {
              this.isAddMore = false
            } else {
              this.isAddMore = true
            }
            this.isNoDate = false
            this.newList = res.data
          }
        })
    },
    classifyAddMore () {
      this.page += 1
      api.goodsList({
        cate_id: this.nowCid,
        page: this.page
      })
        .then(res => {
          // console.log(res)
          if (res.data == '') {
            this.isAddMore = false
          } else {
            for (var i in res.data) {
              this.newList.push((res.data)[i])
            }
          }
        })
    }
  }
}
</script>
