<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>{{title}}
    </div>
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

<script>
import { Toast } from 'mint-ui'
import cityPop from '../comp/city.vue'
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
let modify_ = JSON.parse(localStorage.getItem('choseAds'))
export default {
  data () {
    return {
      title: '新增收货地址',
      btnTxt: '确认增加',
      receiver: '', // 收货人
      phone: '', // 电话
      addressArea: [], // 地区
      detail: '', // 详细地址
      getAds: '',
      code: '', // 邮编
      is_default: 0,
      address: '',
      cityPop_up: false,
      z_tel: /^1(3|4|5|6|7|8|9)\d{9}$/,
      way: this.$route.params.way,
      addressList: []
    }
  },
  components: {
    cityPop
  },
  methods: {
    setDefault () {
      if (this.is_default === 0 || this.is_default == false) {
        this.is_default = 1
      }else {
        this.is_default = 0
      }
      return(this.is_default)
    },
    addAds () {
      /*
      * 添加收货地址提交事件  添加完成 执行 go(-1)
      * */
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
      // console.log(this.setDefault())
      if (this.setDefault()) {
        // console.log(this.is_default)
      }
      let form = this.$qs.stringify({
        name: this.receiver,
        phone: this.phone,
        postcode: this.code,
        detail: this.detail,
        token: token,
        province: this.addressArea.split(' ')[0],
        city: this.addressArea.split(' ')[1],
        area: this.addressArea.split(' ')[2],
        is_default: this.is_default
      })
      this.$http.post(url+'adressAdd', form)
      .then(response => {
        // console.log(response)
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
    },
    cityPop () {
      this.cityPop_up = true
    },
    hiddenShow (e) {
      console.log(e[0].split(' '))
      this.addressArea = e[0]
      console.log(this.addressArea)
      let that = this
      that.cityPop_up = false
    }
  },
  created () {
  },
  mounted () {
    // if (this.way === 'modify') {
    //   this.title = '修改收货地址'
    //   this.btnTxt = '确认修改'
    //   this.receiver = modify_.name;
    //   this.phone = modify_.phone;
    //   this.addressArea = modify_.province + modify_.city + modify_.area;
    //   this.detail = modify_.detail;
    //   this.code = modify_.postcode;
    //   this.is_default = modify_.is_default
    //   if (modify_.is_default === 1) {
    //     this.is_default = true
    //   } else {
    //     this.is_default = false
    //   }
    // } else {
    //   this.title = '新增收货地址'
    //   this.btnTxt = '确认增加'
    // }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/addAddress.less";
</style>
