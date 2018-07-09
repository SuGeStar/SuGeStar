<template>
  <div class="wrapper">
    <mt-header fixed title="收支记录">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="deal">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">收入</mt-tab-item>
        <mt-tab-item id="2">支出</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="image" v-show="isNull">
            <img src="../../assets/image/nodata.png" alt="">
          </div>
          <ul>
            <li v-for="(into,index) in intoList" :key="index">
              <div class="invit-match">
                <div class="match-pop">
                  <div class="invit-info">
                    <p class="invit-phone">{{into.sn}}</p>
                    <p class="invit-name">代币：<span>{{into.gold}}</span></p>
                  </div>
                  <div class="invit-msg">
                    <p>{{into.mark}}</p>
                    <p class="invit-date">{{into.created_at}}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="image" v-show="isNull">
            <img src="../../assets/image/nodata.png" alt="">
          </div>
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <div class="invit-match">
                <div class="match-pop">
                  <div class="invit-info">
                    <p class="invit-phone">{{item.order_sn}}</p>
                    <p class="invit-name">代币：<span>{{item.total_fee}}</span></p>
                  </div>
                  <div class="invit-msg">
                    <p>{{item.subject}}</p>
                    <p class="invit-date">{{item.created_at}}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url('../../assets/less/deal.less');
</style>

<script>
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      isNull: false,
      selected: '1',
      intoList:[],
      list: [],
      url: this.$route.params.id
    }
  },
  created () {
    if (this.url == 'star') {
      this.starInto()
      return false
    }
    if (this.url == 'gold') {
      console.log('2222')
      this.goldInto()
      return false
    }
  },
  watch: {
    selected (value) {
      if (this.url == 'star') {
      console.log(value);
        if (value == 1) {
          this.starInto()
          return false
        }
        if (value == 2) {
          this.starOut()
          return false
        }
        return false
      }
      if (this.url == 'gold') {
        console.log(value)
        if (value == 1) {
          this.goldInto()
          return false
        }
        if (value == 2) {
          this.goldOut()
          return false
        }s
        return false
      }
    }
  },
  methods: {
    starInto () {
      // 星币收入
      this.$http.get(url + 'alreadyGetMonth?token='+token)
      .then(response => {
        console.log(response)
        if (response.data.data == '') {
          this.isNull = true
          return false
        } else {
          this.isNull = false
          this.intoList = response.data.data
        }
      })
      .catch(error => {
        console.log(error)
        Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      })
    },
    starOut () {
      // 星币支出
      this.$http.get(url + 'kbExpenses?token='+token)
      .then(response => {
        console.log(response)
        if (response.data.data == '') {
          this.isNull = true
          return false
        } else {
          this.isNull = false
          this.list = response.data.data
        }
      })
      .catch(error => {
        console.log(error)
        Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      })
    },
    goldInto () {
      // 金币收入
      this.$http.get(url + 'profit?token='+token)
      .then(response => {
        console.log(response)
        if (response.data.data == '') {
          this.isNull = true
          return false
        } else {
          this.isNull = false
          this.intoList = response.data.data
        }
      })
      .catch(error => {
        console.log(error)
        Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      })
    },
    goldOut () {
      // 金币支出
      this.$http.get(url + 'expenses?token='+token)
      .then(response => {
        console.log(response)
        if (response.data.data == '') {
          this.isNull = true
          return false
        } else {
          this.isNull = false
          this.list = response.data.data
        }
      })
      .catch(error => {
        console.log(error)
        Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      })
    }
  }
}
</script>
