<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>申请退款
    </div>
    <div class="argContainer">
      <div class="clear_order_list_container">
        <div class="each_order_list ng-scope">
          <div class="eol_img fl">
            <img :src="imgUrl+AG.product.default_img">
          </div>
          <div class="eol_info fl">
            <p class="eol_name">{{AG.product.goods_name}}</p>
            <p class="eol_type" style="width: 4.2rem;height: .3rem;overflow: hidden">{{AG.product.size_name}}：{{AG.spec.size}}，{{AG.product.color_name}}：{{AG.color}}</p>
            <p class="eol_prices">星币：<span>{{AG.spec.gold}}</span> + ¥ {{AG.spec.cash}}</p>
          </div>
          <span class="eol_num">X {{AG.total_num}}</span>
        </div>
      </div>
      <!--服务类型-->
      <div class="argServiceType argDiv" @click="choseReason(0)">
        <span class="argDivTitle">服务类型</span>{{serviceTypeTxt}}
      </div>
      <!--退款原因-->
      <div class="argReason argDiv" @click="choseReason(1)">
        <span class="argDivTitle">退款原因</span>{{refundReasonTxt}}
      </div>
      <!--退款金额-->
      <div class="argMoney argDiv">
        <span class="argDivTitle">退款金额</span><span style="color:#e79e56;">星币{{AG.spec.gold}} + ¥ {{AG.spec.cash}}</span>
      </div>
      <p class="argAction"><span>*</span>退款金额=实际购买商品单价*数量</p>
      <!--运费-->
      <div class="argFreight argDiv">
        <span class="argDivTitle">运费</span>0元
      </div>
      <p class="argAction"><span>*</span>非商品质量、错发、漏发、卖家可拒绝退运费</p>
      <div class="argReasonDis argDiv">
        <input type="text" placeholder="退货说明 最多200字（选填）"  v-on:input="getTxtNum()" v-model="txtText" v-on:focus="Foucs(0)" v-on:blur="Foucs(1)">
      </div>
      <p class="argAction" v-if="txtArea">您还可以输入 <span>{{txtNum}}</span> 字</p>
      <div class="argUpImg">
        <span class="argDivTitle">上传凭证</span>
        <div class="uiBox">
          <div class="choseImg" >
            <input type="file" multiple="multiple" accept="image/*" @change = 'addImg'>
            <img :src="imgs" alt="">
          </div>
          <!--<div class="haveImg"></div>-->
        </div>
      </div>
      <div class="argBtn"@click="applyRefund">提交申请</div>
    </div>
    <mt-popup v-model="applyReason" position="bottom" class="mint-popup">
      <div class="reasonList">
        <p v-for="(sTxt, index) in serviceType" :key="index" v-if="isServiceType" @click="reasonTxt(0, sTxt)">{{sTxt.txt}}</p>
        <p v-for="(rTxt, index) in refundReason" :key="index" v-if="isRefundReason" @click="reasonTxt(1, rTxt)">{{rTxt.txt}}</p>
        <p class="reason-cancel" @click="applyReason = false">取消</p>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import api from '@/assets/js/api.js'
import { imgUrl } from '@/assets/js/api.js'
import { Toast } from 'mint-ui'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      AG: [],
      imgUrl: imgUrl,
      applyReason: false,
      serviceType: [
        {
          txt: '未收到货，需要退款',
          txtId: 0
        },
        {
          txt: '已收到货，不退货只退款',
          txtId: 1
        },
        {
          txt: '已收到货，需退货退款',
          txtId: 2
        }
      ],
      refundReason: [
        {
          txt: '缺货',
          txtId: 0
        },
        {
          txt: '未按约定时间发货',
          txtId: 1
        },
        {
          txt: '收到假货',
          txtId: 2
        },
        {
          txt: '收到的商品描述不符',
          txtId: 3
        },
        {
          txt: '商品有质量问题',
          txtId: 4
        },
        {
          txt: '商品错发/漏发',
          txtId: 5
        },
        {
          txt: '收到的商品破损',
          txtId: 6
        },
        {
          txt: '其他',
          txtId: 7
        }
      ],
      serviceTypeTxt: '请选择服务类型',
      refundReasonTxt: '请选择退款原因',
      isServiceType: false,
      isRefundReason: false,
      txtArea: false,
      txtNum: 200,
      txtText: '',
      imgs: ''
    }
  },
  methods: {
    choseReason (idx) {
      this.applyReason = true
      switch (idx) {
        case 0:
          this.isServiceType = true
          this.isRefundReason = false
          break;
        case 1:
          this.isServiceType = false
          this.isRefundReason = true
          break;
      }
    },
    reasonTxt (idx, txt) {
      switch (idx) {
        case 0:
          this.serviceTypeTxt = txt.txt
          break;
        case 1:
          this.refundReasonTxt = txt.txt
          break;
      }
      this.applyReason = false
    },
    getTxtNum () {
      this.txtNum = 200 - (this.txtText.length)
    },
    Foucs (idx) {
      switch (idx) {
        case 0:
          this.txtArea = true;
          break;
        case 1:
          this.txtArea = false;
          break;
      }
    },
    // 上传图片
    addImg (event) {
      var reader = new FileReader()
      var img1 = event.target.files[0]

      reader.readAsDataURL(img1)
      var that = this
      reader.onloadend = function () {
        that.imgs = reader.result
      }
    },
    applyRefund () {
      if (this.serviceTypeTxt == '请选择服务类型') {
        Toast({
          message: '请选择服务类型',
          position: 'bottom',
          duration: 3000
        })
        return false
      }
      if (this.refundReasonTxt == '请选择退款原因') {
        Toast({
          message: '请选择退款原因',
          position: 'bottom',
          duration: 3000
        })
        return false
      }
      if (this.imgs == '') {
        Toast({
          message: '请选择一张图片',
          position: 'bottom',
          duration: 3000
        })
        return false
      }
      let form = this.$qs.stringify({
        token: token,
        order_id: this.AG.id,
        refund_reason: this.refundReasonTxt,
        refund_desc: this.txtText,
        file: this.imgs
      })
      // this.$http.post('http://ycstar.test/api/createReundOrder', form)
      api.refund(form)
        .then(res => {
          console.log(res)
          if (res.code === 200) {
            Toast({
              message: res.msg,
              position: 'bottom',
              duration: 3000
            })
            window.history.go(-1)
          } else {
            Toast({
              message: res.msg,
              position: 'bottom',
              duration: 3000
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.AG = JSON.parse(localStorage.getItem('applyRefundGoods'))
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/applyRefund.less";
  @import "../../assets/less/confirmOrder.less";
</style>
