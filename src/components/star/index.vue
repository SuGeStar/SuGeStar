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
            <!-- <vm-progress :percentage="70"></vm-progress>
            <vm-progress :percentage="30" strokeColor="purple"></vm-progress> -->
             <vm-progress class="progress" v-for="(progress,index) in progressBox" :key="index" :percentage="progress.percentage" :text-inside="true" :stroke-width="18" :strokeColor="progress.color"></vm-progress>
          </div>
        </div>
      </div>
      <!-- 挖宝数据 -->
      <div class="index-box">
        <div class="box-title">
          <h3>挖宝数据</h3>
        </div>
        <!-- <div class="box-content">
          <div class="box-con">
            <div class="box-name">当前等级</div>
            <span class="base">{{level}}</span>
          </div>
          <div class="box-con">
            <div class="box-name">原力值</div>
            <div class="ml">
              <span>今日获得</span>
              <span class="base">{{pv}};</span>
              <span>累计获得</span>
              <span class="index-all">{{allpv}}</span>
            </div>
          </div>
          <div class="box-con">
            <div class="box-name">K矿石</div>
            <div class="ml">
              <span>今日获得</span>
              <span class="base">{{k}};</span>
              <span>累计获得</span>
              <span class="index-all">{{allk}}</span>
            </div>
          </div>
          <div class="box-con">
            <div class="box-name">SG矿币</div>
            <div class="ml">
              <span>今日获得</span>
              <span class="base">{{sg}};</span>
              <span>累计获得</span>
              <span class="index-all">{{allsg}}</span>
            </div>
          </div>
          <div class="box-con">
            <div class="box-name">S矿石</div>
            <div class="ml">
              <span>今日获得</span>
              <span class="base">{{s}};</span>
              <span>累计获得</span>
              <span class="index-all">{{alls}}</span>
            </div>
          </div>
          <div class="box-con">
            <div class="box-name">SG金币</div>
            <div class="ml">
              <span>今日获得</span>
              <span class="base">{{sgolden}};</span>
              <span>累计获得</span>
              <span class="index-all">{{allsgolden}}</span>
            </div>
          </div>
        </div> -->
        <div class="content-box">
          <ul>
            <li class="content-list">
              <div class="con-title">
                S矿石
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
            <li class="content-list">
              <div class="con-title">
                星币
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
            <li class="content-list">
              <div class="con-title">
                收益
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
let getGevel = localStorage.getItem('user_level')
let token = localStorage.getItem('token')

export default {
  data () {
    return {
      today_owen: '1000000',
      all_owen: '1000000',
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
      progressBox: [
        {
          percentage: 100,
          color: '#a288d2'
        },
        {
          percentage: 75,
          color: '#03a8f7'
        },
        {
          percentage: 50,
          color: '#f0b026'
        },
        {
          percentage: 25,
          color: '#1ad3a7'
        }
      ]
    }
  },
  components: {
    footGuide,
    collecting
  },
  methods: {
    GetArr () {
      setTimeout(() => {
        this.arr = []
      }, 0)
    },
    getEnergy (id) {
      // 开采K矿
      let form = this.$qs.stringify({
        token: token,
        id: id
      })
      this.$http.post(url+'get', form)
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
    }
  },
  created () {
    switch (getGevel) {
      case '1':
        this.level = 'SG星球居民'
        break;
      case '2':
        this.level = 'SG青铜时代'
        break;
      case '3':
        this.level = 'SG白银时代'
        break;
      case '4':
        this.level = 'SG黄金时代'
        break;
      case '5':
        this.level = 'SG钻石时代'
        break;
    }
    this.$http.get(url + 'notGet?token='+token)
    // 未开采K矿
    .then(response => {
      console.log(response)
      this.arr = response.data.data;
    })
    .catch(error => {
      console.log(error)
    })
    this.GetArr()
    if (!token) {
      this.$router.push('/login')
    }
  }
}
</script>
