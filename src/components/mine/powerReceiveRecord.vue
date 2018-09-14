<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:history.go(-1);"></a>
      分红记录
    </div>
    <div class="rcContainer">
      <mt-loadmore :bottom-method="loadRCBottom" @bottom-status-change="handleRCBottomChange" :bottom-all-loaded="allLoaded" ref="">
        <div class="rec-list" v-for="(eachRec ,index) in recList" :key="index">
          <div class="rec-center">
            <p><span class="fl"><i>数额：</i>{{eachRec.gold}}</span><span class="fr"><i>返利比例：</i>{{eachRec.rate}}‰</span></p>
            <p><i>说明：</i>{{eachRec.mark}}</p>
            <p><i>释放时间：</i>{{eachRec.created_at}}</p>
          </div>
        </div>
        <!--<div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }" class="add-more">上拉加载更多</span>
          <span v-show="bottomStatus === 'loading'" class="add-more-logo">
              <mt-spinner type="snake"></mt-spinner>
            </span>
        </div>-->
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import api from '@/assets/js/api.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      page: 1,
      allLoaded: false,
      recList: []
    }
  },
  created () {
    this.getPowerReturnList()
  },
  methods: {
    loadRCBottom () {
      // console.log('aaa')
    },
    handleRCBottomChange () {
      // console.log('bbb')
    },
    getPowerReturnList () {
      api.powerReturnList({
        token: token,
        page: this.page
      })
        .then(res => {
          console.log(res)
          this.recList = res.data
        })
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/less/releaseRecord.less';
</style>
