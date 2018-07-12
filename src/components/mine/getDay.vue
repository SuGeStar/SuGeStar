<template>
  <div class="wrapper">
    <mt-header fixed title="星币收取记录">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="getDay">
      <div class="image" v-show="isNull">
        <img src="../../assets/image/nodata.png" alt="">
      </div>
      <ul>
        <li v-for="(day,index) in dayList" :key="index"></li>
      </ul> 
    </div>
  </div>
</template>
<style lang="less" scoped>
.getDay{
  margin-top: 1rem;
  .image{
    img{
      width: 100%;
    }
  }
}
</style>
<script>
import { Toast } from 'mint-ui'
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      dayList:[],
      isNull: false,
      page: 1
    }
  },
  created () {
    let times = this.$route.query.times
    console.log(times)
    // 已开采矿石（按天记录）
      this.$http.get(url + 'alreadyGetDay?token='+token+'&times='+times+'&page='+this.page)
      .then(response => {
        console.log(response)
        if (response.data.data == '') {
          this.isNull = true
          return false
        } else {
          this.isNull = false
          this.isStar = true
          this.MonthList = response.data.data
          this.page++
        }
      })
      .catch(error => {
        console.log(error)
        Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      })
  },
  methods: {
    GetDay () {
       
    }
  }
}
</script>
