<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>新增收货地址
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
          <mt-checklist
            v-model="value"
            :options="['设置为默认地址']">
          </mt-checklist>
        </div>
        <mt-button type="default" class="releaseBtn" @click="addAds">确认增加</mt-button>
      </div>
    </div>
    <cityPop @hidden="hiddenShow" v-show="cityPop_up"></cityPop>
  </div>
</template>

<script>
import cityPop from '../comp/city.vue'
export default {
  data () {
    return {
      receiver: '',
      tel: '',
      area: '',
      detailAds: '',
      getAds: '',
      code: '',
      value: [],
      address: '',
      cityPop_up: false
    }
  },
  components: {
    cityPop
  },
  methods: {
    addAds () {
      console.log(this.value)
    },
    cityPop () {
      this.cityPop_up = true
    },
    hiddenShow () {
      let that = this;
      that.cityPop_up = false
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/addAddress.less";
</style>
