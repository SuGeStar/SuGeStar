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
          <li v-for="(classifyName,index) in classList" :key="index" :class="{active:index===ins}" @click="active(index)">
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
export default {
  data () {
    return {
      ins: 0,
      classList: [
        {
          name: '真艾宝'
        },
        {
          name: '女装'
        },
        {
          name: '男装'
        },
        {
          name: '配件'
        },
        {
          name: '居家'
        },
        {
          name: '3C专区'
        },
        {
          name: '洗护'
        },
        {
          name: '饮食'
        },
        {
          name: '婴童'
        },
        {
          name: '餐厨'
        },
        {
          name: '珠宝'
        }
      ],
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
    active (num) {
      console.log(num)
      this.ins = num
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/classify.less";
</style>
