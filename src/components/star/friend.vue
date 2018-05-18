<template>
  <div class="wrapper">
    <mt-header fixed title="邀请好友">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="friend">
      <img src="../../assets/image/friend-bg.png">
      <div class="friend-con">
        <div class="friend-cls">
          <h3>我的邀请码</h3>
          <div class="friend-box">
            <input class="friend-int" :value="copy" readonly>
            <mt-button class="copy-btn">一键复制</mt-button>
          </div>
        </div>
        <div class="friend-cls">
          <h3>我的战绩</h3>
          <div class="friend-box">
            <router-link to="/firInvitation">
              <div class="invitation fir-invit">
                <div class="invit-pople">
                  <span>一级邀请人数：</span>
                  <span>{{first.pople}}人>></span>
                </div>
                <div class="invit-ylz">
                  <p>累计获得原力值</p>
                  <span class="ylz-color">{{first.ylz}}</span>
                </div>
              </div>
            </router-link>
            <router-link to="/secInvitation">
              <div class="invitation sec-invit">
                <div class="invit-pople">
                  <span>二级邀请人数：</span>
                  <span>{{second.pople}}人>></span>
                </div>
                <div class="invit-ylz">
                  <p>累计获得原力值</p>
                  <span class="ylz-color">{{second.ylz}}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="friend-cls">
          <h3>邀请规则</h3>
          <div class="friend-box">
            <div class="invit-rule">
              <p>
                ① 首次邀请两人入驻SG星球，即可解封原力值（必须与邀请人同级）；
              </p>
              <p>
                ② 原力值解封之后，每成功邀请两人入驻SG星球，则赠送邀请人相应的原力值（若被邀请人身份等级低于邀请人，则按被邀请人等级赠送相应的原力值；若被邀请人身份等级高于邀请人，则按邀请人等级赠送相应的原力值）；
              </p>
              <p>
                ③ 每个被邀请人成功解封原力值，邀请人均可获赠相应等级10%的原力值（若被邀请人身份等级低于邀请人，则按被邀请人等级赠送相应的原力值；若被邀请人身份等级高于邀请人，则按邀请人等级赠送相应的原力值）。
              </p>
            </div>
          </div>
        </div>
      </div>
      <mt-button class="ivint-btn">生成邀请卡</mt-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '../../assets/less/friend.less';
</style>
<script>
export default {
  data () {
    return {
      copy: '123456789',
      first: {
        pople: '1000',
        ylz: '1000'
      },
      second: {
        pople: '1000',
        ylz: '1000'
      }
    }
  }
}
</script>
