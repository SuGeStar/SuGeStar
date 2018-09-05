<template>
  <div class="wrapper">
    <mt-header fixed title="星球基地">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="starCenter">
      <div class="star-center-list">
        <div class="star-title star-title1"></div>
        <div class="tec-center">
          <div class="tec-list t1">
            <div></div>
            <p>旅行频次</p>
          </div>
          <div class="tec-list t2">
            <div></div>
            <p>健康信息</p>
          </div>
          <div class="tec-list t3">
            <div></div>
            <p>教育程度</p>
          </div>
          <div class="tec-list t4">
            <div></div>
            <p>社交信用度</p>
          </div>
          <div class="tec-list t5">
            <div></div>
            <p>娱乐时长</p>
          </div>
          <div class="tec-list t6">
            <div></div>
            <p>购物金额</p>
          </div>
          <div class="tec-list t7">
            <div></div>
            <p>通讯信息</p>
          </div>
        </div>
      </div>
      <div class="star-center-list">
        <div class="star-title star-title2"></div>
        <div class="skill-center">
          <div class="skill-list">
            <p class="skill-title"><span>区块链身份</span></p>
            <div class="skill-info">
              <div class="skill-img skill-img1"></div>
              <div class="skill-txt"><p>基于区块链技术，一旦创建将是独一无二不可篡改</p></div>
            </div>
          </div>
          <div class="skill-list">
            <p class="skill-title"><span>安全信息储存</span></p>
            <div class="skill-info">
              <div class="skill-img skill-img2"></div>
              <div class="skill-txt"><p>您所有的信息将通过区域块技术加密储存，其他人若要查看您的信息，必须经由您本人同意</p></div>
            </div>
          </div>
          <div class="skill-list">
            <p class="skill-title"><span>去中心化价值交换</span></p>
            <div class="skill-info">
              <div class="skill-img skill-img3"></div>
              <div class="skill-txt"><p>帮助您全面管理个人信息数据，挖局自身价值，进而实现个人信息数据价值商业化</p></div>
            </div>
          </div>
        </div>
      </div>
      <div class="star-center-list">
        <div class="star-title star-title3"></div>
        <div class="plan-center">
          <div class="plan-left fl">
            <div class="plan-left-list1"></div>
            <div class="plan-left-list2"></div>
            <div class="plan-left-list3"></div>
          </div>
          <div class="plan-right fl">
            <div>
              <p class="plan-title"><span>搭建星球家园</span></p>
              <p class="plan-txt">搭建星球基础设施，让居民入住，提供星币、星钻奖励</p>
            </div>
            <div class="p">
              <p class="plan-title"><span>引进星球企业</span></p>
              <p class="plan-txt">引进合作的星球去也，为星球居民提供各方面服务</p>
            </div>
            <div>
              <p class="plan-title"><span class="s">提供去中心化价值交换服务</span></p>
              <p class="plan-txt">引进数据需求方，让数据信息交换可以公平的进行</p>
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
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  @import '../../assets/less/starBase.less';
</style>
