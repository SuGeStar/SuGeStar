<template>
  <div class="wrapper">
    <div class="index">
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
      <mt-tabbar fixed>
        <mt-tab-item id="home" class="active" href="#/">
          <i slot="icon" class="icon icon-star"></i>
          SG星球
        </mt-tab-item>
        <mt-tab-item id="classify" href="#/store">
          <i slot="icon" class="icon icon-shore"></i>
          星球商城
        </mt-tab-item>
        <mt-tab-item id="shop" href="#/my">
          <i slot="icon" class="icon icon-my"></i>
          我的基地
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '../../assets/less/index.less';
</style>
