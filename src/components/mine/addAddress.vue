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
          <input type="number" name="s_phone" placeholder="请输入手机号" required class="ad_tel" v-model="tel"></div>
        <div class="info_list" @click="cityPop">
          <span class="info_title">选择地区</span>
          <input type="text" name="s_addr" placeholder="请选择地区信息"  readonly required  class="ad_addr" v-model="area">
        </div>
        <div class="info_list">
          <span class="info_title">详细地址</span>
          <input type="text" name="s_address" placeholder="请输入详细地址" required class="ad_add_d" v-model="detailAds">
        </div>
        <div class="info_list">
          <span class="info_title">邮编</span>
          <input type="text" name="s_address" placeholder="请输入邮编" required class="ad_add_d" v-model="code">
        </div>
        <div class="setDefAds">
          <input type="checkbox" id="setDefAds" v-model="def">
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
export default {
  data () {
    return {
      title: '新增收货地址',
      btnTxt: '确认增加',
      receiver: '', // 收货人
      tel: '', // 电话
      area: '', // 地区
      detailAds: '', // 详细地址
      getAds: '',
      code: '', // 邮编
      def: false,
      address: '',
      cityPop_up: false,
      z_tel: /^1(3|4|5|6|7|8|9)\d{9}$/,
      way: this.$route.params.way,
    }
  },
  components: {
    cityPop
  },
  methods: {
    addAds: function () {
      /*
      * 添加收货地址提交事件  添加完成 执行 go(-1)
      * */
      if (!this.receiver) {
        Toast('请填写收货人！')
        return false
      }
      if (!this.tel) {
        Toast('请填写收货电话！')
        return false
      }
      if (this.z_tel.test(this.tel) === false) {
        Toast('您的电话号码格式错误！')
        return false
      }
      if (!this.area) {
        Toast('请选择收货地址！')
        return false
      }
      if (!this.detailAds) {
        Toast('请填写详细地址！')
        return false
      }
      if (!this.code) {
        Toast('请填写邮编！')
        return false
      }
    },
    cityPop () {
      this.cityPop_up = true
    },
    hiddenShow (e) {
      this.area = e[0]
      let that = this
      that.cityPop_up = false
    }
  },
  mounted () {
    if (this.way === 'modify') {
      this.title = '修改收货地址'
      this.btnTxt = '确认修改'
      var modify_ = JSON.parse(localStorage.getItem('choseAds'))
      this.receiver = modify_.name;
      this.tel = modify_.tel;
      this.area = modify_.area;
      this.detailAds = modify_.ads;
      this.code = modify_.mal_code;
      if (modify_.def === '1') {
        this.def = true
      } else {
        this.def = false
      }
    } else {
      this.title = '新增收货地址'
      this.btnTxt = '确认增加'
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/addAddress.less";
</style>
