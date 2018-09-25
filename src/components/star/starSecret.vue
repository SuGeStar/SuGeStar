<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>星球秘籍
    </div>
    <div class="star-secret-container">
      <div class="star-secret-line"></div>
      <div class="time-line-container">
        <h3>
          <p class="st1">YC星球发展时间轴</p>
          <p class="st2">YC STAR DEVELOPMENT TIMELINE</p>
        </h3>
        <div class="time-line-center">
          <div class="time-line-div time-line-div1">
            <!--<div class="time-line-icon time-line-icon1"><span>2019.03</span></div>-->
            <div class="time-line-txt">
              <p class="time-line-txt-title">2019.03 -- 转账/收益</p>
              <p class="time-line-txt-center">星球社群投票确定，然后验证整个系统的正确性。验证无误后，starcoin才可以开始转账，节点开始获得收益。</p>
            </div>
          </div>
          <div class="time-line-div time-line-div2">
            <!--<div class="time-line-icon time-line-icon2"><span>2019.03</span></div>-->
            <div class="time-line-txt">
              <p class="time-line-txt-title">2019.03 -- EBP</p>
              <p class="time-line-txt-center">所有EBP（候选超级节点）加入网络，进行10轮的选举，产生 21 个主节点和 49 个备选节点。</p>
            </div>
          </div>
          <div class="time-line-div time-line-div3">
            <!--<div class="time-line-icon time-line-icon3"><span>2019.03</span></div>-->
            <div class="time-line-txt">
              <p class="time-line-txt-title">2019.03 -- 启动</p>
              <p class="time-line-txt-center">1个负责启动BIOS（创始块），21个ABP（指定区块链生产者）启动starcoin区块链。</p>
            </div>
          </div>
          <div class="time-line-div time-line-div4">
            <!--<div class="time-line-icon time-line-icon4"><span>2019.01</span></div>-->
            <div class="time-line-txt">
              <p class="time-line-txt-title">2019.01 -- STARACOIN 1.0</p>
              <p class="time-line-txt-center">此版本具备了任何人或者组织运行starcoin区块链所需要的所有功能和模块。测试 starcoin1.0，并针对bug进行修复。</p>
            </div>
          </div>
          <div class="time-line-div time-line-div5">
            <!--<div class="time-line-icon time-line-icon5"><span>2019.02</span></div>-->
            <div class="time-line-txt">
              <p class="time-line-txt-title">2019.02 -- 白皮书</p>
              <p class="time-line-txt-center">由星球社区，从超级节点候选者中选出22个，其中1个负责启动BIOS（创始块），其它21个作为ABP（指定区块链生产者），发布白皮书。</p>
            </div>
          </div>
          <div class="time-line-div time-line-div6">
            <!--<div class="time-line-icon time-line-icon6"><span>2019.01</span></div>-->
            <div class="time-line-txt">
              <p class="time-line-txt-title">2019.01 -- 主网映射</p>
              <p class="time-line-txt-center">完成以太坊上starcoin主网映射快照。</p>
            </div>
          </div>
          <div class="time-line-div time-line-div7">
            <!--<div class="time-line-icon time-line-icon7"><span>2018.12</span></div>-->
            <div class="time-line-txt">
              <p class="time-line-txt-title">2018.12 -- 基础构建</p>
              <p class="time-line-txt-center">完成基础代码构建。</p>
            </div>
          </div>
          <div class="time-line-div time-line-div8">
            <!--<div class="time-line-icon time-line-icon8"><span>2018.11</span></div>-->
            <div class="time-line-txt">
              <p class="time-line-txt-title">2018.11 -- OTC场外交易</p>
              <p class="time-line-txt-center">为保证用户账号安全性,将提供了交易密码、短信验证;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/starsSecret.less';
</style>
