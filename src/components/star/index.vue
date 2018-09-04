<template>
  <div class="wrapper">
    <div class="index">
      <!--基本信息-->
      <div class="index-user-info">
        <span class="fl">公告：</span>
        <marquee  direction="left" scrolldelay="500">
          <p>这是1个滚动消息我是一个跟hard的员工</p>
          <p>这是2个滚动消息</p>
          <p>这是3个滚动消息</p>
          <p>这是4个滚动消息</p>
        </marquee>
        <i>更多 >></i>
      </div>
      <!-- 钻石区域 -->
      <div class="index-bg">
        <collecting :energy = 'arr' @energyClick ='getEnergy'></collecting>
      </div>
      <!-- 团队看板 -->
      <div class="index-box">
        <div class="box-title">
          <h3>星球资源</h3>
        </div>
        <div class="data-box">
          <div class="data-list">
            <router-link to="/myProperty">
              <div class="data-logo">
                <img src="../../assets/image/jinbi.png" alt=""><span>星币</span>
              </div>
              <p class="data-data">{{ownerGold}}</p>
            </router-link>
          </div>
          <div class="data-list">
            <div class="data-logo">
              <img src="../../assets/image/yl.png" alt=""><span>算力</span>
            </div>
            <p class="data-data">{{ownerPower}}</p>
          </div>
          <div class="data-list">
            <router-link to="/myProperty">
              <div class="data-logo">
                <img src="../../assets/image/index-zuanshi.png" alt=""><span>星钻</span>
              </div>
              <p class="data-data">{{ownerMoney}}</p>
             <!-- <p class="data-title">今日获得</p>
              <p class="data-data">2.0125</p>
              <p class="data-title">累计获得</p>
              <p class="data-data">100266</p>-->
            </router-link>
          </div>
        </div>
      </div>
      <div class="star-explain">
        <div class="explain-list"  @click="getStar">
          <img src="../../assets/image/index-zichan.gif" alt="">
          <p>星钻红包</p>
        </div>
        <div class="explain-list">
          <router-link to="/miji">
            <img src="../../assets/image/index-miji.png" alt="">
            <p>星球动态</p>
          </router-link>
        </div>
        <div class="explain-list">
          <router-link to="/friend">
            <img src="../../assets/image/index-friend.png" alt="">
            <p>邀请好友</p>
          </router-link>
        </div>
      </div>
      <footGuide></footGuide>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '../../assets/less/index.less';
</style>
<script>
import { Toast } from 'mint-ui'
import footGuide from '../comp/footGuide.vue'
import collecting from './collecting.vue'
import { url } from '../../assets/js/mobile.js'
import api from '@/assets/js/api.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      today_owen: '0',
      all_owen: '0',
      miners_today: '0',
      miners_all: '0',
      level: 'SG青铜时代',
      promptTxt: '',
      pv: '1000',
      k: '1000',
      sg: '1000',
      s: '1000',
      sgolden: '1000',
      allpv: '10000',
      allk: '10000',
      allsg: '10000',
      alls: '10000',
      allsgolden: '10000',
      arr: [],
      floor: "2",
      lesspeo: "3",
      moregold: "350",
      invitpeo: "3",
      allpeo: "10",
      progressBox: [],
      teamFloor: true,
      ownerGold: 0,
      ownerMoney: 0,
      ownerPower: 0
    }
  },
  components: {
    footGuide,
    collecting
  },

  methods: {
    getEnergy (id) {
      // 开采K矿
      let form = this.$qs.stringify({
        token: token,
        id: id
      })
      this.$http.post(url + 'get', form)
        .then(response => {
          // console.log(response)
          Toast({
            message: response.data.msg,
            position: 'middle',
            duration: 2000
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    dataMiners () {
      if (token) {
        this.$http.get(url + 'dataMiners?token=' + token)
        // 今日星币及累计获得的星币数据
          .then(response => {
            // console.log(response)
            if (response.data.code == 200) {
              this.miners_today = response.data.data.today
              this.miners_all = response.data.data.total
            } else if (response.data.code == 403) {
              Toast({
                message: response.data.msg
              })
            }
          })
          .catch(error => {
            console.log(error)
            Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
          })
      }
    },
    /*dataGold () {
      if (token) {
        this.$http.get(url + 'dataGold?token=' + token)
        // 今日代币及累计获得的代币数据
          .then(response => {
            // console.log(response)
            if (response.data.code == 200) {
              this.today_owen = response.data.data.today
              this.all_owen = response.data.data.total
            } else if (response.data.code == 403) {
              Toast({
                message: response.data.msg
              })
            }
          })
          .catch(error => {
            console.log(error)
            Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
          })
      }
    },*/
    /*recommend () {
      // 获取直推人数
      api.recommendNum()
        .then((res) => {
          this.invitpeo = res.data
        })
    },
    getSonNum () {
      // 旗下人数
      api.getSonNum()
        .then((res) => {
          this.allpeo = res.data
        })
    },
    prompt () {
      // 提示信息
      api.prompt()
        .then((res) => {
          // console.log(res)
          this.promptTxt = res.data
        })
    },*/
    getStar () {
      let form = this.$qs.stringify({
        token: token
      });
      api.getEveryDayGold(form)
        .then(res => {
          console.log(res)
        })
      /*Toast({
        message: '红包还在制作中，请稍等..',
        position: 'middle',
        duration: 2000
      })*/
    }
  },
  created () {
    this.dataMiners()
    // this.dataGold()
    // this.recommend()
    // this.getSonNum()
    // this.prompt()
    if (token) {
      this.$http.get(url + 'notGet?token=' + token)
      // 未开采K矿
        .then(response => {
          // console.log(response)
          // this.arr = response.data.data;
          this.arr = [{
            id: 1,
            ore: '1.00'
          },
          {
            id: 2,
            ore: '2.00'
          },
          {
            id: 3,
            ore: '3.00'
          },
          {
            id: 4,
            ore: '4.00'
          },
          {
            id: 5,
            ore: '5.00'
          },
          {
            id: 6,
            ore: '6.00'
          },
          {
            id: 7,
            ore: '7.00'
          },
          {
            id: 8,
            ore: '8.00'
          },
          {
            id: 9,
            ore: '9.00'
          }]
        })
        .catch(error => {
          console.log(error)
          Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
        })
    }
    /*if (!token) {

    } else {
      this.$http.get(url + 'occupancyRate?token=' + token)
      // 团队看板占比
        .then(response => {
          // console.log(response.data.data)
          for (let i = 0; i < response.data.data.length; i++) {
            if (response.data.data[i].percentage == 0) {
              this.progressBox[i] = response.data.data[i]
              // this.teamFloor = false
            } else {
              this.progressBox = response.data.data
              this.progressBox[1].color = '#a288d2'
              this.progressBox[2].color = '#f0b026'
              this.progressBox[3].color = '#1ad3a7'
              this.progressBox[4].color = '#03a8f7'
            }
          }
        })
        .catch(error => {
          console.log(error)
          Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
        })
    }*/
    /*
    * 获得金币数量
    * */
    api.getUserTreasure(token)
      .then(res => {
        // console.log(res)
        this.ownerGold = res.data.miners
        this.ownerMoney = res.data.gold
        this.ownerPower = res.data.power
      })
  },
  mounted () {
    if (!token) {
      this.arr = [
        {
          id: 1,
          ore: '9.00'
        },
        {
          id: 2,
          ore: '8.00'
        }
      ]
    }
  }
}
</script>
