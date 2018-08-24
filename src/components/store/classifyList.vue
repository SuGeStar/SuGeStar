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
        <ul>
          <li v-for="(title,index) in classify" :key="index" :id="title.cid" :class="{active:index===nowIndex}" @click="goodsList(title.id,page,index)">{{title.name}}</li>
        </ul>
      </div>
      <div>
        <mt-tab-container class="classify-box" v-model="selected">
          <mt-tab-container-item v-for="(title,index) in classify" :key="index"  :id="index">
            <ul>
              <li v-for="(goods,index) in newList" :key="index">
                <router-link class="goods-box" to="/">
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
      page: 0,
      nowIndex: 0,
      cid: '',
      imgUrl: imgUrl
    }
  },
  created () {
    console.log(this.$route.params)
    this.title = this.$route.params.name
    this.classTit()
  },
  methods: {
    classTit () {
      api.cateList({
        cate_id: this.$route.params.id
      })
      .then((res) => {
        // console.log(res)
        this.classify = res.data
        this.cid = this.classify[0].id
        this.goodsList(this.cid, 1, 0)
      })
    },
    goodsList (cid, page, index) {
      this.nowIndex = index
      api.goodsList({
        cate_id: cid,
        page: page
      })
      .then((res) => {
        // console.log(res)
        this.newList = res.data
      })
    },
  }
}
</script>
