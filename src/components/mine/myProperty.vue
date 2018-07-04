<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:history.go(-1);"></a>
      我的资产
    </div>
    <div class="property-tab" >
      <mt-navbar  v-model="selected">
        <mt-tab-item :id="index" v-for="(tabName,index) in tabTxt" :key="index" class="asc">{{tabName}}</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item :id="0" class="property-container">
          <div class="pc-head-container">
            <p class="pc-head-title">星币总数</p>
            <p class="pc-head-num"><span>{{total}}</span>
            <!-- <router-link :to="{path:'/smelting/S'}"><span class="smelting fr"></span></router-link> -->
            </p>
            <p class="pc-head-freeze">
              冻结星币：{{freeze}}
              <i class="icon icon-lock"></i>
            </p>
          </div>
          <div class="pc-content">
            <p class="pc-content-title">收支记录</p>
            <!-- <ul>
              <li v-for="(list,index) in lists" :key="index">
                <div class="list list-header">
                  <div>
                    <span>{{list.date}}</span>
                    <span>总收入：{{list.total}}</span>
                  </div>
                  <i class="icon icon-pull"></i>
                </div>
                <div class="list list-content">
                  <div class="list-subnav">
                    <p>日常领取</p>
                    <span>{{list.time}}</span>
                  </div>
                  <p>{{list.earn}}</p>
                </div>
                <div class="list list-content">
                  <div class="list-subnav">
                    <p>邀请收益</p>
                    <span>2018-05-22 15:06</span>
                  </div>
                  <p>+0.0001</p>
                </div>
              </li>
            </ul> -->
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item :id="1" class="property-container">
          <div class="pc-head-container">
            <p class="pc-head-title">金币总数</p>
            <p class="pc-head-num"><span>99999.00</span><router-link :to="{path:'/smelting'}"><span class="smelting fr">释放/赠送/充值 >></span></router-link></p>
            <p class="pc-head-freeze">
              冻结金币：{{gold}}
              <i class="icon icon-lock"></i>
            </p>
          </div>
          <div class="pc-content">
            <p class="pc-content-title">收支记录</p>
            <router-link to="/deal">
              <p class="pc-content-title">交易列表</p>
            </router-link>
            <!-- <ul>
              <li v-for="(list,index) in lists" :key="index">
                <div class="list list-header">
                  <div>
                    <span>{{list.date}}</span>
                    <span>总收入：{{list.total}}</span>
                  </div>
                  <i class="icon icon-pull"></i>
                </div>
                <div class="list list-content">
                  <div class="list-subnav">
                    <p>日常领取</p>
                    <span>{{list.time}}</span>
                  </div>
                  <p>{{list.earn}}</p>
                </div>
                <div class="list list-content">
                  <div class="list-subnav">
                    <p>邀请收益</p>
                    <span>2018-05-22 15:06</span>
                  </div>
                  <p>+0.0001</p>
                </div>
              </li>
            </ul> -->
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      selected: 0,
      freeze: '1000',
      gold: '1000',
      total: '1000',
      tabTxt: ['星币', '金币'],
      propertyContainer: [],
      lists: [
        {
          date: '2018-06',
          total: '235',
          time: '2018-05-22 15:06',
          earn: '+0.0001'
        },
        {
          date: '2018-05',
          total: '235',
          time: '2018-05-22 15:06',
          earn: '+0.0001'
        }
      ]
    }
  },
  created () {
    // 已经开采的矿石记录按月统计
    // this.$http.get(url + 'alreadyGetMonth?token='+token)
    // .then(response => {
    //   console.log(response)
    //   this.propertyContainer = response.data.data
    //   this.total = response.data.total
    // })
    // .catch(error => {
    //   console.log(error)
    // })
  },
  watch: {
    selected (value) {
      console.log(value);
    }
  },
  methods: {
    propertyCell (index) {
      console.log(index)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/myProperty.less';
</style>
