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
            <li class="list" v-for="(into,index) in intoList" :key="index">
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
            <li class="list" v-for="(item,index) in list" :key="index">
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
import api from '@/assets/js/api.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      isNull: false,
      selected: '1',
      intoList: [],
      list: [],
      type: this.$route.params.type,
      page: 1
    }
  },
  created () {
    let type = parseInt(this.type)
    switch (type) {
      case 1:
        this.getS_BList_income();
        break;
      case 2:
        this.getS_ZList_income();
        break;
      default:
        return false
    }
  },
  watch: {
    selected (value) {
      var val = parseInt(value)
      let types = parseInt(this.type)
      switch (val) {
        case 1:
          if (types === 1) {
            this.getS_BList_income()
            return false
          }
          if (types === 2) {
            this.getS_ZList_income()
            return false
          }
          break;
        case 2:
          if (types === 1) {
            this.getS_BList_out()
            return false
          }
          if (types === 2) {
            this.getS_ZList_out()
            return false
          }
          break;
        default:
          return false;
      }
    }
  },
  methods: {
    // 星币转出列表----------------out
    getS_BList_out () {
      api.starCoinOutlay({
        token: token,
        page: this.page
      })
        .then(res => {
          if (res.code === 200) {
            if (res.data == '') {
              this.isNull = true
              return false
            } else {
              this.isNull = false
              this.list = res.data
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 星币转入列表----------------income
    getS_BList_income () {
      api.starCoinIncome({
        token: token,
        page: this.page
      })
        .then(res => {
          if (res.code === 200) {
            if (res.data == '') {
              this.isNull = true
              return false
            } else {
              this.isNull = false
              this.intoList = res.data
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 星钻转出列表----------------out
    getS_ZList_out () {
      api.outlay({
        token: token,
        page: this.page
      })
        .then(res => {
          if (res.code === 200) {
            if (res.data == '') {
              this.isNull = true
              return false
            } else {
              this.isNull = false
              this.list = res.data
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 星钻转入列表----------------income
    getS_ZList_income () {
      api.income({
        token: token,
        page: this.page
      })
        .then(res => {
          if (res.code === 200) {
            if (res.data == '') {
              this.isNull = true
              return false
            } else {
              this.isNull = false
              this.intoList = res.data
            }
          }
        })
        .catch(err => {
          console.log(err)
          // Toast('网络延时，请稍后重试')
        })
    }
  }
}
</script>
