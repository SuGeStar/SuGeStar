<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>商城订单
    </div>
    <div class="my-order-title">
      <p v-for="(title, $index) in orderTitle" :key="$index" :class="{'tabOn':idx == $index}" @click="changeTab($index)">{{title}}</p>
    </div>
    <div class="my-order-container">
      <!--所有订单-->
      <div class="each-order-list-container" v-for="(order,index) in orderList" :key="index">
        <p class="shopName">{{order.product.store_name}}</p>
        <div class="each-order-list">
          <div class="eol-img fl">
            <img :src="getImg(order.product.default_img)" alt="">
          </div>
          <div class="eol-info fl">
            <p class="eol-nam">&nbsp;{{order.product.goods_name}}</p>
            <p class="eol-type" style="width: 4.2rem;height: .3rem;overflow: hidden">颜色：{{order.color}}，尺寸：{{order.spec.size}}</p>
            <p class="eol-enc">星币 {{order.spec.gold}} + ¥ {{order.spec.cash}}</p>
          </div>
          <span class="eol-totle">X {{order.total_num}}</span>
        </div>
        <div class="myOrderInfo">
          <p><span>订单编号：</span>{{order.sn}}</p>
          <p><span>下单时间：</span>{{order.created_at}}</p>
          <p v-if="order.status !==1"><span>支付合计：<i>星币 {{order.total_kb}} + ¥ {{order.total_price}}</i></span></p>
          <p v-if="order.status ===3"><span>快递单号：<input :id="order.tracking_num" :value="order.tracking_num" readonly></span><i @click="copyTxt(order.tracking_num)" class="copy">一键复制</i></p>
          <p><span>运　　费：0</span></p>
        </div>
        <div class="myOrder_receive">
          <div class="or_left fl"></div>
          <div class="or_right fl">
            <p><span>收货人：{{order.address.name}}</span> <span class="fr" style="color: black">{{order.address.phone}}</span></p>
            <p><span>收货地址：{{order.address.province}} {{order.address.city}} {{order.address.area}} {{order.address.detail}}</span></p>
          </div>
        </div>
        <p class="applyTui">
          <span class="fr" @click="cancelOrder(order)" v-if="order.status ===1">取消订单</span>
          <span class="fr" @click="orderApply(order)" v-if="order.status ===1">去支付</span>
          <span class="fr" @click="confirmReceipt(order)" v-if="order.status ===3">确认收货</span>
          <span class="fr" @click="applyReturnGoods()" v-if="order.status ===2 || order.status ===3">申请退款</span>
          <span class="fr" @click="logisticsQuery()" v-if="order.status ===3">物流查询</span>
          <span class="fr" @click="applyReturnGoodsDetail()" v-if="order.status ===5">查看详情</span>
        </p>
      </div>
      <img src="../../assets/image/nodata.png" alt="" v-if="noData" class="noDatas">
    </div>
  </div>
</template>

<script>
let token = localStorage.getItem('token');
import { url } from '../../assets/js/mobile.js';
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      orderTitle: ['待付款', '待发货', '已发货', '已完成', '退款'],
      isTab: true,
      idx: 0,
      orderList: [],
      way: 'orderAll',
      noData: false,
      getImg (url) {
        return 'http://img.sugebei.com/' + url
      }
    }
  },
  methods: {
    /*
    * tab 切换 changeTab()
    * 取消订单 cancelOrder()
    * 去支付 orderApply()
    * 确认收货 confirmReceipt()
    * 申请退款 applyReturnGoods()
    * 物流查询 logisticsQuery()
    * 查看退货详情 applyReturnGoodsDetail()
    * 一键复制 copyTxt()
    * */
    changeTab (_idx) {
      this.idx = _idx;
      this.orderList = [];
      switch (_idx) {
        case 0:
          this.way = 'waitpay';
          break;
        case 1:
          this.way = 'waitexpress';
          break;
        case 2:
          this.way = 'waitreceive';
          break;
        case 3:
          this.way = 'completed';
          break;
        case 4:
          this.way = 'refund';
          break;
        default:
          return false;
      }
      this.getOrderData(this.way, 1)
    },
    // 取消订单
    cancelOrder (e) {
      var cancelId = e.id
      MessageBox({
        title: '提示',
        message: '确认取消订单？',
        showCancelButton: true
      })
        .then(ret => {
          if (ret == 'confirm') {
            let cancel = this.$qs.stringify({
              token: token,
              order_id: cancelId
            })
            this.$http.post(url + 'cancelOrder', cancel)
              .then(res => {
                console.log(res)
                if (res.data.code === 200) {
                  Toast(res.data.msg)
                }
              })
              .catch(err => {
                console.log(err)
              })
          } else {
            return false;
          }
        })
    },
    // 去支付
    orderApply (e) {
      var orderId = e.id
      this.$router.push({
        path: '/apply/' + 1
      });
      localStorage.setItem('orderId', orderId)
    },
    // 确认收货
    confirmReceipt (e) {
      var cfOrder = e.id;
      let f3 = this.$qs.stringify({
        token: token,
        order_id: cfOrder
      });
      this.$http.post(url + 'orderReceive', f3)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    applyReturnGoods () {},
    logisticsQuery () {},
    applyReturnGoodsDetail () {},
    copyTxt (txt) {
      this.$copyText(txt).then(function (e) {
        Toast('复制成功')
      }, function (e) {
        Toast('复制失败')
      })
    },
    // 获取对应数据
    /*
    * 参数一： 对应接口,[orderAll,waitpay,waitreceive,completed,refund]
    * 参数二：页数
    * */
    getOrderData (way, page) {
      this.$http.get(url + way + '/' + page + '?token=' + token)
        .then(res => {
          console.log(res)
          let noGoods = res.data.data == '' || res.data.data == undefined || res.data.data == null
          if (noGoods) {
            this.noData = true;
          } else {
            this.noData = false;
            this.orderList = res.data.data;
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  mounted () {
  },
  created () {
    // 获得购买订单
    this.getOrderData('waitpay', 1)
  }
}
</script>

<style scoped lang="less">
@import "../../assets/less/myOrder.less";
</style>
