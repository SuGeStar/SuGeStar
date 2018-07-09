<template>
  <div class="wrapper">
    <mt-header fixed title="星币收取记录">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="getDay">
      <ul>
        <li v-for="(day,index) in dayList" :key="index"></li>
      </ul> 
    </div>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      dayList:[],
      page: 1
    }
  },
  created () {
    console.log(this.$route.query.times)
    let times = this.$route.query.times
    // this.GetDay()
  },
  methods: {
    GetDay () {
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
        }
      })
      .catch(error => {
        console.log(error)
        Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      })
    }
  }
}
</script>
