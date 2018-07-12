<template>
  <div class="wrapper">
    <mt-header fixed title="我的推荐">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="firInvit">
      <div class="image" v-show="isNull">
        <img src="../../assets/image/nodata.png" alt="">
      </div>
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
    this.getList(1)
  },
  methods: {
    getList (page) {
      api.registers({
        'page': page
      })
      .then ((res) => {
        console.log(res)
        if (res.data.length == 0) {
          this.isNull = true
        } else {
          if (page == 1) {
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
          if (this.items[i].info.level == 1) {
            this.items[i].info.level = '居民'
          } else {
            this.items[i].info.level = '创世居民'
          }
        }
      })
    }
  }
}
</script>
