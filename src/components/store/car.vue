<template>
<div class="wrapper">
    <div class="big-car">
 <div class="car" v-for=" (item, index) in car"  :key="index">
     <div class="car-company"><input type="checkbox" class="round"><span class="com">{{item.company}}</span></div>
     <div class="car-shopping" >
         <span class="shop-round"></span><img src="../../assets/image/banner01.png" alt="">
     <div class="details"><span>{{item.name}}</span>
        <p>{{item.details}}</p>
        <div class="esc_count">
            <p class="esc_sub fl" @click="changeadd()">-</p>
            <input type="number" class="esc_number fl" v-model="number">
            <p class="esc_add fl" @click="changereduce()">+</p>
        </div>
        <h2 class="Price">{{item.price}}</h2>
        <h4>{{item.mode}}</h4>
        <button class="delete">删除</button>
     </div>
     </div>
 </div>
    </div>
 <div class="Settlement">
     <div class="selection">
         <span class="roundd"></span>
         <span class="qx">全选</span>
     </div>
     <div class="Total">
         <p>合计:</p>
         <span class="money">0元</span>
         <span class="Other">或115元+200矿币萨达撒多撒多撒</span>
     </div>
     <div class="zmoney">
         结算
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
 </template>
<script>
export default {
  data () {
    return {
      number: 0,
      car: [
        {company: '苏格实业有限公司1', name: '蕰妮法国原装进口贝勒城堡干红葡萄酒波尔多赤霞珠BL0191', details: '颜色：红色，尺寸：如图750ml1', price: '￥455', mode: '或  ¥346.00+矿石399.001'},
        {company: '苏格实业有限公司2', name: '蕰妮法国原装进口贝勒城堡干红葡萄酒波尔多赤霞珠BL0192', details: '颜色：红色，尺寸：如图750ml2', price: '￥455', mode: '或  ¥346.00+矿石399.002'},
        {company: '苏格实业有限公司3', name: '蕰妮法国原装进口贝勒城堡干红葡萄酒波尔多赤霞珠BL0193', details: '颜色：红色，尺寸：如图750ml3', price: '￥455', mode: '或  ¥346.00+矿石399.003'},
        {company: '苏格实业有限公司4', name: '蕰妮法国原装进口贝勒城堡干红葡萄酒波尔多赤霞珠BL0194', details: '颜色：红色，尺寸：如图750ml4', price: '￥455', mode: '或  ¥346.00+矿石399.004'},
        {company: '苏格实业有限公司5', name: '蕰妮法国原装进口贝勒城堡干红葡萄酒波尔多赤霞珠BL0195', details: '颜色：红色，尺寸：如图750ml5', price: '￥455', mode: '或¥346.00+矿石399.005'}]
    }
  },
  methods: {
    changeadd: function (number) {
      this.number--
    },
    changereduce: function () {
      this.number++
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/less/car.less";
</style>
