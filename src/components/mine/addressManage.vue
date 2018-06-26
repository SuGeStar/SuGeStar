<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>收货地址管理
      <span class="ads-mag" @click="deleteAds">{{delTxt}}</span>
    </div>
    <div class="addressManage">
      <div class="ads-container">
        <div class="ads-list" v-for="(ads,ix) in addressList" :key="ix" @click="action(ads)">
          <p class="ads_name_tel">{{ads.name}} {{ads.phone}}</p>
          <p class="ads_ads"><span v-if="ads.is_default == 1">【默认】</span>{{ads.province}} {{ads.city}} {{ads.area}} {{ads.detail}}</p>
          <transition name="deleteIt">
            <p class="ads-delete" @click.stop="deleteIt(addressList,ix,ads)" v-if="show"></p>
          </transition>
        </div>
      </div>
      <div class="add-address" @click="goAds">
        新增收货地址
      </div>
    </div>
  </div>
</template>

<script>
import { url } from '../../assets/js/mobile.js'
import { Toast } from 'mint-ui'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      addressList: [],
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
      } else {
        this.delTxt = '编辑'
      }
    },
    action (ads) {
      if (!this.del) {
        if (this.way === 'set') {
          this.$router.push({
            name: 'editAddress',
            params: {
              id: ads.id,
              name: ads.name,
              phone: ads.phone,
              addressArea: [ads.province, ads.city, ads.area],
              detail: ads.detail,
              postcode: ads.postcode,
              is_default: ads.is_default
            }
          })
        } else {
          console.log('返回结算页')
        }
      }
    },
    deleteIt (ele, idx, ads) {
      console.log(ads.id)
      // 删除地址
      let form = this.$qs.stringify({
        address_id: ads.id,
        token: token
      })
      this.$http.post(url + 'delMyAddress',form)
      .then(response => {
        console.log(response)
        Toast({
          message: response.data.msg,
          position: 'middle',
          duration: 2000
        })
        setTimeout(() => {
          this.$router.go(0)
        }, 2000);
      })
      .catch(error => {
        console.log(error)
      })
      ele.splice(idx, 1)
    },
    goAds () {
      this.$router.push({
        path: '/addAddress/add/'
      })
    }
  },
  created () {
    // 获取收货地址
    this.$http.get(url + 'myAddress?token='+token)
    .then(response => {
      console.log(response)
      this.addressList = response.data.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/set.less";
</style>
