<template>
  <div class="wrapper">
    <mt-header fixed title="释放记录">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="rcContainer">
      <mt-loadmore :bottom-method="loadRCBottom" @bottom-status-change="handleRCBottomChange" :bottom-all-loaded="allLoaded" ref="">
        <div class="rec-list" v-for="(eachRec ,index) in recList" :key="index">
          <div class="rec-center">
            <p><span class="fl"><i>数额：</i>{{eachRec.total}}</span><span class="fr"><i>星钻消耗：</i>{{eachRec.handling_fee}}</span></p>
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
<style lang="less" scoped>
  @import '../../assets/less/releaseRecord.less';
</style>
<script>
import { Toast } from 'mint-ui'
import api from '@/assets/js/api.js'
import { url } from '../../assets/js/mobile.js'
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
    api.starToPowerRec({
      token: token,
      page: this.page
    })
      .then(res => {
        // console.log(res)
        this.recList = res.data
      })
  },
  methods: {
    loadRCBottom () {
      // console.log('aaa')
    },
    handleRCBottomChange () {
      // console.log('bbb')
    }
  }
}
</script>

<style scoped>

</style>
