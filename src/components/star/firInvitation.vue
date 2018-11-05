<template>
  <div class="wrapper">
    <mt-header fixed title="发现者部落">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="firInvit">
      <div class="firInvit-center">
        <div class="invit-list" v-for="(item,index) in items" :key="index" v-if="!no">
          <div class="invit-match">
            <div class="match-pop">
              <div class="invit-info">
                <p class="invit-name">{{item.info.realname}}</p>
                <p class="invit-phone">{{item.info.phone}}</p>
              </div>
              <div class="invit-msg">
                <p>{{item.info.level}}</p>
                <p class="invit-date">{{item.created_at}}</p>
              </div>
            </div>
          </div>
        </div no>
      </div>
      <img src="../../assets/image/noDate1.png" alt="" class="nodata" v-if="no">
      <p class="add-more" @click="loadMore" v-if="adm">点击加载更多</p>
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
      items: [],
      no: false,
      adm: false
    }
  },
  created () {
    this.getList(1)
  },
  methods: {
    getList (page) {
      api.registers({
        'page': page
      })
        .then((res) => {
          if (page == 1) {
            if (res.data.length == 0) {
              this.no = true;
              this.adm = false;
            } else if (res.data.length < 10) {
              this.items = res.data
              this.adm = false
            } else {
              this.items = res.data
              this.page = 2
              this.no = false;
              this.adm = true;
            }
          } else {
            if (res.data.length == 0) {
              Toast({
                message: '暂无数据~',
                position: 'bottom',
                duration: 2000
              })
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
    loadMore () {
      this.getList(this.page);
    }
  }
}
</script>
