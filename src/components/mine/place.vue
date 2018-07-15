<template>
  <div class="wrapper">
    <mt-header fixed title="安置列表">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="firInvit">
      <div class="invit-list" v-for="(item,index) in items" :key="index"  @click="placeItem(item.id)">
        <div class="invit-match">
          <div class="match-pop">
            <div class="invit-info">
            <p class="invit-name">{{item.realname}}</p>
            <p class="invit-phone">{{item.phone}}</p>
          </div>
          <div class="invit-msg">
            <p>{{item.level}}</p>
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
      items: []
    }
  },
  created () {
    api.waitPlacement()
    .then((res) => {
      console.log(res)
      if (res.data.length == 0) {
        Toast({
          message: '没有数据啦~',
          position: 'bottom',
          duration: 2000
        });
      } else {
        this.items = res.data
        // if (page == 1) {
        //   this.items = res.data
        //   this.page = 2
        // } else {
        //   for (let x = 0; x < res.data.length; x++) {
        //     this.items.push(res.data[x])
        //   }
        //   this.page++
        // }
      }
      
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].level == 1) {
          this.items[i].level = '居民'
        } else {
          this.items[i].level = '创世居民'
        }
      }
    })
    api.getRecordCode()
    .then((data) => {
      console.log(data)
    })
  },
  methods: {
    placeItem (e) {
      console.log(e)
    }
  }
  
}
</script>
