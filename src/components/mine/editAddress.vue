<template>
  <div class="wrapper">
    <mt-header fixed title="编辑收货地址">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="ad_ads">
      <div class="form">
        <div class="info_list">
          <span class="info_title">收货人</span>
          <input type="text" name="s_consignee" placeholder="请输入收货人姓名" required class="ad_name" v-model="receiver">
        </div>
        <div class="info_list">
          <span class="info_title">联系电话</span>
          <input type="number" name="s_phone" placeholder="请输入手机号" required class="ad_tel" v-model="phone"></div>
        <div class="info_list" @click="cityPop">
          <span class="info_title">选择地区</span>
          <input type="text" name="s_addr" placeholder="请选择地区信息"  readonly required  class="ad_addr" v-model="addressArea">
        </div>
        <div class="info_list">
          <span class="info_title">详细地址</span>
          <input type="text" name="s_address" placeholder="请输入详细地址" required class="ad_add_d" v-model="detail">
        </div>
        <div class="info_list">
          <span class="info_title">邮编</span>
          <input type="text" name="s_address" placeholder="请输入邮编" required class="ad_add_d" v-model="code">
        </div>
        <div class="setDefAds">
          <input @click="setDefault" type="checkbox" id="setDefAds" v-model="is_default">
          <label for="setDefAds"> 设置为默认地址</label>
        </div>
        <mt-button type="default" class="releaseBtn" @click="addAds">{{btnTxt}}</mt-button>
      </div>
    </div>
    <cityPop @hidden="hiddenShow" v-show="cityPop_up"></cityPop>
  </div>
</template>
<style scoped lang="less">
  @import "../../assets/less/addAddress.less";
</style>
<script>
import { Toast } from 'mint-ui'
import cityPop from '../comp/city.vue'
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      btnTxt: '确认增加',
      receiver: '', // 收货人
      phone: '', // 电话
      addressArea: [], // 地区
      province: '',
      city: '',
      area: '',
      detail: '', // 详细地址
      getAds: '',
      code: '', // 邮编
      is_default: '', 
      address: '',
      cityPop_up: false,
      z_tel: /^1(3|4|5|6|7|8|9)\d{9}$/,
      addressList: []
    }
  },
  components: {
    cityPop
  },
  created () {
    this.receiver = this.$route.params.name,
    this.phone = this.$route.params.phone,
    this.addressArea = this.$route.params.addressArea,
    this.detail = this.$route.params.detail,
    this.code = this.$route.params.postcode,
    this.is_default = this.$route.params.is_default
  },
  methods: {
    cityPop () {
      this.cityPop_up = true
    },
    hiddenShow (e) {
      console.log(e[0].split(' '))
      this.addressArea = e[0]
      console.log(this.addressArea)
      let that = this
      that.cityPop_up = false
    },
    setDefault () {
      if (this.is_default === 0 || this.is_default == false) {
        this.is_default = 1
      }else {
        this.is_default = 0
      }
      
      return(this.is_default)
    },
    addAds () {
      if (!this.receiver) {
        Toast('请填写收货人！')
        return false
      }
      if (!this.phone) {
        Toast('请填写收货电话！')
        return false
      }
      if (this.z_tel.test(this.phone) === false) {
        Toast('您的电话号码格式错误！')
        return false
      }
      if (!this.addressArea) {
        Toast('请选择收货地址！')
        return false
      }
      if (!this.detail) {
        Toast('请填写详细地址！')
        return false
      }
      if (!this.code) {
        Toast('请填写邮编！')
        return false
      }
      if ( this.is_default == false) {
        this.is_default = 0
      } else {
        this.is_default = 1
      }
      console.log(this.is_default)
      let form = this.$qs.stringify({
        id: this.$route.params.id,
        name: this.receiver,
        phone: this.phone,
        postcode: this.code,
        detail: this.detail,
        token: token,
        province: this.addressArea[0],
        city: this.addressArea[1],
        area: this.addressArea[2],
        is_default: this.is_default
      })
    // 编辑收货地址
      this.$http.post(url+'addressEdit', form)
      .then(response => {
        console.log(response)
        Toast({
          message: response.data.msg,
          position: 'middle',
          duration: 2000
        })
        this.$router.back(-1)
      })
      .catch(error => {
        console.log(error)
        Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      })
    }
  }
}
</script>
