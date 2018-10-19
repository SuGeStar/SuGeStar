<template>
  <div class="wrapper">
    <mt-header fixed title="星币收取记录">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="getDay">
      <div class="page-loadmore-wrapper" ref="wrapper">
        <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <div class="listBox">
            <div class="list" v-for="(day,index) in dayList" :key="index">
              <div class="get-box">
                <p>{{day.created_at}}</p>
                <p>{{day.mark}}</p>
              </div>
              <p>星币：<span>{{day.ore}}</span></p>
            </div>
          </div>
          <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
            <span v-show="bottomStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
        </mt-loadmore>
      </div>
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
  .listBox{
    .list{
      background-color: #fff;
      padding: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e8e8e8;
      p{
        span{
          color:#f0b026;
        }
      }
      &:last-child{
        border-bottom: none;
      }
      .get-box{
       p{
         margin-bottom: 0.1rem;
       }
      }
    }
  }
}
</style>
<script>
import { Toast } from 'mint-ui'
import { url } from '../../assets/js/mobile.js'
import api from '@/assets/js/api.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      wrapperHeight: 0,
      bottomStatus: '',
      allLoaded: false,
      dayList:[],
      isNull: false,
      page: 1
    }
  },
  created () {
    this.GetDay(1)
    // 已开采矿石（按天记录）
      // this.$http.get(url + 'alreadyGetDay?token='+token+'&times='+times+'&page='+this.page)
      // .then(response => {
      //   console.log(response)
      //   if (response.data.code == 200) {
      //     if (response.data.data == '') {
      //       this.isNull = true
      //       return false
      //     } else {
      //       this.isNull = false
      //       this.isStar = true
      //       this.dayList = response.data.data
      //       this.page++
      //     }
      //   } else {
      //     Toast({
      //       message: response.data.msg,
      //       position: 'bottom',
      //       duration: 3000
      //     })
      //   }
      // })
      // .catch(error => {
      //   console.log(error)
      //   Toast('网络延时，请稍后重试')
      // })
  },
  methods: {
    GetDay (page) {
      let times = this.$route.query.times
      api.alreadyGetDay({
        'time': times,
        'page': page
      })
      .then((res) => {
        console.log(res)
        if (res.data.length == 0) {
          Toast({
            message: '暂无数据~',
            position: 'bottom',
            duration: 2000
          });
        } else {
          if (page == 1) {
            this.dayList = res.data
            this.page = 2
          } else {
            for (let x = 0; x < res.data.length; x++) {
              this.dayList.push(res.data[x])
            }
            this.page++
          }
        }
      })
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    loadBottom () {
      setTimeout(() => {
        this.GetDay(this.page)
        this.$refs.loadmore.onBottomLoaded();
      }, 1500)
    }
  },
  // mounted() {
  //   this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
  // }
}
</script>
