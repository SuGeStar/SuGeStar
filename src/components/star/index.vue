<template>
  <div class="wrapper">
    <div class="index">
      <!-- 背景图 -->
      <div class="index-bg">
        <img src="../../assets/image/index-bg.png" alt="">
        <div class="index-msg">
          <router-link to="/store">
            <i class="icon icon-msg"></i>
          </router-link>
        </div>
        <!--<canvas id="canvas" class="canvas"></canvas>-->
        <collecting :energy = 'arr' @energyClick ='getEnergy'></collecting>
        <div class="index-classfiy">
          <ul class="list">
            <li>
              <router-link to="/myProperty">
                <img src="../../assets/image/index-zichan.png" alt="">
                <p>我的资产</p>
              </router-link>
            </li>
            <li>
              <router-link to="/miji">
                <img src="../../assets/image/index-miji.png" alt="">
                <p>星球秘籍</p>
              </router-link>
            </li>
            <li>
              <router-link to="/friend">
                <img src="../../assets/image/index-friend.png" alt="">
                <p>邀请好友</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- 团队看板 -->
      <div class="index-box">
        <div class="box-title">
          <h3>团队看板</h3>
        </div>
        <div class="content-box team">
          <div class="team-head">
            <p>提示：第{{floor}}层另招募{{lesspeo}}人，即可拿到{{moregold}}金币</p>
            <div class="team-exist">
              <p>直推人数：<span>{{invitpeo}}</span></p>
              <p>旗下人数：<span>{{allpeo}}</span></p>
            </div>
          </div>
          <div class="team-content">
            <router-link :to="{path: '/relation'}" class="floor" v-for="(progress,index) in progressBox" :key="index" v-show="teamFloor">
              <div class="team-floor">
                第{{progress.floor}}维度
              </div>
              <vm-progress class="progress"  :percentage="progress.percentage" :text-inside="true" :stroke-width="18" :strokeColor="progress.color"></vm-progress>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 大礼包 -->
        <div class="gift-box">
          <router-link to="/gift">
            <img src="../../assets/image/gift.png" alt="">
          </router-link>
        </div>
      <!-- 挖宝数据 -->
      <div class="index-box">
        <div class="box-title">
          <h3>挖宝数据</h3>
        </div>
        <div class="content-box">
          <ul>
            <li class="content-list">
              <div class="con-title">
                星币
                <i class="icon icon-tips"></i>
              </div>
              <div class="con-desc">
                <div class="desc today">
                  <p>今日获得</p>
                  <span>{{miners_today}}</span>
                </div>
                <div class="desc">
                  <p>累计获得</p>
                  <span>{{miners_all}}</span>
                </div>
              </div>
            </li>
            <li class="content-list">
              <div class="con-title">
                算力
                <i class="icon icon-tips"></i>
              </div>
              <div class="con-desc">
                <div class="desc today">
                  <p>今日获得</p>
                  <span>{{today_owen}}</span>
                </div>
                <div class="desc">
                  <p>累计获得</p>
                  <span>{{all_owen}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 底部 -->
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
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      today_owen: '0',
      all_owen: '0',
      miners_today: '0',
      miners_all: '0',
      level: 'SG青铜时代',
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
      teamFloor: true
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
          console.log(response)
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
      this.$http.get(url + 'dataMiners?token=' + token)
      // 今日星币及累计获得的星币数据
      .then(response => {
        console.log(response)
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
    },
    dataGold () {
      this.$http.get(url + 'dataGold?token=' + token)
      // 今日代币及累计获得的代币数据
      .then(response => {
        console.log(response)
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
  },
  created () {
    this.dataMiners()
    this.dataGold()
    if (token) {
      this.$http.get(url + 'notGet?token=' + token)
      // 未开采K矿
        .then(response => {
          console.log(response)
          this.arr = response.data.data;
        })
        .catch(error => {
          console.log(error)
          Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
        })
    }
    if (!token) {

    } else {
      this.$http.get(url + 'occupancyRate?token=' + token)
      // 团队看板占比
        .then(response => {
          console.log(response.data.data)
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
    }
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
