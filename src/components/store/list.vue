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
            <div class="img-box">
              <img :src="listCont.img" alt="">
            </div>
            <div class="cont-box">
              <h3>
                {{listCont.title}}
              </h3>
              <p>
                {{listCont.price}}
              </p>
              <span>
                {{listCont.skg}}
              </span>
            </div>
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
export default {
  data () {
    return {
      value: '',
      listBix: [
        {
          img: 'http://www.sgyxmall.com//Upload/goods/store_76/2018-05-15/5afa8dd235575.jpg',
          title: '2018夏新款水溶蕾丝半身裙高腰气质修身显瘦包臀中裙T3113啦啦啦',
          price: '￥159.00',
          skg: '或 ¥ 137.00 + 严选积分22.00'
        }
      ]
    }
  }
}
</script>
