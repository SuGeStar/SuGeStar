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
            <div class="car-content" v-for="(cars, index) in shop.child" :key="index">
              <div class="check-box">
                <input class="" :id="cars.id" type="radio" name="cart-checkbox" :value="cars.id" @click="getCarId(cars)">
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
                <p class="car-price">星币
                  <span>{{cars.spec.gold}} + ¥ {{cars.spec.cash}}</span>
                </p>
              </div>
              <div class="delete-btn">
                <p class="icon icon-delete"></p>
                <p @click="delCar(cars, index ,shop)">删除</p>
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
          <p>星币{{totelStar}} + ¥ {{totelMoney}}</p>
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
import api from '@/assets/js/api.js'
import { MessageBox } from 'mint-ui'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      carList: [],
      number: '5',
      totelStar: 0,
      totelMoney: 0,
      currentId: 0,
      carId: '',
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
      if (bool) {
        item.num++;
      } else {
        item.num--;
        if (item.num <= 1) {
          item.num = 1;
        }
      }
      if (item.id === this.currentId) {
        this.goodsCheck()
      }
    },
    clear () {
      if (this.currentId === 0) {
        Toast('您还未选中商品！！！')
        return false
      }
      let store = this.carList
      store.forEach(storeItem => {
        let goods = storeItem.child;
        goods.forEach(goodsItem => {
          if (goodsItem.id === this.currentId) {
            var finalData = {
              // 商品数量
              shopCount: goodsItem.num,
              // 选中状态下商品单价--现金
              shopPrice: goodsItem.spec.cash,
              //  选中状态下商品单价--星币
              shopGold: goodsItem.spec.gold,
              // 选中的颜色（状态1）
              shopColor: goodsItem.specification,
              // 选中的尺寸（状态2）
              shopSize: goodsItem.spec.size,
              // 商品ID
              shopId: goodsItem.goods.id,
              // 商品状态2 ID
              shopTypeId: goodsItem.spec.id,
              // 商品默认图片
              shopImg: goodsItem.goods.default_img,
              // 商品名字
              shopName: goodsItem.goods.goods_name,
              // 商品状态1名称
              shopTypeName1: goodsItem.goods.color_name,
              // 商品状态2名称
              shopTypeName2: goodsItem.goods.size_name
            }
            localStorage.setItem('finalData', JSON.stringify(finalData))
          }
        })
      })
      this.$router.push({path: '/confirmOrder'})
    },
    /*
    * 选中
    * */
    goodsCheck () {
      let store = this.carList
      store.forEach(storeItem => {
        let goods = storeItem.child;
        goods.forEach(goodsItem => {
          if (goodsItem.id === this.currentId) {
            this.totelMoney = parseFloat(parseFloat(goodsItem.num) * parseFloat(goodsItem.spec.cash)).toFixed(2)
            this.totelStar = parseFloat(parseFloat(goodsItem.num) * parseFloat(goodsItem.spec.gold)).toFixed(2)
          }
        })
      })
    },
    getCarId (e) {
      this.totelMoney = parseFloat(parseFloat(e.num) * parseFloat(e.spec.cash)).toFixed(2)
      this.totelStar = parseFloat(parseFloat(e.num) * parseFloat(e.spec.gold)).toFixed(2)
      this.currentId = e.id
    },
    /*
    * 删除购物车
    * */
    delCar (e, idx, shop) {
      MessageBox({
        title: '提示',
        message: '确认删除此商品?',
        showCancelButton: true
      })
        .then(ret => {
          if (ret == 'confirm') {
            let delForm = this.$qs.stringify({
              product_id: e.goods.id,
              token: token
            })
            api.deleteShopCar(delForm)
              .then(res => {
                shop.child.splice(idx, 1);
                Toast(res.msg)
              })
              .catch(err => {
                console.log(err)
              })
          } else {
            return false
          }
        })
    },
    /*
    * 获取购物车列表
    * */
    getCarList () {
      api.getShopCarList(token)
        .then(res => {
          console.log(res)
          this.carList = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getCarList()
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/less/car.less";
</style>
