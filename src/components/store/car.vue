<template>
<div class="wrapper">
  <mt-header fixed title="购物车">
    <a href="javascript:history.go(-1);" slot="left">
      <mt-button icon="back"></mt-button>
    </a>
  </mt-header>
  <div class="car">
    <ul class="car-box">
      <li class="list-box" v-for="(shop,index) in carList" :key="shop.id">
        <div class="car-list">
          <div class="car-title">
            {{shop.shop_name}}
          </div>
          <div class="car-content" v-for="(cars,index) in shop.child" :key="cars.id">
            <div class="check-box">
              <input class="" :id="cars.id" type="radio" name="cart-checkbox"  @click="getCarId(cars)">
              <label class="cart-checkbox" :for="cars.id"></label>
            </div>
            <div class="img-box">
              <img :src="getImg(cars.goods.default_img)" alt="">
            </div>
            <div class="info-box">
              <h3>{{cars.goods.goods_name}}</h3>
              <p class="info-desc">{{cars.goods.color_name}}：{{cars.specification}}，{{cars.goods.size_name}}：{{cars.spec.size}}</p>
              <div class="esc-count">
                <p class="cti-sub cti" @click="numSub">-</p>
                <input type="number" class="cti-number" readonly="" :value="cars.num">
                <p class="cti-add cti" @click="numAdd">+</p>
              </div>
              <p class="car-price">星币 <span>{{cars.spec.gold}} + ¥ {{cars.spec.cash}}</span></p>
            </div>
            <div class="delete-btn">
              <p class="icon icon-delete"></p>
              <p>删除</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="footer">
    <div class="foot-total">
      <span>合计:</span>
      <div class="total-price">
        <p>{{totPrice}}元</p>
        <p>或{{totmony}}+严选积分{{totsgk}}</p>
      </div>
    </div>
    <div class="foot-sure" @click="clear()">
      结算
    </div>
  </div>
</div>
</template>
<script>
import { Toast } from 'mint-ui';
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      carList: [],
      number: '5',
      isSelect: true,
      totPrice: '100',
      totmony: '￥10',
      totsgk: '90',
      carId: '',
      getImg (url) {
        return 'http://img.sugebei.com/' + url
      }
    }
  },
  methods: {
    numSub () {
      if (this.result <= 1) {
        Toast({
          message: '当前已是最小成交数量',
          position: 'bottom',
          duration: 2000
        })
      } else {
        this.result--;
        this.$emit('input', {res: this.result, other: '--'})
      }
    },
    numAdd () {
      if (this.result < this.number) {
        this.result++;
        this.$emit('input', {res: this.result, other: '++'})
      } else {
        Toast({
          message: '已达到最大购买数量',
          position: 'bottom',
          duration: 2000
        });
      }
    },
    clear () {
      console.log(this.carId)
    },
    getCarId (e) {
      console.log(e)
      var finalData = {
        shopCount: e.num,
        shopPrice: e.spec.cash,
        shopGold: e.spec.gold,
        shopColor: e.specification,
        shopSize: e.spec.size,
        shopInfo: e,
        shopTypeId: this.finalTypeId
      }
    }
  },
  created () {
    console.log(this.carId)
    // 获取购物车信息
    this.$http.get(url + 'cartList?token=' + token)
      .then(res => {
        console.log(res)
        this.carList = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/less/car.less";
</style>
