<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>星币市场订单
    </div>
    <div class="mos-container">
      <div class="mos-head-tab">
        <p :class="{'mos-head-tab-on':className}" @click="mosChange(0)"><span>待发货</span></p>
        <p :class="{'mos-head-tab-on':!className}" @click="mosChange(1)"><span>已发货</span></p>
      </div>
      <div class="each-order-list-container" >
        <div class="each-order-list-center" v-for="(w, index) in wait" :key="index" v-if="className">
          <div class="each-order-list">
            <div class="eol-img fl">
              <img :src="imgUrl+w.product.default_img" alt="">
            </div>
            <div class="eol-info fl">
              <p class="eol-nam">{{w.product.goods_name}}</p>
              <p class="eol-enc" style="margin-top: .5rem">星币 :{{w.product.price}}</p>
            </div>
            <span class="eol-totle">X {{w.total_num}}</span>
          </div>
          <div class="myOrderInfo">
            <p><span>订单编号：</span>{{w.sn}}</p>
            <p><span>下单时间：</span>{{w.created_at}}</p>
            <p><span>支付合计：<i>星币 {{w.total_price}}</i></span></p>
            <p v-if="w.status === 3"><span>快递单号：<input :id="w.tracking_num" :value="w.tracking_num" readonly></span><i @click="copyTxt(w.tracking_num)" class="copy">一键复制</i></p>
            <p><span>运　　费：0</span></p>
          </div>
          <div class="myOrder_receive">
            <div class="or_left fl"></div>
            <div class="or_right fl">
              <p><span>收货人：{{w.address.name}}</span> <span class="fr" style="color: black">{{w.address.phone}}</span></p>
              <p><span>收货地址：{{w.address.province}} {{w.address.city}} {{w.address.area}} {{w.address.detail}}</span></p>
            </div>
          </div>
        </div>
        <div class="each-order-list-center" v-for="(w, index) in rec" :key="index" v-if="!className">
          <div class="each-order-list">
            <div class="eol-img fl">
              <img :src="imgUrl+w.product.default_img" alt="">
            </div>
            <div class="eol-info fl">
              <p class="eol-nam">{{w.product.goods_name}}</p>
              <p class="eol-enc" style="margin-top: .5rem">星币 :{{w.product.price}}</p>
            </div>
            <span class="eol-totle">X {{w.total_num}}</span>
          </div>
          <div class="myOrderInfo">
            <p><span>订单编号：</span>{{w.sn}}</p>
            <p><span>下单时间：</span>{{w.created_at}}</p>
            <p><span>支付合计：<i>星币 {{w.total_price}}</i></span></p>
            <p v-if="w.status === 3"><span>快递单号：<input :id="w.tracking_num" :value="w.tracking_num" readonly></span><i @click="copyTxt(w.tracking_num)" class="copy">一键复制</i></p>
            <p><span>运　　费：0</span></p>
          </div>
          <div class="myOrder_receive">
            <div class="or_left fl"></div>
            <div class="or_right fl">
              <p><span>收货人：{{w.address.name}}</span> <span class="fr" style="color: black">{{w.address.phone}}</span></p>
              <p><span>收货地址：{{w.address.province}} {{w.address.city}} {{w.address.area}} {{w.address.detail}}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/assets/js/api.js'
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui'
import { imgUrl } from '@/assets/js/api.js'
export default {
  data () {
    return {
      imgUrl: imgUrl,
      className: true,
      wait: [],
      rec: []
    }
  },
  methods: {
    mosChange (ix) {
      switch (ix) {
        case 0:
          this.className = true
          break
        case 1:
          this.className = false
          break;
      }
    },
    copyTxt (txt) {
      this.$copyText(txt).then(function (e) {
        Toast('复制成功')
      }, function (e) {
        Toast('复制失败')
      })
    }
  },
  created () {
    api.getOrderSdData()
      .then(res => {
        if (res.code === 200) {
          for (var i in res.data) {
            if ((res.data)[i].status === 2) {
              this.wait.push((res.data)[i])
            }
            if ((res.data)[i].status === 3) {
              this.rec.push((res.data)[i])
            }
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/myOrder.less";
</style>
