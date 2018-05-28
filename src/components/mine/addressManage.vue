<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>收货地址管理
      <span class="ads-mag" @click="deleteAds">{{delTxt}}</span>
    </div>
    <div class="ads-container">
      <div class="ads-list" v-for="(ads,ix) in addressList" :key="ix">
        <p class="ads_name_tel">{{ads.name}} {{ads.tel}}</p>
        <p class="ads_ads"><span v-if="ads.def == 1">【默认】</span>{{ads.ads}}</p>
        <div class="ads-delete" ref="delete"></div>
      </div>
    </div>
    <div class="add-address">
      <router-link to="addAddress">新增收货地址</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: '',
      addressList: [
        {
          name: '张3',
          tel: '15233001234',
          ads: '河南省 南阳市 卧龙区 车站南路 中达明淯新城E区',
          def: '1'
        },
        {
          name: '李4',
          tel: '15233001234',
          ads: '河南省 南阳市 卧龙区 车站南路 中达明淯新城E区',
          def: '0'
        },
        {
          name: '王5',
          tel: '15233001234',
          ads: '河南省 南阳市 卧龙区 车站南路 中达明淯新城E区',
          def: '0'
        },
        {
          name: '赵6',
          tel: '15233001234',
          ads: '河南省 南阳市 卧龙区 车站南路 中达明淯新城E区',
          def: '0'
        }],
      del: false,
      delTxt: '编辑'
    }
  },
  methods: {
    deleteAds: function () {
      this.del = !this.del
      if (this.del) {
        this.delTxt = '完成'
        console.log(this.$refs)
      } else {
        this.delTxt = '编辑'
        // $('.ads-delete').animate({
        //   right: '-20%'
        // }, 500)
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/set.less";
</style>
