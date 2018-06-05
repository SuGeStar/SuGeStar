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
            <p class="pc-head-title">K矿石总数</p>
            <p class="pc-head-num"><span>{{total}}</span><router-link :to="{path:'/smelting/S'}"><span class="smelting fr">熔炼 >></span></router-link></p>
          </div>
          <p class="am_near_shop_all">
            明细
          </p>
          <mt-cell class="propertyCell" v-for="(item,index) in propertyContainer" :key="index" :title="item.times" :value="'总计：'+item.total_ore"  is-link @click="propertyCell(index)"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item :id="1" class="property-container">
          <div class="pc-head-container">
            <p class="pc-head-title">S矿石总数</p>
            <p class="pc-head-num"><span>99999.00</span><router-link :to="{path:'/smelting/S'}"><span class="smelting fr">熔炼 >></span></router-link></p>
          </div>
          <mt-cell v-for="(item,index) in propertyContainer" :key="index" :title="item.times" :label="item.total_ore" is-link></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item :id="2" class="property-container">
          <div class="pc-head-container">
            <p class="pc-head-title">SG矿币总数</p>
            <p class="pc-head-num"><span>99999.00</span><router-link :to="{path:'/smelting/S'}"><span class="smelting fr">熔炼 >></span></router-link></p>
          </div>
          <mt-cell v-for="(item,index) in propertyContainer" :key="index" :title="item.times" :label="item.total_ore" is-link></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item :id="3" class="property-container">
          <div class="pc-head-container">
            <p class="pc-head-title">SG金币总数</p>
            <p class="pc-head-num"><span>99999.00</span><router-link :to="{path:'/smelting/S'}"><span class="smelting fr">熔炼 >></span></router-link></p>
          </div>
          <mt-cell v-for="(item,index) in propertyContainer" :key="index" :title="item.times" :label="item.total_ore" is-link></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item :id="4" class="property-container">
          <div class="pc-head-container">
            <p class="pc-head-title">原力值</p>
            <p class="pc-head-num"><span>99999.00</span><router-link :to="{path:'/smelting/S'}"><span class="smelting fr">熔炼 >></span></router-link></p>
            <div class="pc-head-freeze">
              <p>冻结原力值：<span>10000.00</span></p>
            </div>
          </div>
          <mt-cell v-for="(item,index) in propertyContainer" :key="index" :title="item.times" :label="item.total_ore" is-link></mt-cell>
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
      total: '',
      tabTxt: ['K矿石', 'S矿石', 'SG矿币', 'SG金币', '原力值'],
      propertyContainer: []
    }
  },
  created () {
    // 已经开采的矿石记录按月统计
    this.$http.get(url + 'alreadyGetMonth?token='+token)
    .then(response => {
      console.log(response)
      this.propertyContainer = response.data.data
      this.total = response.data.total
    })
    .catch(error => {
      console.log(error)
    })
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

<style scoped>
  @import '../../assets/less/myProperty.less';
</style>
