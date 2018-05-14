<template>
  <div class="wrapper">
    <div class="index">
      <!-- 背景图 -->
      <div class="index-bg">
        <img src="../../assets/image/index-bg.png" alt="">
        <div class="index-classfiy">
          <ul class="list">
            <li>
              <img src="../../assets/image/index-miji.png" alt="">
              <p>星球秘籍</p>
            </li>
            <li>
              <img src="../../assets/image/index-speed.png" alt="">
              <p>加速器</p>
            </li>
            <li>
              <img src="../../assets/image/index-friend.png" alt="">
              <p>邀请好友</p>
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
          <p>
            <span>当前等级</span>
            <span class="base">{{level}}</span>
          </p>
          <p>
            <span>PV</span>
            <span>今日获得</span>
            <span class="base">{{pv}};</span>
            <span>累计获得</span>
            <span class="index-all">{{allpv}}</span>
          </p>
          <p>
            <span>当前等级</span>
            <span class="base">{{level}}</span>
          </p>
          <p>
            <span>当前等级</span>
            <span class="base">{{level}}</span>
          </p>
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
import footGuide from '../footer/footGuide.vue'
export default {
  data () {
    return {
      level: 'SG青铜时代',
      pv: '1000',
      pvall: '10000'
    }
  },
  components: {
    footGuide
  }
}
</script>
