<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:history.go(-1);"></a>
      释放记录
    </div>
    <div class="rcContainer">
      <mt-loadmore :bottom-method="loadRCBottom" @bottom-status-change="handleRCBottomChange" :bottom-all-loaded="allLoaded" ref="">
        <div class="rec-list" v-for="(eachRec ,index) in recList" :key="index">
          <div class="rec-center">
            <p><span class="fl"><i>释放数额：</i>{{eachRec.money}}</span><span class="fr"><i>状态：</i>{{eachRec.status}}</span></p>
            <p><i>操作账户：</i>{{eachRec.bank_card.card}} <span>({{eachRec.bank_card.bank_code_name}})</span></p>
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
    this.getWithdrawList()
  },
  methods: {
    loadRCBottom () {
      // console.log('aaa')
    },
    handleRCBottomChange () {
      // console.log('bbb')
    },
    getWithdrawList () {
      api.withdrawList({
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
