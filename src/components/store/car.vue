<template>
<div class="wrapper">
  <mt-header fixed title="购物车">
    <a href="javascript:history.go(-1);" slot="left">
      <mt-button icon="back"></mt-button>
    </a>
  </mt-header>
  <div class="car">
    <ul class="car-box">
      <li class="list-box" v-for="(shop, index) in carList" :key="index">
        <div class="car-list">
          <div class="car-title">
            {{shop.shop_name}}
          </div>
          <div class="car-content" v-for="(cars, index) in shop.child" :key="index" >
            <div class="check-box">
              <input class="" :id="cars.id" type="radio" name="cart-checkbox"  @click="getCarId(cars)" v-model="checked">
              <label class="cart-checkbox" :for="cars.id"></label>
            </div>
            <div class="img-box">
              <img :src="getImg(cars.goods.default_img)" alt="">
            </div>
            <div class="info-box">
              <h3>{{cars.goods.goods_name}}</h3>
              <p class="info-desc">{{cars.goods.color_name}}：{{cars.specification}}，{{cars.goods.size_name}}：{{cars.spec.size}}</p>
              <div class="esc-count">
                <p class="cti-sub cti" @click="numSubAdd(cars,false)">-</p>
                <input type="number" class="cti-number" readonly="" :value="cars.num">
                <p class="cti-add cti" @click="numSubAdd(cars,true)">+</p>
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
        <p>星币{{totalGold}} + ¥ {{totalPrice}}</p>
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
      totalPrice: 0,
      totalGold: 0,
      carId: '',
      checkGoods: {},
      getImg (url) {
        return 'http://img.sugebei.com/' + url
      }
    }
  },
  methods: {
    /*
    * 购物车数量的增加减少
    * */
    numSubAdd (item, bool) {
      // console.log(item)
      if (bool) {
        item.num++;
      } else {
        item.num--;
        if (item.num <= 1) {
          item.num = 1;
        }
      }
      this.goodsCheck()
    },
    clear () {
      console.log(this.checkGoods)
      var finalData = {

      }
     /* this.$router.push({
        path: '/confirmOrder'
      })*/
    },
    /*
    * 选中
    * */
    goodsCheck () {
      let store = this.carList
      store.forEach(storeItem => {
        let goods = storeItem.child;
        goods.forEach(goodsItem => {
          console.log(goodsItem)
          if (goodsItem.checked) {
            console.log(goodsItem)
          }
        })
        // console.log(storeItem)
      })
      /*store.forEach(this.carList, function (storItem) {
        console.log(storItem)
        /!*storItem.child.forEach(storItem.child, function (goodsItem) {
          if (goodsItem.checked) {
            console.log(goodsItem)
          }
        })*!/
      })*/
    },
    getCarId (e) {
      this.totalPrice = parseFloat(parseFloat(e.num) * parseFloat(e.spec.cash)).toFixed(2)
      this.totalGold = parseFloat(parseFloat(e.num) * parseFloat(e.spec.gold)).toFixed(2)
      this.checkGoods = {
        // 商品数量
        shopCount: e.num,
        // 选中状态下商品单价--现金
        shopPrice: e.spec.cash,
        //  选中状态下商品单价--星币
        shopGold: e.spec.gold,
        // 选中的颜色（状态1）
        shopColor: e.specification,
        // 选中的尺寸（状态2）
        shopSize: e.spec.size,
        // 商品ID
        shopId: e.goods.id,
        // 商品状态2 ID
        shopTypeId: e.spec.id,
        // 商品默认图片
        shopImg: e.goods.default_img,
        // 商品名字
        shopName: e.goods.goods_name,
        // 商品状态1名称
        shopTypeName1: e.goods.color_name,
        // 商品状态2名称
        shopTypeName2: e.goods.size_name
      }
      // var finalData = {
      //   // 商品数量
      //   shopCount: e.num,
      //   // 选中状态下商品单价--现金
      //   shopPrice: e.spec.cash,
      //   //  选中状态下商品单价--星币
      //   shopGold: e.spec.gold,
      //   // 选中的颜色（状态1）
      //   shopColor: e.specification,
      //   // 选中的尺寸（状态2）
      //   shopSize: e.spec.size,
      //   // 商品ID
      //   shopId: e.goods.id,
      //   // 商品状态2 ID
      //   shopTypeId: e.spec.id,
      //   // 商品默认图片
      //   shopImg: e.goods.default_img,
      //   // 商品名字
      //   shopName: e.goods.goods_name,
      //   // 商品状态1名称
      //   shopTypeName1: e.goods.color_name,
      //   // 商品状态2名称
      //   shopTypeName2: e.goods.size_name
      // }
      // localStorage.setItem('finalData', JSON.stringify(finalData))
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
