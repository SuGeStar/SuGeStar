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
            <p class="pc-head-num">{{total}}</p>
            <p class="pc-head-smelting"><span class="fl"><i class="icon icon-lock"></i><span>{{frozen_force}}</span></span><router-link :to="{path:'/force'}"><span class="smelting fr">释放/转增 >></span></router-link></p>
            <!-- <p class="pc-head-freeze">
              冻结星币：{{freeze}}
              <i class="icon icon-lock"></i>
            </p> -->
          </div>
          <div class="pc-content">
            <router-link to="/record/star">
              <p class="pc-content-title"><i class="icon icon-receive-record"></i>收支记录</p>
            </router-link>
            <router-link to="/deal/1">
              <p class="pc-content-title"><i class="icon icon-trade-record"></i>交易列表</p>
            </router-link>
            <router-link to="/releaseRecord">
              <p class="pc-content-title"><i class="icon icon-smelting-record"></i>释放记录</p>
            </router-link>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item :id="1" class="property-container">
          <div class="pc-head-container">
            <p class="pc-head-title">星钻总数</p>
            <p class="pc-head-num"><span>{{gold}}</span></p>
            <p class="pc-head-smelting"><router-link :to="{path:'/smelting'}"><span class="smelting fr">提现/赠送/充值 >></span></router-link></p>
            <!--<p class="pc-head-freeze">
              算力：{{frozen_force}}
              <i class="icon icon-lock"></i>
            </p>-->
          </div>
          <div class="pc-content">
            <router-link to="/record/gold">
              <p class="pc-content-title record"><i class="icon icon-receive-record"></i>收支记录</p>
            </router-link>
            <router-link to="/deal/2">
              <p class="pc-content-title"><i class="icon icon-trade-record"></i>交易列表</p>
            </router-link>
            <router-link to="/powerReceiveRecord">
              <p class="pc-content-title"><i class="icon icon-bonus-record"></i>分红记录</p>
            </router-link>
            <router-link to="/withdrawalRecord">
              <p class="pc-content-title"><i class="icon icon-smelting-record"></i>提现记录</p>
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
import { Toast } from 'mint-ui'
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      selected: 0,
      freeze: '1000',
      gold: '1000',
      frozen_force: '0',
      total: '1000',
      tabTxt: ['星币', '星钻'],
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
    /*
   * 获得金币数量
   * */
    this.$http.get(url + 'availableGold?token=' + token)
      .then(response => {
        // console.log(response.data)
        if (response.data.code == 200) {
          this.gold = response.data.data.gold
          this.frozen_force = response.data.data.frozen_force
          this.total = response.data.data.miners

        } else {

        }
      })
      .catch(error => {
        console.log(error)
        Toast('网络延时，请稍后重试')
      })
    let selectNum = localStorage.getItem('selectMy')
    if (selectNum) {
      this.selected = parseInt(selectNum)
    }
  },
  watch: {
    selected (value) {
      localStorage.setItem('selectMy', value)
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
