<template>
  <div class="wrapper">
    <mt-header fixed title="我的邀请">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="firInvit">
      <div class="image" v-show="isNull">
        <img src="../../assets/image/nodata.png" alt="">
      </div>
      <!-- <div class="invit-head">
        <p class="invit-time">{{dats.date}}</p>
        <p class="invit-people">总人数：{{dats.people}}
          <i class="icon icon-pull"></i>
        </p>
      </div> -->
      <div class="invit-list" v-for="(item,index) in items" :key="index">
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
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/firInvit.less';
</style>
<script>
import api from '@/assets/js/api.js'
export default {
  data () {
    return {
      isNull: false,
      page: 1,
      dats: {
        date: '2018-05',
        people: '20'
      },
      items: []
    }
  },
  created () {
    api.registers({
      'page': this.page
      // 'page': 1
    })
    .then((res)=>{
      console.log(res)
      if (res.data.length == 0) {
        this.isNull = true
      } else {
        if (this.page == 1) {
          this.items = res.data
          this.page = 2
        } else {
          for (let x = 0; x < res.data.length; x++) {
            this.items.push(res.data[i])
          }
          this.page++
        }
      }

      for (let i = 0; i < this.items.length; i++) {
        // this.items.push(res.data[i])
        if (this.items[i].info.level == 2) {
          this.items[i].info.level = '创世居民'
        } else {
          this.items[i].info.level = '居民'
        }
      }
      // this.page++
    })
  },
  methods: {
  }
}
</script>
