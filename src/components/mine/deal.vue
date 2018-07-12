<template>
  <div class="wrapper">
    <mt-header fixed title="交易列表">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="deal">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">转入</mt-tab-item>
        <mt-tab-item id="2">转出</mt-tab-item>
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
                    <p class="invit-name">由<span>{{into.saler.realname}}</span>转入</p>
                    <p class="invit-phone">{{into.saler.phone}}</p>
                  </div>
                  <div class="invit-msg">
                    <p>{{into.mark}}</p>
                    <p class="invit-date">{{into.updated_at}}</p>
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
                    <p class="invit-name">转出到：<span>{{item.buyer.realname}}</span></p>
                    <p class="invit-phone">{{item.buyer.phone}}</p>
                  </div>
                  <div class="invit-msg">
                    <p>{{item.mark}}</p>
                    <p class="invit-date">{{item.updated_at}}</p>
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
import { Toast } from 'mint-ui'
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      isNull: false,
      selected: '1',
      intoList:[],
      list: []
    }
  },
  created () {
    this.into();
  },
  watch: {
    selected (value) {
      console.log(value);
      if (value == 1) {
        this.into()
        return false
      }
      if (value == 2) {
        this.out()
        return false
      }
    }
  },
  methods: {
    into () {
      // 转入列表
      this.$http.get(url + 'income?token='+token)
      .then(response => {
        console.log(response)
        if (response.data.code == 200) {
          if (response.data.data == '') {
            this.isNull = true
            return false
          } else {
            this.isNull = false
            this.intoList = response.data.data
          }
        }
        //  else if (response.data.code == 403) {
        //   Toast({
        //     message: response.data.msg,
        //     position: 'bottom',
        //     duration: 4000
        //   })
        //    localStorage.removeItem('token')
        //    localStorage.removeItem('userinfo')
        //    this.$router.push('/login')
        // } else {
        //   Toast({
        //     message: response.data.msg,
        //     position: 'bottom',
        //     duration: 2000
        //   })
        // }
      })
      .catch(error => {
        console.log(error)
        Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      })
    },
    out () {
      // 转出列表
      this.$http.get(url + 'outlay?token='+token)
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
