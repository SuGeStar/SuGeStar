<template>
  <div class="wrapper">
    <div class="index">
      <!--基本信息-->
      <div class="index-user-info">
        <span class="fl">公告：</span>
        <marquee  direction="left" scrolldelay="500">{{systemNotice}}</marquee>
        <i>更多 >></i>
      </div>
      <!-- 钻石区域 -->
      <div class="index-bg">
        <collecting :energy = 'arr' @energyClick ='getEnergy'></collecting>
      </div>
      <!-- 团队看板 -->
      <div class="index-box">
        <div class="box-title">
          <h3>星球数据</h3>
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
                <img src="../../assets/image/xz.png" alt=""><span>星钻</span>
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
          <img src="../../assets/image/index-zichan.png" alt="">
          <p>星钻红包</p>
        </div>
        <div class="explain-list">
          <router-link to="/miji">
            <img src="../../assets/image/index-miji.png" alt="">
            <p>星球动态</p>
          </router-link>
        </div>
        <div class="explain-list" @click="inviteFriend">
            <img src="../../assets/image/index-friend.png" alt="">
            <p>邀请好友</p>
        </div>
      </div>
      <router-link to="/gift"><div class="gift-bag"><p>星球礼包</p></div></router-link>
      <mt-popup v-model="successGet" position="bottom" class="mint-popup">
          <div class="successGetBox">
            <div class="successGetBox-close">
              <span @click="closeSuccessGet"></span>
            </div>
            <router-link to="/powerReceiveRecord"><div class="successGetBox-info"></div></router-link>
          </div>
      </mt-popup>
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
import api from '@/assets/js/api.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      arr: [],
      ownerGold: 0,
      ownerMoney: 0,
      ownerPower: 0,
      successGet: false,
      systemNotice: ''
    }
  },
  components: {
    footGuide,
    collecting
  },

  methods: {
    // 开采矿石
    getEnergy (id) {
      let form = this.$qs.stringify({
        token: token,
        id: id
      })
      api.mine(form)
        .then(response => {
          Toast({
            message: response.msg,
            position: 'middle',
            duration: 2000
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 领取每天星钻红包
    getStar () {
      if (token) {
        let form = this.$qs.stringify({
          token: token
        });
        api.getEveryDayGold(form)
          .then(res => {
            if (res.code === 200) {
              this.successGet = true
            } else {
              Toast({
                message: res.msg,
                position: 'middle',
                duration: 2000
              })
            }
            console.log(res)
          })
      } else {
        Toast({
          message: '您还未登录，请先登录',
          position: 'middle',
          duration: 2000
        })
      }
    },
    closeSuccessGet () {
      this.successGet = false
    },
    inviteFriend () {
      if (token) {
        this.$router.push('/friend')
      } else {
        Toast({
          message: '您还未登录，请先登录',
          position: 'middle',
          duration: 2000
        })
      }
    }
  },
  created () {
    if (token) {
      // 未开采K矿
      api.noMine()
        .then(response => {
          this.arr = response.data;
        })
        .catch(error => {
          Toast('网络延时，请稍后重试')
        })
      // 获得金币数量
      api.getUserTreasure()
        .then(res => {
          this.ownerGold = res.data.miners
          this.ownerMoney = res.data.gold
          this.ownerPower = res.data.power
        })
    }
    // 系统公告
    api.systemNotice()
      .then(res => {
        this.systemNotice = res.data
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
        },
        {
          id: 3,
          ore: '5.00'
        },
        {
          id: 4,
          ore: '2.00'
        },
        {
          id: 5,
          ore: '1.00'
        },
        {
          id: 6,
          ore: '3.00'
        },
        {
          id: 7,
          ore: '2.00'
        },
        {
          id: 8,
          ore: '4.00'
        },
        {
          id: 9,
          ore: '3.00'
        }
      ]
    }
  }
}
</script>
