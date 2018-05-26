<template>
<!-- import func from './vue-temp/vue-editor-bridge'; -->
<div class="wrapper">
    <div class="details">
    <div class="header"> 
  <router-link style=" float: left;background:w" to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
     <div class="comde">
    <span  class="commodity" >商品详情
    </span>
    </div>
    </div>

    <mt-swipe class="swiper" :auto="4000">
      <mt-swipe-item><img src="../../assets/image/banner01.png"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/image/banner02.png"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/image/banner01.png"></mt-swipe-item>
    </mt-swipe>
    <div class="tit">
    <p>Midea/美的压力锅 WQS50F3高压锅原装智能预约家用5L双胆家用</p>
    <p class="title">总算价<span>￥499.00</span>或 ¥446.00+严选积分 53.00</p>
    </div>
    <div @click="spec()" class="Specifications">
        <span>选择数量规格</span>
        <h1>></h1>
    </div>
    <div class="Details">
        <p class="details-tit">商品详情</p>
        <img src="../../assets/image/banner01.png">
        <img src="../../assets/image/banner01.png">
        <img src="../../assets/image/banner01.png">
    </div>
    <div class="foot">
        <img src="../../assets/image/shopping.png">
        <div class="box">
            <span class="box-car">加入购物车</span>
            <span class="box-mai">立即购买</span>
        </div>
    </div>
     <div class="modal">
    </div>
</div>
</div> 
</template>
<style lang="less" scoped>
@import "../../assets/less/details.less";
</style>
<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        spec(){

        }
    },
}  
</script> 
