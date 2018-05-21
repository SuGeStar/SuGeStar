<template>
<!-- import func from './vue-temp/vue-editor-bridge'; -->
<div class="wrapper">
    <div class="classify">
        <header>
         <img class="home-search" src="../../assets/image/search.png">
      <input class="home-input" type="" name="" id="" placeholder="搜索商品">

        </header>
        <div class="Side navigation">
           <div v-for=" (cla, index) in className" :class="{' class_active ':idx}" @click="changeClass( index )" :key="index"> {{ cla }}  </div>
        </div>
        <div class="commodity">
          <div class="Title">
            <img class="title_l" src="../../assets/image/title_l.png"><span>{{ name }}</span>
            <img class="title_r" src="../../assets/image/title_r.png">
          </div>
           <div class="commodity-box" v-for=" (item, index) in commodity"  :key="index">
            <img :src="item.src" alt="">
            <p>{{item.mingzi}}</p>
           </div>
        </div>
            <div class="foot">
          <div><router-link to="/store"><img src="../../assets/image/order.png" alt="">
          <p>首页</p></router-link>
          </div>
          <div><router-link to="/classify"><img src="../../assets/image/order.png" alt="">
          <p>分类</p></router-link>
          </div>
           <div><router-link to="/car"><img src="../../assets/image/order.png" alt="">
          <p>购物车</p></router-link>
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
      selected: '',
      allData: '',
      className: [
        '上衣2',
        '下衣',
        '电器',
        '首饰',
        '家电',
        '上衣',
        '下衣',
        '电器',
        '上衣',
        '下衣',
        '电器1'
      ],
      name: '山鬼',
      idx: 0,
      commodity: [
        { mingzi: '真爱宝1', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝2', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝3', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝4', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝1', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝2', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝3', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝4', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝1', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝2', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝3', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝4', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝1', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝2', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝3', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝4', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝1', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝2', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝3', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝4', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝1', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝2', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝3', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝4', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' },
        { mingzi: '真爱宝5', src: 'http://ofkzpykzq.bkt.clouddn.com/QR.png' }
      ]
    }
  },
  methods: {
    changeClass: function (idxs) {
      console.log(idxs)
      this.idx = idxs
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/classify.less";

</style>
