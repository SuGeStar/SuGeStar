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
          <ul>
            <li class="page-loadmore-wrapper" ref="wrapper" >
              <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
                <div class="list" v-for="(into,index) in intoList" :key="index">
                  <div class="invit-match">
                    <div class="match-pop">
                      <div class="invit-info">
                        <p class="invit-phone">{{into.sn}}</p>
                        <p class="invit-name">星钻：<span>{{into.gold}}</span></p>
                      </div>
                      <div class="invit-msg">
                        <p>{{into.mark}}</p>
                        <p class="invit-date">{{into.created_at}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div slot="bottom" class="mint-loadmore-bottom">
                  <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                  <span v-show="bottomStatus === 'loading'">
                    <mt-spinner type="snake"></mt-spinner>
                  </span>
                </div>
              </mt-loadmore>
            </li>
            <img src="../../assets/image/noDate1.png" alt="" v-if="isNoDate">
          </ul>
          <ul v-show="isStar">
            <li class="list" v-for="(month,item) in MonthList" :key="item">
              <div class="invit-match">
                <div class="match-pop">
                  <router-link :to="{path:'/getDay',query:{times:month.times}}">
                    <div class="invit-info isStar">
                      <p class="invit-phone">{{month.times}}</p>
                      <p class="invit-name">总收入：<span>{{month.total_ore}}</span> <i class="icon icon-right"></i> </p>
                    </div>
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul>
            <li class="page-loadmore-wrapper">
              <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
                <div class="list" v-for="(item,index) in list" :key="index">
                  <div class="invit-match">
                    <div class="match-pop">
                      <div class="invit-info">
                        <p class="invit-phone">{{item.order_sn}}</p>
                        <p v-if="!isStar" class="invit-name">星钻：<span>{{item.total_fee}}</span></p>
                        <p v-else class="invit-name">星币：<span>{{item.total_kb}}</span></p>
                      </div>
                      <div class="invit-msg">
                        <p>{{item.subject}}</p>
                        <p class="invit-date">{{item.created_at}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div slot="bottom" class="mint-loadmore-bottom">
                  <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                  <span v-show="bottomStatus === 'loading'">
                    <mt-spinner type="snake"></mt-spinner>
                  </span>
                </div>
              </mt-loadmore>
            </li>
            <img src="../../assets/image/noDate1.png" alt="" v-if="isNoDate1">
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
      isStar: false,
      wrapperHeight: 0,
      allLoaded: false,
      selected: '1',
      intoList:[],
      list: [],
      MonthList: [],
      bottomStatus: '',
      page: 1,
      url: this.$route.params.id,
      isNoDate: false,
      isNoDate1: false,
      val: ''
    }
  },
  mounted() {
    // this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
  },
  created () {
    if (this.url == 'star') {
      this.starInto()
      return false
    }
    if (this.url == 'gold') {
      this.goldInto(1)
      return false
    }
  },
  watch: {
    selected (value) {
      this.val = value
      if (this.url == 'star') {
        console.log(value);
        if (value == 1) {
          this.starInto(1)
          return false
        }
        if (value == 2) {
          this.starOut(1)
          return false
        }
        return false
      }
      if (this.url == 'gold') {
        console.log(value)
        if (value == 1) {
          this.goldInto(1)
          return false
        }
        if (value == 2) {
          this.goldOut(1)
          return false
        }
        return false
      }
    }
  },
  methods: {
    starInto () {
      // 星币收入(月)
      api.alreadyGetMonth()
        .then ((res) => {
          if (res.data.length == 0) {
            this.isNoDate = true
          } else {
            this.isNoDate = false
            this.isStar = true
            this.MonthList = res.data
          }
        })
    },
    starOut (page) {
      // 星币支出
      api.kbExpenses({
        'page': page
      })
        .then((res) => {
          // console.log(res)
          if (res.data.length == 0) {
            /*Toast({
              message: '暂无数据',
              position: 'bottom',
              duration: 2000
            });*/
            this.isNoDate1 = true
          } else {
            if (page == 1) {
              this.isNoDate1 = false
              this.list = res.data
              this.page = 2
            } else {
              for (let x = 0; x < res.data.length; x++) {
                this.list.push(res.data[x])
              }
              this.page++
            }
          }
        })
    },
    goldInto (page) {
      // 金币收入
      api.profit({
        'page': page
      })
        .then((res) => {
          console.log(res)
          if (res.data.length == 0) {
            /*Toast({
              message: '暂无数据',
              position: 'bottom',
              duration: 2000
            })*/
            this.isNoDate = true
          } else {
            if (page == 1) {
              this.isNoDate = false
              this.intoList = res.data
              this.page = 2
            } else {
              for (let y = 0; y < res.data.length; y++) {
                this.intoList.push(res.data[y])
              }
              this.page++
            }
          }
        })
    },
    goldOut (page) {
      // 金币支出
      api.expenses({
        'page': page
      })
        .then ((res) => {
          console.log(res)
          if(res.data.length == 0){
           /* Toast({
              message: '暂无数据',
              position: 'bottom',
              duration: 2000
            })*/
            this.isNoDate1 = true
          } else {
            if (page == 1) {
              this.isNoDate = false
              this.list = res.data
              this.page = 2
            } else {
              for (let Z = 0; Z < res.data.length; Z++) {
                this.list.push(res.data[Z])
              }
              this.page++
            }
          }
        })
    },
    loadBottom () {
      setTimeout(() => {
        console.log(this.url)
        // this.starOut(this.page)
        // this.goldInto(this.page)
        // this.goldOut(this.page)
        if (this.url == 'star') {
          if (this.val == 1) {
            this.starInto(this.page)
            return false
          }
          if (this.val == 2) {
            this.starOut(this.page)
            return false
          }
        }
        this.$refs.loadmore.onBottomLoaded();
      }, 1500)
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
  }
}
</script>
