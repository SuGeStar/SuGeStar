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
        <p class="shopName">{{order.product.store_name}}
          <!--<span class="fr DFK">待付款</span>
          <span class="fr DFH">待发货</span>
          <span class="fr YFH">已发货</span>
          <span class="fr YWC">已完成</span>
          <span class="fr TK">退款</span>-->
        </p>
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
          <p v-if="order.status !==1"><span>支付合计：<i>10元+20积分</i></span></p>
          <p v-if="order.status !==1"><span>支付方式：</span>微信支付</p>
          <p v-if="order.status !==1"><span>快递单号：<input id="txt" value="12345678999" readonly></span><i @click="copyTxt()" class="copy">一键复制</i></p>
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
          <span class="fr" @click="cancelOrder()" v-if="order.status ===1">取消订单</span>
          <span class="fr" @click="orderApply(order)" v-if="order.status ===1">去支付</span>
          <span class="fr" @click="confirmReceipt()" v-if="order.status ===2">确认收货</span>
          <span class="fr" @click="applyReturnGoods()" v-if="order.status ===3">申请退款</span>
          <span class="fr" @click="logisticsQuery()" v-if="order.status ===3">物流查询</span>
          <span class="fr" @click="applyReturnGoodsDetail()" v-if="order.status ===5">查看详情</span>
        </p>
      </div>
      <!--&lt;!&ndash;待付款&ndash;&gt;
      <div class="each-order-list-container" v-if="waitApplyMo">
        <p class="shopName">澳中国际
          <span class="fr DFK">待付款</span>
        </p>
        <div class="each-order-list">
          <div class="eol-img fl">
            <img ng-src="http://www.sgyxmall.com//Upload/goods/store_20/2018-05-01/5ae7dba4d3eb2.jpg" alt="" src="http://www.sgyxmall.com//Upload/goods/store_20/2018-05-01/5ae7dba4d3eb2.jpg">
          </div>
          <div class="eol-info fl">
            <p class="eol-nam">&nbsp;Spring Leaf绿芙绵羊油（添加维生素E和羊胎素和玫瑰精油）9327269000383</p>
            <p class="eol-type" style="width: 4.2rem;height: .3rem;overflow: hidden">颜色：如图，尺寸：100克</p>
            <p class="eol-enc">¥ 50.00 + 严选积分58.00 或</p>
            <p class="eol-prices">¥ <span class="eol_price ng-binding">108.00</span></p>
          </div>
          <span class="eol-totle">X 1</span>
        </div>
        <div class="myOrderInfo">
          <p><span>订单编号：</span>123465798</p>
          <p><span>下单时间：</span>20170415</p>
          <p><span>运　　费：0</span></p>
        </div>
        <div class="myOrder_receive">
          <div class="or_left fl"></div>
          <div class="or_right fl">
            <p><span>收货人：asdfas</span> <span class="fr" style="color: black">464646</span></p>
            <p><span>收货地址：卡了数据库的和了阿拉山口付货款来说福克斯</span></p>
          </div>
        </div>
        <p class="applyTui">
          <span class="fr" @click="cancelOrder()">取消订单</span>
          <span class="fr" @click="orderApply()">去支付</span>
        </p>
      </div>
      &lt;!&ndash;待发货&ndash;&gt;
      <div class="each-order-list-container" v-if="waitSendMo">
        <p class="shopName">澳中国际
          <span class="fr DFH">待发货</span>
        </p>
        <div class="each-order-list">
          <div class="eol-img fl">
            <img ng-src="http://www.sgyxmall.com//Upload/goods/store_20/2018-05-01/5ae7dba4d3eb2.jpg" alt="" src="http://www.sgyxmall.com//Upload/goods/store_20/2018-05-01/5ae7dba4d3eb2.jpg">
          </div>
          <div class="eol-info fl">
            <p class="eol-nam">&nbsp;Spring Leaf绿芙绵羊油（添加维生素E和羊胎素和玫瑰精油）9327269000383</p>
            <p class="eol-type" style="width: 4.2rem;height: .3rem;overflow: hidden">颜色：如图，尺寸：100克</p>
            <p class="eol-enc">¥ 50.00 + 严选积分58.00 或</p>
            <p class="eol-prices">¥ <span class="eol_price ng-binding">108.00</span></p>
          </div>
          <span class="eol-totle">X 1</span>
        </div>
        <div class="myOrderInfo">
          <p><span>订单编号：</span>123465798</p>
          <p><span>下单时间：</span>20170415</p>
          <p><span>支付合计：<i>10元+20积分</i></span></p>
          <p><span>支付方式：</span>微信支付</p>
          <p><span>运　　费：0</span></p>
        </div>
        <div class="myOrder_receive">
          <div class="or_left fl"></div>
          <div class="or_right fl">
            <p><span>收货人：asdfas</span> <span class="fr" style="color: black">464646</span></p>
            <p><span>收货地址：卡了数据库的和了阿拉山口付货款来说福克斯</span></p>
          </div>
        </div>
        <p class="applyTui">
          <span class="fr" @click="applyReturnGoods()">申请退款</span>
        </p>
      </div>
      &lt;!&ndash;已发货&ndash;&gt;
      <div class="each-order-list-container" v-if="waitReceiveMo">
        <p class="shopName">澳中国际
          <span class="fr YFH">已发货</span>
        </p>
        <div class="each-order-list">
          <div class="eol-img fl">
            <img ng-src="http://www.sgyxmall.com//Upload/goods/store_20/2018-05-01/5ae7dba4d3eb2.jpg" alt="" src="http://www.sgyxmall.com//Upload/goods/store_20/2018-05-01/5ae7dba4d3eb2.jpg">
          </div>
          <div class="eol-info fl">
            <p class="eol-nam">&nbsp;Spring Leaf绿芙绵羊油（添加维生素E和羊胎素和玫瑰精油）9327269000383</p>
            <p class="eol-type" style="width: 4.2rem;height: .3rem;overflow: hidden">颜色：如图，尺寸：100克</p>
            <p class="eol-enc">¥ 50.00 + 严选积分58.00 或</p>
            <p class="eol-prices">¥ <span class="eol_price ng-binding">108.00</span></p>
          </div>
          <span class="eol-totle">X 1</span>
        </div>
        <div class="myOrderInfo">
          <p><span>订单编号：</span>123465798</p>
          <p><span>下单时间：</span>20170415</p>
          <p><span>支付合计：<i>10元+20积分</i></span></p>
          <p><span>支付方式：</span>微信支付</p>
          <p><span>快递单号：<input id="txt" value="12345678999" readonly></span><i @click="copyTxt()" class="copy">一键复制</i></p>
          <p><span>运　　费：0</span></p>
        </div>
        <div class="myOrder_receive">
          <div class="or_left fl"></div>
          <div class="or_right fl">
            <p><span>收货人：asdfas</span> <span class="fr" style="color: black">464646</span></p>
            <p><span>收货地址：卡了数据库的和了阿拉山口付货款来说福克斯</span></p>
          </div>
        </div>
        <p class="applyTui">
          <span class="fr" @click="confirmReceipt()">确认收货</span>
          <span class="fr" @click="applyReturnGoods()">申请退款</span>
          <span class="fr" @click="logisticsQuery()">物流查询</span>
        </p>
      </div>
      &lt;!&ndash;已完成&ndash;&gt;
      <div class="each-order-list-container" v-if="haveOverMo">
        <p class="shopName">澳中国际
          <span class="fr YWC">已完成</span>
        </p>
        <div class="each-order-list">
          <div class="eol-img fl">
            <img ng-src="http://www.sgyxmall.com//Upload/goods/store_20/2018-05-01/5ae7dba4d3eb2.jpg" alt="" src="http://www.sgyxmall.com//Upload/goods/store_20/2018-05-01/5ae7dba4d3eb2.jpg">
          </div>
          <div class="eol-info fl">
            <p class="eol-nam">&nbsp;Spring Leaf绿芙绵羊油（添加维生素E和羊胎素和玫瑰精油）9327269000383</p>
            <p class="eol-type" style="width: 4.2rem;height: .3rem;overflow: hidden">颜色：如图，尺寸：100克</p>
            <p class="eol-enc">¥ 50.00 + 严选积分58.00 或</p>
            <p class="eol-prices">¥ <span class="eol_price ng-binding">108.00</span></p>
          </div>
          <span class="eol-totle">X 1</span>
        </div>
        <div class="myOrderInfo">
          <p><span>订单编号：</span>123465798</p>
          <p><span>下单时间：</span>20170415</p>
          <p><span>支付合计：<i>10元+20积分</i></span></p>
          <p><span>支付方式：</span>微信支付</p>
          <p><span>快递单号：<input id="txt" value="12345678999" readonly></span><i @click="copyTxt()" class="copy">一键复制</i></p>
          <p><span>运　　费：0</span></p>
        </div>
        <div class="myOrder_receive">
          <div class="or_left fl"></div>
          <div class="or_right fl">
            <p><span>收货人：asdfas</span> <span class="fr" style="color: black">464646</span></p>
            <p><span>收货地址：卡了数据库的和了阿拉山口付货款来说福克斯</span></p>
          </div>
        </div>
        <p class="applyTui">
        </p>
      </div>
      &lt;!&ndash;退款&ndash;&gt;
      <div class="each-order-list-container"  v-if="goodsReturnMo">
        <p class="shopName">澳中国际
          <span class="fr TK">退款</span>
        </p>
        <div class="each-order-list">
          <div class="eol-img fl">
            <img ng-src="http://www.sgyxmall.com//Upload/goods/store_20/2018-05-01/5ae7dba4d3eb2.jpg" alt="" src="http://www.sgyxmall.com//Upload/goods/store_20/2018-05-01/5ae7dba4d3eb2.jpg">
          </div>
          <div class="eol-info fl">
            <p class="eol-nam">&nbsp;Spring Leaf绿芙绵羊油（添加维生素E和羊胎素和玫瑰精油）9327269000383</p>
            <p class="eol-type" style="width: 4.2rem;height: .3rem;overflow: hidden">颜色：如图，尺寸：100克</p>
            <p class="eol-enc">¥ 50.00 + 严选积分58.00 或</p>
            <p class="eol-prices">¥ <span class="eol_price ng-binding">108.00</span></p>
          </div>
          <span class="eol-totle">X 1</span>
        </div>
        <div class="myOrderInfo">
          <p><span>订单编号：</span>123465798</p>
          <p><span>下单时间：</span>20170415</p>
          <p><span>支付合计：<i>10元+20积分</i></span></p>
          <p><span>支付方式：</span>微信支付</p>
          <p><span>运　　费：0</span></p>
        </div>
        <div class="myOrder_receive">
          <div class="or_left fl"></div>
          <div class="or_right fl">
            <p><span>收货人：asdfas</span> <span class="fr" style="color: black">464646</span></p>
            <p><span>收货地址：卡了数据库的和了阿拉山口付货款来说福克斯</span></p>
          </div>
        </div>
        <p class="applyTui">
          <span class="fr" @click="applyReturnGoodsDetail()">查看详情</span>
        </p>
      </div>-->
    </div>
  </div>
</template>

<script>
let token = localStorage.getItem('token');
import { url } from '../../assets/js/mobile.js';
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      orderTitle: ['待付款', '待发货', '已发货', '已完成', '退款'],
      isTab: true,
      idx: 0,
      orderList: [],
      way: 'orderAll',
      getImg (url) {
        return 'http://img.sugebei.com' + url
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
      switch (_idx) {
        case 0:
          this.way = 'waitpay';
          break;
        case 1:
          this.way = 'waitreceive';
          break;
        case 2:
          this.way = 'completed';
          break;
        case 3:
          // this.way = 'refund';
          break;
        case 4:
          this.way = 'refund';
          break;
        default:
          return false;
      }
      this.getOrderData(this.way, 1)
    },
    cancelOrder () {},
    // 去支付
    orderApply (e) {
      // console.log(e)
      var orderId = e.id
      this.$router.push({
        path: '/apply/' + 1
      });
      localStorage.setItem('orderId', orderId)
    },
    confirmReceipt () {},
    applyReturnGoods () {},
    logisticsQuery () {},
    applyReturnGoodsDetail () {},
    copyTxt (txt) {
      /*var Url2 = document.getElementById("txt"+txt);
      Url2.select() // 选择对象
      try {
        if (document.execCommand('copy', false, null)){
          document.execCommand("Copy");
        } else{
          // appService.artTxt("复制失败，请手动复制");
        }
      } catch(err){
        // appService.a("复制失败，请手动复制");
      }*/
    },
    // 获取对应数据
    /*
    * 参数一： 对应接口,[orderAll,waitpay,waitreceive,completed,refund]
    * 参数二：页数
    * */
    getOrderData (way, page) {
      this.$http.get(url + way + '?token=' + token + '&page=' + page)
        .then(res => {
          console.log(res)
          this.orderList = res.data.data;
        })
        .catch(err => {
          console.log(err)
        })
    }
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
