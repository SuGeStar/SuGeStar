<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>收货地址管理
      <span class="ads-mag" @click="deleteAds">{{delTxt}}</span>
    </div>
    <div class="ads-container">
      <div class="ads-list" v-for="(ads,ix) in addressList" :key="ix" @click="action(ads)">
        <p class="ads_name_tel">{{ads.name}} {{ads.tel}}</p>
        <p class="ads_ads"><span v-if="ads.def == 1">【默认】</span>{{ads.area}}{{ads.ads}}</p>
        <transition name="deleteIt">
          <p class="ads-delete" @click.stop="deleteIt(addressList,ix,ads)" v-if="show"></p>
        </transition>
      </div>
    </div>
    <div class="add-address" @click="goAds">
      新增收货地址
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
          area: '河南省 南阳市 卧龙区 ',
          ads: '车站南路 中达明淯新城E区',
          def: '1',
          mal_code: '000000'
        },
        {
          name: '李4',
          tel: '15233001234',
          area: '河南省 南阳市 卧龙区 ',
          ads: '车站南路 中达明淯新城E区',
          def: '0',
          mal_code: '000000'
        },
        {
          name: '王5',
          tel: '15233001234',
          area: '河南省 南阳市 卧龙区 ',
          ads: '车站南路 中达明淯新城E区',
          def: '0',
          mal_code: '000000'
        },
        {
          name: '赵6',
          tel: '15233001234',
          area: '河南省 南阳市 卧龙区 ',
          ads: '车站南路 中达明淯新城E区',
          def: '0',
          mal_code: '000000'
        }],
      del: false,
      delTxt: '编辑',
      show: false,
      way: this.$route.params.way
    }
  },
  methods: {
    deleteAds () {
      this.del = !this.del
      this.show = !this.show
      if (this.del) {
        this.delTxt = '完成'
        console.log(this.$refs)
      } else {
        this.delTxt = '编辑'
      }
    },
    action (ads) {
      if (!this.del) {
        if (this.way === 'set') {
          localStorage.setItem('choseAds', JSON.stringify(ads))
          this.$router.push({
            path: '/addAddress/modify/'
          })
        } else {
          console.log('返回结算页')
        }
      }
    },
    deleteIt (ele, idx, ads) {
      ele.splice(idx, 1)
    },
    goAds () {
      this.$router.push({
        path: '/addAddress/add/'
      })
    }
  },
  mounted () {
    // console.log(this.$route.params)
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/set.less";
</style>
