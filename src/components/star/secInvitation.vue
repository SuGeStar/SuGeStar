<template>
  <div class="wrapper">
    <mt-header fixed title="探索者部落">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="firInvit">
      <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'rem' }">
        <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <div class="invit-list" v-for="index in items" :key="index.id">
            <div class="invit-match">
              <div class="match-pop">
                <div class="invit-info">
                  <p class="invit-name">{{index.info.realname}}</p>
                  <p class="invit-phone">{{index.info.phone}}</p>
                </div>
                <div class="invit-msg">
                  <p>{{index.created_at}}</p>
                  <p>{{index.info.level}}</p>
                </div>
              </div>
            </div>
          </div>
          <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop'}" class="add-more">下拉加载刷新</span>
            <span v-show="bottomStatus === 'loading'" class="add-more-logo">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
        </mt-loadmore>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/firInvit.less';
</style>
<script>
import api from '@/assets/js/api.js'
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      wrapperHeight: 0,
      allLoaded: false,
      page: 1,
      bottomStatus: '',
      items: []
    }
  },
  created () {
    this.getList(1)
  },
  methods: {
    getList (page) {
      api.upgrades({
        'page': page
      })
      .then ((res) => {
        // console.log(res)
        if (res.data.length == 0) {
          Toast({
            message: '暂无数据~',
            position: 'bottom',
            duration: 2000
          });
        } else {
          if (page == 1) {
            this.items = res.data
            this.page = 2
          } else {
            for (let x = 0; x < res.data.length; x++) {
              this.items.push(res.data[x])
            }
            this.page++
          }
        }

        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].info.level == 1) {
            this.items[i].info.level = '居民'
          } else {
            this.items[i].info.level = '创世居民'
          }
        }
      })
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    loadBottom () {
      setTimeout(() => {
        this.getList(this.page)
        this.$refs.loadmore.onBottomLoaded();
      }, 1500)
    }
  }
}
</script>
