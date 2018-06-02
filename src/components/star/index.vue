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
        <collecting :energy = 'arr' @energyClick ='receive'></collecting>
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
            <div class="box-name">PV</div>
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
import footGuide from '../comp/footGuide.vue'
import collecting from './collecting.vue'

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
    GetArr: function () {
      setTimeout(() => {
        this.arr = [
          {id: '1', num: '2'},
          {id: '4', num: '6'},
          {id: '2', num: '8'},
          {id: '1', num: '2'},
          {id: '4', num: '6'},
          {id: '2', num: '8'},
          {id: '2', num: '2'},
          {id: '4', num: '6'},
          {id: '5', num: '8'}
        ]
      }, 0)
    },
    // 收取钻石事件
    receive (e) {
      // console.log(e)
    }
  },
  mounted () {
    this.GetArr()
  }
}
</script>
