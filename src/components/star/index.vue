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
              <router-link to="/miji">
                <img src="../../assets/image/index-miji.png" alt="">
                <p>星球秘籍</p>
              </router-link>
            </li>
            <li>
              <router-link to="/speed">
                <img src="../../assets/image/index-speed.png" alt="">
                <p>加速器</p>
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
      <!-- 挖宝数据 -->
      <div class="index-box">
        <div class="box-title">
          <h3>挖宝数据</h3>
        </div>
        <div class="box-content">
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
      arr: []
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
